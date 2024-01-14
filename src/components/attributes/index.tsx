"use client";
import React, { ChangeEvent } from "react";
import { Grid, TextField } from "@mui/material";
import { PlayerAttributes } from "./types";

type AttributesProps = {
  attributes: PlayerAttributes;
  onAttributesChange: (newAttributes: PlayerAttributes) => void;
};

function Attributes({ attributes, onAttributesChange }: AttributesProps) {
  const handleAttributeChange =
    (attributeName: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(event.target.value);
      onAttributesChange({
        ...attributes,
        [attributeName]: newValue,
      });
    };

  return (
    <Grid container direction="column" spacing={2}>
      {Object.entries(attributes).map(([name, value]) => (
        <Grid item xs={12} key={name}>
          <TextField
            type="number"
            label={name}
            value={value}
            variant="outlined"
            fullWidth
            onChange={handleAttributeChange(name)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Attributes;
