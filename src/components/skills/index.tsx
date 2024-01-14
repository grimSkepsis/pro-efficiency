import { Grid, Typography } from "@mui/material";
import { Proficiency, Skill } from "./types";
import { Attribute, PlayerAttributes } from "../attributes/types";
import { calculateAttributeModifier, calculateModifier } from "./util";

type SkillsProps = {
  skills: Skill[];
  attributes: PlayerAttributes;
  level: number;
  onSkillsChange: (newSkills: Skill[]) => void;
};

function createSkill(
  skill: Skill,
  attributes: PlayerAttributes,
  level: number,
  onSkillClick: (name: string) => void,
  idx: number
) {
  const value = calculateModifier(skill, attributes, level);
  return (
    <Grid item xs={12} key={skill.name}>
      <Typography variant="body1" onClick={() => onSkillClick(skill.name)}>
        {skill.name}: {value}{" "}
        {skill.proficiency !== "Untrained" ? `(${skill.proficiency})` : ""}
      </Typography>
    </Grid>
  );
}

const attributeOrder: Attribute[] = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
const proficiencyLevels: Proficiency[] = [
  "Untrained",
  "Trained",
  "Expert",
  "Master",
  "Legendary",
];

function Skills({ skills, attributes, level, onSkillsChange }: SkillsProps) {
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
    const newSkills = [...skills];
    const skillToUpdate = newSkills.find((skill) => skill.name === name);
    if (!skillToUpdate) return;
    const indexToUpdate = newSkills.indexOf(skillToUpdate);
    const currentProficiencyIndex = proficiencyLevels.indexOf(
      skillToUpdate.proficiency
    );
    const nextProficiencyIndex =
      (currentProficiencyIndex + 1) % proficiencyLevels.length;
    newSkills[indexToUpdate].proficiency =
      proficiencyLevels[nextProficiencyIndex];
    onSkillsChange(newSkills);
  }

  return (
    <Grid container direction="column" spacing={2}>
      {attributeOrder.map((attribute) => {
        const skills = groupedSkills[attribute];
        // if (!skills) return null;
        const modifier = calculateAttributeModifier(attributes[attribute]);
        return (
          <Grid item xs={12} key={attribute}>
            <Typography variant="h6">
              {attribute} ({modifier})
            </Typography>
            {skills?.map((skill, idx) =>
              createSkill(skill, attributes, level, handleSkillClick, idx)
            )}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Skills;
