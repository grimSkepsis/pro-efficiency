import {
  createCharacterServiceRoute,
  CHARACTER_SERVICE_ROUTES,
} from "@/routes";
import { CharacterData } from "./types";
import axios from "axios";

export async function getCharacterData(): Promise<CharacterData> {
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

export async function saveCharacterData(
  playerData: CharacterData
): Promise<void> {
  return await axios.post(
    createCharacterServiceRoute(CHARACTER_SERVICE_ROUTES.CHARACTER),
    playerData
  );
}

export const CHARACTER_DATA_QUERY_KEY = "characterData";
