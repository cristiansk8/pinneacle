import React from 'react';
import FooterCustom from '@/components/custom/FooterCustom';

export const metadata = {
  title: 'Política de Reembolso | servigreen',
  description: 'Conoce nuestra política de reembolsos y devoluciones de servigreen.'
};

export default function PoliticaReembolso() {
  return (
    <>
     <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Política de Reembolso
        </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          Última actualización: {new Date().toLocaleDateString()}
        </p>

        <div className="text-gray-600">
          <p className="mb-6">
            En servigreen nos esforzamos por garantizar tu satisfacción con cada compra. Esta política describe los términos y condiciones bajo los cuales puedes solicitar reembolsos por plantas y productos adquiridos en nuestra tienda online.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DERECHO DE RETRACTO
            </h2>
            <p className="mb-4">
              De acuerdo con la ley colombiana (Artículo 47 de la Ley 1480 de 2011), los consumidores tienen derecho a retractarse de su compra dentro de los cinco (5) días hábiles siguientes a la entrega del producto.
            </p>
            <p className="mb-4">
              Para ejercer este derecho, la planta o producto debe estar en buenas condiciones de salud, con el sustrato húmedo y sin evidencia de negligencia en su cuidado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              CONDICIONES PARA REEMBOLSO
            </h2>
            <p className="mb-4">
              Para que un reembolso sea procesado, se deben cumplir las siguientes condiciones:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>La planta debe presentar signos de buena salud (hojas verdes, sin plagas visibles)</li>
              <li>El sustrato debe estar húmedo o en condiciones adecuadas</li>
              <li>Debe incluirse el empaque original y maceta si aplica</li>
              <li>La solicitud debe realizarse dentro de los 5 días hábiles siguientes a la recepción</li>
              <li>Se debe presentar comprobante de compra (factura o recibo)</li>
              <li>Fotos del estado actual de la planta para evaluación</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PRODUCTOS EN PROMOCIÓN
            </h2>
            <p className="mb-4">
              Los productos adquiridos en promoción o con descuento tienen las siguientes consideraciones especiales:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Los reembolsos se realizarán por el valor efectivamente pagado</li>
              <li>Los costos de envío no son reembolsables para productos en promoción</li>
              <li>Las plantas en promoción tienen la misma garantía de calidad</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PROCESO DE DEVOLUCIÓN
            </h2>
            <p className="mb-4">
              Para iniciar un proceso de devolución, sigue estos pasos:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-3">
              <li>Contacta nuestro servicio al cliente a través de WhatsApp (+57 317 272 7916) o correo electrónico (soporte@servigreen.com)</li>
              <li>Proporciona tu número de pedido y la razón de la devolución</li>
              <li>Envía fotos actuales de la planta para evaluación</li>
              <li>Nuestro equipo te enviará las instrucciones para el proceso de devolución</li>
              <li>Empaca la planta de forma segura en su empaque original</li>
            </ol>
            <p className="mb-4">
              Los costos de envío para la devolución del producto corren por cuenta del cliente, a menos que el producto presente defectos de fabricación o haya sido enviado por error.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              TIEMPO DE PROCESAMIENTO
            </h2>
            <p className="mb-4">
              Una vez recibamos tu producto devuelto:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Inspeccionaremos el producto para verificar que cumple con las condiciones de devolución (2-3 días hábiles)</li>
              <li>Si la devolución es aprobada, procesaremos el reembolso (3-5 días hábiles)</li>
              <li>El dinero será acreditado al mismo medio de pago utilizado en la compra original</li>
              <li>El tiempo que tarda el banco en reflejar el reembolso puede variar entre 5-10 días hábiles adicionales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PRODUCTOS DEFECTUOSOS O INCORRECTOS
            </h2>
            <p className="mb-4">
              Si recibes un producto defectuoso, dañado o incorrecto:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Contacta inmediatamente a nuestro servicio al cliente con fotos de la planta</li>
              <li>servigreen cubrirá los costos de envío de la devolución</li>
              <li>Ofreceremos reemplazo de la planta o reembolso completo, según tu preferencia</li>
              <li>El reembolso incluirá el costo de la planta y los gastos de envío originales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              EXCEPCIONES
            </h2>
            <p className="mb-4">
              No se aceptan devoluciones ni reembolsos en los siguientes casos:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Plantas que mostraron negligencia en su cuidado (falta de riego, sobrexposición al sol, etc.)</li>
              <li>Plantas que hayan sido trasplantadas o alteradas</li>
              <li>Plantas sin evidencia fotográfica del estado al recibirlas</li>
              <li>Productos adquiridos fuera de nuestra tienda oficial online</li>
              <li>Solicitudes presentadas después de los 5 días hábiles establecidos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              CONTACTO
            </h2>
            <p className="mb-4">
              Para cualquier consulta sobre nuestra política de reembolsos o para iniciar un proceso de devolución, contáctanos:
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
