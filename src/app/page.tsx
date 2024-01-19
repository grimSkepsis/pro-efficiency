import { CharacterSheet } from "@/components/character-sheet";
import { getPlayerStats } from "@/services/player";
import { Button } from "@mui/material";

export default async function Home() {
  const playerData = await getPlayerStats();

  return (
    <main>
      {" "}
      <CharacterSheet playerData={playerData} />{" "}
    </main>
  );
}
