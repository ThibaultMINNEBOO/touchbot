import { type Events } from "../types/Types";
import { type TouchClient } from "./TouchClient";

export abstract class Event {
  private readonly _name: Events;
  private readonly _once: boolean;

  /**
   * @param name event that will be listen
   * @param once boolean which represents if event is triggered once or no
   */
  public constructor(name: Events, once: boolean = false) {
    this._name = name;
    this._once = once;
  }

  public get name(): Events {
    return this._name;
  }

  public get once(): boolean {
    return this._once;
  }

  abstract run(client: TouchClient, ...args: any[]): any;
}
