import { Attribute, Proficiency, Skill } from "@/services/character/types";

export const ATTRIBUTE_ORDER: Attribute[] = [
  "STR",
  "DEX",
  "CON",
  "INT",
  "WIS",
  "CHA",
];
export const PROFICIENCY_LEVELS: Proficiency[] = [
  "Untrained",
  "Trained",
  "Expert",
  "Master",
  "Legendary",
];

// Create a set of skill names for efficient lookup
const SKILL_NAMES = new Set([
  "Acrobatics",
  "Arcana",
  "Athletics",
  "Crafting",
  "Deception",
  "Diplomacy",
  "Intimidation",
  "Medicine",
  "Nature",
  "Occultism",
  "Performance",
  "Religion",
  "Society",
  "Stealth",
  "Survival",
  "Thievery",
]);

// Utility function that checks if a given skill name is in the set
export function isBaseSkill(skill: Skill) {
  return SKILL_NAMES.has(skill.name);
}
