import { CharacterSkillProficiency, Skill } from "@/services/character/types";

export const TEST_PLAYER_SKILLS: Skill[] = [
  { name: "Acrobatics", attribute: "DEX", proficiency: "Trained" },
  { name: "Arcana", attribute: "INT", proficiency: "Untrained" },
  { name: "Athletics", attribute: "STR", proficiency: "Expert" },
  { name: "Crafting", attribute: "INT", proficiency: "Trained" },
  { name: "Deception", attribute: "CHA", proficiency: "Master" },
  { name: "Diplomacy", attribute: "CHA", proficiency: "Trained" },
  { name: "Intimidation", attribute: "CHA", proficiency: "Untrained" },
  { name: "Medicine", attribute: "WIS", proficiency: "Trained" },
  { name: "Nature", attribute: "WIS", proficiency: "Expert" },
  { name: "Occultism", attribute: "INT", proficiency: "Untrained" },
  { name: "Performance", attribute: "CHA", proficiency: "Trained" },
  { name: "Religion", attribute: "WIS", proficiency: "Master" },
  { name: "Society", attribute: "INT", proficiency: "Trained" },
  { name: "Stealth", attribute: "DEX", proficiency: "Untrained" },
  { name: "Survival", attribute: "WIS", proficiency: "Trained" },
  { name: "Thievery", attribute: "DEX", proficiency: "Expert" },
];
