import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politica de Privacidad | Intiquilla Adventures",
  description: "Politica de Proteccion de Datos Personales de Intiquilla Adventures. Cumplimiento de la Ley N 29733 y derechos ARCO.",
  openGraph: {
    title: "Politica de Privacidad | Intiquilla Adventures",
    description: "Politica de Proteccion de Datos Personales de Intiquilla Adventures.",
    url: "https://www.intiquilladventures.com/politica-privacidad",
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-12">
        <span className="inline-block text-[10px] tracking-[0.3em] text-[#C89B3C] uppercase font-bold mb-3 bg-[#C89B3C]/10 border border-[#C89B3C]/20 px-3 py-1 rounded-full">
          Proteccion de Datos
        </span>
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-white">
          Politica de Proteccion de Datos Personales
        </h1>
        <p className="mt-3 text-sm text-white/40">
          Ultima actualizacion: 2 de julio de 2026 | Conforme a la Ley N 29733
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8 text-sm text-white/70 leading-[1.85]">

        {/* 1. Identificacion del Responsable */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Identificacion del Responsable del Tratamiento</h2>
          <p>
            En cumplimiento de la Ley N 29733, Ley de Proteccion de Datos Personales, y su Reglamento aprobado por Decreto Supremo N 003-2013-JUS, Intiquilla Adventures, con nombre comercial Intiquilla Adventures y domicilio legal en Jr. Los Rayos Mz H Lt 3 El Mirador, Huaraz, Departamento de Ancash, Peru, en calidad de responsable del tratamiento de datos personales, pone a disposicion de los usuarios la presente Politica de Proteccion de Datos Personales. El responsable del tratamiento puede ser contactado a traves de los siguientes canales: correo electronico <a href="mailto:info@intiquilladventures.com" className="text-[#C89B3C] hover:underline">info@intiquilladventures.com</a> y telefono <a href="tel:+51943606789" className="text-[#C89B3C] hover:underline">+51 943 606 789</a>.
          </p>
        </section>

        {/* 2. Finalidades del Tratamiento */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Finalidades del Tratamiento de Datos Personales</h2>
          <p>Intiquilla Adventures recopila y trata datos personales de los usuarios del canal digital con las siguientes finalidades especificas:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
            <li><strong className="text-white/90">Gestion de reservas:</strong> Procesar solicitudes de reserva, confirmaciones, pagos y la logistica operativa de los servicios turisticos contratados.</li>
            <li><strong className="text-white/90">Comunicacion comercial:</strong> Enviar informacion sobre nuevos tours, promociones, ofertas especiales y novedades relacionadas con los servicios de la Empresa, siempre que el usuario haya prestado su consentimiento expreso para tal fin.</li>
            <li><strong className="text-white/90">Atencion al cliente:</strong> Responder consultas, solicitudes de informacion, reclamos y proporcionar soporte antes, durante y despues de la prestacion del servicio turistico.</li>
            <li><strong className="text-white/90">Mejora del servicio:</strong> Analizar tendencias de navegacion y preferencias de los usuarios para mejorar la experiencia en el sitio web y la calidad de los servicios ofrecidos.</li>
            <li><strong className="text-white/90">Cumplimiento legal:</strong> Cumplir con obligaciones legales, fiscales, regulatorias y administrativas aplicables al sector turistico en el Peru.</li>
            <li><strong className="text-white/90">Seguridad:</strong> Garantizar la seguridad de los participantes durante las expediciones y tours, incluyendo la recopilacion de datos de salud relevantes y contactos de emergencia.</li>
          </ul>
        </section>

        {/* 3. Datos Recopilados */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Datos Personales Recopilados</h2>
          <p>Los datos personales que Intiquilla Adventures recopila a traves de su canal digital incluyen, de manera enunciativa mas no limitativa:</p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left border border-white/10 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#C89B3C]/10 border-b border-white/10">
                  <th className="px-4 py-2.5 text-xs font-bold text-[#C89B3C] uppercase tracking-wider">Categoria</th>
                  <th className="px-4 py-2.5 text-xs font-bold text-[#C89B3C] uppercase tracking-wider">Datos Especificos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr><td className="px-4 py-2.5 font-medium text-white/90">Datos de identificacion</td><td className="px-4 py-2.5">Nombre completo, documento de identidad (DNI, pasaporte), nacionalidad, fecha de nacimiento</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-white/90">Datos de contacto</td><td className="px-4 py-2.5">Correo electronico, numero de telefono, direccion, pais de residencia</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-white/90">Datos de reserva</td><td className="px-4 py-2.5">Tour seleccionado, fechas, numero de viajeros, preferencias alimentarias, condiciones medicas</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-white/90">Datos de pago</td><td className="px-4 py-2.5">Medio de pago utilizado, comprobantes de transaccion (sin almacenar numeros de tarjeta)</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-white/90">Datos de navegacion</td><td className="px-4 py-2.5">Direccion IP, tipo de navegador, paginas visitadas, tiempo de permanencia, dispositivo utilizado</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Base Legal del Tratamiento */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Base Legal del Tratamiento</h2>
          <p>
            El tratamiento de datos personales por parte de Intiquilla Adventures se fundamenta en las siguientes bases legales establecidas en la Ley N 29733 y su Reglamento:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
            <li><strong className="text-white/90">Consentimiento del titular (Art. 13, inciso a):</strong> El usuario presta su consentimiento al aceptar la presente politica al momento de registrarse, realizar una reserva o completar formularios en el canal digital.</li>
            <li><strong className="text-white/90">Ejecucion de la relacion contractual (Art. 13, inciso b):</strong> El tratamiento es necesario para la ejecucion y cumplimiento de la relacion contractual derivada de la contratacion de servicios turisticos.</li>
            <li><strong className="text-white/90">Obligacion legal (Art. 13, inciso c):</strong> El tratamiento se realiza para cumplir con obligaciones legales aplicables al sector turistico y a las normas fiscales del Peru.</li>
            <li><strong className="text-white/90">Interes legitimo (Art. 13, inciso f):</strong> El tratamiento es necesario para el interes legitimo de la Empresa, como la mejora de servicios, la prevencion de fraudes y la seguridad de los participantes.</li>
          </ul>
        </section>

        {/* 5. Derechos ARCO */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Derechos ARCO del Titular</h2>
          <p>
            Conforme a la Ley N 29733, el titular de datos personales tiene derecho a ejercer los siguientes derechos frente a Intiquilla Adventures, los cuales seran atendidos en un plazo maximo de 30 dias habiles contados a partir de la recepcion de la solicitud:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-[#1C1C1C] border border-[#C89B3C]/15">
              <h4 className="font-bold text-[#C89B3C] text-sm mb-2">Acceso</h4>
              <p className="text-xs">El titular tiene derecho a obtener confirmacion de si Intiquilla Adventures trata sus datos personales y, en caso afirmativo, a acceder a dichos datos solicitando informacion sobre su origen, finalidades y destinatarios.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1C1C1C] border border-[#C89B3C]/15">
              <h4 className="font-bold text-[#C89B3C] text-sm mb-2">Rectificacion</h4>
              <p className="text-xs">El titular tiene derecho a solicitar la rectificacion de sus datos personales inexactos, incompletos o desactualizados. La rectificacion se realizara en un plazo maximo de 15 dias habiles.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1C1C1C] border border-[#C89B3C]/15">
              <h4 className="font-bold text-[#C89B3C] text-sm mb-2">Cancelacion</h4>
              <p className="text-xs">El titular tiene derecho a solicitar la cancelacion (supresion) de sus datos personales cuando estos ya no sean necesarios para la finalidad para la que fueron recopilados, o cuando el titular revoca su consentimiento.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1C1C1C] border border-[#C89B3C]/15">
              <h4 className="font-bold text-[#C89B3C] text-sm mb-2">Oposicion</h4>
              <p className="text-xs">El titular tiene derecho a oponerse al tratamiento de sus datos personales cuando este no sea necesario para el cumplimiento de una obligacion legal o contractual, o cuando el tratamiento se base en el consentimiento y este sea revocado.</p>
            </div>
          </div>
          <p className="mt-4">
            Para ejercer sus derechos ARCO, el titular debera enviar una solicitud escrita a <a href="mailto:info@intiquilladventures.com" className="text-[#C89B3C] hover:underline">info@intiquilladventures.com</a> con el asunto &quot;Solicitud de Ejercicio de Derechos ARCO&quot;, adjuntando una copia de su documento de identidad. La Empresa se reserva el derecho de solicitar informacion adicional para verificar la identidad del solicitante.
          </p>
        </section>

        {/* 6. Medidas de Seguridad */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. Medidas de Seguridad Implementadas</h2>
          <p>
            Intiquilla Adventures implementa las siguientes medidas tecnicas, organizativas y legales para proteger los datos personales de los usuarios contra acceso no autorizado, perdida, alteracion, divulgacion o destrucion:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
            <li><strong className="text-white/90">Encriptacion SSL/TLS:</strong> Todo el trafico entre el navegador del usuario y el servidor esta encriptado mediante certificado SSL, garantizando la confidencialidad de los datos transmitidos a traves del canal digital.</li>
            <li><strong className="text-white/90">Proteccion de datos de pago:</strong> Los pagos en linea se procesan a traves de plataformas de pago seguro con certificacion PCI DSS (Payment Card Industry Data Security Standard), sin que Intiquilla Adventures almacene numeros de tarjetas de credito o debito.</li>
            <li><strong className="text-white/90">Control de acceso:</strong> Acceso restringido a los datos personales unicamente al personal autorizado que necesite dicha informacion para el cumplimiento de sus funciones, con credenciales individuales y registro de accesos.</li>
            <li><strong className="text-white/90">Copias de seguridad:</strong> Realizacion periodica de copias de seguridad (backups) encriptadas de la informacion almacenada, con almacenamiento seguro y redundante.</li>
            <li><strong className="text-white/90">Actualizaciones de seguridad:</strong> Mantenimiento actualizado de servidores, frameworks, librerias y dependencias con los ultimos parches de seguridad publicados.</li>
            <li><strong className="text-white/90">Monitoreo continuo:</strong> Supervision permanente de los sistemas para detectar y responder ante posibles incidentes de seguridad o accesos no autorizados.</li>
          </ul>
        </section>

        {/* 7. Transferencia de Datos */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">7. Transferencia de Datos Personales</h2>
          <p>
            Intiquilla Adventures no realiza transferencias internacionales de datos personales a paises que no cuenten con un nivel adecuado de proteccion conforme a la legislacion peruana. Los datos personales del usuario podran ser compartidos unicamente con proveedores de servicios directamente involucrados en la prestacion de los servicios turisticos contratados (alojamiento, transporte, guias locales, seguros de viaje), siempre bajo acuerdos de confidencialidad que garanticen la proteccion de dichos datos. En ningun caso se comercializara, vendera o cedera la base de datos de usuarios a terceros con fines ajenos a la prestacion del servicio.
          </p>
        </section>

        {/* 8. Cookies */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">8. Politica de Cookies</h2>
          <p>
            El canal digital de Intiquilla Adventures utiliza cookies y tecnologias similares para mejorar la experiencia de navegacion, analizar el trafico del sitio y personalizar contenidos. Las cookies utilizadas son de caracter tecnico y analitico, necesarias para el correcto funcionamiento del sitio web. El usuario puede configurar su navegador para rechazar o eliminar cookies; sin embargo, esto podria afectar la funcionalidad de ciertas secciones del sitio. No se utilizan cookies de seguimiento publicitario de terceros.
          </p>
        </section>

        {/* 9. Plazos de Conservacion */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">9. Plazos de Conservacion de Datos</h2>
          <p>
            Los datos personales seran conservados durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados y para atender las obligaciones legales aplicables. En particular:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
            <li><strong className="text-white/90">Datos de reserva:</strong> Se conservaran durante un plazo de 5 anos contados a partir de la finalizacion del servicio, para fines de cumplimiento de obligaciones tributarias y comerciales segun el Codigo de Comercio y la Ley del Impuesto a la Renta del Peru.</li>
            <li><strong className="text-white/90">Datos de contacto y preferencias:</strong> Se conservaran mientras el usuario no solicite su cancelacion o revocacion del consentimiento, y no haya transcurrido el plazo de prescripcion aplicable.</li>
            <li><strong className="text-white/90">Datos de navegacion:</strong> Se conservaran por un plazo maximo de 2 anos para fines analiticos.</li>
            <li><strong className="text-white/90">Datos de reclamos:</strong> Se conservaran durante 5 anos conforme a los plazos de prescripcion establecidos en la Ley N 29571.</li>
          </ul>
        </section>

        {/* 10. Contacto */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">10. Contacto para Derechos ARCO y Consultas</h2>
          <p>
            Para ejercer sus derechos ARCO, presentar consultas o efectuar reclamos relacionados con el tratamiento de sus datos personales, puede contactarnos a traves de:
          </p>
          <ul className="mt-3 space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="text-[#C89B3C] shrink-0">Correo:</span>
              <a href="mailto:info@intiquilladventures.com" className="hover:text-[#C89B3C] transition-colors">info@intiquilladventures.com</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C89B3C] shrink-0">Telefono:</span>
              <a href="tel:+51943606789" className="hover:text-[#C89B3C] transition-colors">+51 943 606 789</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C89B3C] shrink-0">Direccion:</span>
              <span>Jr. Los Rayos Mz H Lt 3 El Mirador, Huaraz, Peru</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C89B3C] shrink-0">Reclamaciones:</span>
              <a href="mailto:reclamaciones@intiquilladventures.com" className="hover:text-[#C89B3C] transition-colors">reclamaciones@intiquilladventures.com</a>
            </li>
          </ul>
        </section>
      </div>

      {/* Navigation links */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-sm text-[#C89B3C] hover:underline">Volver al inicio</Link>
        <div className="flex gap-4">
          <Link href="/terminos-condiciones" className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors">Terminos y Condiciones</Link>
          <Link href="/aviso-legal" className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors">Aviso Legal</Link>
        </div>
      </div>
    </div>
  );
}