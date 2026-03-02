import React from 'react';
import FooterCustom from '@/components/custom/FooterCustom';

export const metadata = {
  title: 'Política de Envíos | servigreen',
  description: 'Conoce nuestra política de envíos, tiempos de entrega y cobertura en Colombia.'
};

export default function PoliticaEnvios() {
  return (
    <>
     <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Política de Envíos
        </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          Última actualización: {new Date().toLocaleDateString()}
        </p>

        <div className="text-gray-600">
          <p className="mb-6">
            En servigreen nos comprometemos a entregar tus plantas y productos de manera segura y oportuna. Esta política describe nuestros tiempos de procesamiento, costos de envío y cobertura.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              COBERTURA
            </h2>
            <p className="mb-4">
              Actualmente realizamos envíos a todo el territorio nacional colombiano. No realizamos envíos internacionales en este momento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              TIEMPO DE PROCESAMIENTO
            </h2>
            <p className="mb-4">
              Una vez confirmado tu pedido y verificado el pago, el proceso de preparación y despacho toma:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Productos en stock:</strong> 1 a 2 días hábiles</li>
              <li><strong>Productos bajo pedido:</strong> 5 a 7 días hábiles</li>
              <li><strong>Temporada alta (Black Friday, Navidad):</strong> 3 a 5 días hábiles</li>
            </ul>
            <p className="mb-4">
              El tiempo de procesamiento no incluye el tiempo de envío. Recibirás una notificación por correo electrónico cuando tu pedido sea despachado, junto con el número de seguimiento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              TIEMPOS DE ENTREGA
            </h2>
            <p className="mb-4">
              Los tiempos de entrega varían según la ciudad de destino:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Bogotá:</strong> 2 a 4 días hábiles</li>
              <li><strong>Ciudades principales</strong> (Medellín, Cali, Barranquilla, Cartagena): 3 a 5 días hábiles</li>
              <li><strong>Otras ciudades y municipios:</strong> 5 a 8 días hábiles</li>
              <li><strong>Zonas rurales:</strong> 8 a 12 días hábiles</li>
            </ul>
            <p className="mb-4">
              Los días hábiles son de lunes a viernes, excluyendo festivos nacionales y días no laborables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              COSTOS DE ENVÍO
            </h2>
            <p className="mb-4">
              Los costos de envío son calculados automáticamente al momento de finalizar tu compra, basándose en:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Ubicación de entrega (ciudad y departamento)</li>
              <li>Peso y dimensiones del paquete</li>
              <li>Valor total del pedido</li>
            </ul>
            <p className="mb-4 bg-green-50 border-l-4 border-green-500 p-4">
              <strong>Envío Gratis:</strong> Todos los pedidos superiores a $120 USD califican para envío gratuito a nivel nacional.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              TRANSPORTADORA
            </h2>
            <p className="mb-4">
              Trabajamos con empresas de mensajería certificadas y confiables que garantizan la seguridad de tu envío. Dependiendo de la ubicación, utilizamos:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Servientrega</li>
              <li>Coordinadora</li>
              <li>TCC (Transportes Especiales)</li>
              <li>Interrapidísimo</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              SEGUIMIENTO DE ENVÍO
            </h2>
            <p className="mb-4">
              Una vez tu pedido sea despachado, recibirás:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Correo electrónico con número de guía de seguimiento</li>
              <li>Enlace directo para rastrear tu pedido en tiempo real</li>
              <li>Notificaciones por WhatsApp sobre el estado de tu envío (opcional)</li>
            </ul>
            <p className="mb-4">
              Puedes rastrear tu envío ingresando el número de guía en el sitio web de la transportadora correspondiente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              RECEPCIÓN DEL PEDIDO
            </h2>
            <p className="mb-4">
              Al recibir tu pedido:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Verifica que el paquete esté en buenas condiciones antes de firmar</li>
              <li>Si observas daños externos, repórtalo inmediatamente al mensajero</li>
              <li>Abre el paquete y verifica que el contenido coincida con tu pedido</li>
              <li>Si hay algún problema, contacta nuestro servicio al cliente dentro de las 24 horas siguientes</li>
            </ul>
            <p className="mb-4">
              <strong>Importante:</strong> La firma de recepción indica conformidad con el estado del paquete. Reclamos posteriores sobre daños en el empaque externo no serán aceptados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              INTENTOS DE ENTREGA
            </h2>
            <p className="mb-4">
              La transportadora realizará hasta 3 intentos de entrega:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Primer intento:</strong> En la dirección registrada</li>
              <li><strong>Segundo intento:</strong> Se dejará aviso de visita</li>
              <li><strong>Tercer intento:</strong> Se contactará telefónicamente</li>
            </ul>
            <p className="mb-4">
              Si después de 3 intentos no es posible realizar la entrega, el paquete será devuelto a nuestras instalaciones. Los costos de reenvío correrán por cuenta del cliente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DIRECCIÓN DE ENTREGA
            </h2>
            <p className="mb-4">
              Es responsabilidad del cliente proporcionar una dirección completa y correcta que incluya:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Dirección completa (calle, número, apartamento, barrio)</li>
              <li>Ciudad y departamento</li>
              <li>Puntos de referencia (si es necesario)</li>
              <li>Número de teléfono de contacto actualizado</li>
              <li>Nombre completo de quien recibirá el pedido</li>
            </ul>
            <p className="mb-4">
              servigreen no se hace responsable por entregas fallidas debido a información incorrecta o incompleta proporcionada por el cliente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              MODIFICACIÓN DE DIRECCIÓN
            </h2>
            <p className="mb-4">
              Si necesitas cambiar la dirección de envío:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Contacta inmediatamente a servicio al cliente</li>
              <li>La modificación solo es posible antes del despacho</li>
              <li>Una vez despachado, debe coordinarse directamente con la transportadora</li>
              <li>Cambios de dirección con la transportadora pueden generar costos adicionales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PAQUETES PERDIDOS O DAÑADOS
            </h2>
            <p className="mb-4">
              En el caso poco probable de que tu paquete se pierda o llegue dañado:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Contacta inmediatamente a nuestro servicio al cliente con fotos del daño</li>
              <li>Proporcionaremos solución dentro de 24-48 horas</li>
              <li>Opciones de solución: reemplazo del producto o reembolso completo</li>
              <li>Todos nuestros envíos están asegurados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DEMORAS EN LA ENTREGA
            </h2>
            <p className="mb-4">
              Los tiempos de entrega estimados pueden verse afectados por:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Condiciones climáticas adversas</li>
              <li>Festividades y temporadas altas</li>
              <li>Situaciones de orden público</li>
              <li>Problemas logísticos de la transportadora</li>
              <li>Restricciones o cierres por emergencias</li>
            </ul>
            <p className="mb-4">
              En caso de demoras significativas, te mantendremos informado sobre el estado de tu envío.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              CONTACTO
            </h2>
            <p className="mb-4">
              Para consultas sobre tu envío o problemas con la entrega:
            </p>
            <ul className="list-none mb-4 space-y-2">
              <li><strong>WhatsApp:</strong> +57 317 272 7916</li>
              <li><strong>Email:</strong> soporte@servigreen.com</li>
              <li><strong>Horario de atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
      <FooterCustom />
    </>
  );
}
