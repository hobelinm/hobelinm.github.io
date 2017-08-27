import { Injectable    } from '@angular/core';

//import * as ProtoBuf     from '../../node_modules/@types/protobufjs/index';

import { Constants     } from './constants/constants';
import { 
  ComponentData,
  ContentMetadata,
  ShellPackage         } from './constants/serverData';
import { KeyValuePair  } from './models/keyvaluepair.model';
import { PageMetadata  } from './models/pageMetadata.model';
import { UtilService   } from './util.service';

// {en-US|es-MX|Invariant}.{Constant|Server}.{Component|Service|Shared}.{Id}
const TOKENINDEX = {
  Locale: 0,
  Origin: 1,
  Component: 2
}

const ComponentMapping = {
  ShellPackage: [
    'Footer',
    'Header',
  ],
  ComponentPackage: [
    'About',
    'ChangeLog',
    'Credits',
    'LandingPage',
    'PageNotFound',
  ]
};

@Injectable()
export class ResourceManagerService {
  private loadingStates : Array<string>;
  private isLoading : boolean;
  private componentCallbacks : Array<ComponentCallback>;

  constructor(
    private utilService : UtilService
  ) {
    this.loadingStates = [];
    this.isLoading = true;
    this.componentCallbacks = [];
  }
  
  private getConstant(key : string) : Promise<string> {
    let value : string = Constants.get(key);
    // TODO: Check for null and throw proper exception
    return Promise.resolve(value);
  }

