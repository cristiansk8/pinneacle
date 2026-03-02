import React from 'react';
import FooterCustom from '@/components/custom/FooterCustom';

export const metadata = {
  title: 'Política de Protección de Datos | servigreen',
  description: 'Conoce cómo protegemos tus datos personales en servigreen. Política de privacidad y tratamiento de datos.'
};

export default function PoliticaProteccionDatos() {
  return (
    <>
     <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Política de Protección de Datos Personales
        </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          Última actualización: {new Date().toLocaleDateString()}
        </p>

        <div className="text-gray-600">
          <p className="mb-6">
            servigreen, en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, ha establecido esta Política de Tratamiento de Datos Personales para informar a nuestros clientes y usuarios sobre el manejo de su información personal.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              RESPONSABLE DEL TRATAMIENTO
            </h2>
            <p className="mb-4">
              <strong>Razón Social:</strong> servigreen
            </p>
            <p className="mb-4">
              <strong>Domicilio:</strong> Colombia
            </p>
            <p className="mb-4">
              <strong>Correo electrónico:</strong> soporte@servigreen.com
            </p>
            <p className="mb-4">
              <strong>Teléfono:</strong> +57 317 272 7916
            </p>
            <p className="mb-4">
              <strong>Sitio web:</strong> www.servigreen.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DATOS PERSONALES QUE RECOPILAMOS
            </h2>
            <p className="mb-4">
              servigreen puede recopilar los siguientes tipos de información personal:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Datos de identificación:</strong> Nombre completo, número de identificación, fecha de nacimiento</li>
              <li><strong>Datos de contacto:</strong> Dirección de correo electrónico, número de teléfono, dirección postal</li>
              <li><strong>Datos de facturación y envío:</strong> Dirección de entrega, información de pago</li>
              <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia</li>
              <li><strong>Preferencias de compra:</strong> Historial de pedidos, productos favoritos, intereses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              FINALIDADES DEL TRATAMIENTO
            </h2>
            <p className="mb-4">
              Los datos personales recopilados serán utilizados para las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Procesar y gestionar pedidos de productos</li>
              <li>Facilitar el proceso de pago y facturación</li>
              <li>Realizar envíos y entregas de productos</li>
              <li>Brindar atención al cliente y soporte postventa</li>
              <li>Enviar comunicaciones sobre el estado de pedidos</li>
              <li>Enviar información promocional, ofertas y novedades (previo consentimiento)</li>
              <li>Realizar análisis estadísticos y estudios de mercado</li>
              <li>Mejorar nuestros productos, servicios y experiencia de usuario</li>
              <li>Cumplir con obligaciones legales y fiscales</li>
              <li>Prevenir fraudes y garantizar la seguridad de la plataforma</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DERECHOS DE LOS TITULARES
            </h2>
            <p className="mb-4">
              Como titular de datos personales, usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales</li>
              <li><strong>Solicitar prueba</strong> de la autorización otorgada para el tratamiento</li>
              <li><strong>Ser informado</strong> sobre el uso que se ha dado a sus datos</li>
              <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio</li>
              <li><strong>Revocar la autorización</strong> y solicitar la supresión de datos (cuando sea procedente)</li>
              <li><strong>Acceder gratuitamente</strong> a sus datos personales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PROCEDIMIENTO PARA EJERCER SUS DERECHOS
            </h2>
            <p className="mb-4">
              Para ejercer sus derechos sobre datos personales, puede contactarnos a través de:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Correo electrónico: soporte@servigreen.com</li>
              <li>WhatsApp: +57 317 272 7916</li>
            </ul>
            <p className="mb-4">
              Su solicitud será atendida en un plazo máximo de quince (15) días hábiles contados a partir de la fecha de recepción. Si la solicitud no puede ser atendida en ese plazo, se le informará el motivo de la demora y la fecha en que será atendida, que no podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer término.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              SEGURIDAD DE LA INFORMACIÓN
            </h2>
            <p className="mb-4">
              servigreen implementa medidas técnicas, humanas y administrativas para proteger la información personal contra pérdida, robo, acceso no autorizado, divulgación, copia, uso o modificación.
            </p>
            <p className="mb-4">
              Nuestra plataforma utiliza protocolos de seguridad como SSL/TLS para cifrar la información transmitida entre su navegador y nuestros servidores. Los datos de pago son procesados a través de plataformas seguras que cumplen con los estándares PCI DSS.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              TRANSFERENCIA Y TRANSMISIÓN DE DATOS
            </h2>
            <p className="mb-4">
              servigreen podrá transferir o transmitir datos personales a terceros cuando:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Sea necesario para cumplir con el objeto de la relación comercial (ej: empresas de mensajería para envíos)</li>
              <li>Se requiera para procesar pagos (ej: plataformas de pago como Mercado Pago)</li>
              <li>Exista obligación legal de hacerlo</li>
              <li>Se haya obtenido autorización expresa del titular</li>
            </ul>
            <p className="mb-4">
              En todos los casos, nos aseguramos de que los terceros mantengan estándares de seguridad y confidencialidad adecuados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              TIEMPO DE CONSERVACIÓN
            </h2>
            <p className="mb-4">
              Los datos personales serán conservados durante el tiempo que sea necesario para cumplir con las finalidades establecidas y para atender requerimientos legales, fiscales o contables. Una vez cumplidas estas finalidades y obligaciones, los datos serán eliminados de nuestros sistemas de forma segura.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              COOKIES Y TECNOLOGÍAS SIMILARES
            </h2>
            <p className="mb-4">
              Nuestro sitio web utiliza cookies y tecnologías similares para mejorar la experiencia del usuario, recordar preferencias y recopilar información sobre el uso del sitio. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              MENORES DE EDAD
            </h2>
            <p className="mb-4">
              Los servicios de servigreen están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente información de menores de edad. Si un padre o tutor identifica que un menor ha proporcionado información sin su consentimiento, debe contactarnos inmediatamente para que procedamos con su eliminación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              MODIFICACIONES A LA POLÍTICA
            </h2>
            <p className="mb-4">
              servigreen se reserva el derecho de modificar esta Política de Protección de Datos en cualquier momento. Los cambios significativos serán comunicados a través de nuestra página web o por correo electrónico. Se recomienda revisar periódicamente esta política para estar informado sobre cómo protegemos su información.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              CONTACTO
            </h2>
            <p className="mb-4">
              Para cualquier consulta, duda o solicitud relacionada con el tratamiento de sus datos personales, puede contactarnos:
            </p>
            <ul className="list-none mb-4 space-y-2">
              <li><strong>Email:</strong> soporte@servigreen.com</li>
              <li><strong>WhatsApp:</strong> +57 317 272 7916</li>
              <li><strong>Horario de atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</li>
            </ul>
          </section>

          <p className="mt-8 text-sm italic">
            Al utilizar nuestros servicios y proporcionar su información personal, usted acepta los términos de esta Política de Protección de Datos Personales.
          </p>
        </div>
      </div>
    </main>
      <FooterCustom />
    </>
  );
}
