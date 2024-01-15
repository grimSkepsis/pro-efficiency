import { Grid, Typography } from "@mui/material";
import { PlayerAttributes } from "../../services/player/types";
import { Skill } from "../../services/player/types";

export function calculateModifier(
  skill: Skill,
  attributes: PlayerAttributes,
  playerLevel: number
): number {
  const attributeValue = attributes[skill.attribute];
  const attributeModifier = calculateAttributeModifier(attributeValue);
  let proficiencyBonus: number;

  switch (skill.proficiency) {
    case "Untrained":
      proficiencyBonus = 0;
      break;
    case "Trained":
      proficiencyBonus = 2 + playerLevel;
      break;
    case "Expert":
      proficiencyBonus = 4 + playerLevel;
      break;
    case "Master":
      proficiencyBonus = 6 + playerLevel;
      break;
    case "Legendary":
      proficiencyBonus = 8 + playerLevel;
      break;
    default:
      proficiencyBonus = 0;
  }

  return attributeModifier + proficiencyBonus;
}

export function calculateAttributeModifier(attributeValue: number): number {
  return Math.floor((attributeValue - 10) / 2);
}

export function createSkill(
  skill: Skill,
  attributes: PlayerAttributes,
  level: number,
  onSkillClick: (name: string) => void
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
