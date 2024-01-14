import React from "react";
import { Box, Grid } from "@mui/material";
import Attributes from "../attributes";
import Skills from "../skills";
import { Skill } from "../skills/types";
import { PlayerAttributes } from "../attributes/types";

interface PlayerStatsProps {
  skills: Skill[];
  attributes: PlayerAttributes;
  level: number;
}

const MAX_WIDTH = "15rem";

function PlayerStats({ skills, attributes, level }: PlayerStatsProps) {
  return (
    <Box pt={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} style={{ maxWidth: "5rem" }}>
          <Attributes attributes={attributes} />
        </Grid>
        <Grid item xs={12} sm={6} style={{ maxWidth: MAX_WIDTH }}>
          <Skills skills={skills} attributes={attributes} level={level} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PlayerStats;
