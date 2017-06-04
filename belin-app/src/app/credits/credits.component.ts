import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {
  public title : string;

  constructor() { 
    this.title = "Credits Page";
  }

  ngOnInit() {
  }

}
