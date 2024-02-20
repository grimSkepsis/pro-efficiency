import { Grid, IconButton, Input, Typography } from "@mui/material";
import { Attribute, Skill } from "../../../services/character/types";
import { CharacterAttributes } from "../../../services/character/types";
import { calculateAttributeModifier, createSkill } from "./util";
import { ATTRIBUTE_ORDER, PROFICIENCY_LEVELS } from "./constants";
import { Add } from "@mui/icons-material";
import { useState } from "react";

type SkillsProps = {
  skills: Skill[];
  attributes: CharacterAttributes;
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
  const [newSkillMap, setNewSkillMap] = useState({} as Record<string, string>);

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

  function handleSkillAdd(attribute: Attribute) {
    if (!newSkillMap[attribute]) return;
    if (skills.find((skill) => skill.name === newSkillMap[attribute])) return;
    const newSkills = [...skills];
    newSkills.push({
      name: newSkillMap[attribute],
      attribute,
      proficiency: "Untrained",
    });
    onSkillsChange(newSkills);
    setNewSkillMap({ ...newSkillMap, [attribute]: "" });
  }

  function updateNewSkillName(attribute: Attribute) {
    return function (e: any) {
      setNewSkillMap({ ...newSkillMap, [attribute]: e.target.value });
    };
  }

  function handleRemoveSkill(skillToRemove: string) {
    const newSkills = skills.filter((skill) => skill.name !== skillToRemove);
    onSkillsChange(newSkills);
  }

  return (
    <Grid container direction="column" spacing={2}>
      {ATTRIBUTE_ORDER.map((attribute) => {
        const skills = groupedSkills[attribute];
        const modifier = calculateAttributeModifier(attributes[attribute]);
        return (
          <Grid item xs={12} key={attribute}>
            <Typography variant="h6">
              {attribute} ({modifier})
            </Typography>
            {editable && (
              <>
                <Input
                  value={newSkillMap[attribute]}
                  onChange={updateNewSkillName(attribute)}
                />
                <IconButton onClick={() => handleSkillAdd(attribute)}>
                  <Add />
                </IconButton>
              </>
            )}
            {skills?.map((skill, idx) =>
              createSkill(
                skill,
                attributes,
                level,
                handleSkillClick,
                editable,
                handleRemoveSkill
              )
            )}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Skills;
