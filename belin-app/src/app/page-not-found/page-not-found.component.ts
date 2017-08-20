/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />

import { Component, 
         OnInit                 } from '@angular/core';
import { Location               } from '@angular/common';
import { ActivatedRoute,
         Params                 } from '@angular/router';

import { iFrameMessage,
         ResourceManagerService } from '../resource-manager.service';
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

  constructor(
    private route : ActivatedRoute,
    private resourceManager : ResourceManagerService
  ) {
    this.componentPackage = {};
    this.pageButtons = [];
   }

  ngOnInit() {
    this.homeBtnLabel = 'Home';
    this.aboutBtnLabel = 'About';
    this.creditsBtnLabel = 'Credits';
    this.isIframe = this.resourceManager.isIframe();

    if(this.isIframe) {
      this.route.queryParams.subscribe(queryParams => {
        let sessionId : string = queryParams['sessionId'];
        if(sessionId === undefined) {
          console.warn('Running inside iframe but no session id was provided');
        }
        else {
          let key : string = `${sessionId}-childFrameHeight`;
          let height : string = $(document).height().toString();
          // TODO: Add these metrics as telemetry
          let msg : iFrameMessage = new iFrameMessage();
          msg.key = key;
          msg.value = height;
          parent.postMessage(JSON.stringify(msg), '*');

          // Tell the parent not to enable Facebook comments on this page
          let noComment : iFrameMessage = new iFrameMessage();
          noComment.key = `${sessionId}-disableFacebookComments`;
          noComment.value = "true";
          parent.postMessage(JSON.stringify(noComment), '*');
        }
      });
    }

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
