import { Component, 
         OnInit             } from '@angular/core';
import { ActivatedRoute, 
         Params             } from '@angular/router';
import { Location                      } from '@angular/common';
import { DomSanitizer, 
         SafeHtml,
         SafeStyle,
         SafeResourceUrl    } from '@angular/platform-browser';

import { CommManagerService     } from '../comm-manager.service';
import { ResourceManagerService } from '../resource-manager.service';
import { KeyValuePair           } from '../models/keyvaluepair.model';

import 'rxjs/add/operator/switchMap';

const CLASSNAME : string = 'Page';
const FACEBOOK_COMMENT_SNIPPET : string = '<div class="fb-comments" data-href="fbcw" data-numposts="5"></div>';

const TOKENS = {
  ComponentPackageBaseToken: `Server.${CLASSNAME}`,
  ComponentPackage: [
  ]
};

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [
    CommManagerService,
    ResourceManagerService
  ],
})
export class PageComponent implements OnInit {
  public pageSource : SafeResourceUrl;
  public pageHeight : SafeStyle;
  public pageWidth : SafeStyle;
  public facebookComments : SafeHtml;
  public componentPackage : KeyValuePair;
  public sessionId : string;
  public displayComments : boolean;

  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private sanitizer : DomSanitizer,
    private commManager : CommManagerService,
    private resourceManager : ResourceManagerService
  ) { 
    this.componentPackage = {};
    this.sessionId = "";
    this.displayComments = true;
  }

  ngOnInit() {
    this.resourceManager.setLoadingState(true, CLASSNAME);
    this.sessionId = this.resourceManager.getSessionId();
    this.route.params.switchMap((params : Params) => Promise.resolve(params["pageName"]))
      .subscribe((pageName : string) => {
        this.route.params.switchMap((iParams : Params) => Promise.resolve(iParams["sectionName"]))
          .subscribe((sectionName : string) => {
            console.log(`Section Name: ${sectionName}`);
            console.log(`PageName: ${pageName}`);
            if (sectionName !== null && sectionName !== undefined && sectionName !== "") {
              this.pageSource = this.sanitizer.bypassSecurityTrustResourceUrl(
                `/pages/${sectionName}/${pageName}.html?sessionId=${this.sessionId}`);
            }
            else {
              this.pageSource = this.sanitizer.bypassSecurityTrustResourceUrl(
                `/pages/${pageName}.html?sessionId=${this.sessionId}`);
            }
          });
      });
    
    this.pageHeight = this.sanitizer.bypassSecurityTrustStyle("500px");
    this.pageWidth = this.sanitizer.bypassSecurityTrustStyle("500px");
    
    this.resourceManager.loadComponentResources().then(() => {
      for(let key of TOKENS.ComponentPackage) {
        this.setComponentPackageKey(key);
      }
    });

    // Subscribe to iFrame messages
    this.commManager.subscribeToChildMessage(
      `${this.sessionId}-childFrameHeight`,
      this.childHeightHandler,
      this
    );

    this.commManager.subscribeToChildMessage(
      `${this.sessionId}-childFrameWidth`,
      this.childWidthHandler,
      this
    );

    this.commManager.subscribeToChildMessage(
      `${this.sessionId}-disableFacebookComments`,
      this.childDisableFacebook,
      this
    );

    this.facebookComments = this.sanitizer.bypassSecurityTrustHtml(
      FACEBOOK_COMMENT_SNIPPET.replace('fbcw', window.location.href));
  }

  public childDisableFacebook(
    key : string,
    value : string,
    that : this
  ) : Promise<void> {
    console.log("About to disable comments");
    that.displayComments = false;
    return Promise.resolve();
  }

  /**
   * Listens to the right event from child fram to adjust height
   * @param key being listened to
   * @param value height to apply
   * @param that an instance of this
   */
  public childHeightHandler(
    key : string, 
    value : string, 
    that : this
  ) : Promise<void> {
    that.pageHeight = that.sanitizer.bypassSecurityTrustStyle(`${value}px`);
    that.resourceManager.setLoadingState(true, CLASSNAME);
    return Promise.resolve();
  }

  /**
   * Listens to the right event from child frame to adjust width
   * @param key being listened to
   * @param value width to apply
   * @param that an instance of this
   */
  public childWidthHandler(
    key : string, 
    value : string, 
    that : this
  ) : Promise<void> {
    that.pageWidth = that.sanitizer.bypassSecurityTrustStyle(`${value}px`);
    return Promise.resolve();
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
