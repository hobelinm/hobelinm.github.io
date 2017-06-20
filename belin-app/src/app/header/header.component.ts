import { Component, OnInit      } from '@angular/core';
import { TopNavbarMenuItem      } from './menuItem.model';
import { DropdownMenuItem       } from '../models/dropdownItem.model';

import { SearchForm             } from '../models/searchForm.model';
import { ResourceManagerService } from '../resource-manager.service';
import { KeyValuePair           } from '../models/keyvaluepair.model';

const CLASSNAME : string = 'Header';

const TOKENS = {
  ComponentPackageBaseToken: `Server.${CLASSNAME}`,
  ConstSinglePackage: [
    'BrandImageUri',
    'BrandName'
  ],
  LocaleSinglePackage: [
    'ToggleNavigation',
    'SearchForm.Placeholder',
    'SearchForm.Button',
  ],
  MenuItemsLeft: [
    'Home',
    'About',
    'Site'
  ],
  MenuItemsRight: [
    'Login',
    'Language',
  ],
  MenuComponents: [
    'label',
    'itemType',
    'itemClass',
    'linkLocation',
    'dropdownIds',
  ],
  DropdownItems: [
    'Projects',
    'Movies',
    'Cars',
    'Videogames',
    'Fitness',
    'Travel',
    'Credits',
    'ChangeLog',
    'English',
    'Spanish',
    'separator',
  ],
  DropdownProperties: [
    'itemType',
    'itemClass',
    'label',
    'linkLocation',
  ],
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ResourceManagerService]
})
export class HeaderComponent implements OnInit {
  public navbarItemsLeft : Array<TopNavbarMenuItem>;
  public navbarItemsRight : Array<TopNavbarMenuItem>;
  public navbarSearchForm : SearchForm;

  public componentPackage : KeyValuePair;

  constructor(private resourceManager : ResourceManagerService) {
    this.componentPackage = {};
    this.navbarSearchForm = new SearchForm();
  }

  ngOnInit() {
    this.navbarItemsLeft = [];
    this.navbarItemsRight = [];
    //this.navbarItemsRight = TopNavbarMenuItem.getMenuItemsRight();

    let retrieval : Array<Promise<void>> = [];
    for (let key of TOKENS.ConstSinglePackage) {
      retrieval.push(this.loadSingleKey(key, true));
    }

    for (let key of TOKENS.LocaleSinglePackage) {
      retrieval.push(this.loadSingleKey(key, false));
    }

    let menuItems : Array<string> = TOKENS.MenuItemsLeft;
    menuItems = menuItems.concat(TOKENS.MenuItemsRight);
    for (let menuItem of menuItems) {
      for (let prop of TOKENS.MenuComponents) {
        let key : string = `MenuItem.${menuItem}.${prop}`;
        retrieval.push(this.loadSingleKey(key, false));
      }
    }

    for (let dropdown of TOKENS.DropdownItems) {
      for (let prop of TOKENS.DropdownProperties) {
        let key : string = `DropdownItem.${dropdown}.${prop}`;
        retrieval.push(this.loadSingleKey(key, false));
      }
    }

    Promise.all(retrieval).then(() => {
      // Menu items
      for (let menuItemName of menuItems) {
        let key : string = `MenuItem.${menuItemName}`;
        let menuItem : TopNavbarMenuItem = new TopNavbarMenuItem();
        menuItem.label = this.componentPackage[`${key}.label`];
        menuItem.itemType = this.componentPackage[`${key}.itemType`];
        menuItem.itemClass = this.componentPackage[`${key}.itemClass`];
        menuItem.linkLocation = this.componentPackage[`${key}.linkLocation`];
        menuItem.dropdownItems = [];
        let dropdownItems : Array<string> = [];
        if (this.componentPackage[`${key}.dropdownIds`].includes('.')) {
          dropdownItems = this.componentPackage[`${key}.dropdownIds`].split('.');
        }
        else if (this.componentPackage[`${key}.dropdownIds`] !== '') {
          dropdownItems.push(this.componentPackage[`${key}.dropdownIds`]);
        }

        if (dropdownItems.length > 0) {
          for (let itemId of dropdownItems) {
            let key : string = `DropdownItem.${itemId}`;
            let dropdownItem : DropdownMenuItem = new DropdownMenuItem();
            dropdownItem.label = this.componentPackage[`${key}.label`];
            dropdownItem.linkLocation = this.componentPackage[`${key}.linkLocation`];
            dropdownItem.itemClass = this.componentPackage[`${key}.itemClass`];
            dropdownItem.itemType = this.componentPackage[`${key}.itemType`];
            menuItem.dropdownItems.push(dropdownItem);
          }
        }

        if (TOKENS.MenuItemsLeft.includes(menuItemName)) {
          this.navbarItemsLeft.push(menuItem);
        }
        else {
          this.navbarItemsRight.push(menuItem);
        }
      }

      // Search Form
      this.navbarSearchForm.placeHolder = this.componentPackage['SearchForm.Placeholder'];
      this.navbarSearchForm.submitButtonLabel = this.componentPackage['SearchForm.Button'];
    });
  }

  /**
   * Load single key elements
   */
  private loadSingleKey(key : string, invariant : boolean) : Promise<void> {
    let skey = `${TOKENS.ComponentPackageBaseToken}.SingleKeys.${key}`;
    if (invariant) {
      skey = `Invariant.${skey}`;
    }

    this.resourceManager.getResource(skey).then((val : string) => {
      this.componentPackage[key] = val;
    });

    return Promise.resolve();
  }
}
