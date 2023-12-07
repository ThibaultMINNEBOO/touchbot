import type { ClientEvents } from "discord.js";

export type Events = keyof ClientEvents | keyof CustomEvents;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CustomEvents {
  // TODO: add custom events
}
