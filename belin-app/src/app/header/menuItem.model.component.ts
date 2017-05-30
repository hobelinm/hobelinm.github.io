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

  public static getMenuItemsLeft() : Array<TopNavbarMenuItem> {
    // TODO: Retrieve this from a web service
    let menuItems : Array<TopNavbarMenuItem> = [
      {
        label: "Home", // TODO: Localize this
        itemType: "link",
        itemClass: "active", // TODO: This should change when browsing to another page
        linkLocation: "/",
        dropdownItems: []
      },
      {
        label: "About",
        itemType: "link",
        itemClass: "",
        linkLocation: "#/About",
        dropdownItems: []
      },
      {
        label: "Site",
        itemType: "dropdown",
        itemClass: "dropdown",
        linkLocation: "#",
        dropdownItems: [
          {
            itemType: "link",
            itemClass: "",
            label: "Projects",
            linkLocation: "#/projects"
          },
          {
            itemType: "link",
            itemClass: "",
            label: "Movies",
            linkLocation: "#/movies"
          },
          {
            itemType: "link",
            itemClass: "",
            label: "Cars",
            linkLocation: "#/cars"
          },
          {
            itemType: "link",
            itemClass: "",
            label: "Videogames",
            linkLocation: "#/videogames"
          },
          {
            itemType: "link",
            itemClass: "",
            label: "Fitness",
            linkLocation: "#/fitness"
          },
          {
            itemType: "link",
            itemClass: "",
            label: "Travel",
            linkLocation: "#/travel"
          },
          {
            itemType: "separator",
            itemClass: "divider",
            label: "",
            linkLocation: "#"
          },
          {
            itemType: "link",
            itemClass: "",
            label: "Credits",
            linkLocation: "#/credits"
          }
        ]
      }
    ];

    return menuItems;
  }

  public static getMenuItemsRight() : Array<TopNavbarMenuItem> {
    // TODO: Retrieve this from a web service
    let menuItems : Array<TopNavbarMenuItem> = [
      {
        label: "Login",
        itemType: "link",
        itemClass: "",
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