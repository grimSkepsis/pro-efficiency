import Attributes from "@/components/attributes";
import PlayerStats from "@/components/player-stats";
import Skills from "@/components/skills";
import { TEST_PLAYER_SKILLS } from "@/util/test-data";

export default function Home() {
  return (
    <main>
      <PlayerStats
        level={1}
        initialSkills={TEST_PLAYER_SKILLS}
        initialAttributes={{
          STR: 18,
          DEX: 14,
          CON: 12,
          INT: 10,
          WIS: 8,
          CHA: 16,
        }}
      />
    </main>
  );
}
