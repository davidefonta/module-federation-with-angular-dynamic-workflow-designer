import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export type PluginType = 'task' | 'action';

export type PluginOptions = LoadRemoteModuleOptions & {
    type: PluginType;
    displayName: string;
    componentName: string;
};
