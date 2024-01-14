"use client";
import { Grid, Typography } from "@mui/material";
import { Skill } from "./types";
import { PlayerAttributes } from "../attributes/types";
import { calculateModifier } from "./util";

type SkillsProps = {
  skills: Skill[];
  attributes: PlayerAttributes;
  level: number;
};

function createSkill(
  skill: Skill,
  attributes: PlayerAttributes,
  level: number
) {
  const value = calculateModifier(skill, attributes, level);
  return (
    <Grid item xs={12}>
      <Typography variant="body1">
        {skill.name} ({skill.attribute}): {value}{" "}
        {skill.proficiency !== "Untrained" ? `(${skill.proficiency})` : ""}
      </Typography>
    </Grid>
  );
}

function Skills({ skills, attributes, level }: SkillsProps) {
  return (
    <Grid container direction="column" spacing={2}>
      {skills.map((skill) => createSkill(skill, attributes, level))}
    </Grid>
  );
}

export default Skills;
