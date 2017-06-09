import { Injectable } from '@angular/core';

import { Constants }  from './constants/constants';

@Injectable()
export class ResourceManagerService {

  constructor() { }
  
  public getConstant(key : string) : Promise<string> {
    let value : string = Constants.get(key);
    // TODO: Check for null and throw proper exception
    return Promise.resolve(value);
  }

  public getConstants(startsWith : string) : Promise<Array<string>> {
    startsWith = `${this.getLocale()}.${startsWith}`;
    // TODO: Change this to Telemetry(?)
    console.log(`Searching constants that start with: ${startsWith}`);
    let matches : Array<string> = new Array<string>();
    Constants.forEach((value, key) => {
      if (key.startsWith(startsWith)) {
        matches.push(value);
      }
    });

    return Promise.resolve(matches);
  }

  public getSystemConstant(key : string) : Promise<string> {
    return this.getConstant(`NoLocale.${key}`);
  }

  public getLocale() : string {
    // TODO: Read resource properly
    return 'en-US';
  }

  public resolveLocale(token : string) : string {
    // TODO: Get current locale
    return "";
  }
}
