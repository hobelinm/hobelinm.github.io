import { Component, OnInit } from '@angular/core';
import { TopNavbarMenuItem } from './menuItem.model.component';
import { SearchForm } from '../models/searchForm.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public navbarItemsLeft : Array<TopNavbarMenuItem>;
  public navbarItemsRight : Array<TopNavbarMenuItem>;
  public navbarSearchForm : SearchForm;

  constructor() {
    this.navbarItemsLeft = TopNavbarMenuItem.getMenuItemsLeft();
    this.navbarItemsRight = TopNavbarMenuItem.getMenuItemsRight();
    
    this.navbarSearchForm = {
      placeHolder: "Search",
      submitButtonLabel: "Submit"
    };
  }

  ngOnInit() {
  }

}
