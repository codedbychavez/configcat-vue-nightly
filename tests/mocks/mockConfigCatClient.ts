import {
  IConfigCatClient,
  SettingTypeOf,
  SettingValue,
  User,
} from "configcat-common";

class MockConfigCatClient {
  getValueAsync<T extends SettingValue>(
    key: string,
    defaultValue: T,
    user?: User | undefined
  ): Promise<SettingTypeOf<T>> {
    // Do something with the key, and user
    const details = { key, user, defaultValue };
    return Promise.resolve(details.defaultValue as SettingTypeOf<T>);
  }
}

export const mockConfigCatClient =
  new MockConfigCatClient() as IConfigCatClient;
