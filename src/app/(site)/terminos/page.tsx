import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description: "Términos y condiciones de uso del sitio web stivenramirez.com.",
  alternates: { canonical: "https://stivenramirez.com/terminos/" },
  robots: { index: false, follow: false },
};

export default function TerminosPage() {
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
            Términos de Uso
          </h1>

          <div className="space-y-8 font-sans text-text-mid leading-[1.85] text-[15px]">

            <div>
              <p className="font-sans text-xs text-slate mb-6">
                Última actualización: abril de 2026
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">1. Aceptación de los términos</h2>
              <p>
                Al acceder y utilizar <strong>stivenramirez.com</strong>, aceptas estos términos de uso en
                su totalidad. Si no estás de acuerdo con alguna parte de estos términos, te pedimos que no
                utilices el sitio.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">2. Propiedad intelectual</h2>
              <p>
                Todo el contenido de este sitio —textos, imágenes, diseños, código y marca— es propiedad
                de Stiven Ramírez salvo que se indique lo contrario. Queda prohibida su reproducción,
                distribución o modificación sin autorización expresa por escrito.
              </p>
              <p className="mt-3">
                Los artículos del blog pueden citarse parcialmente con atribución y enlace al artículo original.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">3. Uso del sitio</h2>
              <p>Al usar este sitio te comprometes a:</p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>No utilizar el sitio para actividades ilegales o fraudulentas</li>
                <li>No intentar acceder a partes restringidas del sistema</li>
                <li>No enviar spam o comunicaciones no solicitadas a través del formulario de contacto</li>
                <li>Proporcionar información veraz cuando utilices el formulario de contacto</li>
              </ul>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">4. Información y precisión del contenido</h2>
              <p>
                El contenido de este sitio se ofrece con fines informativos y comerciales. Los precios,
                plazos y resultados mencionados son orientativos y pueden variar según las características
                específicas de cada proyecto. Para obtener una propuesta precisa, es necesario una
                consultoría inicial.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">5. Limitación de responsabilidad</h2>
              <p>
                Stiven Ramírez no será responsable por daños directos o indirectos derivados del uso o
                la imposibilidad de uso de este sitio, incluyendo pérdidas de datos, lucro cesante o
                interrupciones del negocio.
              </p>
              <p className="mt-3">
                Los enlaces externos incluidos en el blog o en el sitio son responsabilidad de sus
                respectivos propietarios. No respaldamos ni controlamos el contenido de sitios de terceros.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">6. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar el contenido del sitio, los servicios ofrecidos y
                estos términos de uso en cualquier momento y sin previo aviso. Los cambios entran en vigor
                desde su publicación.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">7. Ley aplicable</h2>
              <p>
                Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa será
                sometida a la jurisdicción de los tribunales competentes de Medellín, Colombia.
              </p>
            </div>

            <div>
              <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-3">8. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con estos términos, escríbenos a{" "}
                <a href="mailto:hola@stivenramirez.com" className="text-teal underline underline-offset-2">
                  hola@stivenramirez.com
                </a>.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
