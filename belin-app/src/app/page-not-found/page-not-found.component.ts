import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  public title : string;
  public description : string;
  public details : string;
  public homeBtnLabel : string;
  public aboutBtnLabel : string;
  public creditsBtnLabel : string;

  constructor() { }

  ngOnInit() {
    this.title = 'Page Not Found';
    this.description = "Oh snap! Could not find the page. In the meantime you can browse these awesome pages:";
    this.details = "Could not find the route you were looking for, I'll make a note and fix it as soon as possible";
    this.homeBtnLabel = 'Home';
    this.aboutBtnLabel = 'About';
    this.creditsBtnLabel = 'Credits';
  }

}
