import { DropdownMenuItem } from '../models/dropdownItem.model';

/**
 * This class constains the definition for the Top Navbar menu items
 */
export class TopNavbarMenuItem {
  public itemType : string;
  public label : string;
  public itemClass : string;
  public linkLocation : string;
  public dropdownItems : Array<DropdownMenuItem>;

  public static getMenuItemsRight() : Array<TopNavbarMenuItem> {
    // TODO: Retrieve this from a web service
    let menuItems : Array<TopNavbarMenuItem> = [
      {
        label: "Login",
        itemType: "link",
        itemClass: "disabled",
        linkLocation: "#/Login",
        dropdownItems: []
      },
      {
        label: "Language",
        itemType: "dropdown",
        itemClass: "dropdown",
        linkLocation: "#",
        dropdownItems: [
          {
            itemType: "link",
            itemClass: "",
            label: "English",
            linkLocation: "?lang=en-Us"
          },
          {
            itemType: "link",
            itemClass: "",
            label: "Spanish",
            linkLocation: "?lang=es-Mx"
          }
        ]
      }
    ];

    return menuItems;
  }
}