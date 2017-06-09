import { KeyValuePair } from '../models/keyvaluepair.model';

/**
 * System Constants
 */
const constantData = [
    { 
        key: 'NoLocale.Universal.ShellVersion', 
        value: '0.1.7.0' 
    },

    // Change Logs:
    { 
        key: 'en-US.Component.ChangeLog.ClientChangeLogs.0.1.7.0', 
        value: '0.1.7.0 - Resource Management Service with constants' 
    },
    { 
        key: 'en-US.Component.ChangeLog.ClientChangeLogs.0.1.6.4', 
        value: '0.1.6.4 - Minor mobile UI fixes' 
    },
    { 
        key: 'en-US.Component.ChangeLog.ClientChangeLogs.0.1.6.3', 
        value: '0.1.6.3 - Include artificial href to make mobile work' 
    },
    { 
        key: 'en-US.Component.ChangeLog.ClientChangeLogs.0.1.6.2', 
        value: '0.1.6.2 - Revert fixes to routing' 
    },
    { 
        key: 'en-US.Component.ChangeLog.ClientChangeLogs.0.1.6.1', 
        value: '0.1.6.1 - Change collapse button to work better on mobile with Angular Routing' 
    },
    { 
        key: 'en-US.Component.ChangeLog.ClientChangeLogs.0.1.6.0', 
        value: '0.1.6.0 - Minor improvements to change log page' 
    },
    { 
        key: 'en-US.Component.ChangeLog.ClientChangeLogs.0.1.5.0', 
        value: '0.1.5.0 - Initial routing setup' 
    },
];

export const Constants : Map<string, string> = new Map<string, string>(
    constantData.map(x => [x.key, x.value] as [string, string])
);

