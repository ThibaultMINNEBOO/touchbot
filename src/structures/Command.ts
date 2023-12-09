import type { CommandInteraction, ApplicationCommandData } from "discord.js";
import type { TouchClient } from "./TouchClient";

export abstract class Command {
  private readonly _metadata: ApplicationCommandData;

  public constructor(metadata: ApplicationCommandData) {
    this._metadata = metadata;
  }

  public get metadata(): ApplicationCommandData {
    return this._metadata;
  }

  public abstract run(
    client: TouchClient,
    interaction: CommandInteraction,
  ): void;
}
