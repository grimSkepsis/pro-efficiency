"use client";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import { PlayerData, Skill } from "../../services/player/types";
import { PlayerAttributes } from "../../services/player/types";
import Attributes from "./attributes";
import Skills from "./skills";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  PLAYER_DATA_QUERY_KEY,
  getPlayerData,
  savePlayerData,
} from "@/services/player";
import { useState } from "react";
import { Cancel, Edit } from "@mui/icons-material";

function PlayerAttributesAndSkills() {
  const queryClient = useQueryClient();
  const [editable, setIsEditable] = useState(false);

  const { data: playerData, isLoading } = useQuery({
    queryKey: [PLAYER_DATA_QUERY_KEY],
    queryFn: getPlayerData,
  });
  const { mutateAsync: updatePlayerData } = useMutation({
    mutationFn: savePlayerData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PLAYER_DATA_QUERY_KEY] });
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

  function onToggleEdit() {
    setIsEditable(!editable);
  }

  return (
    <Box pt={2}>
      <Box>
        <Typography variant="h6">
          Atttributes and Skills{" "}
          <IconButton onClick={onToggleEdit}>
            {editable ? <Cancel /> : <Edit />}
          </IconButton>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} style={{ maxWidth: "5rem" }}>
          <Attributes
            attributes={attributes}
            onAttributesChange={handleAttributesChange}
            editable={editable}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ maxWidth: "15rem" }}>
          <Skills
            skills={baseSkills}
            attributes={attributes}
            level={level}
            onSkillsChange={handleSkillsChange}
            editable={editable}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PlayerAttributesAndSkills;
