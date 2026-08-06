import Link from "next/link";
import { Divider } from "@/components/ui/Divider";
import { FOOTER_LINKS, SITE_NAME, SITE_TAGLINE, WA_URL, CALENDLY_URL, INSTAGRAM_URL } from "@/lib/constants";

// ─── Logo ─────────────────────────────────────────────────────────────────────

function FooterLogo() {
  return (
    <Link
      href="/"
      className="shrink-0 flex items-center gap-3.5 transition-opacity duration-200 hover:opacity-85 w-fit"
      aria-label="Stiven Ramírez — Inicio"
    >
      <div className="w-11 h-11 rounded-[9px] bg-teal flex items-center justify-center shrink-0">
        <span
          className="font-jakarta font-extrabold text-midnight leading-none"
          style={{ fontSize: "22px", letterSpacing: "-0.05em" }}
        >
          SR
        </span>
      </div>
      <div className="flex flex-col gap-[5px]">
        <span
          className="font-jakarta font-extrabold text-off-white leading-none"
          style={{ fontSize: "18px", letterSpacing: "-0.03em" }}
        >
          Stiven Ramírez
        </span>
        <span
          className="font-sans font-medium uppercase text-off-white/50"
          style={{ fontSize: "9px", letterSpacing: "3px" }}
        >
          Diseño Web &amp; SEO
        </span>
      </div>
    </Link>
  );
}

// ─── Column helper ────────────────────────────────────────────────────────────

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-sans font-semibold text-[11px] uppercase tracking-[3px] text-white/40 mb-5">
        {title}
      </p>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className="font-sans text-[13px] text-slate-light hover:text-white transition-colors duration-150"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </Link>
    </li>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#060F1A" }}>
      {/* Main grid */}
      <div
        className="mx-auto px-5 md:px-8 lg:px-[60px] py-12 md:py-20"
        style={{ maxWidth: "1160px" }}
      >
        {/* Responsive grid — 1 col mobile / 2 col sm / 5 col lg */}
        <div className="grid gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          {/* Col 1 — Marca */}
          <div>
            <FooterLogo />
            <p className="font-sans text-[13px] text-slate leading-[1.75] mt-5 max-w-[220px]">
              El único profesional en Colombia que diseña el sitio web <em>y</em> lo posiciona en Google — en un solo contrato.
            </p>
            <div className="flex gap-4 mt-6">
              <SocialLink
                href={WA_URL}
                label="WhatsApp"
                icon={<WhatsAppIcon />}
                external
              />
              <SocialLink
                href="https://www.linkedin.com/in/stiven-ramirez-0a0332199/"
                label="LinkedIn"
                icon={<LinkedInIcon />}
                external
              />
              <SocialLink
                href={INSTAGRAM_URL}
                label="Instagram"
                icon={<InstagramIcon />}
                external
              />
            </div>
          </div>

          {/* Col 2 — Servicios */}
          <FooterColumn title="Servicios">
            {FOOTER_LINKS.servicios.map((l) => (
              <FooterLink key={l.href} href={l.href} label={l.label} />
            ))}
          </FooterColumn>

          {/* Col 3 — Recursos */}
          <FooterColumn title="Recursos">
            {FOOTER_LINKS.recursos.map((l) => (
              <FooterLink key={l.href} href={l.href} label={l.label} />
            ))}
          </FooterColumn>

          {/* Col 4 — Ciudades */}
          <FooterColumn title="Ciudades">
            {FOOTER_LINKS.ciudades.map((l) => (
              <FooterLink key={l.href} href={l.href} label={l.label} />
            ))}
          </FooterColumn>

          {/* Col 5 — Contacto */}
          <FooterColumn title="Contacto">
            {FOOTER_LINKS.contacto.map((l) => (
              <FooterLink
                key={l.href}
                href={l.href}
                label={l.label}
                external={"external" in l ? l.external : false}
              />
            ))}
            <li className="pt-2">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold text-teal hover:text-teal-bright transition-colors duration-150"
              >
                Agendar llamada gratis →
              </Link>
            </li>
          </FooterColumn>
        </div>

        {/* Divider */}
        <Divider direction="center" className="mt-16 mb-8 opacity-[0.15]" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-sans text-[12px]"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            © {new Date().getFullYear()} {SITE_NAME} · {SITE_TAGLINE}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacidad/"
              className="font-sans text-[12px] transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Política de privacidad
            </Link>
            <Link
              href="/terminos/"
              className="font-sans text-[12px] transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Términos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Social icon link ─────────────────────────────────────────────────────────

function SocialLink({
  href,
  label,
  icon,
  external = false,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-slate-light hover:text-white hover:bg-white/10 transition-all duration-150"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon}
    </Link>
  );
}

// ─── SVG icons ────────────────────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
