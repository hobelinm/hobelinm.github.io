import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  public title : string;

  constructor(
    private route : ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params : Params) => Promise.resolve(params["sectionName"]))
      .subscribe(section => this.title = section);
  }

}
