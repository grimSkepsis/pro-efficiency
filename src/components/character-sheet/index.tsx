"use client";
import PlayerAttributesAndSkills from "../player-attributes-and-skills";
import { PlayerData } from "@/services/player/types";
import { getPlayerData } from "@/services/player";
import { Typography } from "@mui/material";
import { useQuery } from "react-query";

type CharacterSheetProps = {
  initialPlayerData: PlayerData;
};
export function CharacterSheet({ initialPlayerData }: CharacterSheetProps) {
  const { data: playerData = initialPlayerData } = useQuery(
    "playerData",
    getPlayerData,
    {
      initialData: initialPlayerData,
    }
  );

  return (
    <div>
      <Typography variant="h1">{playerData.name}</Typography>
      <PlayerAttributesAndSkills />
    </div>
  );
}
