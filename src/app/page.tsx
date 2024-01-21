import { CharacterSheet } from "@/components/character-sheet";
import { getPlayerData } from "@/services/player";

export default async function Home() {
  const playerData = await getPlayerData();

  return (
    <main>
      <CharacterSheet initialPlayerData={playerData} />
    </main>
  );
}
