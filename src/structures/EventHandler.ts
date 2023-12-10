import { readdirSync } from "fs";
import type { TouchClient } from "./TouchClient";
import type { Event } from "./Event";
import { join } from "path";
import { Logger } from "../utils/Logger";

export class EventHandler {
  private readonly _client: TouchClient;

  public constructor(client: TouchClient) {
    this._client = client;
  }

  public loadListeners(): void {
    readdirSync(this._client.settings.eventPath)
      .filter((files) => files.endsWith(".js") || files.endsWith(".ts"))
      .map(async (file: string) => {
        // eslint-disable-next-line prettier/prettier, new-cap
        const event: Event = new (await import(join(this._client.settings.eventPath, file))).default();

        if (event.once) {
          this._client.once(event.name, event.run.bind(null, this._client));
        } else {
          this._client.on(event.name, event.run.bind(null, this._client));
        }

        Logger.log(`Event ${event.name} loaded successfuly.`);
      });
  }
}
