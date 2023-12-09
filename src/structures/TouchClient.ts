import { Client, IntentsBitField, Partials } from "discord.js";
import { Logger } from "../utils/Logger";
import type { ClientSettings } from "../types/Types";
import type { Command } from "./Command";

export class TouchClient extends Client {
  private readonly _token: string;
  private readonly _settings: ClientSettings;

  public constructor(token: string, settings: ClientSettings) {
    super({
      intents: [
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.MessageContent,
      ],
      partials: [Partials.GuildMember, Partials.User, Partials.Message],
    });

    this._settings = settings;
    this._token = token;
  }

  public get settings(): ClientSettings {
    return this._settings;
  }

  /**
   * Start the bot
   */
  public async run(): Promise<void> {
    this.login(this._token)
      .then(() => {
        Logger.log(`${this.user?.username} is successfuly connected!`);
      })
      .catch((err) => {
        Logger.error(
          `An error has occured! Here's the details on the error : ${err}`,
        );
      });
  }

  public getCommands(): Command[] {
    return [];
  }
}
