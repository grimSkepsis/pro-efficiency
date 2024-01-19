import fs from "fs";
import { NextRequest } from "next/server";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "player-stats.json");
  const fileContents = await fs.promises.readFile(filePath, "utf8");
  const playerData = await JSON.parse(fileContents);
  return Response.json({ playerData });
}

export async function POST(req: NextRequest) {
  const filePath = path.join(process.cwd(), "public", "player-stats.json");
  const playerData = await req.json();
  const fileContents = JSON.stringify(playerData, null, 2);
  await fs.promises.writeFile(filePath, fileContents, "utf8");
  return new Response("Success!", { status: 200 });
}
