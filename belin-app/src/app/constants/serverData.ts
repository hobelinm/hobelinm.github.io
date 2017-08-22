import { KeyValuePair } from '../models/keyvaluepair.model';
import { PageMetadata } from '../models/pageMetadata.model';

/**
 * This information will be collected via server requests once the backend is functional
 * 
 */

const serverData = {
  shellPackage: [
    {
      key: 'en-US.Server.Footer.ToggleDropdown', 
      value: 'Toggle Dropdown'
    },
    {
      key: 'Invariant.Server.Footer.ButtonTableauPublic.LinkRef', 
      value: 'https://public.tableau.com/profile/hugo.belin'
    },
    { 
      key: 'Invariant.Server.Footer.ButtonTableauPublic.ImgRef', 
      value: 'https://belino.blob.core.windows.net/hugobelinpublic/assets/img/tableau.png' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonTableauPublic.Alt', 
      value: 'Tableau Public' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonTableauPublic.Height', 
      value: '20' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonTableauPublic.Width', 
      value: '20' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonTableauPublic.Classes', 
      value: '' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonXboxProfile.LinkRef', 
      value: 'https://account.xbox.com/en-us/Profile?gamerTag=hobelinm84' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonXboxProfile.ImgRef', 
      value: 'https://belino.blob.core.windows.net/hugobelinpublic/assets/img/xbox.png' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonXboxProfile.Alt', 
      value: 'Xbox Profile' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonXboxProfile.Height', 
      value: '20' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonXboxProfile.Width', 
      value: '20' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonXboxProfile.Classes', 
      value: '' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonPlayStationNetwork.LinkRef', 
      value: 'https://psnprofiles.com/HugoBelin' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonPlayStationNetwork.ImgRef', 
      value: 'https://belino.blob.core.windows.net/hugobelinpublic/assets/img/psn.png' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonPlayStationNetwork.Alt', 
      value: 'PlayStation Network' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonPlayStationNetwork.Height', 
      value: '20' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonPlayStationNetwork.Width', 
      value: '20' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonPlayStationNetwork.Classes', 
      value: 'background-color-white' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonNintendoFriendCode.LinkRef', 
      value: 'https://www.facebook.com/hobelinm/posts/10155401341918522?notif_t=like&notif_id=1496250132407465' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonNintendoFriendCode.ImgRef', 
      value: 'https://belino.blob.core.windows.net/hugobelinpublic/assets/img/nintendo.png' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonNintendoFriendCode.Alt', 
      value: 'Nintendo Friend Code' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonNintendoFriendCode.Height', 
      value: '20' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonNintendoFriendCode.Width', 
      value: '20' 
    },
    { 
      key: 'Invariant.Server.Footer.ButtonNintendoFriendCode.Classes', 
      value: '' 
    },
    { 
      key: 'Invariant.Server.Footer.PageViews', 
      value: '0' 
    },
    { 
      key: 'Invariant.Server.Footer.SiteViews', 
      value: '0' 
    },
    { 
      key: 'Invariant.Server.Footer.Visitors', 
      value: '0' 
    },
    { 
      key: 'Invariant.Server.Footer.MyViews', 
      value: '0' 
    },
    { 
      key: 'Invariant.Server.Header.SingleKeys.BrandImageUri', 
      value: 'https://www.gravatar.com/avatar/4e300423bea7dac04dda2f53babfddf0?s=25' 
    },
    { 
      key: 'Invariant.Server.Header.SingleKeys.BrandName', 
      value: 'Hugo Belin' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.SearchForm.Placeholder', 
      value: 'Search' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.SearchForm.Button', 
      value: 'Submit' 
    },
    // Home
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Home.label', 
      value: 'Home' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Home.itemType', 
      value: 'ngLink' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Home.itemClass', 
      value: 'active' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Home.linkLocation', 
      value: '/' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Home.dropdownIds', 
      value: '' 
    },
    // About
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.About.label', 
      value: 'About' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.About.itemType', 
      value: 'ngLink' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.About.itemClass', 
      value: '' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.About.linkLocation', 
      value: '/about' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.About.dropdownIds', 
      value: '' 
    },
    // Site
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Site.label', 
      value: 'Site' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Site.itemType', 
      value: 'dropdown' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Site.itemClass', 
      value: 'nav-item dropdown' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Site.linkLocation', 
      value: '#' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Site.dropdownIds', 
      value: 'Projects.Movies.Cars.Videogames.Fitness.Travel.separator.Credits.ChangeLog' // order matters here
    },
    // Login
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Login.label', 
      value: 'Login' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Login.itemType', 
      value: 'ngLink' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Login.itemClass', 
      value: 'disabled' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Login.linkLocation', 
      value: '/login' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Login.dropdownIds', 
      value: '' 
    },
    // Language
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Language.label', 
      value: 'Language' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Language.itemType', 
      value: 'dropdown' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Language.itemClass', 
      value: 'nav-item dropdown' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Language.linkLocation', 
      value: '#' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.MenuItem.Language.dropdownIds', 
      value: 'English.Spanish' 
    },
    // Dropdown items
    // Section: Projects
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Projects.label', 
      value: 'Projects' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Projects.linkLocation', 
      value: 'section/projects' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Projects.itemClass', 
      value: '' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Projects.itemType', 
      value: 'ngLink' 
    },
    // Section: Movies
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Movies.label', 
      value: 'Movies' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Movies.linkLocation', 
      value: 'section/movies' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Movies.itemClass', 
      value: '' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Movies.itemType', 
      value: 'ngLink' 
    },
    // Section: Cars
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Cars.label', 
      value: 'Cars' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Cars.linkLocation', 
      value: 'section/cars' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Cars.itemClass', 
      value: '' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Cars.itemType', 
      value: 'ngLink' 
    },
    // Section: Videogames
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Videogames.label', 
      value: 'Videogames' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Videogames.linkLocation', 
      value: 'section/videogames' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Videogames.itemClass', 
      value: '' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Videogames.itemType', 
      value: 'ngLink' 
    },
    // Section: Fitness
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Fitness.label', 
      value: 'Fitness' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Fitness.linkLocation', 
      value: 'section/fitness' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Fitness.itemClass', 
      value: '' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Fitness.itemType', 
      value: 'ngLink' 
    },
    // Section: Travel
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Travel.label', 
      value: 'Travel' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Travel.linkLocation', 
      value: 'section/travel' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Travel.itemClass', 
      value: '' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Travel.itemType', 
      value: 'ngLink' 
    },
    // Section: Credits
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Credits.label', 
      value: 'Credits' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Credits.linkLocation', 
      value: '/credits' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Credits.itemClass', 
      value: '' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Credits.itemType', 
      value: 'ngLink' 
    },
    // Section: ChangeLog
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.ChangeLog.label', 
      value: 'Change Log' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.ChangeLog.linkLocation', 
      value: '/changelog' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.ChangeLog.itemClass', 
      value: '' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.ChangeLog.itemType', 
      value: 'ngLink' 
    },
    // Language: en-US
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.English.label', 
      value: 'English' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.English.linkLocation', 
      value: '?lang=en-US' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.English.itemClass', 
      value: '' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.English.itemType', 
      value: 'link' 
    },
    // Language: es-MX
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Spanish.label', 
      value: 'Spanish' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Spanish.linkLocation', 
      value: '?lang=es-MX' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Spanish.itemClass', 
      value: '' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.Spanish.itemType', 
      value: 'link' 
    },
    // Dropdown separator
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.separator.label', 
      value: '' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.separator.linkLocation', 
      value: '#' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.separator.itemClass', 
      value: 'dropdown-divider' 
    },
    { 
      key: 'en-US.Server.Header.SingleKeys.DropdownItem.separator.itemType', 
      value: 'separator' 
    },
  ],
  componentData: [
    {
      key: 'en-US.Server.ChangeLog.Title',
      value: 'Change Log'
    },
    {
      key: 'en-US.Server.ChangeLog.Description',
      value: `Changes made to this website are logged in this page. 
    A brief description of each change is located next to its version. Versioning assumes the following:`
    },
    {
      key: 'en-US.Server.ChangeLog.RevisionPolicy',
      value: 'Minor changes performed to the website'
    },
    {
      key: 'en-US.Server.ChangeLog.BuildPolicy',
      value: 'Incremental changes'
    },
    {
      key: 'en-US.Server.ChangeLog.MinorPolicy',
      value: 'Feature Releases'
    },
    {
      key: 'en-US.Server.ChangeLog.MajorPolicy',
      value: 'Major releases or improvements'
    },
    {
      key: 'en-US.Server.ChangeLog.HeaderClientChangeLog',
      value: 'Client Change Log'
    },
    {
      key: 'en-US.Server.ChangeLog.HeaderServerChangeLog',
      value: 'Server Change Log'
    },
    { 
      key: 'en-US.Server.ChangeLog.CurrentRelease', 
      value: 'Current Release:' 
    },
    { 
      key: 'en-US.Server.ChangeLog.Codename', 
      value: 'Codename:' 
    },
    { 
      key: 'en-US.Server.ChangeLog.ServerChangeLog.Default', 
      value: 'No server connection yet' 
    },
    { 
      key: 'en-US.Server.About.Title', 
      value: 'About Page' 
    },
    { 
      key: 'en-US.Server.Credits.Title', 
      value: 'Credits Page' 
    },
    { 
      key: 'en-US.Server.LandingPage.Title', 
      value: 'Home Page' 
    },
    { 
      key: 'en-US.Server.PageNotFound.Title', 
      value: 'Page Not Found' 
    },
    { 
      key: 'en-US.Server.PageNotFound.Description', 
      value: 'Oh snap! Could not find the page.' 
    },
    { 
      key: 'en-US.Server.PageNotFound.TryOtherPages', 
      value: 'In the meantime you can browse these awesome pages:' 
    },
    { 
      key: 'en-US.Server.PageNotFound.Details', 
      value: `Could not find the route you were looking for, I'll make a note and fix it as soon as possible` 
    },
    { 
      key: 'en-US.Server.PageNotFound.Buttons.Home.Label', 
      value: 'Home' 
    },
    { 
      key: 'en-US.Server.PageNotFound.Buttons.Home.Link', 
      value: '/' 
    },
    { 
      key: 'en-US.Server.PageNotFound.Buttons.About.Label', 
      value: 'About' 
    },
    { 
      key: 'en-US.Server.PageNotFound.Buttons.About.Link', 
      value: '/about' 
    },
    { 
      key: 'en-US.Server.PageNotFound.Buttons.Credits.Label', 
      value: 'Credits' 
    },
    { 
      key: 'en-US.Server.PageNotFound.Buttons.Credits.Link', 
      value: '/credits' 
    },
    { 
      key: 'en-US.Server.Section.Title', 
      value: 'Section' 
    },
  ]
};

