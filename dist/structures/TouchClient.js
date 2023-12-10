"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchClient = void 0;
const discord_js_1 = require("discord.js");
const Logger_1 = require("../utils/Logger");
const EventHandler_1 = require("./EventHandler");
class TouchClient extends discord_js_1.Client {
    constructor(token, settings) {
        super({
            intents: [
                discord_js_1.IntentsBitField.Flags.GuildMembers,
                discord_js_1.IntentsBitField.Flags.GuildMessages,
                discord_js_1.IntentsBitField.Flags.Guilds,
                discord_js_1.IntentsBitField.Flags.MessageContent,
            ],
            partials: [discord_js_1.Partials.GuildMember, discord_js_1.Partials.User, discord_js_1.Partials.Message],
        });
        this._settings = settings;
        this._token = token;
    }
    get settings() {
        return this._settings;
    }
    /**
     * Start the bot
     */
    run() {
        this.login(this._token)
            .then(() => {
            Logger_1.Logger.log(`${this.user?.username} is successfuly connected!`);
            this.registerCommands();
            const eventHandler = new EventHandler_1.EventHandler(this);
            eventHandler.loadListeners();
        })
            .catch((err) => {
            Logger_1.Logger.error(`An error has occured! Here's the details on the error : ${err}`);
        });
    }
    registerCommands() {
        const rest = new discord_js_1.REST({ version: "10" }).setToken(process.env.TOKEN);
        const cmds = this.getCommands().map((cmd) => cmd.metadata);
        rest
            .put(discord_js_1.Routes.applicationCommands(this.user?.id), { body: cmds })
            .then(() => {
            Logger_1.Logger.log("Slash commands (/) are now enabled.");
        })
            .catch((err) => {
            Logger_1.Logger.error(err);
        });
    }
    getCommands() {
        return [];
    }
}
exports.TouchClient = TouchClient;
