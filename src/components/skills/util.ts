import { PlayerAttributes } from "../attributes/types";
import { Skill } from "./types";

export function calculateModifier(
  skill: Skill,
  attributes: PlayerAttributes,
  playerLevel: number
): number {
  const attributeValue = attributes[skill.attribute];
  const attributeModifier = Math.floor((attributeValue - 10) / 2);
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
