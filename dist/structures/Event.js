"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    /**
     * @param name event that will be listen
     * @param once boolean which represents if event is triggered once or no
     */
    constructor(name, once = false) {
        this._name = name;
        this._once = once;
    }
    get name() {
        return this._name;
    }
    get once() {
        return this._once;
    }
}
exports.Event = Event;
