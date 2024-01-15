import PlayerStats from "@/components/player-stats";
import { getPlayerStats } from "@/services/player";

export default async function Home() {
  const playerData = await getPlayerStats();
  return (
    <main>
      <PlayerStats
        level={1}
        initialSkills={playerData.baseSkills}
        initialAttributes={playerData.attributes}
      />
    </main>
  );
}
