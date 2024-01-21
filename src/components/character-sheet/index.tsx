"use client";
import { useState } from "react";
import PlayerStats from "../player-stats";
import { PlayerAttributes, PlayerData, Skill } from "@/services/player/types";
import { getPlayerData, savePlayerData } from "@/services/player";
import { Typography } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "react-query";

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
      <PlayerStats />
    </div>
  );
}
