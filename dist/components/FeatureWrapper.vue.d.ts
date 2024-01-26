import { User } from "configcat-common";
declare const _default: import("vue").DefineComponent<{
    featureFlagKey: {
        type: StringConstructor;
        required: true;
    };
    userObject: {
        type: typeof User;
        required: false;
    };
}, {
    isFeatureFlagEnabled: import("vue").Ref<import("../types").TFeatureFlagValue>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    featureFlagKey: {
        type: StringConstructor;
        required: true;
    };
    userObject: {
        type: typeof User;
        required: false;
    };
}>>, {}, {}>;
export default _default;
