import { Component, OnInit } from '@angular/core';
import { CustomButton } from './custom-button.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public year : string;
  public pageviews : number;
  public visitors : number;
  public myViews : number;
  public siteViews : number;
  public siteVersion : string;
  public tableauPublicUri : string;
  public tableauPublicAlt : string;
  public tableauProfile : string;
  public xboxUri : string;
  public xboxAlt : string;
  public xboxProfile : string;
  public psnUri : string;
  public psnAlt : string;
  public psnProfile : string;
  public nUri : string;
  public nAlt : string;
  public nProfile : string;

  public customButtons : Array<CustomButton>;

  constructor() {
    this.year = (new Date).getFullYear().toString();
    this.pageviews = 0;
    this.visitors = 0;
    this.myViews = 0;
    this.siteViews = 0;
    this.siteVersion = "0.1.3.0";
    this.tableauPublicUri = "https://belino.blob.core.windows.net/hugobelinpublic/assets/img/tableau.png";
    this.tableauPublicAlt = "Tableau Public"; // TODO: Localize this, resource manager
    this.tableauProfile = "https://public.tableau.com/profile/hugo.belin";
    this.xboxUri = "https://belino.blob.core.windows.net/hugobelinpublic/assets/img/xbox.png";
    this.xboxAlt = "Xbox Profile";
    this.xboxProfile = "https://account.xbox.com/en-us/Profile?gamerTag=hobelinm84";
    this.psnUri = "https://belino.blob.core.windows.net/hugobelinpublic/assets/img/psn.png";
    this.psnAlt = "PlayStation Network";
    this.psnProfile = "https://psnprofiles.com/HugoBelin";
    this.nUri = "https://belino.blob.core.windows.net/hugobelinpublic/assets/img/nintendo.png";
    this.nAlt = "Friend Code";
    this.nProfile = "https://www.facebook.com/hobelinm/posts/10155401341918522?notif_t=like&notif_id=1496250132407465";
   }

  ngOnInit() {
  }

}
