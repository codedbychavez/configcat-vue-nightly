import {
  IConfigCatClientSnapshot,
  ClientCacheState,
  IConfig,
  SettingValue,
  User,
  IEvaluationDetails,
  SettingTypeOf,
} from "configcat-common";

class MockConfigCatClientSnapshot implements IConfigCatClientSnapshot {
  readonly cacheState: ClientCacheState = ClientCacheState.HasUpToDateFlagData; // Example value
  readonly fetchedConfig: IConfig | null = null; // Set to null or provide a mock IConfig object

  getAllKeys(): ReadonlyArray<string> {
    // Return a mock array of setting keys
    return ["featureFlag1", "setting1"];
  }

  getValue<T extends SettingValue>(
    key: string,
    defaultValue: T,
    user?: User
  ): SettingTypeOf<T> {
    // Implement logic to return a mock value based on the key
    // For simplicity, returning defaultValue as an example
    return defaultValue as SettingTypeOf<T>;
  }

  getValueDetails<T extends SettingValue>(
    key: string,
    defaultValue: T,
    user?: User
  ): IEvaluationDetails<SettingTypeOf<T>> {
    // Implement logic to return mock evaluation details based on the key
    const mockDetails: IEvaluationDetails<SettingTypeOf<T>> = {
      key: key,
      value: defaultValue as SettingTypeOf<T>,
      isDefaultValue: true,
      // ... other properties of IEvaluationDetails
    };
    return mockDetails;
  }
}

export const mockConfigCatClientSnapshot = new MockConfigCatClientSnapshot();
