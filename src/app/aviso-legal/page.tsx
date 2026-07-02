import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, ShieldCheck, Lock, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Aviso Legal | Intiquilla Adventures",
  description: "Aviso Legal de Intiquilla Adventures. Datos de la empresa, medidas de seguridad y requisitos de formalizacion turistica en Peru.",
  openGraph: {
    title: "Aviso Legal | Intiquilla Adventures",
    description: "Aviso Legal de Intiquilla Adventures.",
    url: "https://www.intiquilladventures.com/aviso-legal",
  },
};

export default function AvisoLegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-12">
        <span className="inline-block text-[10px] tracking-[0.3em] text-[#C89B3C] uppercase font-bold mb-3 bg-[#C89B3C]/10 border border-[#C89B3C]/20 px-3 py-1 rounded-full">
          Informacion Legal
        </span>
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-white">
          Aviso Legal
        </h1>
        <p className="mt-3 text-sm text-white/40">
          Ultima actualizacion: 2 de julio de 2026
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8 text-sm text-white/70 leading-[1.85]">

        {/* 1. Datos de la Empresa */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Datos de Identificacion de la Empresa</h2>
          <p>
            En cumplimiento de los requisitos de formalizacion de prestadores de servicios turisticos con presencia digital, conforme a la normativa del MINCETUR y el INDECOPI, se ponen a disposicion del publico los siguientes datos de identificacion:
          </p>
          <div className="mt-4 p-6 rounded-2xl bg-[#1C1C1C] border border-[#C89B3C]/20 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Globe className="w-4 h-4 text-[#C89B3C]" />
              </div>
              <div>
                <p className="text-xs text-[#C89B3C] uppercase font-semibold tracking-wider mb-0.5">Nombre Comercial</p>
                <p className="text-white/90 font-medium">Intiquilla Adventures</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#C89B3C]" />
              </div>
              <div>
                <p className="text-xs text-[#C89B3C] uppercase font-semibold tracking-wider mb-0.5">Direccion</p>
                <p className="text-white/90 font-medium">Jr. Los Rayos Mz H Lt 3 El Mirador, Huaraz, Ancash, Peru</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4 text-[#C89B3C]" />
              </div>
              <div>
                <p className="text-xs text-[#C89B3C] uppercase font-semibold tracking-wider mb-0.5">Telefono</p>
                <a href="tel:+51943606789" className="text-white/90 font-medium hover:text-[#C89B3C] transition-colors">+51 943 606 789</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-4 h-4 text-[#C89B3C]" />
              </div>
              <div>
                <p className="text-xs text-[#C89B3C] uppercase font-semibold tracking-wider mb-0.5">Correo Electronico</p>
                <a href="mailto:info@intiquilladventures.com" className="text-white/90 font-medium hover:text-[#C89B3C] transition-colors">info@intiquilladventures.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Globe className="w-4 h-4 text-[#C89B3C]" />
              </div>
              <div>
                <p className="text-xs text-[#C89B3C] uppercase font-semibold tracking-wider mb-0.5">Sitio Web</p>
                <a href="https://www.intiquilladventures.com" className="text-white/90 font-medium hover:text-[#C89B3C] transition-colors" target="_blank" rel="noopener noreferrer">www.intiquilladventures.com</a>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-white/40 italic">
            Nota: Los datos de RUC y Razon Social seran actualizados una vez que la Empresa complete su proceso de formalizacion registral ante la SUNAT. Intiquilla Adventures se encuentra en proceso de cumplimiento de los requisitos de formalizacion establecidos por el MINCETUR para prestadores de servicios turisticos con presencia digital.
          </p>
        </section>

        {/* 2. Objeto Social */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Objeto Social y Actividad</h2>
          <p>
            Intiquilla Adventures es un operador turistico con sede en la ciudad de Huaraz, Departamento de Ancash, Peru, especializado en la organizacion y prestacion de servicios turisticos de aventura y naturaleza. Su actividad principal se centra en trekkings de alta montana, expediciones, tours guiados y experiencias culturales en la Cordillera Blanca, Cordillera Huayhuash, Chavin de Huantar y otras zonas de interes turistico de la region Ancash. La Empresa opera bajo un modelo de turismo responsable y sostenible, comprometido con la conservacion del medio ambiente, el respeto a las comunidades locales y la seguridad de los viajeros.
          </p>
        </section>

        {/* 3. Medidas de Seguridad para Compras en Linea */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Medidas de Seguridad y Diligencia Debida en Compras en Linea</h2>
          <p>
            Conforme a los requisitos de formalizacion para agencias de viajes con canal digital, Intiquilla Adventures implementa las siguientes medidas de seguridad y diligencia debida en su interfaz de compras en linea:
          </p>

          <div className="mt-4 space-y-4">
            <div className="p-5 rounded-xl bg-[#1C1C1C] border border-[#C89B3C]/15">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Protocolo de Seguridad en la Interfaz de Pago</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Todo el trafico de datos entre el usuario y nuestros servidores esta protegido mediante encriptacion SSL/TLS de 256 bits, garantizando que la informacion transmitida (datos personales, formularios de contacto y solicitudes de reserva) no pueda ser interceptada ni leida por terceros. El sitio web opera bajo el protocolo HTTPS de manera permanente, verificado mediante certificado SSL valido emitido por una entidad certificadora confiable.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#1C1C1C] border border-[#C89B3C]/15">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Herramientas para Procesar Pagos</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Los pagos en linea se procesan a traves de plataformas de pago seguro con certificacion PCI DSS (Payment Card Industry Data Security Standard). Intiquilla Adventures no almacena, retiene ni tiene acceso a numeros de tarjetas de credito, debito ni claves de seguridad bancaria del usuario. Las transacciones monetarias se realizan directamente a traves de los canales seguros de las plataformas habilitadas o mediante transferencia bancaria directa, proporcionando al usuario comprobante oficial de cada operacion.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#1C1C1C] border border-[#C89B3C]/15">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C89B3C]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Medidas Tecnicas de Proteccion de Datos Personales</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Los datos personales recabados a traves del canal digital estan protegidos mediante medidas tecnicas que incluyen: encriptacion de datos sensibles en transito y en reposo, controles de acceso basados en roles para el personal autorizado, monitoreo continuo de accesos, auditorias de seguridad periodicas, copias de seguridad encriptadas y redundantes, y actualizacion constante de software y dependencias con los ultimos parches de seguridad. Todo conforme a la Ley N 29733, Ley de Proteccion de Datos Personales, y su Reglamento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Libro de Reclamaciones */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Libro de Reclamaciones</h2>
          <p>
            Conforme a la Ley N 29571, Codigo de Proteccion y Defensa del Consumidor, y las disposiciones de INDECOPI, Intiquilla Adventures pone a disposicion de sus usuarios el Libro de Reclamaciones en formato digital, accesible directamente desde la pagina de inicio de nuestro sitio web. El usuario puede presentar su reclamo o queja a traves de este medio y la Empresa se compromete a dar respuesta en un plazo maximo de 30 dias calendario contados a partir de la fecha de presentacion. Alternativamente, las reclamaciones pueden enviarse al correo electronico <a href="mailto:reclamaciones@intiquilladventures.com" className="text-[#C89B3C] hover:underline">reclamaciones@intiquilladventures.com</a>.
          </p>
        </section>

        {/* 5. Propiedad Intelectual */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos del sitio web www.intiquilladventures.com, incluyendo diseno, logotipos, textos, fotografias, graficos, iconografia, codigo fuente, base de datos y demas elementos que lo componen, son propiedad intelectual e industrial de Intiquilla Adventures o de sus legtimos titulares, y se encuentran protegidos por las leyes peruanas de propiedad intelectual (Decreto Legislativo N 822) y las normativas internacionales aplicables, incluyendo el Convenio de Berna y los Tratados de la OMPI. Queda estrictamente prohibida la reproduccion, distribucion, comunicacion publica, transformacion o cualquier forma de explotacion de cualquiera de los elementos del sitio sin autorizacion expresa y por escrito de Intiquilla Adventures. El incumplimiento de esta disposicion podra dar lugar a las acciones legales correspondientes.
          </p>
        </section>

        {/* 6. Legislacion Aplicable */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. Legislacion Aplicable</h2>
          <p>
            El presente Aviso Legal, asi como el uso del canal digital de Intiquilla Adventures, se rigen por las leyes de la Republica del Peru. En particular, son de aplicacion las siguientes normas:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
            <li><strong className="text-white/90">Ley N 29733</strong>, Ley de Proteccion de Datos Personales, y su Reglamento (D.S. N 003-2013-JUS).</li>
            <li><strong className="text-white/90">Ley N 29571</strong>, Codigo de Proteccion y Defensa del Consumidor.</li>
            <li><strong className="text-white/90">Ley N 27444</strong>, Ley del Procedimiento Administrativo General.</li>
            <li><strong className="text-white/90">Decreto Legislativo N 822</strong>, Ley sobre Derecho de Autor.</li>
            <li><strong className="text-white/90">Decreto Legislativo N 1075</strong>, Ley de Competencia Desleal.</li>
            <li>Normativa del MINCETUR sobre formalizacion de prestadores de servicios turisticos con presencia digital.</li>
          </ul>
          <p className="mt-3">
            Para la resolucion de cualquier controversia, las partes se someten a la competencia de los juzgados y tribunales de la ciudad de Huaraz, Departamento de Ancash, Peru, sin perjuicio de los mecanismos de solucion de controversias ante INDECOPI.
          </p>
        </section>

        {/* 7. Declaracion de Conformidad */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">7. Declaracion de Conformidad con la Normativa de Formalizacion</h2>
          <p>
            Intiquilla Adventures declara que su canal digital cumple con los contenidos minimos obligatorios establecidos por la normativa peruana para la formalizacion de prestadores de servicios turisticos con presencia digital, incluyendo: datos de contacto visibles desde la pagina de inicio (telefono, direccion, correo electronico), terminos de uso del canal digital con politicas de cobro, cancelacion y reembolso, politica de proteccion de datos personales conforme a la Ley N 29733, medidas de seguridad y diligencia debida en la interfaz para compras en linea, y herramientas empleadas para procesar pagos de manera segura. La Empresa se encuentra comprometida con la transparencia y el cumplimiento de todas las obligaciones legales aplicables al sector turistico en el Peru.
          </p>
        </section>

        {/* 8. Contacto */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">8. Datos de Contacto</h2>
          <p>
            Para cualquier consulta legal, solicitud de informacion o ejercicio de derechos, puede contactarnos a traves de los siguientes canales:
          </p>
          <ul className="mt-3 space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="text-[#C89B3C] shrink-0">Direccion:</span>
              <span>Jr. Los Rayos Mz H Lt 3 El Mirador, Huaraz, Peru</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C89B3C] shrink-0">Telefono:</span>
              <a href="tel:+51943606789" className="hover:text-[#C89B3C] transition-colors">+51 943 606 789</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C89B3C] shrink-0">Correo:</span>
              <a href="mailto:info@intiquilladventures.com" className="hover:text-[#C89B3C] transition-colors">info@intiquilladventures.com</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C89B3C] shrink-0">Reclamaciones:</span>
              <a href="mailto:reclamaciones@intiquilladventures.com" className="hover:text-[#C89B3C] transition-colors">reclamaciones@intiquilladventures.com</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C89B3C] shrink-0">Web:</span>
              <a href="https://www.intiquilladventures.com" className="hover:text-[#C89B3C] transition-colors" target="_blank" rel="noopener noreferrer">www.intiquilladventures.com</a>
            </li>
          </ul>
        </section>
      </div>

      {/* Navigation links */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-sm text-[#C89B3C] hover:underline">Volver al inicio</Link>
        <div className="flex gap-4">
          <Link href="/terminos-condiciones" className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors">Terminos y Condiciones</Link>
          <Link href="/politica-privacidad" className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors">Politica de Privacidad</Link>
        </div>
      </div>
    </div>
  );
}