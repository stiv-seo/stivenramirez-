import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y tratamiento de datos personales de stivenramirez.com.",
  alternates: { canonical: "https://stivenramirez.com/privacidad/", languages: { "es-CO": "https://stivenramirez.com/privacidad/", "x-default": "https://stivenramirez.com/privacidad/" } },
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <section className="bg-off-white" style={{ paddingTop: "60px", paddingBottom: "100px" }}>
      <Container>
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-5">
            Legal
          </p>
          <h1
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-10"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Política de Privacidad
          </h1>

          <div className="prose-content space-y-8 font-sans text-text-mid leading-[1.85] text-[15px]">

            <div>
              <p className="font-sans text-xs text-slate mb-6">
                Última actualización: abril de 2026
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">1. Responsable del tratamiento</h2>
              <p>
                Stiven Ramírez, consultor independiente de SEO y diseño web con base en Medellín, Colombia
                (<strong>hola@stivenramirez.com</strong>), es el responsable del tratamiento de los datos
                personales que se recopilan a través del sitio web <strong>stivenramirez.com</strong>.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">2. Datos que recopilamos</h2>
              <p>Recopilamos únicamente los datos que el usuario proporciona voluntariamente a través del formulario de contacto:</p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Nombre</li>
                <li>Dirección de correo electrónico</li>
                <li>Nombre de empresa o sitio web (opcional)</li>
                <li>Presupuesto aproximado (opcional)</li>
                <li>Mensaje o descripción del proyecto</li>
              </ul>
              <p className="mt-3">
                También podemos recopilar datos de navegación de forma anónima a través de Google Analytics 4,
                incluyendo páginas visitadas, tiempo de sesión y dispositivo utilizado, sin identificar al usuario individualmente.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">3. Finalidad del tratamiento</h2>
              <p>Los datos del formulario de contacto se usan exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Responder a la consulta enviada</li>
                <li>Preparar una propuesta o cotización cuando sea solicitada</li>
                <li>Mantener comunicación relacionada con un posible proyecto</li>
              </ul>
              <p className="mt-3">No utilizamos los datos para enviar publicidad, newsletters ni comunicaciones no solicitadas.</p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">4. Conservación de datos</h2>
              <p>
                Los datos del formulario de contacto se conservan durante el tiempo necesario para gestionar
                la consulta y, en caso de establecerse una relación comercial, durante la duración del proyecto
                más un período de 2 años para efectos contables y legales.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">5. Terceros y transferencia de datos</h2>
              <p>Los datos pueden ser procesados por los siguientes servicios de terceros:</p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li><strong>Resend</strong> (envío de emails de notificación)</li>
                <li><strong>Google Analytics 4</strong> (análisis de tráfico anónimo)</li>
                <li><strong>Vercel</strong> (hosting del sitio web)</li>
              </ul>
              <p className="mt-3">
                Ninguno de estos servicios vende datos a terceros. El tratamiento se realiza conforme a sus
                respectivas políticas de privacidad.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">6. Derechos del usuario</h2>
              <p>
                De acuerdo con la Ley 1581 de 2012 (Ley de Protección de Datos de Colombia), tienes derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Conocer los datos que tenemos sobre ti</li>
                <li>Rectificar datos incorrectos o desactualizados</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Revocar la autorización de tratamiento</li>
              </ul>
              <p className="mt-3">
                Para ejercer cualquiera de estos derechos, escríbenos a{" "}
                <a href="mailto:hola@stivenramirez.com" className="text-teal underline underline-offset-2">
                  hola@stivenramirez.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">7. Cookies</h2>
              <p>
                Este sitio utiliza cookies de Google Analytics para análisis de tráfico anónimo. Puedes
                desactivar las cookies de análisis desde la configuración de tu navegador sin que esto afecte
                la funcionalidad del sitio.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">8. Cambios a esta política</h2>
              <p>
                Nos reservamos el derecho de actualizar esta política cuando sea necesario. La fecha de
                última actualización siempre estará visible al inicio del documento.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
