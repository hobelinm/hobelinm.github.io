import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.css']
})
export class ChangeLogComponent implements OnInit {
  public title : string;
  public description : string;

  constructor() { 
    this.title = "Change Log";
    this.description = "A list of the changes made is shown here";
  }

  ngOnInit() {
  }

}