  private getConstants(startsWith : string) : Promise<Array<string>> {
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

  private getServerResource(key : string) : Promise<string> {
    //TODO: Make this function to make an actual request to service
    let keyTokens : Array<string> = key.split('.');
    if (ComponentMapping.ShellPackage.includes(keyTokens[TOKENINDEX.Component])) {
      return Promise.resolve(ShellPackage.get(key));
    }
    else {
      return Promise.resolve(ComponentData.get(key));
    }
  }

  private getServerResources(key : string) : Promise<Array<string>> {
    //TODO: Make this function to make an actual request to service
    // TODO: Change this to Telemetry(?)
    console.log(`Searching constants that start with: ${key}`);
    let keyTokens : Array<string> = key.split('.');
    let matches : Array<string> = new Array<string>();
    let sources : Map<string, string> = ComponentData;
    if (ComponentMapping.ShellPackage.includes(keyTokens[TOKENINDEX.Component])) {
      sources = ShellPackage;
    }
    
    sources.forEach((sValue : string, sKey : string) => {
      if (sKey.startsWith(key)) {
        matches.push(sValue);
      }
    });

    return Promise.resolve(matches);
  }

  /**
   * This method adds the current locale to the provided key if needed
   * @param key 
   */
  private localizeString(key : string) : string {
    let keyTokens : Array<string> = key.split('.');
    if (keyTokens[TOKENINDEX.Locale] !== 'Invariant') {
      key = `${this.getLocale()}.${key}`;
    }

    return key;
  }

  // === Public Methods ===

  public getLocale() : string {
    // TODO: Read resource properly
    return 'en-US';
  }

  /**
   * A complete implementation of the resource manager, this method parses the key to understan where the resource is
   * located (constants, server manager, etc)
   * Token format:
   * {en-US|es-MX|Invariant}.{Constant|Server}.{Component|Service|Shared}.{Id}
   * @param key of the resource to retrieve
   */
  public getResource(key : string) : Promise<string> {
    key = this.localizeString(key);
    let keyTokens : Array<string> = key.split('.');
    switch (keyTokens[TOKENINDEX.Origin]) {
      case 'Constant':
        return Promise.resolve(this.getConstant(key));
      case 'Server':
        // TODO: Fix this once server implementation is complete
        return this.getServerResource(key);
      default:
        // TODO: Send thelemetry here
        console.error(`Key Origin not found: ${keyTokens[TOKENINDEX.Origin]}`);
    }

    return Promise.resolve('');
  }

  /**
   * Gets all matching resources by parsing the key and retrieving from the right source
   * Token format:
   * {en-US|es-MX|Invariant}.{Constant|Server}.{Component|Service|Shared}.{Id}
   * @param key 
   */
  public getResources(key : string) : Promise<Array<string>> {
    key = this.localizeString(key);
    let keyTokens : Array<string> = key.split('.');
    let resource : Array<string> = new Array<string>();
    switch (keyTokens[TOKENINDEX.Origin]) {
      case 'Constant':
        return Promise.resolve(this.getConstants(key));
      case 'Server':
        // TODO: Fix this once server implementation is complete
        return this.getServerResources(key);
      default:
        // TODO: Send thelemetry here
        console.error(`Key Origin not found: ${keyTokens[TOKENINDEX.Origin]}`);
    }

    return Promise.resolve([]);
  }

  public loadComponentResources() : Promise<void> {
    // TODO: Procedure for implementation ==>
    // Check mappings, if this is a shell package then shell resources should be either
    // loaded or about to, so use that Promise instead
    // Check local cache version for the package
    // Package versions must have been retrieved from initial server request
    // Compare package from request with local, if different, retrieve from server
    return Promise.resolve();
  }

  /**
   * Registers callbacks that will reflect loading status
   * @param callback method that will be updated upon load state
   */
  public registerLoadingCallback(
    callback : (state : boolean, that : any) => void, 
    name : string,
    context : any) : void {
    
    if (this.componentCallbacks.find(val => val.Name === name) !== undefined) {
      // TODO: Add telemetry here
      console.log(`ResourceManager.registerLoadingCallback: Error, component ${name} is already registered`);
      return;
    }

    this.componentCallbacks.push({
      Name: name,
      Context: context,
      CallbackDefinition: callback
    });

    this.loadingStates.push(name);
  }

  /**
   * Updates callbacks to set the loading state
   * Upon the first call to set state loading=true all callbacks registered will be called with that value
   * By default all callbacks have to have their related components starting with loading=true
   * Once the last registered component sets loading=false then all registered callbacks will be invoked to
   *  set the loading state to false
   * Is expected for the components to default their initial state to loading
   * @param state whether the page is loading or not
   * @param name of the component that will change the state
   */
  public setLoadingState(state : boolean, name : string) : void {
    if (state === true) {
      if (!this.loadingStates.includes(name)) {
        this.loadingStates.push(name);
      }
    }
    else {
      if (this.loadingStates.includes(name)) {
        this.loadingStates.splice(this.loadingStates.indexOf(name));
      } 
      else {
        // TODO: telemetry here
        console.log(`Error, component with name '${name}' never set loading status`);
        return;
      }
      
    }

    if (this.isLoading === state) {
      // We're already in this state
      return;
    }

    // waits to send the signal until the last one
    if (state === false && this.loadingStates.length > 0) {
      return;
    }

    for (let callback of this.componentCallbacks) {
      try {
        callback.CallbackDefinition(state, callback.Context);
      } 
      catch (err) {
        // TODO: Telemetry here
        console.log(`ResourceManager.callback Error:`);
        console.log(err);
      }
    }

    this.isLoading = state;
  }

  /**
   * Detects whether the page is running inside an iFrame or not
   */
  public isIframe() : boolean {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
  }

  /**
   * Gets current session
   * TODO: Design Session Ids
   */
  public getSessionId() : string {
    return this.utilService.getGuid();
  }

  /**
   * Gets page content metadata for rendering
   * @param category of the page to search for
   * @param id of the page
   */
  public getPageMetadata(category : string, id : string) : PageMetadata {
    let pageKey : string = `${category}.${id}`;
    let pageMetadata : PageMetadata = ContentMetadata.get(pageKey);
    if (pageMetadata == null || pageMetadata == undefined) {
      // TODO: Throw custom error here + Telemetry
      throw new Error(
        `ErrorId:NotFound Unable to find page metadata for category: '${category}' and id: '${id}'`);
    }

    return pageMetadata;
  }
}

export class iFrameMessage {
  public key : string;
  public value : string;
}

class ComponentCallback {
  public Name : string;
  public Context : any;
  public CallbackDefinition : (state : boolean, that : any) => void;
}
