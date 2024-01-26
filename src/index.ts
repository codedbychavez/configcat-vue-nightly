export {
  default as ConfigCatPlugin,
  type PluginOptions as ConfigCatPluginOptions,
} from "./plugins/ConfigCatPlugin";

export { default as FeatureWrapper } from "./components/FeatureWrapper.vue";
// Composables exports
export { useFeatureFlag } from "./composables/useFeatureFlag";
export { useConfigCatClient } from "./composables/useConfigCatClient";

export {
  createConsoleLogger,
  createFlagOverridesFromMap,
} from "configcat-common";

// These exports should be kept in sync with the exports listed in the section "Public types for end users" of common-js/src/index.ts!

export type {
  IOptions,
  IAutoPollOptions,
  IManualPollOptions,
  ILazyLoadingOptions,
  IConfigCatLogger,
  LogEventId,
  LogMessage,
  IConfigCatCache,
  IConfig,
  ISegment,
  SettingTypeMap,
  SettingValue,
  VariationIdValue,
  ISettingValueContainer,
  ISettingUnion,
  ISetting,
  ITargetingRule,
  IPercentageOption,
  ConditionTypeMap,
  IConditionUnion,
  ICondition,
  UserConditionComparisonValueTypeMap,
  IUserConditionUnion,
  IUserCondition,
  IPrerequisiteFlagCondition,
  ISegmentCondition,
  IConfigCatClient,
  IConfigCatClientSnapshot,
  IEvaluationDetails,
  SettingTypeOf,
  UserAttributeValue,
  FlagOverrides,
  IProvidesHooks,
  HookEvents,
} from "configcat-common";

export {
  PollingMode,
  DataGovernance,
  LogLevel,
  FormattableLogMessage,
  SettingType,
  UserComparator,
  PrerequisiteFlagComparator,
  SegmentComparator,
  SettingKeyValue,
  User,
  OverrideBehaviour,
  ClientCacheState,
  RefreshResult,
} from "configcat-common";
