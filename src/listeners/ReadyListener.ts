import { Event } from "../structures/Event";
import { type TouchClient } from "../structures/TouchClient";
import { Logger } from "../utils/Logger";

export default class ReadyListener extends Event {
  public constructor() {
    super("ready", true);
  }

  public override run(client: TouchClient): void {
    Logger.log("Test");
  }
}
