"use client";
import PlayerAttributesAndSkills from "../player-attributes-and-skills";
import { PlayerData } from "@/services/player/types";
import { getPlayerData } from "@/services/player";
import { Typography } from "@mui/material";
import { useQuery } from "react-query";
import Image from "next/image";

type CharacterSheetProps = {
  initialPlayerData: PlayerData;
};
export function CharacterSheet({ initialPlayerData }: CharacterSheetProps) {
  const { data: playerData = initialPlayerData } = useQuery(
    "playerData",
    getPlayerData,
    {
      initialData: initialPlayerData,
    }
  );

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

          <Typography variant="h2">{playerData.name}</Typography>
        </div>

        <PlayerAttributesAndSkills />
      </div>
    </div>
  );
}
