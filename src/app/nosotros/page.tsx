"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";
import {
  Shield,
  Heart,
  Star,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { ChakanaIcon } from "@/components/chakana-icon";
import { useI18n } from "@/lib/i18n-context";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function NosotrosPage() {
  const { t } = useI18n();
  const sectionIds = useMemo(() => [
    "nosotros-hero",
    "nosotros-stats",
    "nosotros-historia",
    "nosotros-valores",
    "nosotros-equipo",
    "nosotros-mision",
    "nosotros-cta",
  ], []);
  useScrollSpy({ sectionIds });

  const STATS = [
    { value: "10+", label: t("nos.stat.years") },
    { value: "5,000+", label: t("nos.stat.travelers") },
    { value: "4.9", label: t("nos.stat.rating") },
    { value: "20+", label: t("nos.stat.routes") },
  ];

  const VALUES = [
    { icon: Shield, title: t("nos.safety.title"), text: t("nos.safety.text") },
    { icon: Heart, title: t("nos.responsible.title"), text: t("nos.responsible.text") },
    { icon: Star, title: t("nos.excellence.title"), text: t("nos.excellence.text") },
    { icon: MessageCircle, title: t("nos.personalized.title"), text: t("nos.personalized.text") },
  ];

  const TEAM = [
    { name: "Raul Espinoza", role: t("nos.team1Role"), bio: t("nos.team1Bio") },
    { name: "Maria Quispe", role: t("nos.team2Role"), bio: t("nos.team2Bio") },
    { name: "Carlos Torres", role: t("nos.team3Role"), bio: t("nos.team3Bio") },
    { name: "Ana Flores", role: t("nos.team4Role"), bio: t("nos.team4Bio") },
  ];

  return (
    <div>
      {/* ═══ HERO / ABOUT ═══ */}
      <section id="nosotros-hero" className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="inline-block text-xs tracking-[0.3em] text-[#C89B3C] uppercase font-medium mb-3">{t("nos.badge")}</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white leading-tight">
              {t("nos.title")}
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              {t("nos.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section id="nosotros-stats" className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-[#1C1C1C]/60 border border-[#C89B3C]/15">
                <span className="block text-3xl md:text-4xl font-bold text-[#C89B3C]">{stat.value}</span>
                <span className="block text-xs text-white/50 uppercase tracking-wider mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ HISTORY ═══ */}
      <section id="nosotros-historia" className="py-20 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-[420px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/hero-1.webp)" }} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/50 to-transparent" />
            </div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white leading-tight">{t("nos.history")}</h2>
              <div className="mt-6 space-y-4 text-base text-white/60 leading-relaxed">
                <p>{t("nos.historyP1")}</p>
                <p>{t("nos.historyP2")}</p>
                <p>{t("nos.historyP3")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section id="nosotros-valores" className="py-20 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="text-center mb-12">
              <span className="inline-block text-xs tracking-[0.3em] text-[#C89B3C] uppercase font-medium mb-3">{t("nos.valuesBadge")}</span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-white">{t("nos.valuesTitle")}</h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((item) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#1C1C1C]/50 border border-[#C89B3C]/10 hover:border-[#C89B3C]/25 transition-all duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-[#C89B3C]" />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-wide text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section id="nosotros-equipo" className="py-20 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="text-center mb-12">
              <span className="inline-block text-xs tracking-[0.3em] text-[#C89B3C] uppercase font-medium mb-3">{t("nos.teamBadge")}</span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-white">{t("nos.teamTitle")}</h2>
              <p className="mt-4 text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
                {t("nos.teamDesc")}
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <motion.div
                key={member.name}
                className="p-6 rounded-2xl bg-[#1C1C1C]/50 border border-[#C89B3C]/10 hover:border-[#C89B3C]/25 transition-all duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C] font-bold text-2xl mb-4">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-base font-bold text-white">{member.name}</h3>
                <span className="text-xs text-[#C89B3C] font-medium tracking-wide">{member.role}</span>
                <p className="mt-3 text-sm text-white/50 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MISSION & VISION ═══ */}
      <section id="nosotros-mision" className="py-20 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs tracking-[0.3em] text-[#C89B3C] uppercase font-medium mb-3">{t("nos.mvBadge")}</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-white">{t("nos.mvTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 rounded-2xl bg-[#1C1C1C]/60 border border-[#C89B3C]/20"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center mb-4">
                <ChakanaIcon className="text-[#D4AF37]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t("nos.mission")}</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {t("nos.missionText")}
              </p>
            </motion.div>
            <motion.div
              className="p-8 rounded-2xl bg-[#1C1C1C]/60 border border-[#C89B3C]/20"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-[#C89B3C]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t("nos.vision")}</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {t("nos.visionText")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section id="nosotros-cta" className="py-20 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#1C1C1C] border border-[#C89B3C]/20 relative overflow-hidden"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-[#C89B3C]/5" />
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white">{t("nos.ctaTitle")}</h2>
              <p className="mt-4 text-base text-white/60 max-w-xl mx-auto leading-relaxed mb-6">
                {t("nos.ctaDesc")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <MapPin className="w-4 h-4 text-[#C89B3C]" />
                  Jr. Los Rayos Mz H Lt 3 El Mirador Huaraz, Perú
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Phone className="w-4 h-4 text-[#C89B3C]" />
                  +51 943 606 789
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Mail className="w-4 h-4 text-[#C89B3C]" />
                  info@intiquilladventures.com
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#tours" className="group flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#C89B3C] text-[#111111] font-bold text-sm tracking-wide hover:bg-yellow-500 transition-all duration-300 hover:scale-105">
                  {t("nos.viewTours")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/#tips" className="flex items-center gap-2 px-8 py-3.5 rounded-lg border border-[#C89B3C]/30 text-white text-sm tracking-wide hover:border-[#C89B3C] hover:text-[#C89B3C] transition-all duration-300">
                  {t("nos.travelTips")} <CheckCircle className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
