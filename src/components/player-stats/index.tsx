"use client";
import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { Skill } from "../skills/types";
import { PlayerAttributes } from "../attributes/types";
import Attributes from "../attributes";
import Skills from "../skills";

type PlayerStatsProps = {
  skills: Skill[];
  initialAttributes: PlayerAttributes;
  level: number;
};

function PlayerStats({ skills, initialAttributes, level }: PlayerStatsProps) {
  const [attributes, setAttributes] = useState(initialAttributes);

  const handleAttributesChange = (newAttributes: PlayerAttributes) => {
    setAttributes(newAttributes);
  };

  return (
    <Box pt={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} style={{ maxWidth: "5rem" }}>
          <Attributes
            attributes={attributes}
            onAttributesChange={handleAttributesChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ maxWidth: "15rem" }}>
          <Skills skills={skills} attributes={attributes} level={level} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PlayerStats;
