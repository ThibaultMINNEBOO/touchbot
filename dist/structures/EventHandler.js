"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const Logger_1 = require("../utils/Logger");
class EventHandler {
    constructor(client) {
        this._client = client;
    }
    loadListeners() {
        (0, fs_1.readdirSync)(this._client.settings.eventPath)
            .filter((files) => files.endsWith(".js") || files.endsWith(".ts"))
            .map(async (file) => {
            // eslint-disable-next-line prettier/prettier, new-cap
            const event = new (await Promise.resolve(`${(0, path_1.join)(this._client.settings.eventPath, file)}`).then(s => __importStar(require(s)))).default();
            if (event.once) {
                this._client.once(event.name, event.run.bind(null, this._client));
            }
            else {
                this._client.on(event.name, event.run.bind(null, this._client));
            }
            Logger_1.Logger.log(`Event ${event.name} loaded successfuly.`);
        });
    }
}
exports.EventHandler = EventHandler;
