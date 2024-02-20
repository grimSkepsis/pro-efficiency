"use client";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import { CharacterData, Skill } from "../../services/character/types";
import { CharacterAttributes } from "../../services/character/types";
import Attributes from "./attributes";
import Skills from "./skills";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CHARACTER_DATA_QUERY_KEY,
  getCharacterData,
  saveCharacterData,
} from "@/services/character";
import { useState } from "react";
import { Cancel, Edit } from "@mui/icons-material";

function CharacterAttributesAndSkills() {
  const queryClient = useQueryClient();
  const [editable, setIsEditable] = useState(false);

  const { data: characterData, isLoading } = useQuery({
    queryKey: [CHARACTER_DATA_QUERY_KEY],
    queryFn: getCharacterData,
  });
  const { mutateAsync: updatePlayerData } = useMutation({
    mutationFn: saveCharacterData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CHARACTER_DATA_QUERY_KEY] });
    },
  });

  async function handleAttributesChange(newAttributes: CharacterAttributes) {
    const newPlayerData = {
      ...characterData,
      attributes: newAttributes,
    } as CharacterData;
    await updatePlayerData(newPlayerData);
  }

  async function handleSkillsChange(newSkills: Skill[]) {
    const newPlayerData = {
      ...characterData,
      baseSkills: newSkills,
    } as CharacterData;
    await updatePlayerData(newPlayerData);
  }
  if (isLoading) return <div>Loading...</div>;

  const { baseSkills, attributes, level } = characterData as CharacterData;

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

export default CharacterAttributesAndSkills;
