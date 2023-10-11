import * as configcat from 'configcat-common';
import { HttpConfigFetcher } from './ConfigFetcher';
import { LocalStorageCache } from './LocalStorageCache';
import CONFIGCAT_SDK_VERSION from './Version';
import type { ConfigCatPluginOptions } from '../Types';
import type { IConfigCatKernel } from 'configcat-common';

import type { App } from 'vue';

import { PollingMode } from 'configcat-common';

export default {
    install: (app: App, options: ConfigCatPluginOptions): void => {
        const { sdkKey, pollingMode, clientOptions } = options;
        const configCatKernal: IConfigCatKernel = {
            sdkType: 'ConfigCat-Vue',
            sdkVersion: CONFIGCAT_SDK_VERSION,
            configFetcher: new HttpConfigFetcher(),
            defaultCacheFactory: options => new configcat.ExternalConfigCache(new LocalStorageCache(), options.logger)
        }

        const client = configcat.getClient(
            sdkKey,
            pollingMode ?? PollingMode.AutoPoll,
            clientOptions,
            configCatKernal
        );

        const configCat = { client };

        app.provide('configcat', configCat);

        const originalAppUnmount = app.unmount;
        app.unmount = function () {
            originalAppUnmount.apply(arguments);
            client.dispose();
        }
    }
}