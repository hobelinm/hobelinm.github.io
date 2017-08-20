/**
 * Register all addresses that will make use of the mailbox
 */

const addressBook = [
  { key :'AppComponent', value : 'App.Component' },
];

export const AddressBook : Map<string, string> = new Map<string, string>(
  addressBook.map(x => [x.key, x.value] as [string, string])
);
