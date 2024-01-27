import { HookEvents, IEventEmitter } from "configcat-common";

// Mock implementation of IEventEmitter
export const mockEventEmitter: IEventEmitter<HookEvents> = {
  emit: <TEventName extends keyof HookEvents>(
    eventName: TEventName,
    ...args: HookEvents[TEventName]
  ): boolean => {
    // Mock implementation
    console.log(`Emitting event: ${eventName}`, args);
    return true;
  },
  addListener: <TEventName extends keyof HookEvents>(
    eventName: TEventName,
    listener: (...args: HookEvents[TEventName]) => void
  ): IEventEmitter<HookEvents> => {
    // Mock implementation
    return mockEventEmitter;
  },
  on: <TEventName extends keyof HookEvents>(
    eventName: TEventName,
    listener: (...args: HookEvents[TEventName]) => void
  ): IEventEmitter<HookEvents> => {
    // Mock implementation
    return mockEventEmitter;
  },
  once: <TEventName extends keyof HookEvents>(
    eventName: TEventName,
    listener: (...args: HookEvents[TEventName]) => void
  ): IEventEmitter<HookEvents> => {
    // Mock implementation
    return mockEventEmitter;
  },
  removeListener: <TEventName extends keyof HookEvents>(
    eventName: TEventName,
    listener: (...args: HookEvents[TEventName]) => void
  ): IEventEmitter<HookEvents> => {
    // Mock implementation
    return mockEventEmitter;
  },
  off: function <TEventName extends keyof HookEvents>(
    eventName: TEventName,
    listener: (...args: HookEvents[TEventName]) => void
  ): IEventEmitter<HookEvents> {
    throw new Error("Function not implemented.");
  },
  removeAllListeners: function (
    eventName?: keyof HookEvents | undefined
  ): IEventEmitter<HookEvents> {
    throw new Error("Function not implemented.");
  },
  listeners: function (eventName: keyof HookEvents): Function[] {
    throw new Error("Function not implemented.");
  },
  listenerCount: function (eventName: keyof HookEvents): number {
    throw new Error("Function not implemented.");
  },
  eventNames: function (): (keyof HookEvents)[] {
    throw new Error("Function not implemented.");
  },
};
