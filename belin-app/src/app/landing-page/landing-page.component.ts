import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public title : string;

  constructor() {
    this.title = "Landing Page";
  }

  ngOnInit() {
  }

}
