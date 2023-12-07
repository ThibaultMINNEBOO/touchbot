import dayjs from "dayjs";
import { writeFileSync } from "fs";
import colors from "colors";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Logger {
  public static log(content: string): void {
    const sysDate = dayjs(Date.now()).format("HH:mm:ss");
    const message = `[${sysDate}] ${content}`;

    console.log(message);
    writeFileSync("logs.txt", `${message}\n`);
  }

  public static error(content: string): void {
    const sysDate = dayjs(Date.now()).format("HH:mm:ss");
    const message = `[${sysDate}] ❌ ${content}`;

    console.log(colors.red(message));
    writeFileSync("logs.txt", `${message}\n`);
  }
}