const contentMetadata = {
  enUS : [
    {
      key : 'projects.TheSearchforElDorado',
      value : {
        key : 'TheSearchforElDorado',
        title : 'The Search for El Dorado',
        description : 'A tale from nothing to the wonders of a full fledged website',
        category : 'projects',
        tags : ['projects', 'software'],
        locale : 'en-US',
        createdOn : new Date(2017, 8, 8, 12, 35),
        latestUpdate : new Date(2017, 8, 21, 21, 17),
        wordCount : 922,
        pageHeight : 2800,
        thumbnail : new URL('/pages/thumbnails/TheSearchForElDorado.jpg'),
        source : new URL('https://docs.google.com/document/d/1JVSLCPI-HmkSOTZXQe5r3jDt9NNSHKCXXZEwvCnyAZ4/pub?embedded=true')
      }
    },
  ],
};

export const ShellPackage : Map<string, string> = new Map<string, string>(
  serverData.shellPackage.map(x => [x.key, x.value] as [string, string])
);

export const ComponentData : Map<string, string> = new Map<string, string>(
  serverData.componentData.map(x => [x.key, x.value] as [string, string])
);

// TODO: Support multiple locales
export const ContentMetadata : Map<string, PageMetadata> 
  = new Map<string, PageMetadata>(
    contentMetadata.enUS.map(x => [x.key, x.value] as [string, PageMetadata])
  );
