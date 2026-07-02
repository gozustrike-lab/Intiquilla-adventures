import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terminos y Condiciones | Intiquilla Adventures",
  description: "Terminos y Condiciones de uso del canal digital de Intiquilla Adventures. Politicas de cobro, cancelacion y reembolso conforme a la normativa peruana.",
  openGraph: {
    title: "Terminos y Condiciones | Intiquilla Adventures",
    description: "Terminos y Condiciones de uso del canal digital de Intiquilla Adventures.",
    url: "https://www.intiquilladventures.com/terminos-condiciones",
  },
};

export default function TerminosCondicionesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-12">
        <span className="inline-block text-[10px] tracking-[0.3em] text-[#C89B3C] uppercase font-bold mb-3 bg-[#C89B3C]/10 border border-[#C89B3C]/20 px-3 py-1 rounded-full">
          Documento Legal
        </span>
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-white">
          Terminos y Condiciones de Uso del Canal Digital
        </h1>
        <p className="mt-3 text-sm text-white/40">
          Ultima actualizacion: 2 de julio de 2026
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8 text-sm text-white/70 leading-[1.85]">

        {/* 1. Informacion General */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Informacion General</h2>
          <p>
            Los presentes Terminos y Condiciones regulan el uso del canal digital (sitio web y plataformas asociadas) de <strong className="text-white/90">Intiquilla Adventures</strong>, nombre comercial bajo el cual opera el prestador de servicios turisticos con domicilio en Jr. Los Rayos Mz H Lt 3 El Mirador, Huaraz, Peru. Al acceder y utilizar nuestro sitio web <a href="https://www.intiquilladventures.com" className="text-[#C89B3C] hover:underline">www.intiquilladventures.com</a>, el usuario acepta de manera integra los terminos aqui establecidos. Estos terminos cumplen con lo dispuesto en la normativa peruana para la formalizacion de prestadores de servicios turisticos con presencia digital, conforme a los requisitos establecidos por el MINCETUR y el INDECOPI.
          </p>
        </section>

        {/* 2. Definiciones */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Definiciones</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white/90">La Empresa:</strong> Intiquilla Adventures, operador turistico con sede en Huaraz, Peru, especializado en trekkings, expediciones y tours en la Cordillera Blanca, Cordillera Huayhuash y zonas aledanas.</li>
            <li><strong className="text-white/90">El Usuario:</strong> Toda persona natural o juridica que acceda, navegue o utilice el canal digital de la Empresa, ya sea para informarse, cotizar o reservar servicios turisticos.</li>
            <li><strong className="text-white/90">Servicios Turisticos:</strong> Todos los paquetes, expediciones, trekkings, tours guiados y experiencias de aventura ofrecidos a traves del canal digital.</li>
            <li><strong className="text-white/90">Canal Digital:</strong> El sitio web www.intiquilladventures.com y cualquier plataforma electronica oficial de Intiquilla Adventures.</li>
          </ul>
        </section>

        {/* 3. Politicas de Cobro */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Politicas de Cobro</h2>
          <h3 className="text-base font-semibold text-white/90 mb-2">3.1. Formas de Pago Aceptadas</h3>
          <p>
            Intiquilla Adventures acepta los siguientes metodos de pago para la reserva de servicios turisticos: transferencia bancaria a cuentas bancarias en soles (PEN) o dolares estadounidenses (USD), pago mediante plataformas de pago seguro habilitadas en el sitio web, y pago en efectivo en nuestra oficina fisica en Huaraz. Todos los precios publicados en el sitio web estan expresados en dolares estadounidenses (USD) salvo indicacion contraria. La Empresa se reserva el derecho de actualizar los precios publicados sin previo aviso; sin embargo, el precio vigente al momento de la confirmacion de reserva sera el aplicable.
          </p>
          <h3 className="text-base font-semibold text-white/90 mb-2 mt-4">3.2. Plazos de Pago</h3>
          <p>
            Para confirmar una reserva, el usuario debera realizar un pago inicial (anticipo) del 50% del monto total del servicio contratado dentro de las 48 horas siguientes a la confirmacion de disponibilidad enviada por Intiquilla Adventures. El saldo restante (50%) debera ser cancelado como maximo 72 horas antes del inicio del tour o expedicion. En caso de no recibir el pago en los plazos indicados, la reserva podra ser cancelada automaticamente sin derecho a reembolso del anticipo. La Empresa enviara un comprobante de pago o recibo por cada transaccion realizada.
          </p>
          <h3 className="text-base font-semibold text-white/90 mb-2 mt-4">3.3. Moneda</h3>
          <p>
            Los precios base de todos los servicios se expresan en dolares estadounidenses (USD). Los pagos en soles peruanos (PEN) se aceptaran al tipo de cambio vigente del dia publicado por el Banco Central de Reserva del Peru (BCRP) al momento de la transaccion, salvo que las partes acuerden un tipo de cambio especifico por escrito.
          </p>
        </section>

        {/* 4. Politicas de Cancelacion */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Politicas de Cancelacion</h2>
          <p>
            El usuario tiene derecho a cancelar su reserva en cualquier momento, sujeto a las siguientes condiciones y penalidades que se aplican sobre el monto total del servicio contratado:
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left border border-white/10 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#C89B3C]/10 border-b border-white/10">
                  <th className="px-4 py-2.5 text-xs font-bold text-[#C89B3C] uppercase tracking-wider">Antelacion de la Cancelacion</th>
                  <th className="px-4 py-2.5 text-xs font-bold text-[#C89B3C] uppercase tracking-wider">Penalidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr><td className="px-4 py-2.5">Mas de 30 dias antes del inicio</td><td className="px-4 py-2.5">Reembolso completo (100%) menos gastos administrativos de 5%</td></tr>
                <tr><td className="px-4 py-2.5">Entre 15 y 30 dias antes</td><td className="px-4 py-2.5">Retencion del 20% del monto total</td></tr>
                <tr><td className="px-4 py-2.5">Entre 7 y 14 dias antes</td><td className="px-4 py-2.5">Retencion del 40% del monto total</td></tr>
                <tr><td className="px-4 py-2.5">Entre 3 y 6 dias antes</td><td className="px-4 py-2.5">Retencion del 60% del monto total</td></tr>
                <tr><td className="px-4 py-2.5">Menos de 72 horas antes</td><td className="px-4 py-2.5">Sin derecho a reembolso (100%)</td></tr>
                <tr><td className="px-4 py-2.5">No presentarse (no show)</td><td className="px-4 py-2.5">Sin derecho a reembolso (100%)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Toda cancelacion debera ser solicitada por escrito mediante correo electronico a <a href="mailto:info@intiquilladventures.com" className="text-[#C89B3C] hover:underline">info@intiquilladventures.com</a>, indicando nombre completo, tour reservado y fecha programada. Intiquilla Adventures se reserva el derecho de cancelar un tour por razones de fuerza mayor, condiciones climaticas extremas, seguridad de los participantes o numero insuficiente de reservas. En caso de cancelacion por parte de la Empresa, el usuario tendra derecho a reprogramar sin costo adicional o a un reembolso completo del monto pagado.
          </p>
        </section>

        {/* 5. Politicas de Reembolso */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Politicas de Reembolso</h2>
          <p>
            Los reembolsos correspondientes seran procesados dentro de un plazo maximo de 15 dias habiles contados a partir de la fecha de aceptacion de la cancelacion, siempre que se cumplan las condiciones establecidas en la seccion de Politicas de Cancelacion. El reembolso se realizara mediante el mismo metodo de pago utilizado por el usuario al momento de la reserva. En caso de transferencia bancaria, los gastos bancarios aplicables seran asumidos por el usuario. No se emitiran reembolsos por conceptos de servicios tercerizados ya pagados irreversiblemente (como permisos de ingreso a areas protegidas, transporte de terceros u otros servicios pre-pagados) salvo que estos puedan ser recuperados por la Empresa. El usuario podra solicitar la reprogramacion de su tour como alternativa al reembolso, sujeta a disponibilidad, sin cargo adicional por cambio de fecha, siempre que la solicitud se realice con al menos 72 horas de antelacion.
          </p>
        </section>

        {/* 6. Responsabilidades del Usuario */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. Responsabilidades del Usuario</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Proporcionar informacion veraz, completa y actualizada al momento de realizar una reserva, incluyendo datos personales, condiciones medicas previas y experiencia en actividades alpinas.</li>
            <li>Leer y aceptar los presentes Terminos y Condiciones, asi como las Politicas de Privacidad, antes de realizar cualquier reserva o transaccion a traves del canal digital.</li>
            <li>Comunicar de manera oportuna cualquier condicion medica, alergia, restriccion alimentaria o limitacion fisica que pueda afectar su participacion en las actividades turisticas.</li>
            <li>Respetar las normas ambientales, culturales y de seguridad indicadas por los guias y el personal de Intiquilla Adventures durante las expediciones.</li>
            <li>No compartir credenciales de acceso ni utilizar el canal digital para fines ilicitos o contrarios a la normativa peruana vigente.</li>
            <li>Asegurarse de contar con el equipo personal recomendado y el nivel de condiciones fisicas requeridas para cada tour, segun la informacion proporcionada en la descripcion del servicio.</li>
          </ul>
        </section>

        {/* 7. Responsabilidades de la Empresa */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">7. Responsabilidades de la Empresa</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Proporcionar servicios turisticos de calidad con guias certificados y experimentados, equipo adecuado y logistica profesional.</li>
            <li>Garantizar la seguridad de los participantes durante las actividades, siguiendo los protocolos de seguridad establecidos y contando con equipos de primeros auxilios y comunicacion.</li>
            <li>Mantener el canal digital operativo, accesible y con informacion actualizada sobre los servicios ofrecidos, precios, disponibilidad y politicas.</li>
            <li>Proteger los datos personales del usuario conforme a la Ley N 29733, Ley de Proteccion de Datos Personales, y su Reglamento aprobado por Decreto Supremo N 003-2013-JUS.</li>
            <li>Atender las consultas, reclamos y solicitudes del usuario a traves de los canales de contacto habilitados en un plazo razonable.</li>
            <li>Brindar informacion clara, veraz y transparente sobre los servicios, condiciones, precios y politicas aplicables.</li>
          </ul>
        </section>

        {/* 8. Limitacion de Responsabilidad */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">8. Limitacion de Responsabilidad</h2>
          <p>
            Intiquilla Adventures no se responsabiliza por eventos de fuerza mayor o caso fortuito que impidan la ejecucion del servicio, tales como desastres naturales, condiciones climaticas extremas, bloqueos de carreteras, huelgas, decisiones gubernamentales restrictivas, pandemias u otras circunstancias ajenas a su control. En dichos casos, la Empresa ofrecera alternativas de reprogramacion o reembolso proporcional segun corresponda. La Empresa tampoco se hace responsable por perdidas, danos o lesiones que el usuario pueda sufrir como consecuencia de no seguir las instrucciones de seguridad proporcionadas por los guias, o por condiciones de salud preexistentes no declaradas oportunamente por el participante.
          </p>
        </section>

        {/* 9. Propiedad Intelectual */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">9. Propiedad Intelectual</h2>
          <p>
            Todo el contenido del canal digital, incluyendo pero no limitado a textos, fotografias, graficos, logotipos, diseno, codigo fuente, marcas y nombres comerciales, es propiedad de Intiquilla Adventures o de sus legtimos titulares, y esta protegido por las leyes de propiedad intelectual del Peru y normativas internacionales aplicables. Queda prohibida la reproduccion, distribucion, comunicacion publica, transformacion o cualquier otra forma de explotacion del contenido sin autorizacion expresa y por escrito de la Empresa. El uso del sitio web no confiere al usuario ningun derecho de propiedad intelectual sobre el contenido del mismo.
          </p>
        </section>

        {/* 10. Modificaciones */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">10. Modificaciones de los Terminos</h2>
          <p>
            Intiquilla Adventures se reserva el derecho de modificar los presentes Terminos y Condiciones en cualquier momento, con el fin de adaptarlos a cambios normativos, operativos o comerciales. Las modificaciones entraran en vigencia a partir de su publicacion en el canal digital. Se recomienda al usuario revisar periodicamente esta pagina. El uso continuado del sitio web despues de la publicacion de modificaciones constituye la aceptacion de las mismas por parte del usuario.
          </p>
        </section>

        {/* 11. Legislacion Aplicable */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">11. Legislacion Aplicable y Jurisdiccion</h2>
          <p>
            Los presentes Terminos y Condiciones se rigen por las leyes de la Republica del Peru. Para la resolucion de cualquier controversia derivada del uso del canal digital o de la prestacion de los servicios turisticos, las partes se someten a la competencia de los juzgados y tribunales de la ciudad de Huaraz, Departamento de Ancash, Peru, sin perjuicio del derecho del usuario de acudir al Libro de Reclamaciones de la Empresa o a los mecanismos de solucion de controversias del INDECOPI conforme a la Ley N 29571, Codigo de Proteccion y Defensa del Consumidor.
          </p>
        </section>

        {/* 12. Contacto */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">12. Contacto</h2>
          <p>
            Para cualquier consulta, reclamo o solicitud relacionada con estos Terminos y Condiciones, puede contactarnos a traves de los siguientes canales:
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
          </ul>
        </section>
      </div>

      {/* Navigation links */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-sm text-[#C89B3C] hover:underline">Volver al inicio</Link>
        <div className="flex gap-4">
          <Link href="/politica-privacidad" className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors">Politica de Privacidad</Link>
          <Link href="/aviso-legal" className="text-sm text-white/40 hover:text-[#C89B3C] transition-colors">Aviso Legal</Link>
        </div>
      </div>
    </div>
  );
}