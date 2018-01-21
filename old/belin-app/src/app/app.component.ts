/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

import { Component, 
         OnInit           } from '@angular/core';
import { ActivatedRoute, 
         Params, 
         Router           } from '@angular/router';
import { Location         } from '@angular/common';

import { AddressBook      } from './constants/address';
import { KeyValuePair     } from './models/keyvaluepair.model';
import { MessengerService } from './messenger.service';
import { UtilService      } from './util.service';  

const CLASSNAME = 'AppComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: UtilService, useClass: UtilService },
    MessengerService,
  ],
})
export class AppComponent implements OnInit {
  public title : string = 'Work in progress...';
  public footerHeight : string;

  public constructor(
    private router : Router,
    private route : ActivatedRoute,
    private messenger : MessengerService
  ) {
    this.footerHeight = "100px";
    this.messenger.registerMailbox(
      AddressBook.get(CLASSNAME), 
      this.mailbox, 
      this);
  }

  private redirectIfNeeded(queryParams : Params) : void {
    if (queryParams['goto'] !== undefined) {
      let query : string = location.search.replace('?', '');
      let targetLocation : string = `goto=${queryParams['goto']}`;
      let parsedLocation : string = targetLocation.split('/').join('%2F');
      let newParams : {[k: string]: any} = {};
      query.split('&').forEach(element => {
        if (element != targetLocation && element != parsedLocation) {
          let key : string = element.split('=')[0];
          let val : string = element.split('=')[1];
          newParams[key] = val;
        }
      });

      // TODO: Log this via telemetry
      console.log('Go To:' + location.search);
      console.log(`Navigating to: ${queryParams['goto']}`);
      
      this.router.navigate([queryParams['goto']], { queryParams: newParams })
        .catch((rejected) => this.router.navigate(['/404'])); // TODO: Telemetry on the reason
    }
  }

  public ngOnInit() {
    this.route.queryParams.subscribe(
      queryParams => this.redirectIfNeeded(queryParams));
  }

  /**
   * Mailbox for app.component
   * @param address 
   * @param message 
   * @param that 
   */
  public mailbox(
    address : string, 
    message : string, 
    that : this
  ) : Promise<void> {
    let msg : KeyValuePair = JSON.parse(message);
    switch (msg['Subject']) {
      case 'Footer.Height': {
        this.footerHeight = msg['Height'];
        break;
      }

      default: {
        console.warn(`Unhandled message type '${msg['Subject']}'`);
        break;
      }
    }
    
    return Promise.resolve();
  }
}
