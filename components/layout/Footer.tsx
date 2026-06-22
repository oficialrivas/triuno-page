import Link from "next/link";
import { Globe, MessageCircle, Share2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[var(--color-triuno-800)] pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="inline-block mb-6">
            <h2 className="text-2xl font-bold text-white tracking-tighter">
              TRI<span className="text-[var(--color-triuno-200)]">UNO</span>
            </h2>
          </Link>
          <p className="text-neutral-400 max-w-sm mb-6">
            Construyendo el futuro digital a través de arquitecturas escalables, seguridad de grado militar y experiencias de usuario inmersivas.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-triuno-900)] border border-[var(--color-triuno-700)] flex items-center justify-center text-neutral-400 hover:text-[var(--color-triuno-200)] hover:border-[var(--color-triuno-400)] transition-colors">
              <MessageCircle size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-triuno-900)] border border-[var(--color-triuno-700)] flex items-center justify-center text-neutral-400 hover:text-[var(--color-triuno-200)] hover:border-[var(--color-triuno-400)] transition-colors">
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-triuno-900)] border border-[var(--color-triuno-700)] flex items-center justify-center text-neutral-400 hover:text-[var(--color-triuno-200)] hover:border-[var(--color-triuno-400)] transition-colors">
              <Share2 size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Soluciones</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-neutral-400 hover:text-[var(--color-triuno-200)] transition-colors">Desarrollo Web</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-[var(--color-triuno-200)] transition-colors">Arquitectura Cloud</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-[var(--color-triuno-200)] transition-colors">Ciberseguridad</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-[var(--color-triuno-200)] transition-colors">Automatización</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Empresa</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-neutral-400 hover:text-[var(--color-triuno-200)] transition-colors">Sobre Nosotros</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-[var(--color-triuno-200)] transition-colors">Casos de Éxito</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-[var(--color-triuno-200)] transition-colors">Blog</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-[var(--color-triuno-200)] transition-colors">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[var(--color-triuno-800)] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Triuno. Todos los derechos reservados.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
