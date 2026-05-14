import type { Metadata } from "next";
import Link from "next/link";
import {
  Mountain,
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

export const metadata: Metadata = {
  title: "Sobre Nosotros | Intiquilla Adventures",
  description:
    "Conoce la historia, mision y equipo detras de Intiquilla Adventures. Mas de 10 anos de turismo de aventura responsable en Huaraz, Cordillera Blanca y Huayhuash.",
};

const STATS = [
  { value: "10+", label: "Anos de experiencia" },
  { value: "5,000+", label: "Viajeros satisfechos" },
  { value: "4.9", label: "Rating promedio" },
  { value: "20+", label: "Rutas exclusivas" },
];

const VALUES = [
  {
    icon: Shield,
    title: "Seguridad Certificada",
    text: "Todos nuestros guias poseen certificacion internacional en montanismo y primeros auxilios. Contamos con equipo de emergencia completo, incluyendo oxigeno medicinal, botiquin avanzado y radio de comunicacion para cada expedicion.",
  },
  {
    icon: Heart,
    title: "Turismo Responsable",
    text: "Practicamos un turismo de bajo impacto ambiental. Colaboramos con comunidades andinas locales, empleamos guias y arrieros de la zona, y contribuimos activamente a la conservacion de las areas naturales protegidas donde operamos.",
  },
  {
    icon: Star,
    title: "Excelencia Operativa",
    text: "Cada detalle de nuestras expediciones esta planificado con precision: desde la seleccion de campamentos con las mejores vistas hasta la preparacion de comidas nutritivas adaptadas a la altitud. Nuestro estandar de calidad nos ha posicionado como referente en la region.",
  },
  {
    icon: MessageCircle,
    title: "Atencion Personalizada",
    text: "Cada viajero es unico para nosotros. Ofrecemos asesoramiento personalizado antes, durante y despues de cada expedicion. Nuestro equipo esta disponible 24/7 para resolver cualquier consulta o necesidad que pueda surgir durante tu aventura.",
  },
];

const TEAM = [
  {
    name: "Raul Espinoza",
    role: "Director de Operaciones",
    bio: "Con mas de 15 anos guiando expediciones en la Cordillera Blanca y Huayhuash. Certificado por la UIAGM en guiamento de alta montana. Ha liderado mas de 500 expediciones exitosas.",
  },
  {
    name: "Maria Quispe",
    role: "Coordinadora de Viajes",
    bio: "Especialista en logistica de expediciones con 8 anos de experiencia. Bilingue en espanol e ingles. Responsable de que cada detalle de tu viaje este perfectamente coordinado.",
  },
  {
    name: "Carlos Torres",
    role: "Guia Principal de Montana",
    bio: "Certificado por la UIAGM y la escuela nacional de guias de montana del Peru. Conocimiento profundo de flora, fauna y geologia andina. Rescatista certificado en altitud.",
  },
  {
    name: "Ana Flores",
    role: "Guia Cultural y Astronomica",
    bio: "Licenciada en turismo con maestria en patrimonio cultural andino. Especialista en astronomia observacional y cosmovision andina. Transforma cada excursión en una experiencia educativa profunda.",
  },
];

export default function NosotrosPage() {
  return (
    <div>
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-[0.08] mix-blend-screen pointer-events-none" style={{ backgroundImage: "url(/images/fondo-chakana.webp)" }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-medium mb-3">Sobre Nosotros</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white leading-tight">
              Mas que una Agencia de Viajes, somos tu Conexion con los Andes
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              Intiquilla Adventures nacio de la pasion por las montanas de Huaraz y el deseo de compartir con el mundo la majestuosidad de la Cordillera Blanca y Huayhuash. Nuestro nombre rinde homenaje al dios Sol Inca, Inti, fuente de vida y energia que ilumina los picos mas altos del Peru cada manana.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-[#1A332B]/60 border border-[#D4AF37]/15">
                <span className="block text-3xl md:text-4xl font-bold text-[#D4AF37]">{stat.value}</span>
                <span className="block text-xs text-white/50 uppercase tracking-wider mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-[420px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/hero-1.jpg)" }} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1311]/50 to-transparent" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white leading-tight">Nuestra Historia</h2>
              <div className="mt-6 space-y-4 text-base text-white/60 leading-relaxed">
                <p>
                  Fundada en 2014 por un grupo de guias de montana apasionados por su tierra, Intiquilla Adventures comenzo como un pequeno operador local con la vision de ofrecer experiencias de trekking autenticas y seguras en los Andes de Ancash. Lo que empezo como un proyecto entre amigos se ha convertido en una de las empresas de turismo de aventura mas respetadas de la region de Huaraz.
                </p>
                <p>
                  Nuestros fundadores crecieron en las comunidades andinas rodeados de las montanas mas altas del Peru. Desde ninos aprendieron a respetar la naturaleza, a leer el clima en las nubes y a navegar los senderos que sus ancestros recorrieron durante miles de anos. Esta conexion profunda con el territorio es lo que diferencia a Intiquilla de cualquier otra operadora.
                </p>
                <p>
                  Operamos directamente desde Huaraz, sin intermediarios, lo que nos permite ofrecer precios justos, conocimiento local profundo y un compromiso real con el desarrollo sostenible de las comunidades andinas. Cada tour es una oportunidad para conectar con la cultura, la naturaleza y contigo mismo.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-medium mb-3">Nuestros Valores</span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-white">Lo que nos Define</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUES.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-6 rounded-2xl bg-[#1A332B]/50 border border-[#D4AF37]/10 hover:border-[#D4AF37]/25 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold tracking-wide text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/50 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-medium mb-3">Nuestro Equipo</span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-white">Los Expertos detras de tu Aventura</h2>
              <p className="mt-4 text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
                Profesionales certificados con anos de experiencia recorriendo cada rinconde los Andes de Ancash.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member) => (
                <div key={member.name} className="p-6 rounded-2xl bg-[#1A332B]/50 border border-[#D4AF37]/10 hover:border-[#D4AF37]/25 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-2xl mb-4">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="text-base font-bold text-white">{member.name}</h3>
                  <span className="text-xs text-[#D4AF37] font-medium tracking-wide">{member.role}</span>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-medium mb-3">Mision y Vision</span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-white">Hacia donde Caminamos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-[#1A332B]/60 border border-[#D4AF37]/20">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Mision</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Facilitar experiencias de aventura transformadoras en los Andes peruanos, combinando la excelencia operativa con el respeto profundo por la naturaleza y las comunidades locales. Nos comprometemos a ofrecer expediciones seguras, autenticas y sostenibles que conecten a los viajeros con la majestuosidad de la Cordillera Blanca y Huayhuash, generando un impacto positivo en el desarrollo economico y social de las comunidades andinas.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#1A332B]/60 border border-[#D4AF37]/20">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Vision</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Ser reconocidos como el operador de turismo de aventura lider en los Andes centrales del Peru, estableciendo nuevos estandares de calidad, seguridad y sostenibilidad en la industria. Aspiramos a ser el puente que conecta al mundo con la riqueza natural y cultural de Ancash, contribuyendo a posicionar a Huaraz como destino de clase mundial para el trekking y el turismo de aventura responsable.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#1A332B] border border-[#D4AF37]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white">Comienza tu Aventura con Nosotros</h2>
              <p className="mt-4 text-base text-white/60 max-w-xl mx-auto leading-relaxed mb-6">
                Estamos listos para ayudarte a planificar la expedicion perfecta. Contactanos directamente y recibe asesoramiento personalizado.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  Jr. Jose de la Riva Aguero 682, Huaraz
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  +51 999 999 999
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  info@intiquillaadventures.com
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#tours" className="group flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#D4AF37] text-[#0B1311] font-bold text-sm tracking-wide hover:bg-yellow-500 transition-all duration-300 hover:scale-105">
                  Ver Nuestros Tours <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/#tips" className="flex items-center gap-2 px-8 py-3.5 rounded-lg border border-[#D4AF37]/30 text-white text-sm tracking-wide hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300">
                  Tips de Viaje <CheckCircle className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
