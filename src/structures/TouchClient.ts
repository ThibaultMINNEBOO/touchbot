import { Client, IntentsBitField, Partials } from "discord.js";
import { Logger } from "../utils/Logger";

export class TouchClient extends Client {
  private readonly _token: string;

  public constructor(token: string) {
    super({
      intents: [
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.MessageContent,
      ],
      partials: [Partials.GuildMember, Partials.User, Partials.Message],
    });

    this._token = token;
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

  public getCommands(): any {
    return ["jhe", "he"];
  }
}
