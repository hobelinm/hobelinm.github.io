import { KeyValuePair } from '../models/keyvaluepair.model';

/**
 * System Constants
 * {en-US|es-MX|Invariant}.{Constant|Server}.{Component|Service|Shared}.{Id}
 * {en-US|es-MX|Invariant}.{Constant|Server}.{Component|Service|Shared}.{Id}
 */
const constantData = [
    { 
        key: 'Invariant.Constant.Shared.ShellVersion', 
        value: '0.1.12.3' 
    },
    { 
        key: 'Invariant.Constant.Shared.Release.CodeName', 
        value: '4-LOM' 
    },

    // Change Logs:
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.12.3', 
        value: '0.1.12.3 - Include Facebook Comments on pages' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.12.2', 
        value: '0.1.12.2 - Support embedded content' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.12.1', 
        value: '0.1.12.1 - Page content preparation' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.12.0', 
        value: '0.1.12.0 - Set content frame size properly' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.11.6', 
        value: '0.1.11.6 - Fixes to child iFrame messaging' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.11.5', 
        value: '0.1.11.5 - Child iFrame messaging' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.11.4', 
        value: '0.1.11.4 - Integrated Pinterest' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.11.3', 
        value: '0.1.11.3 - iFrame height passed to parent' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.11.2', 
        value: '0.1.11.2 - Page not found properly formatted' 
    },
    { 
        key: 'en-US.Constant.ChangeLog.ChangeLog.0.1.11.1', 
        value: '0.1.11.1 - Fixed page source composition' 
    },
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

