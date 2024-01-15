"use client";
import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { Skill } from "../../services/player/types";
import { PlayerAttributes } from "../../services/player/types";
import Attributes from "../attributes";
import Skills from "../skills";

type PlayerStatsProps = {
  initialSkills: Skill[];
  initialAttributes: PlayerAttributes;
  level: number;
};

function PlayerStats({
  initialSkills,
  initialAttributes,
  level,
}: PlayerStatsProps) {
  const [attributes, setAttributes] = useState(initialAttributes);
  const [skills, setSkills] = useState(initialSkills);

  const handleAttributesChange = (newAttributes: PlayerAttributes) => {
    setAttributes(newAttributes);
  };

  const handleSkillsChange = (newSkills: Skill[]) => {
    setSkills(newSkills);
  };

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
            skills={skills}
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
