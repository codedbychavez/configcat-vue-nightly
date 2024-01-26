import { type User } from "configcat-common";
import type { Ref } from "vue";
import type { TFeatureFlagValue } from "../types";
export declare function useFeatureFlag(featureFlagKey: string, userObject?: User): {
    isFeatureFlagEnabled: Ref<TFeatureFlagValue>;
};
