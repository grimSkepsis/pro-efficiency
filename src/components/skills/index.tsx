import { Grid, Typography } from "@mui/material";
import { Skill } from "./types";
import { Attribute, PlayerAttributes } from "../attributes/types";
import { calculateAttributeModifier, calculateModifier } from "./util";

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
    <Grid item xs={12} key={skill.name}>
      <Typography variant="body1">
        {skill.name}: {value}{" "}
        {skill.proficiency !== "Untrained" ? `(${skill.proficiency})` : ""}
      </Typography>
    </Grid>
  );
}

const attributeOrder: Attribute[] = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

function Skills({ skills, attributes, level }: SkillsProps) {
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
            {skills?.map((skill) => createSkill(skill, attributes, level))}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Skills;
