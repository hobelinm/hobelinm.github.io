import { KeyValuePair } from '../models/keyvaluepair.model';

/**
 * System Constants
 * {en-US|es-MX|Invariant}.{Constant|Server}.{Component|Service|Shared}.{Id}
 * {en-US|es-MX|Invariant}.{Constant|Server}.{Component|Service|Shared}.{Id}
 */
const constantData = [
    { 
        key: 'Invariant.Constant.Shared.ShellVersion', 
        value: '0.1.11.0' 
    },
    { 
        key: 'Invariant.Constant.Shared.Release.CodeName', 
        value: '2-1B' 
    },

    // Change Logs:
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.11.0', 
        value: '0.1.11.0 - Page component loads pages' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.10.0', 
        value: '0.1.10.0 - Updated resource manager retrieval code' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.9.0', 
        value: '0.1.9.0 - Updated 404 page' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.8.0', 
        value: '0.1.8.0 - Handle redirect scenarios' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.7.0', 
        value: '0.1.7.0 - Resource Management Service with constants' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.6.4', 
        value: '0.1.6.4 - Minor mobile UI fixes' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.6.3', 
        value: '0.1.6.3 - Include artificial href to make mobile work' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.6.2', 
        value: '0.1.6.2 - Revert fixes to routing' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.6.1', 
        value: '0.1.6.1 - Change collapse button to work better on mobile with Angular Routing' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.6.0', 
        value: '0.1.6.0 - Minor improvements to change log page' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.5.0', 
        value: '0.1.5.0 - Initial routing setup' 
    },
];

export const Constants : Map<string, string> = new Map<string, string>(
    constantData.map(x => [x.key, x.value] as [string, string])
);

