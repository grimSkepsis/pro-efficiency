import {
  API_ROUTES,
  createInternalRoute,
  createCharacterServiceRoute,
  CHARACTER_SERVICE_ROUTES,
} from "@/routes";
import { PlayerData } from "./types";
import axios from "axios";

export async function getCharacterData(): Promise<PlayerData> {
  const resp = await axios.get(
    createCharacterServiceRoute(CHARACTER_SERVICE_ROUTES.CHARACTER),
    {
      params: {
        _: new Date().getTime(),
      },
    }
  );
  return resp.data;
}

export async function savePlayerData(playerData: PlayerData): Promise<void> {
  return await axios.post(createInternalRoute(API_ROUTES.PLAYER), playerData);
}

export const PLAYER_DATA_QUERY_KEY = "playerData";
