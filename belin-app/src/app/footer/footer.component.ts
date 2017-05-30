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

  constructor() {
    this.year = (new Date).getFullYear().toString();
    this.pageviews = 0;
    this.visitors = 0;
    this.myViews = 0;
    this.siteViews = 0;
    this.siteVersion = "0.1.1.0"
   }

  ngOnInit() {
  }

}
