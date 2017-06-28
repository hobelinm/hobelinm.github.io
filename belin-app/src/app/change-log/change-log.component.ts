import { Component, OnInit      } from '@angular/core';

import { ResourceManagerService } from '../resource-manager.service';
import { KeyValuePair           } from '../models/keyvaluepair.model';

const CLASSNAME : string = 'ChangeLog';

/**
 * Token format:
 * {en-US|es-MX|Invariant}.{Constant|Server}.{Component|Service|Shared}.{Id}
 */
const TOKENS = {
  ChangeLogs: `Constant.${CLASSNAME}.ChangeLog`,
  ServerChangeLogs: `Server.${CLASSNAME}.ServerChangeLog`,
  ComponentPackageBaseToken: `Server.${CLASSNAME}`,
  ComponentPackage: [
    'Title',
    'Description',
    'RevisionPolicy',
    'BuildPolicy',
    'MinorPolicy',
    'MajorPolicy',
    'HeaderClientChangeLog',
    'HeaderServerChangeLog',
    'CurrentRelease',
    'Codename',
  ],
  CurrentVersion: `Invariant.Constant.Shared.ShellVersion`,
  CodeName: `Invariant.Constant.Shared.Release.CodeName`,
};

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.css'],
  providers: [ResourceManagerService]
})
export class ChangeLogComponent implements OnInit {
  public componentPackage : KeyValuePair;
  public clientChanges : Array<string>;
  public serverChanges : Array<string>;

  constructor(private resourceManager : ResourceManagerService) {
    this.componentPackage = {};
    this.clientChanges = new Array<string>();
    this.serverChanges = new Array<string>();
  }

  ngOnInit() {
    this.resourceManager.loadComponentResources().then(() => {
      for(let key of TOKENS.ComponentPackage) {
        this.setComponentPackageKey(key);
      }

      this.resourceManager
        .getResources(TOKENS.ChangeLogs)
        .then(clientLogs => this.clientChanges = clientLogs);

      this.resourceManager
        .getResources(TOKENS.ServerChangeLogs)
        .then(serverLogs => this.serverChanges = serverLogs);

        this.resourceManager
          .getResource(TOKENS.CurrentVersion)
          .then((currentVersion : string) => {this.componentPackage['CurrentVersionValue'] = currentVersion; });

        this.resourceManager
          .getResource(TOKENS.CodeName)
          .then((codeName : string) => {this.componentPackage['CodeNameValue'] = codeName; });
    });
  }

  /**
   * Gets resource strings and set them into the component package
   * @param key Key to read
   */
  private setComponentPackageKey(key : string) : void {
    this.resourceManager.getResource(`${TOKENS.ComponentPackageBaseToken}.${key}`)
      .then((val : string) => { this.componentPackage[key] = val });
  }
}
