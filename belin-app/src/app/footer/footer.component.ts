import { Component, OnInit } from '@angular/core';
import { CustomButton } from './custom-button.model';

import { ResourceManagerService } from '../resource-manager.service';
import { KeyValuePair           } from '../models/keyvaluepair.model';

const CLASSNAME : string = 'Footer';

/**
 * Token format:
 * {en-US|es-MX|Invariant}.{Constant|Server}.{Component|Service|Shared}.{Id}
 */
const TOKENS = {
  ShellVersion: 'Invariant.Constant.Shared.ShellVersion',
  ComponentPackageBaseToken: `Server.${CLASSNAME}`,
  InvariantComponentPackageBaseToken: `Invariant.Server.${CLASSNAME}`,
  RotateIcon: 'rotate-img',
  SingleKeys: [
    'ToggleNavigation'
  ],
  ComponentScalars: [
    'PageViews',
    'SiteViews',
    'Visitors',
    'MyViews',
  ],
  CustomButtons: [
    'ButtonTableauPublic',
    'ButtonXboxProfile',
    'ButtonPlayStationNetwork',
    'ButtonNintendoFriendCode'
  ],
  CustomButtonProps: [
    'LinkRef',
    'ImgRef',
    'Alt',
    'Height',
    'Width',
    'Classes'
  ],
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ResourceManagerService]
})
export class FooterComponent implements OnInit {
  public year : string;
  public siteVersion : string;
  public loadingIcon : string;

  public customButtons : Array<CustomButton>;
  public componentPackage : KeyValuePair;

  constructor(private resourceManager : ResourceManagerService) {
    this.loadingIcon = TOKENS.RotateIcon;
    this.componentPackage = {};
    this.customButtons = [];
    console.log('Register loading callback...');
    this.resourceManager.registerLoadingCallback(this.updateLoadingStatus, CLASSNAME, this);
   }

  ngOnInit() {
    this.resourceManager.setLoadingState(true, CLASSNAME);
    this.year = (new Date).getFullYear().toString();
    for (let scalar of TOKENS.ComponentScalars) {
      this.setScalarValue(scalar);
    }

    this.resourceManager.getResource(TOKENS.ShellVersion).then(shellVersion => this.siteVersion = shellVersion);

    this.resourceManager.loadComponentResources().then(() => {
      for (let key of TOKENS.CustomButtons) {
        this.setCustomButton(key);
      }

      for (let key of TOKENS.SingleKeys) {
        this.setComponentPackageKey(key, false);
      }
    }).then(() => { 
      this.resourceManager.setLoadingState(false, CLASSNAME); 
    });
  }

  private setCustomButton(button : string) : void {
    let props : Array<Promise<KeyValuePair>> = [];
    for (let prop of TOKENS.CustomButtonProps) {
      props.push(this.getCustomButtonProperty(button, prop));
    }

    Promise.all(props).then(resolvedProps => {
      this.customButtons.push({
        LinkRef: resolvedProps.find(prop => prop.key === 'LinkRef').value,
        ImgRef: resolvedProps.find(prop => prop.key === 'ImgRef').value,
        Alt: resolvedProps.find(prop => prop.key === 'Alt').value,
        Height: Number.parseInt(resolvedProps.find(prop => prop.key === 'Height').value),
        Width: Number.parseInt(resolvedProps.find(prop => prop.key === 'Width').value),
        Classes: resolvedProps.find(prop => prop.key === 'Classes').value
      });
    });
  }

  /**
   * Gets the property of a button
   * @param button Button to retrieve data from
   * @param prop Property to retrieve
   */
  private getCustomButtonProperty(button : string, prop : string) : Promise<KeyValuePair> {
    let key : string = `${TOKENS.InvariantComponentPackageBaseToken}.${button}.${prop}`;
    return this.resourceManager.getResource(key).then((val : string) => { 
      return {
        key: prop,
        value: val
      };
    });
  }

  /**
   * Retrieves resources but convert them to numbers before writing it to component package
   * @param scalar Id of the number to retrieve
   */
  private setScalarValue(scalar : string) : void {
    let key : string = `${TOKENS.InvariantComponentPackageBaseToken}.${scalar}`;
    this.resourceManager.getResource(key)
      .then((val : string) => { this.componentPackage[scalar] = Number.parseInt(val).toString() })
  }

  /**
   * Gets resource strings and set them into the component package
   * @param key Key to read
   */
  private setComponentPackageKey(key : string, invariant : boolean) : void {
    let fullKey : string;
    if (invariant) {
      fullKey = `${TOKENS.InvariantComponentPackageBaseToken}.${key}`;
    }
    else {
      fullKey = `${TOKENS.ComponentPackageBaseToken}.${key}`;
    }

    this.resourceManager.getResource(fullKey)
      .then((val : string) => { this.componentPackage[key] = val; });
  }

  /**
   * Change a spinning icon on the footer to reflect a loading state
   * @param state if true makes icon to spin by adding classes, otherwise remove
   * @param that a reference to this component
   */
  public updateLoadingStatus(state : boolean, that : this) : Promise<void> {
    if (state === true) {
      that.loadingIcon = TOKENS.RotateIcon;
    }
    else {
      that.loadingIcon = '';
    }

    return Promise.resolve();
  }

}
