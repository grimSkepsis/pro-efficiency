import { API_ROUTES, createInternalRoute } from "@/routes";
import { PlayerData } from "./types";
import axios from "axios";

export async function getPlayerStats(): Promise<PlayerData> {
  const resp = await axios.get(createInternalRoute(API_ROUTES.PLAYER));
  return resp.data.playerData;
}

export async function savePlayerStats(playerData: PlayerData): Promise<void> {
  return await axios.post(createInternalRoute(API_ROUTES.PLAYER), playerData);
}
