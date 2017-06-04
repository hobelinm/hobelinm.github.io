import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  public title : string;

  constructor(
    private route : ActivatedRoute,
    private location : Location
  ) { 
    this.title = "Page";
  }

  ngOnInit() {
    this.route.params.switchMap((params : Params) => Promise.resolve(params["pageName"]))
      .subscribe(pageName => this.title = pageName);
  }

}
