import { Component, OnInit } from '@angular/core';
import { CustomButton } from './custom-button.model';

import { ResourceManagerService } from '../resource-manager.service';

const TOKENS = {
  ShellVersion: 'Universal.ShellVersion'
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ResourceManagerService]
})
export class FooterComponent implements OnInit {
  public year : string;
  public pageviews : number;
  public visitors : number;
  public myViews : number;
  public siteViews : number;
  public siteVersion : string;

  public customButtons : Array<CustomButton>;

  constructor(private resourceManager : ResourceManagerService) {
   }

  ngOnInit() {
    this.year = (new Date).getFullYear().toString();
    this.pageviews = 0;
    this.visitors = 0;
    this.myViews = 0;
    this.siteViews = 0;
    this.resourceManager.getSystemConstant(TOKENS.ShellVersion).then(shellVersion => this.siteVersion = shellVersion);
    this.customButtons = CustomButton.getCustomButtons();
  }

}
