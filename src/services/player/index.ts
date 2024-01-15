import fs from "fs";
import path from "path";
import { PlayerData } from "./types";

export async function getPlayerStats(): Promise<PlayerData> {
  const filePath = path.join(process.cwd(), "public", "player-stats.json");
  const fileContents = await fs.promises.readFile(filePath, "utf8");

  // Parse the file contents to a JavaScript object
  const playerData = await JSON.parse(fileContents);
  return playerData;
}
