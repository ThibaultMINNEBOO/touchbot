import { join } from "path";
import { TouchClient } from "./structures/TouchClient";

const client = new TouchClient(process.env.TOKEN as string, {
  eventPath: join(__dirname, "listeners"),
});

client.run();
