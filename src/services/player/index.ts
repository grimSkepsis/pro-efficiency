import { API_ROUTES, createInternalRoute } from "@/routes";
import { PlayerData } from "./types";
import axios from "axios";

export async function getPlayerData(): Promise<PlayerData> {
  const resp = await axios.get(createInternalRoute(API_ROUTES.PLAYER), {
    params: {
      _: new Date().getTime(),
    },
  });
  return resp.data.playerData;
}

export async function savePlayerData(playerData: PlayerData): Promise<void> {
  return await axios.post(createInternalRoute(API_ROUTES.PLAYER), playerData);
}

export const PLAYER_DATA_QUERY_KEY = "playerData";
