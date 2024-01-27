import {
  IConfigCatClientSnapshot,
  IEventEmitter,
  SettingTypeOf,
  SettingValue,
  User,
} from "configcat-common";

import { mockConfigCatClientSnapshot } from "./mockConfigCatClientSnapshot";
import { mockEventEmitter } from "./mockEventEmitter";
import { Hooks, HookEvents } from "configcat-common/lib/Hooks";

class MockConfigCatClient extends Hooks {
  constructor(eventEmitter: IEventEmitter<HookEvents>) {
    super(eventEmitter);
  }

  getValueAsync<T extends SettingValue>(
    key: string,
    defaultValue: T,
    user?: User | undefined
  ): Promise<SettingTypeOf<T>> {
    // Do something with the key, and user so it won't complain
    const details = { key, user, defaultValue };
    return Promise.resolve(details.defaultValue as SettingTypeOf<T>);
  }

  snapshot(): IConfigCatClientSnapshot {
    return mockConfigCatClientSnapshot;
  }
}

export const mockConfigCatClient = new MockConfigCatClient(mockEventEmitter);
