"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { NAV_LINKS, SERVICES_DROPDOWN, WA_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const menuVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.22, ease: "easeOut" as const },
  }),
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998] bg-black/40 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.nav
            key="drawer"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              "fixed top-[72px] left-0 right-0 z-[9999] md:hidden",
              "bg-midnight border-t border-white/5",
              "px-5 pt-6 pb-8 overflow-y-auto max-h-[calc(100dvh-72px)]"
            )}
            aria-label="Menú móvil"
          >
            <ul className="space-y-1 mb-6">
              {/* Servicios — expandable */}
              <motion.li custom={0} variants={itemVariants} initial="hidden" animate="visible">
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className={cn(
                    "flex items-center justify-between w-full px-4 py-3.5 rounded-lg",
                    "font-sans font-medium text-[15px] text-slate-light",
                    "hover:text-white hover:bg-white/5 transition-colors duration-150"
                  )}
                  aria-expanded={servicesOpen}
                >
                  <span>Servicios</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                    className={cn(
                      "transition-transform duration-200 text-slate",
                      servicesOpen && "rotate-180"
                    )}
                  >
                    <path
                      d="M2 3.5L5 6.5L8 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Services sub-menu */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" as const }}
                      className="overflow-hidden"
                    >
                      <div className="pb-2 pt-1">
                        {SERVICES_DROPDOWN.map((group) => (
                          <div key={group.group} className="mb-4 last:mb-0">
                            <p className="font-sans text-[10px] font-semibold uppercase tracking-[3px] text-white/25 px-4 mb-1.5">
                              {group.group}
                            </p>
                            <ul>
                              {group.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    onClick={onClose}
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-sans text-[14px] text-slate-light hover:text-teal hover:bg-teal/[0.06] transition-all duration-150"
                                  >
                                    <span className="text-teal/40 text-[10px]">→</span>
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="px-4 pt-2">
                          <Link
                            href="/servicios/"
                            onClick={onClose}
                            className="font-sans text-[12px] font-medium text-teal/60 hover:text-teal transition-colors duration-150"
                          >
                            Ver todos los servicios →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>

              {/* Other nav links */}
              {NAV_LINKS.filter((l) => l.href !== "/servicios/").map((link, i) => (
                <motion.li
                  key={link.href}
                  custom={i + 1}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center w-full px-4 py-3.5 rounded-lg",
                      "font-sans font-medium text-[15px] text-slate-light",
                      "hover:text-white hover:bg-white/5",
                      "transition-colors duration-150"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <Divider className="mb-6" />

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                href="/contacto/"
                className="w-full justify-center"
                onClick={onClose}
              >
                Hablemos →
              </Button>
              <Button
                variant="whatsapp"
                size="md"
                href={WA_URL}
                external
                className="w-full justify-center"
                onClick={onClose}
              >
                Escribir por WhatsApp
              </Button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
