import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { WA_URL, CALENDLY_URL, SITE_URL } from "@/lib/constants";

export interface SubpageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  breadcrumbParent?: { label: string; href: string };
  breadcrumbCurrent: string;
}

export function SubpageHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  breadcrumbParent = { label: "Servicios", href: "/servicios/" },
  breadcrumbCurrent,
}: SubpageHeroProps) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: breadcrumbParent.label, item: `${SITE_URL}${breadcrumbParent.href}` },
      { "@type": "ListItem", position: 3, name: breadcrumbCurrent, item: `${SITE_URL}${breadcrumbParent.href}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    <section
      className="relative bg-midnight bg-grid-dark overflow-hidden pt-20 md:pt-[140px]"
      style={{ paddingBottom: "100px" }}
    >
      <div
        className="glow-teal absolute pointer-events-none"
        style={{ top: "-100px", right: "-80px" }}
        aria-hidden="true"
      />

      <Container>
        <FadeIn>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-sans text-xs text-slate flex-wrap">
              <li>
                <a href="/" className="hover:text-teal transition-colors duration-150">
                  Inicio
                </a>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <a href={breadcrumbParent.href} className="hover:text-teal transition-colors duration-150">
                  {breadcrumbParent.label}
                </a>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-slate-light" aria-current="page">
                {breadcrumbCurrent}
              </li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-5">
            {eyebrow}
          </p>

          <h1
            className="font-jakarta font-extrabold text-white leading-[1.05] tracking-[-1.5px] mb-6"
            style={{ fontSize: "clamp(32px, 4.5vw, 58px)" }}
          >
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-teal">{titleAccent}</span>
              </>
            )}
          </h1>

          <p
            className="font-sans text-slate-light leading-[1.8] max-w-[540px]"
            style={{ fontSize: "clamp(16px, 1.5vw, 18px)" }}
          >
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button variant="primary" size="md" href={CALENDLY_URL} external>
              Agendar llamada gratuita →
            </Button>
            <Button variant="whatsapp" size="md" href={WA_URL} external>
              WhatsApp
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
    </>
  );
}
