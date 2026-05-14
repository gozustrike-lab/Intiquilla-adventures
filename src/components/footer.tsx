import Link from "next/link";
import { Mountain, ChevronRight, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { TOURS } from "@/lib/tours-data";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#D4AF37]/10 bg-[#132720]/50">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-[#D4AF37]" />
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-wider text-white leading-tight">INTIQUILLA</span>
                <span className="text-[9px] tracking-[0.3em] text-[#D4AF37]/80 font-medium uppercase leading-tight">Adventures</span>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Turismo de aventura responsable en la Cordillera Blanca y Huayhuash, Huaraz, Peru.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]/60 hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]/60 hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]/60 hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase mb-4">Navegacion</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Destinos", href: "/#destinos" },
                { label: "Tours", href: "/#tours" },
                { label: "Sobre Nosotros", href: "/nosotros" },
                { label: "Tips de Viaje", href: "/#tips" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase mb-4">Tours Populares</h4>
            <ul className="space-y-2.5">
              {TOURS.map((tour) => (
                <li key={tour.id}>
                  <Link href={`/tours/${tour.slug}`} className="text-sm text-white/40 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {tour.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]/50 mt-0.5 shrink-0" />
                <span className="text-sm text-white/40">Jr. Jose de la Riva Aguero 682, Huaraz, Peru</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]/50 mt-0.5 shrink-0" />
                <span className="text-sm text-white/40">+51 999 999 999</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]/50 mt-0.5 shrink-0" />
                <span className="text-sm text-white/40">info@intiquillaadventures.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#D4AF37]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Intiquilla Adventures. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/20">
            Diseno y desarrollo web por Fastpagepro.
          </p>
        </div>
      </div>
    </footer>
  );
}
