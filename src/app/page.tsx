import { LandingHero } from "@/widgets/landing-hero";
import { CustomCursor } from "@/shared/ui/custom-cursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="flex-1 flex flex-col relative">
        <LandingHero />
        {/* Временный блок для скролла, чтобы увидеть параллакс-эффект */}
        <div className="h-[150vh] w-full bg-transparent flex flex-col items-center pt-32">
          <p className="text-white/50 font-medium">Продолжение страницы (Шаг 3)...</p>
        </div>
      </main>
    </>
  );
}
