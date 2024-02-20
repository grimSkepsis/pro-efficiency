export type CharacterAttributes = {
  [K in Attribute]: number;
};

export type Attribute = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";

export type CharacterData = {
  level: number;
  name: string;
  race: string;
  background: string;
  class: string;
  attributes: CharacterAttributes;
  baseSkills: Skill[];
  classSkills: Skill[];
  perception: Skill;
  saves: Skill[];
};

export type CharacterSkillProficiency = {
  name: string;
  proficiency: Proficiency;
};

export type Proficiency =
  | "Untrained"
  | "Trained"
  | "Expert"
  | "Master"
  | "Legendary";

export type Skill = {
  attribute: Attribute;
} & CharacterSkillProficiency;
