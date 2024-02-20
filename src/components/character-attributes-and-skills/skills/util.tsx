import { Grid, IconButton, Typography } from "@mui/material";
import { CharacterAttributes } from "../../../services/character/types";
import { Skill } from "../../../services/character/types";
import { isBaseSkill } from "./constants";
import { CloseOutlined } from "@mui/icons-material";

export function calculateModifier(
  skill: Skill,
  attributes: CharacterAttributes,
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
  attributes: CharacterAttributes,
  level: number,
  handleSkillClick: (name: string) => void,
  editable: boolean,
  handleRemoveSkill: (name: string) => void
) {
  const value = calculateModifier(skill, attributes, level);
  return (
    <Grid
      item
      xs={12}
      key={skill.name}
      style={{
        cursor: editable ? "pointer" : "not-allowed",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="body1" onClick={() => handleSkillClick(skill.name)}>
        {skill.name}: {value}{" "}
        {skill.proficiency !== "Untrained" ? `(${skill.proficiency})` : ""}
      </Typography>
      {!isBaseSkill(skill) && editable && (
        <IconButton onClick={() => handleRemoveSkill(skill.name)}>
          <CloseOutlined />
        </IconButton>
      )}
    </Grid>
  );
}
