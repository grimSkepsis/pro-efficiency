import React from "react";
import { Grid, TextField } from "@mui/material";
import { PlayerAttributes } from "./types";

type AttributesProps = {
  attributes: PlayerAttributes;
};

function Attributes({ attributes }: AttributesProps) {
  return (
    <Grid container direction="column" spacing={2}>
      {Object.entries(attributes).map(([name, value]) => (
        <Grid item xs={12} key={name}>
          <TextField
            label={name}
            value={value}
            variant="outlined"
            fullWidth
            disabled
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Attributes;
