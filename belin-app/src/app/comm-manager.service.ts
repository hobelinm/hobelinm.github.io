import { Injectable } from '@angular/core';

import { 
  KeyValue,
  UtilService } from './util.service';

@Injectable()
export class CommManagerService {
  private subscriptors : Map<string, Array<(key :string, message : string) => Promise<void>>>
  private static instance : CommManagerService;

  constructor(
    private utilService : UtilService
  ) { 
    CommManagerService.instance = this;
    this.subscriptors = 
      new Map<string, Array<(key : string, message : string) => Promise<void>>>();

    let eventMethod : string = window.addEventListener ? "addEventListener" : "attachEvent";
    let eventHandler = window[eventMethod];
    let messageEvent : string = eventMethod == "attachEvent" ? "onmessage" : "message";

    // Listen to messages from child iFrame
    eventHandler(
      messageEvent, 
      function (evt) {
        let key : string = evt.message ? "message" : "data";
        let data = evt[key];
        let that : CommManagerService = CommManagerService.getInstance();
        that.processChildMessage(data);
      }, 
      false);
  }

  /**
   * Returns the current instance of the service
   */
  public static getInstance() : CommManagerService {
    return CommManagerService.instance;
  }

  // TODO: Remove This
  public getVersion() : string {
    return "";
  }

  public processChildMessage(msg : string) : void {
    console.log(`Child Message: ${msg}`);
    try {
      let parsedMsg : KeyValue = JSON.parse(msg);
      if (parsedMsg.key === null || parsedMsg.key === undefined) {
        // TODO: Write Telemetry
        // This message is not from us
        console.log('Parsed message does not contain key property, ignoring');
        return;
      }

      let subscriptors : Array<(key : string, message : string) => Promise<void>>;
      subscriptors = this.subscriptors.get(parsedMsg.key);
      if (subscriptors === null 
        || subscriptors === undefined 
        || subscriptors.length === 0) {
        // No message listener for this id yet
        // TODO: Write Telemetry
        console.warn('No event listeners for this message yet');
        return;
      }

      let promises : Array<Promise<void>> = [];
      for (let subscriptor of subscriptors) {
        promises.push(subscriptor(parsedMsg.key, parsedMsg.value));
      }

      Promise.all(promises).then((values) => {
        // TODO: Write telemetry
        console.log(`Processed ${promises.length} promises`);
      });
    }
    catch (err) {
      // TODO: Write Telemetry
      // This message is not from us
      console.log('Unable to parse message, ignoring');
    }
  }

  /**
   * Subscribes to child iFrame to receive messages from
   * @param key to listen for
   * @param subscriptor callback to invoke once the key matches
   */
  public subscribeToChildMessage(
    key : string,
    subscriptor : (key : string, message : string) => Promise<void>
  ) : void {
    let currentSubs : Array<(key : string, message : string) => Promise<void>>;
    currentSubs = this.subscriptors.get(key);
    if (currentSubs === null || currentSubs === undefined) {
      currentSubs = [];
    }

    let subMd5 : string = this.utilService.calculateMd5(subscriptor);
    for (let sub of currentSubs) {
      let storedSubMd5 : string = this.utilService.calculateMd5(sub);
      if (storedSubMd5 === subMd5) {
        // TODO: Write telemetry for this
        console.warn("Callback value was already added!");
        return;
      }
    }

    currentSubs.push(subscriptor);
    this.subscriptors.set(key, currentSubs);
  }

}
