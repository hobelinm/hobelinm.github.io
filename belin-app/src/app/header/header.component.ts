import { Component, OnInit } from '@angular/core';
import { TopNavbarMenuItem } from './menuItem.model';
import { SearchForm } from '../models/searchForm.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public brandImgUri : string;
  public navbarItemsLeft : Array<TopNavbarMenuItem>;
  public navbarItemsRight : Array<TopNavbarMenuItem>;
  public navbarSearchForm : SearchForm;

  constructor() {
  }

  ngOnInit() {
    this.navbarItemsLeft = TopNavbarMenuItem.getMenuItemsLeft();
    this.navbarItemsRight = TopNavbarMenuItem.getMenuItemsRight();
    
    this.navbarSearchForm = {
      placeHolder: "Search",
      submitButtonLabel: "Submit"
    };

    this.brandImgUri = "https://www.gravatar.com/avatar/4e300423bea7dac04dda2f53babfddf0?s=25";
  }

}
