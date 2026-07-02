"use client";

import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Instagram, Facebook, FileText, ShieldCheck, Scale } from "lucide-react";
import { ChakanaIcon } from "@/components/chakana-icon";
import { TOURS } from "@/lib/tours-data";
import { useI18n } from "@/lib/i18n-context";

export function Footer() {
  const { t } = useI18n();

  const navItems = [
    { label: t("nav.destinos"), href: "/#destinos" },
    { label: t("nav.tours"), href: "/#tours" },
    { label: t("nav.sobre"), href: "/nosotros" },
    { label: t("nav.tips"), href: "/#tips" },
  ];

  return (
    <footer className="mt-auto border-t border-[#C89B3C]/10 bg-[#171717]/50 relative overflow-hidden">
      {/* Top gradient fade — smooth blend from base bg into footer tint */}
      <div className="absolute top-0 inset-x-0 h-5 bg-gradient-to-b from-[#111111] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <ChakanaIcon className="text-[#D4AF37]" size={24} />
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-wider text-white leading-tight">INTIQUILLA</span>
                <span className="text-[9px] tracking-[0.3em] text-[#C89B3C]/80 font-medium uppercase leading-tight">Adventures</span>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              {t("footer.desc")}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://www.instagram.com/intiquilladventures?igsh=MW1uZnd6Z3dycDZpeQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]/60 hover:text-[#C89B3C] hover:bg-[#C89B3C]/20 transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/share/1BmkSZU97A/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]/60 hover:text-[#C89B3C] hover:bg-[#C89B3C]/20 transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="mailto:info@intiquilladventures.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]/60 hover:text-[#C89B3C] hover:bg-[#C89B3C]/20 transition-all" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#C89B3C] uppercase mb-4">{t("footer.nav")}</h4>
            <ul className="space-y-2.5">
              {navItems.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors inline-flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#C89B3C] uppercase mb-4">{t("footer.popular")}</h4>
            <ul className="space-y-2.5">
              {TOURS.map((tour) => (
                <li key={tour.id}>
                  <Link href={`/tours/${tour.slug}`} className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors inline-flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {tour.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#C89B3C] uppercase mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C89B3C]/50 mt-0.5 shrink-0" />
                <span className="text-sm text-white/40">Jr. Los Rayos Mz H Lt 3 El Mirador Huaraz, Peru</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#C89B3C]/50 mt-0.5 shrink-0" />
                <a href="tel:+51943606789" className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors">+51 943 606 789</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#C89B3C]/50 mt-0.5 shrink-0" />
                <a href="mailto:info@intiquilladventures.com" className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors">info@intiquilladventures.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#C89B3C] uppercase mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/terminos-condiciones" className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors inline-flex items-center gap-1.5">
                  <FileText className="w-3 h-3" />
                  Terminos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3" />
                  Politica de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/aviso-legal" className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors inline-flex items-center gap-1.5">
                  <Scale className="w-3 h-3" />
                  Aviso Legal
                </Link>
              </li>
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-reclamaciones'))}
                  className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors inline-flex items-center gap-1.5 focus:outline-none cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  Libro de Reclamaciones
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center px-2 md:px-0 gap-2">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Intiquilla Adventures. {t("footer.rights")}
            </p>
          </div>
          <a
            href="https://fastpagepro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-[#C89B3C] transition-colors text-center"
          >
            {t("footer.credit")}
          </a>
        </div>
      </div>
    </footer>
  );
}
