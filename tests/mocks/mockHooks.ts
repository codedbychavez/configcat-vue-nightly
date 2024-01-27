import { IProvidesHooks, IEventEmitter, HookEvents } from "configcat-common";
import { mockEventEmitter } from "./mockEventEmitter";

class MockHooks implements IProvidesHooks, IEventEmitter<HookEvents> {
  private eventEmitter: IEventEmitter;

  constructor(eventEmitter: IEventEmitter) {
    this.eventEmitter = eventEmitter;
  }

  tryDisconnect(): boolean {
    // Implement mock logic or return a fixed value
    return true;
  }

  addListener<TEventName extends keyof HookEvents>(
    eventName: TEventName,
    listener: (...args: HookEvents[TEventName]) => void
  ): this {
    // Implement mock logic or leave as a stub
    return this;
  }

  on<TEventName extends keyof HookEvents>(
    eventName: TEventName,
    listener: (...args: HookEvents[TEventName]) => void
  ): this {
    // Implement mock logic or leave as a stub
    return this;
  }

  once<TEventName extends keyof HookEvents>(
    eventName: TEventName,
    listener: (...args: HookEvents[TEventName]) => void
  ): this {
    // Implement mock logic or leave as a stub
    return this;
  }

  removeListener<TEventName extends keyof HookEvents>(
    eventName: TEventName,
    listener: (...args: HookEvents[TEventName]) => void
  ): this {
    // Implement mock logic or leave as a stub
    return this;
  }

  off<TEventName extends keyof HookEvents>(
    eventName: TEventName,
    listener: (...args: HookEvents[TEventName]) => void
  ): this {
    // Implement mock logic or leave as a stub
    return this;
  }

  removeAllListeners(eventName?: keyof HookEvents): this {
    // Implement mock logic or leave as a stub
    return this;
  }

  listeners(eventName: keyof HookEvents): Function[] {
    // Implement mock logic or return a mock list of listeners
    return [];
  }

  listenerCount(eventName: keyof HookEvents): number {
    // Implement mock logic or return a mock count
    return 0;
  }

  eventNames(): Array<keyof HookEvents> {
    // Implement mock logic or return a mock list of event names
    return [];
  }

  emit<TEventName extends keyof HookEvents>(
    eventName: TEventName,
    ...args: HookEvents[TEventName]
  ): boolean {
    // Implement mock logic or return a fixed value
    return true;
  }
}

export const mockHooks = new MockHooks(mockEventEmitter);
