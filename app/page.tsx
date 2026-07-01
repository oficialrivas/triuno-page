import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CinematicHero } from "@/components/ui/cinematic-hero";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Home() {
  const navItems = [
    {
      name: "Inicio",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Nosotros",
      link: "/nosotros",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contacto",
      link: "/contacto",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full relative">
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <CinematicHero />
    </main>
  );
}
