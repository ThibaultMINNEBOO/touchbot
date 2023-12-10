"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const fs_1 = require("fs");
const colors_1 = __importDefault(require("colors"));
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Logger {
    static log(content) {
        const sysDate = (0, dayjs_1.default)(Date.now()).format("HH:mm:ss");
        const message = `[${sysDate}] ${content}`;
        console.log(message);
        (0, fs_1.writeFileSync)("logs.txt", `${message}\n`);
    }
    static error(content) {
        const sysDate = (0, dayjs_1.default)(Date.now()).format("HH:mm:ss");
        const message = `[${sysDate}] ❌ ${content}`;
        console.log(colors_1.default.red(message));
        (0, fs_1.writeFileSync)("logs.txt", `${message}\n`);
    }
}
exports.Logger = Logger;
