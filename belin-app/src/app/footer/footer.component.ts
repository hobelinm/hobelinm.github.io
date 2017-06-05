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

  public customButtons : Array<CustomButton>;

  constructor() {
   }

  ngOnInit() {
    this.year = (new Date).getFullYear().toString();
    this.pageviews = 0;
    this.visitors = 0;
    this.myViews = 0;
    this.siteViews = 0;
    this.siteVersion = "0.1.6.2";
    this.customButtons = CustomButton.getCustomButtons();
  }

}
