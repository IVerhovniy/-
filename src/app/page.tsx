import { LandingHero } from "@/widgets/landing-hero";
import { CustomCursor } from "@/shared/ui/custom-cursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="flex-1 flex flex-col">
        <LandingHero />
      </main>
    </>
  );
}
