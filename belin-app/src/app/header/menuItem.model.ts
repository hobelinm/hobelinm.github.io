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
        itemType: "ngLink",
        itemClass: "active", // TODO: This should change when browsing to another page
        linkLocation: "/",
        dropdownItems: []
      },
      {
        label: "About",
        itemType: "ngLink",
        itemClass: "",
        linkLocation: "/about",
        dropdownItems: []
      },
      {
        label: "Site",
        itemType: "dropdown",
        itemClass: "dropdown",
        linkLocation: "#",
        dropdownItems: [
          {
            itemType: "ngLink",
            itemClass: "",
            label: "Projects",
            linkLocation: "section/projects"
          },
          {
            itemType: "ngLink",
            itemClass: "",
            label: "Movies",
            linkLocation: "section/movies"
          },
          {
            itemType: "ngLink",
            itemClass: "",
            label: "Cars",
            linkLocation: "section/cars"
          },
          {
            itemType: "ngLink",
            itemClass: "",
            label: "Videogames",
            linkLocation: "section/videogames"
          },
          {
            itemType: "ngLink",
            itemClass: "",
            label: "Fitness",
            linkLocation: "section/fitness"
          },
          {
            itemType: "ngLink",
            itemClass: "",
            label: "Travel",
            linkLocation: "section/travel"
          },
          {
            itemType: "separator",
            itemClass: "divider",
            label: "",
            linkLocation: "#"
          },
          {
            itemType: "ngLink",
            itemClass: "",
            label: "Credits",
            linkLocation: "/credits"
          },
          {
            itemType: "ngLink",
            itemClass: "",
            label: "Change Log",
            linkLocation: "/changelog"
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