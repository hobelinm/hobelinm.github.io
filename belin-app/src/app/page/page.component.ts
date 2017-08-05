import { Component, OnInit             } from '@angular/core';
import { ActivatedRoute, Params        } from '@angular/router';
import { Location                      } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ResourceManagerService } from '../resource-manager.service';
import { KeyValuePair           } from '../models/keyvaluepair.model';

import 'rxjs/add/operator/switchMap';

const CLASSNAME : string = 'Page';

const TOKENS = {
  ComponentPackageBaseToken: `Server.${CLASSNAME}`,
  ComponentPackage: [
    'Title'
  ]
};

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [ResourceManagerService],
})
export class PageComponent implements OnInit {
  public article : string;
  public pageSource : SafeResourceUrl;
  public componentPackage : KeyValuePair;

  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private sanitizer : DomSanitizer,
    private resourceManager : ResourceManagerService
  ) { 
    this.componentPackage = {};
  }

  ngOnInit() {
    this.route.params.switchMap((params : Params) => Promise.resolve(params["pageName"]))
      .subscribe((pageName : string) => {
        this.article = pageName;
        this.pageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`/pages/${pageName}.html`);
      });
    
    this.resourceManager.loadComponentResources().then(() => {
      for(let key of TOKENS.ComponentPackage) {
        this.setComponentPackageKey(key);
      }
    });

    // TODO: Need to set height to window.height(?) - 120 for the iframe
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
