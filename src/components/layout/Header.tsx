"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";
const MobileMenu = dynamic(() => import("./MobileMenu").then((m) => m.MobileMenu), { ssr: false });
import { NAV_LINKS, SERVICES_DROPDOWN, WA_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ─── Logo ─────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <Link
      href="/"
      className="shrink-0 flex items-center gap-3.5 transition-opacity duration-200 hover:opacity-85"
      aria-label="Stiven Ramírez — Inicio"
    >
      {/* Mark */}
      <div className="w-11 h-11 rounded-[9px] bg-teal flex items-center justify-center shrink-0">
        <span
          className="font-jakarta font-extrabold text-midnight leading-none"
          style={{ fontSize: "22px", letterSpacing: "-0.05em" }}
        >
          SR
        </span>
      </div>
      {/* Wordmark */}
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

// ─── Nav link ─────────────────────────────────────────────────────────────────

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "font-sans font-medium text-[13px] px-3.5 py-2 rounded-md",
        "transition-colors duration-150",
        active ? "text-white" : "text-slate-light hover:text-white"
      )}
    >
      {label}
    </Link>
  );
}

// ─── Chevron ──────────────────────────────────────────────────────────────────

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className={cn("transition-transform duration-200 shrink-0", open && "rotate-180")}
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Services Dropdown Panel ──────────────────────────────────────────────────

function ServicesDropdown({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 z-[9998] pt-3 w-[660px] transition-all duration-200 ease-out",
        open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
      )}
      inert={!open}
    >
      <div
        className="bg-[rgba(11,24,41,0.98)] backdrop-blur-[20px] rounded-2xl border border-white/[0.08]
          shadow-[0_24px_60px_rgba(0,0,0,0.5)] p-6"
      >
        <div className="grid grid-cols-3 gap-6">
          {SERVICES_DROPDOWN.map((group) => (
            <div key={group.group}>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[3px] text-white/30 mb-3 px-2">
                {group.group}
              </p>
              <ul className="space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block font-sans text-[13px] text-slate-light hover:text-teal py-1.5 px-2
                        rounded-lg hover:bg-teal/[0.08] transition-all duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-5">
          <Link
            href="/servicios/"
            onClick={onClose}
            className="font-sans text-[12px] font-medium text-teal/70 hover:text-teal transition-colors duration-150"
          >
            Ver todos los servicios →
          </Link>
          <Link
            href="/servicios/precios/"
            onClick={onClose}
            className="font-sans text-[12px] font-semibold text-teal hover:text-teal/80 transition-colors duration-150"
          >
            Ver precios →
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearDropdownTimeout = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
  };
  const openDropdown = () => {
    clearDropdownTimeout();
    setDropdownOpen(true);
  };
  const scheduleCloseDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu and dropdown on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isServicesActive =
    pathname === "/servicios/" || pathname.startsWith("/servicios/");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[9999]",
          "transition-all duration-300",
          scrolled
            ? "bg-[rgba(11,24,41,0.97)] backdrop-blur-[16px] shadow-[0_1px_0_rgba(255,255,255,0.05)]"
            : "bg-midnight"
        )}
      >
        <div
          className="mx-auto flex items-center justify-between px-5 md:px-8 lg:px-[60px]"
          style={{ maxWidth: "1160px", height: "72px" }}
        >
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {/* Servicios — with dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleCloseDropdown}
            >
              <button
                className={cn(
                  "font-sans font-medium text-[13px] px-3.5 py-2 rounded-md",
                  "flex items-center gap-1.5 transition-colors duration-150",
                  isServicesActive ? "text-white" : "text-slate-light hover:text-white"
                )}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Servicios
                <ChevronDown open={dropdownOpen} />
              </button>

              <ServicesDropdown open={dropdownOpen} onClose={() => setDropdownOpen(false)} />
            </div>

            {/* Remaining nav links */}
            {NAV_LINKS.filter((l) => l.href !== "/servicios/").map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={pathname === link.href || pathname.startsWith(link.href)}
              />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="primary" size="sm" href="/contacto/">
              Hablemos →
            </Button>
          </div>

          {/* Mobile: WhatsApp icon + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-whatsapp hover:text-whatsapp-dim transition-colors duration-150"
            >
              <WhatsAppIcon />
            </Link>
            <HamburgerButton open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Spacer so content doesn't hide behind fixed header */}
      <div className="h-[72px]" aria-hidden="true" />
    </>
  );
}

// ─── Hamburger ────────────────────────────────────────────────────────────────

function HamburgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={open}
      className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
    >
      <span
        className={cn(
          "block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center",
          open && "translate-y-[6.5px] rotate-45"
        )}
      />
      <span
        className={cn(
          "block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300",
          open && "opacity-0 scale-x-0"
        )}
      />
      <span
        className={cn(
          "block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center",
          open && "-translate-y-[6.5px] -rotate-45"
        )}
      />
    </button>
  );
}

// ─── WhatsApp SVG icon ────────────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
