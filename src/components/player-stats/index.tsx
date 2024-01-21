"use client";
import { Grid, Box } from "@mui/material";
import { PlayerData, Skill } from "../../services/player/types";
import { PlayerAttributes } from "../../services/player/types";
import Attributes from "../attributes";
import Skills from "../skills";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPlayerData, savePlayerData } from "@/services/player";

function PlayerStats() {
  const queryClient = useQueryClient();

  const { data: playerData, isLoading } = useQuery("playerData", getPlayerData);
  const { mutateAsync: updatePlayerData } = useMutation(savePlayerData, {
    onSuccess: () => {
      queryClient.invalidateQueries("playerData");
    },
  });

  async function handleAttributesChange(newAttributes: PlayerAttributes) {
    const newPlayerData = {
      ...playerData,
      attributes: newAttributes,
    } as PlayerData;
    await updatePlayerData(newPlayerData);
  }

  async function handleSkillsChange(newSkills: Skill[]) {
    const newPlayerData = {
      ...playerData,
      baseSkills: newSkills,
    } as PlayerData;
    await updatePlayerData(newPlayerData);
  }
  if (isLoading) return <div>Loading...</div>;

  const { baseSkills, attributes, level } = playerData as PlayerData;

  return (
    <Box pt={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} style={{ maxWidth: "5rem" }}>
          <Attributes
            attributes={attributes}
            onAttributesChange={handleAttributesChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ maxWidth: "15rem" }}>
          <Skills
            skills={baseSkills}
            attributes={attributes}
            level={level}
            onSkillsChange={handleSkillsChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PlayerStats;
