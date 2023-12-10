"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const TouchClient_1 = require("./structures/TouchClient");
const client = new TouchClient_1.TouchClient(process.env.TOKEN, {
    eventPath: (0, path_1.join)(__dirname, "listeners"),
});
client.run();
