import { CinematicHero } from "@/components/cinematic-landing-hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function NosotrosPage() {
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
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <main className="relative min-h-screen w-full">
      <FloatingNav navItems={navItems} />
      <CinematicHero />
    </main>
  );
}
