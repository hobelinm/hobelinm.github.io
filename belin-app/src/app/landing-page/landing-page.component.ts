import { Component, OnInit } from '@angular/core';

import { ResourceManagerService } from '../resource-manager.service';
import { KeyValuePair           } from '../models/keyvaluepair.model';

const CLASSNAME : string = 'LandingPage';

const TOKENS = {
  ComponentPackageBaseToken: `Server.${CLASSNAME}`,
  ComponentPackage: [
    'Title'
  ]
};

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [ResourceManagerService]
})
export class LandingPageComponent implements OnInit {
  public componentPackage : KeyValuePair;

  constructor(private resourceManager : ResourceManagerService) {
    this.componentPackage = {};
  }

  ngOnInit() {
    this.resourceManager.loadComponentResources().then(() => {
      for (let key of TOKENS.ComponentPackage) {
        this.setComponentPackageKey(key);
      }
    });
  }

  /**
   * Gets resource strings and set them into the component package
   * @param key Key to read
   */
  private setComponentPackageKey(key : string) : void {
    this.resourceManager.getResource(`${TOKENS.ComponentPackageBaseToken}.${key}`)
      .then((val : string) => { this.componentPackage[key] = val });
  }
}
