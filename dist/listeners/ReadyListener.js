"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = require("../structures/Event");
const Logger_1 = require("../utils/Logger");
class ReadyListener extends Event_1.Event {
    constructor() {
        super("ready", true);
    }
    run(client) {
        Logger_1.Logger.log("Test");
    }
}
exports.default = ReadyListener;
