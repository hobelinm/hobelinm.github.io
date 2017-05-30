import { Component, OnInit } from '@angular/core';

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
  public psnUri : string;
  public psnAlt : string;
  public nUri : string;
  public nAlt : string;

  constructor() {
    this.year = (new Date).getFullYear().toString();
    this.pageviews = 0;
    this.visitors = 0;
    this.myViews = 0;
    this.siteViews = 0;
    this.siteVersion = "0.1.2.0";
    this.tableauPublicUri = "https://belino.blob.core.windows.net/hugobelinpublic/assets/img/tableau.png";
    this.tableauPublicAlt = "Tableau Public"; // TODO: Localize this, resource manager
    this.tableauProfile = "https://public.tableau.com/profile/hugo.belin";
    this.xboxUri = "https://belino.blob.core.windows.net/hugobelinpublic/assets/img/xbox.png";
    this.xboxAlt = "Xbox Profile";
    this.psnUri = "https://belino.blob.core.windows.net/hugobelinpublic/assets/img/psn.png";
    this.psnAlt = "PlayStation Network";
    this.nUri = "https://belino.blob.core.windows.net/hugobelinpublic/assets/img/nintendo.png";
    this.nAlt = "Nintendo Account";
   }

  ngOnInit() {
  }

}
