import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.css']
})
export class ChangeLogComponent implements OnInit {
  public title : string;
  public description : string;
  public revisionPolicy : string;
  public buildPolicy : string;
  public minorPolicy : string;
  public majorPolicy : string;
  public clientChangeLog : string;
  public serverChangeLog : string;

  constructor() { 
    this.title = "Change Log";
    this.description = `Changes made to this website are logged in this page. 
    A brief description of each change is located next to its version. Versioning assumes the following:`;
    this.revisionPolicy = `Minor changes performed to the website`;
    this.buildPolicy = `Incremental changes`;
    this.minorPolicy = `Feature releases`;
    this.majorPolicy = `Major feature releases, or big redesign features`;
    this.clientChangeLog = `Client Change Log`;
    this.serverChangeLog = `Server Change Log`;
  }

  ngOnInit() {
  }

}
