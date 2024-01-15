export type PlayerAttributes = {
  [K in Attribute]: number;
};

export type Attribute = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";

export type PlayerData = {
  level: number;
  name: string;
  race: string;
  background: string;
  class: string;
  attributes: PlayerAttributes;
  baseSkills: Skill[];
  classSkills: Skill[];
  initiative: Skill;
  perception: Skill;
  saves: {
    fortitude: Skill;
    reflex: Skill;
    will: Skill;
  };
};

export type PlayerSkillProficiency = {
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
} & PlayerSkillProficiency;