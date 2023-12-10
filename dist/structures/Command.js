"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
class Command {
    constructor(metadata) {
        this._metadata = metadata;
    }
    get metadata() {
        return this._metadata;
    }
}
exports.Command = Command;
