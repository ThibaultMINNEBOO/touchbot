import type { ClientEvents } from "discord.js";

export type Events = keyof ClientEvents | keyof CustomEvents;

export interface ClientSettings {
  eventPath: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CustomEvents {
  // TODO: add custom events
}
