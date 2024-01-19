"use client";
import { Grid, Box } from "@mui/material";
import { Skill } from "../../services/player/types";
import { PlayerAttributes } from "../../services/player/types";
import Attributes from "../attributes";
import Skills from "../skills";

type PlayerStatsProps = {
  skills: Skill[];
  attributes: PlayerAttributes;
  level: number;
  onAttributesChange: (newAttributes: PlayerAttributes) => void;
  onSkillsChange: (newSkills: Skill[]) => void;
};

function PlayerStats({
  skills,
  attributes,
  level,
  onAttributesChange,
  onSkillsChange,
}: PlayerStatsProps) {
  return (
    <Box pt={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} style={{ maxWidth: "5rem" }}>
          <Attributes
            attributes={attributes}
            onAttributesChange={onAttributesChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ maxWidth: "15rem" }}>
          <Skills
            skills={skills}
            attributes={attributes}
            level={level}
            onSkillsChange={onSkillsChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PlayerStats;
