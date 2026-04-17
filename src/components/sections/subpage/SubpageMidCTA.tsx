import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WA_URL, CALENDLY_URL } from "@/lib/constants";

export interface SubpageMidCTAProps {
  text?: string;
}

export function SubpageMidCTA({
  text = "¿Tienes dudas? Hablamos 30 minutos sin costo ni compromiso.",
}: SubpageMidCTAProps) {
  return (
    <div className="bg-teal/[0.05] border-y border-teal/15">
      <Container>
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-jakarta font-semibold text-text-dark text-[16px] leading-snug max-w-[500px] text-center sm:text-left">
            {text}
          </p>
          <div className="flex gap-3 shrink-0 flex-wrap justify-center">
            <Button variant="primary" size="md" href={CALENDLY_URL} external>
              Agendar llamada →
            </Button>
            <Button variant="whatsapp" size="md" href={WA_URL} external>
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
