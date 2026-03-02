import React from 'react';
import FooterCustom from '@/components/custom/FooterCustom';

export const metadata = {
  title: 'Términos del servicio | servigreen',
  description: 'Conoce nuestros términos del servicio y condiciones de uso de la tienda servigreen.'
};

export default function TerminosDelServicio() {
  return (
    <>
     <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Términos del servicio
        </h1>

      {/* Contenedor principal con estilos para el contenido */}
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          Última actualización: {new Date().toLocaleDateString()}
        </p>

        <div className="text-gray-600">
          <p className="mb-6">
            servigreen, se dedica a la comercialización de bonsais, plantas ornamentales y productos de jardinería a través de distintos canales. Estos términos rigen exclusivamente para las compras que se hagan directamente en la tienda online www.servigreen.com
          </p>

          <p className="mb-6">
            Al usar este Sitio, el usuario admite haber leído y entendido estos Términos de Uso y está de acuerdo en sujetarse a los mismos y cumplir con todas las leyes y reglamentos aplicables que hagan parte de la Legislación Colombiana. Además, cuando el usuario utilice cualquier servicio suministrado en este Sitio, estará sujeto a las reglas, guías, políticas, términos y condiciones aplicables.
          </p>

          <p className="mb-8">
            Cualquier persona que ingrese sus datos en el formulario de Registro, deben ser personas capaces según las leyes de la república de Colombia para realizar transacciones comerciales en la tienda online. Los menores de edad podrán navegar en la página web, pero no están habilitados para realizar ningún tipo de transacción.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PROCESO DE COMPRA
            </h2>
            <p className="mb-4">
              Para realizar una compra el usuario o cliente deberá registrarse en la página y autorizar la política de tratamiento de datos personales. Luego de registrarse, este podrá celebrar relaciones de consumo de los productos exhibidos en el portal o plataforma.
            </p>
            <p className="mb-4">
              En caso de crear una cuenta, ésta permanecerá activa hasta que el usuario la cancele o en su defecto cuando servigreen considere que se está haciendo mal uso de ella. La plataforma de pagos habilitada es Mercado Pago.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DERECHO DE RETRACTO
            </h2>
            <p className="mb-4">
              El consumidor podrá hacer uso del derecho de retracto contenido en el estatuto del consumidor. El término máximo para ejercer el derecho de retracto será de cinco (5) días hábiles contados a partir de la entrega.
            </p>
            <p className="mb-4">
              El consumidor deberá devolver el producto a servigreen por los mismos medios y en las mismas condiciones en que lo recibió. Los costos de transporte y los demás que conlleve la devolución del producto serán cubiertos por el consumidor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              RECEPCIÓN DE LOS PRODUCTOS
            </h2>
            <p className="mb-4">
              El envío de los productos se realizará únicamente dentro del territorio colombiano, a través de correo certificado, en un plazo pactado según el destino elegido, contados a partir del perfeccionamiento del contrato.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PROMOCIONES
            </h2>
            <p className="mb-4">
              Las promociones, su vigencia y disponibilidad serán publicadas en la página y su publicidad será clara. Si alguna de las promociones no indica la fecha de la vigencia ésta se entenderá que durará hasta agotar existencias.
            </p>
            <p className="mb-4">
              Para los productos en promoción no se aceptan cambios y devoluciones. El derecho de retracto de los productos en promoción aplicará para el valor pagado y no para el valor del transporte.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PROPIEDAD INTELECTUAL Y DERECHOS DE AUTOR
            </h2>
            <p className="mb-4">
              Todas las marcas, logos, nombres y otros signos distintivos, así como los diseños y demás elementos de propiedad intelectual o industrial insertados y usados en esta página son Propiedad exclusiva de servigreen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              QUEJAS Y RECLAMOS
            </h2>
            <p className="mb-4">
              servigreen ha dispuesto diferentes canales de atención para atender las peticiones, quejas y reclamos de sus usuarios de manera exitosa. Puedes comunicarte con nosotros a través de WhatsApp, correo o por medio de nuestro formulario de contacto.
            </p>
          </section>
        </div>
      </div>
    </main>
      <FooterCustom />
    </>
  );
}