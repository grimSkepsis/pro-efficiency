"use client";
import { useState } from "react";
import PlayerStats from "../player-stats";
import { PlayerAttributes, PlayerData, Skill } from "@/services/player/types";
import { savePlayerStats } from "@/services/player";
import { Typography } from "@mui/material";

type CharacterSheetProps = {
  playerData: PlayerData;
};
export function CharacterSheet({ playerData }: CharacterSheetProps) {
  const [currPlayerData, setCurrPlayerData] = useState(playerData);

  async function handleAttributesChange(newAttributes: PlayerAttributes) {
    const newPlayerData = { ...currPlayerData, attributes: newAttributes };
    setCurrPlayerData(newPlayerData);
    await savePlayerStats(newPlayerData);
  }

  async function handleSkillsChange(newSkills: Skill[]) {
    const newPlayerData = { ...currPlayerData, baseSkills: newSkills };
    setCurrPlayerData(newPlayerData);
    await savePlayerStats(newPlayerData);
  }

  return (
    <div>
      <Typography variant="h1">{playerData.name}</Typography>
      <PlayerStats
        level={1}
        skills={currPlayerData.baseSkills}
        attributes={currPlayerData.attributes}
        onAttributesChange={handleAttributesChange}
        onSkillsChange={handleSkillsChange}
      />
    </div>
  );
}
