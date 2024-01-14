import { Attribute } from "../attributes/types";

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
