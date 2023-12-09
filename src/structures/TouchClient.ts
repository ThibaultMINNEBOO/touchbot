import { Client, IntentsBitField, Partials, REST, Routes } from "discord.js";
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
  public run(): void {
    this.login(this._token)
      .then(() => {
        Logger.log(`${this.user?.username} is successfuly connected!`);
        this.registerCommands();
      })
      .catch((err) => {
        Logger.error(
          `An error has occured! Here's the details on the error : ${err}`,
        );
      });
  }

  private registerCommands(): void {
    const rest = new REST({ version: "10" }).setToken(
      process.env.TOKEN as string,
    );
    const cmds = this.getCommands().map((cmd) => cmd.metadata);

    rest
      .put(Routes.applicationCommands(this.user?.id as string), { body: cmds })
      .then(() => {
        Logger.log("Slash commands (/) are now enabled.");
      })
      .catch((err) => {
        Logger.error(err);
      });
  }

  public getCommands(): Command[] {
    return [];
  }
}
