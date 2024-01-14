export type PlayerAttributes = {
  [K in Attribute]: number;
};

export type Attribute = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";
