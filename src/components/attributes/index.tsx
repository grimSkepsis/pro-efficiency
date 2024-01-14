import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function createAttribute(name: string) {
  return (
    <Grid item xs={2}>
      <TextField label={name} variant="outlined" />
    </Grid>
  );
}

function Attributes() {
  const attributes = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
  return (
    <Grid container spacing={2}>
      {attributes.map(createAttribute)}
    </Grid>
  );
}

export default Attributes;