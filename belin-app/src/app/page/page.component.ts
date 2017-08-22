/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />

import { Component, 
         OnInit                 } from '@angular/core';
import { ActivatedRoute, 
         Params,
         Router                 } from '@angular/router';
import { Location               } from '@angular/common';
import { DomSanitizer, 
         SafeHtml,
         SafeStyle,
         SafeResourceUrl        } from '@angular/platform-browser';

import { AddressBook,           } from '../constants/address';
import { CommManagerService     } from '../comm-manager.service';
import { KeyValuePair           } from '../models/keyvaluepair.model';
import { PageMetadata           } from '../models/pageMetadata.model';
import { ResourceManagerService } from '../resource-manager.service';

import 'rxjs/add/operator/switchMap';

const Constants = {
  ClassName : 'PageComponent',
  FacebookCommentHtml : '<div class="fb-comments" data-href="fbcw" data-numposts="5"></div>',
};

const TOKENS = {
  ComponentPackageBaseToken: `Server.${Constants.ClassName}`,
  ComponentPackage: [
  ]
};

interface Window {
  adsbygoogle: any[];
}

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
  public pageTitle : string;
  public pageDescription : string;
  public pageCategory : string;
  public pageWordCount : number;
  public pageTags : string;
  public pageCreatedOn : string;
  public pageUpdatedOn : string;
  public facebookComments : SafeHtml;
  public googleAds : SafeHtml;
  public componentPackage : KeyValuePair;
  public sessionId : string;
  public displayComments : boolean;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private location : Location,
    private sanitizer : DomSanitizer,
    private commManager : CommManagerService,
    private resourceManager : ResourceManagerService
  ) { 
    this.componentPackage = {};
    this.sessionId = "";
    this.pageTitle = "";
    this.pageCategory = "";
    this.pageDescription = "";
    this.pageTags = "";
    this.pageWordCount = 0;
    this.pageCreatedOn = (new Date()).toString();
    this.pageUpdatedOn = (new Date()).toString();
    this.displayComments = true;
  }

  ngOnInit() {
    this.resourceManager.setLoadingState(true, Constants.ClassName);
    this.sessionId = this.resourceManager.getSessionId();
    this.route.params.switchMap(
      (params : Params) => Promise.resolve(params["pageName"]))
      .subscribe((pageName : string) => {
        this.route.params.switchMap(
          (iParams : Params) => Promise.resolve(iParams["sectionName"]))
          .subscribe((sectionName : string) => {
            console.log(`Section Name: ${sectionName}`);
            console.log(`PageName: ${pageName}`);

            if (sectionName == undefined || sectionName == null) {
              sectionName = '';
            }

            try {
              let pageMetadata : PageMetadata = 
                this.resourceManager.getPageMetadata(sectionName, pageName);
              
              this.pageTitle = pageMetadata.title;
              this.pageDescription = pageMetadata.description;
              this.pageCategory = pageMetadata.category;
              this.pageWordCount = pageMetadata.wordCount;
              this.pageTags = pageMetadata.tags.join(', ');

              let dateBuffer : string = pageMetadata.createdOn.toDateString();
              dateBuffer = `${dateBuffer} ${pageMetadata.createdOn.toLocaleTimeString()}`;
              this.pageCreatedOn = dateBuffer;
              dateBuffer = pageMetadata.latestUpdate.toDateString();
              dateBuffer = `${dateBuffer} ${pageMetadata.latestUpdate.toLocaleTimeString()}`;
              this.pageUpdatedOn = dateBuffer;
              this.pageSource = this.sanitizer.bypassSecurityTrustResourceUrl(
                pageMetadata.source.toString()
              );
              
              this.childHeightHandler(
                `${this.sessionId}-childFrameHeight`,
                pageMetadata.pageHeight.toString(),
                this
              );

              this.resourceManager.setLoadingState(false, Constants.ClassName);
            }
            catch (err) {
              this.router.navigate(['/404']);
            }
          });
      });
    
    this.resourceManager.loadComponentResources().then(() => {
      for(let key of TOKENS.ComponentPackage) {
        this.setComponentPackageKey(key);
      }
    });

    this.commManager.subscribeToChildMessage(
      `${this.sessionId}-disableFacebookComments`,
      this.childDisableFacebook,
      this
    );

    this.facebookComments = this.sanitizer.bypassSecurityTrustHtml(
      Constants.FacebookCommentHtml.replace('fbcw', window.location.href));
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
