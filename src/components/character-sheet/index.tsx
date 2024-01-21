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
  const queryClient = useQueryClient();
  const { data: playerData = initialPlayerData } = useQuery(
    "playerData",
    getPlayerData,
    {
      initialData: initialPlayerData,
    }
  );

  const { mutateAsync: updatePlayerData } = useMutation(savePlayerData, {
    onSuccess: () => {
      queryClient.invalidateQueries("playerData");
    },
  });

  async function handleAttributesChange(newAttributes: PlayerAttributes) {
    const newPlayerData = { ...playerData, attributes: newAttributes };
    await updatePlayerData(newPlayerData);
  }

  async function handleSkillsChange(newSkills: Skill[]) {
    const newPlayerData = { ...playerData, baseSkills: newSkills };
    await updatePlayerData(newPlayerData);
  }

  return (
    <div>
      <Typography variant="h1">{playerData.name}</Typography>
      <PlayerStats
        level={1}
        skills={playerData.baseSkills}
        attributes={playerData.attributes}
        onAttributesChange={handleAttributesChange}
        onSkillsChange={handleSkillsChange}
      />
    </div>
  );
}
