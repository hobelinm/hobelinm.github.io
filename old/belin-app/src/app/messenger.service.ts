import { Injectable    } from '@angular/core';

import { EKeyValuePair } from './models/keyvaluepair.model';

@Injectable()
export class MessengerService {
  private static mailboxes : EKeyValuePair<Mailbox> = {};

  constructor() { 
    //MessengerService.mailboxes = {};
  }
 
  /**
   * Register a new mailbox that will receive messages from the given address
   * @param address to register
   * @param mailbox that will receive the messages
   * @param that context of the caller
   */
  public registerMailbox (
    address : string,
    mailbox : (address : string, message : string, that : any) => Promise<void>,
    that : any
  ) : Promise<void> {
    // TODO: Use telemetry here
    console.log(`Registering mailbox for address '${address}'`);
    MessengerService.mailboxes[address] = new Mailbox(mailbox, address, that);
    return Promise.resolve();
  }

  /**
   * Sends a message to the desired address
   * @param address to send the message
   * @param message to send
   */
  public sendMessage(address : string, message : string) : Promise<void> {
    try {
      let mailbox : Mailbox = MessengerService.mailboxes[address];
      if (mailbox == undefined || mailbox == null) {
        // TODO: Add telemetry here
        // TODO: Create custom errors
        console.warn(`No mailbox registered with address: '${address}'`);
        return Promise.resolve();
      }
      
      return mailbox.sendMessage(message);
    }
    catch (err) {
      console.warn(`Unable to send message to mailbox: ${err}`);
    }
  }
}

/**
 * Represents a mailbox
 */
class Mailbox {
  private mailbox : (
    address : string, 
    message : string, 
    that : any) => Promise<void>;
  
  private context : any;
  private address : string;
  
  /**
   * Constructor
   * @param mailboxDef mailbox definition for registration
   * @param callerAddress caller adress
   * @param callerContext caller context
   */
  constructor(
    mailboxDef : (
      address : string, 
      message : string, 
      that : any) => Promise<void>,
    callerAddress : any,
    callerContext : any
  ) {
    this.mailbox = mailboxDef;
    this.context = callerContext;
    this.address = callerAddress;
  }

  /**
   * Sends a message to this mailbox
   * @param message message to send
   */
  public sendMessage(message : string) : Promise<void> {
    return this.mailbox(this.address, message, this.context);
  }
}
