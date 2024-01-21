import { Grid, Typography } from "@mui/material";
import { Skill } from "../../../services/player/types";
import { PlayerAttributes } from "../../../services/player/types";
import { calculateAttributeModifier, createSkill } from "./util";
import { ATTRIBUTE_ORDER, PROFICIENCY_LEVELS } from "./constants";
import { useState } from "react";

type SkillsProps = {
  skills: Skill[];
  attributes: PlayerAttributes;
  level: number;
  onSkillsChange: (newSkills: Skill[]) => void;
  editable?: boolean;
};

function Skills({
  skills,
  attributes,
  level,
  onSkillsChange,
  editable = false,
}: SkillsProps) {
  const groupedSkills = skills.reduce((groups, skill) => {
    const key = skill.attribute;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(skill);
    return groups;
  }, {} as Record<string, Skill[]>);

  for (let attribute in groupedSkills) {
    groupedSkills[attribute].sort((a, b) => a.name.localeCompare(b.name));
  }

  function handleSkillClick(name: string) {
    if (!editable) return;
    const newSkills = [...skills];
    const skillToUpdate = newSkills.find((skill) => skill.name === name);
    if (!skillToUpdate) return;
    const indexToUpdate = newSkills.indexOf(skillToUpdate);
    const currentProficiencyIndex = PROFICIENCY_LEVELS.indexOf(
      skillToUpdate.proficiency
    );
    const nextProficiencyIndex =
      (currentProficiencyIndex + 1) % PROFICIENCY_LEVELS.length;
    newSkills[indexToUpdate].proficiency =
      PROFICIENCY_LEVELS[nextProficiencyIndex];
    onSkillsChange(newSkills);
  }

  return (
    <Grid container direction="column" spacing={2}>
      {ATTRIBUTE_ORDER.map((attribute) => {
        const skills = groupedSkills[attribute];
        // if (!skills) return null;
        const modifier = calculateAttributeModifier(attributes[attribute]);
        return (
          <Grid item xs={12} key={attribute}>
            <Typography variant="h6">
              {attribute} ({modifier})
            </Typography>
            {skills?.map((skill, idx) =>
              createSkill(skill, attributes, level, handleSkillClick, editable)
            )}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Skills;
