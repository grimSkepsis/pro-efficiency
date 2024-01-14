import Attributes from "@/components/attributes";
import Skills from "@/components/skills";
import { TEST_PLAYER_SKILLS } from "@/util/test-data";

export default function Home() {
  return (
    <main>
      <Attributes />
      <Skills
        level={1}
        skills={TEST_PLAYER_SKILLS}
        attributes={{
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
