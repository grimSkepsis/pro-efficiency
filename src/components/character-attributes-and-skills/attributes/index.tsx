"use client";
import React, { ChangeEvent } from "react";
import { Grid, TextField } from "@mui/material";
import { CharacterAttributes } from "../../../services/character/types";

type AttributesProps = {
  attributes: CharacterAttributes;
  onAttributesChange: (newAttributes: CharacterAttributes) => void;
  editable?: boolean;
};

function Attributes({
  attributes,
  onAttributesChange,
  editable = false,
}: AttributesProps) {
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
            disabled={!editable}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Attributes;
