"use client";
import CharacterAttributesAndSkills from "../character-attributes-and-skills";
import { CharacterData } from "@/services/character/types";
import { getCharacterData } from "@/services/character";
import { Typography } from "@mui/material";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

type CharacterSheetProps = {
  //   initialPlayerData: PlayerData;
};
export function CharacterSheet({}: CharacterSheetProps) {
  const { data: playerData } = useQuery({
    queryKey: ["playerData"],
    queryFn: getCharacterData,
  });

  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "16px 8px" }}
    >
      <div style={{ maxWidth: "1150px", width: "100%" }}>
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "2rem" }}
        >
          <div
            style={{
              borderRadius: "100%",
              width: "150px",
              height: "150px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/player-avatar.png"
              alt="player avatar"
              width={160}
              height={160}
            />
          </div>

          <Typography variant="h2">{playerData?.name}</Typography>
        </div>

        <CharacterAttributesAndSkills />
      </div>
    </div>
  );
}
