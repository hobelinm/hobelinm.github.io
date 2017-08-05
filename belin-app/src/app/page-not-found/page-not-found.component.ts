import { Component, OnInit } from '@angular/core';

import { ResourceManagerService } from '../resource-manager.service';
import { KeyValuePair           } from '../models/keyvaluepair.model';

const CLASSNAME : string = 'PageNotFound';

const TOKENS = {
  ComponentPackageBaseToken: `Server.${CLASSNAME}`,
  ComponentPackage: [
    'Title',
    'Description',
    'Details',
    'TryOtherPages',
  ],
  ButtonComponents: [
    'Label',
    'Link',
  ],
  Buttons: [
    'Home',
    'About',
    'Credits',
  ],
};

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  providers: [ResourceManagerService]
})
export class PageNotFoundComponent implements OnInit {
  public componentPackage : KeyValuePair;
  public pageButtons : Array<Button>;
  public isIframe : boolean;

  public homeBtnLabel : string;
  public aboutBtnLabel : string;
  public creditsBtnLabel : string;

  constructor(private resourceManager : ResourceManagerService) {
    this.componentPackage = {};
    this.pageButtons = [];
   }

  ngOnInit() {
    this.homeBtnLabel = 'Home';
    this.aboutBtnLabel = 'About';
    this.creditsBtnLabel = 'Credits';
    this.isIframe = this.resourceManager.isIframe();

    this.resourceManager.loadComponentResources().then(() => {
      for (let key of TOKENS.ComponentPackage) {
        this.setComponentPackageKey(key);
      }

      for (let button of TOKENS.Buttons) {
        for (let buttonComponent of TOKENS.ButtonComponents) {
          let key : string = `Buttons.${button}.${buttonComponent}`;
          this.setComponentPackageKey(key);
        }
      }


    }).then(() => {
      for (let button of TOKENS.Buttons) {
        let key : string = `Buttons.${button}`;
        let btn : Button = new Button();
        btn.Label = this.componentPackage[`${key}.Label`];
        btn.Link = this.componentPackage[`${key}.Link`];
        this.pageButtons.push(btn);
      }
    });

    // TODO: Send telemetry on the requested route
  }

  /**
   * Gets resource strings and set them into the component package
   * @param key to read
   */
  private setComponentPackageKey(key : string) : void {
    this.resourceManager.getResource(`${TOKENS.ComponentPackageBaseToken}.${key}`)
      .then((val : string) => { this.componentPackage[key] = val });
  }
}

class Button {
  public Label : string;
  public Link : string;
}
