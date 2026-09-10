"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setOpen(false);
    requestAnimationFrame(() => openButtonRef.current?.focus());
  };

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div className="mobile-navigation">
      <button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Buka menu navigasi"
        className="icon-button"
        onClick={() => setOpen(true)}
        ref={openButtonRef}
        type="button"
      >
        <Icon name="menu" />
      </button>
      <div aria-hidden={!open} className={`mobile-drawer${open ? " is-open" : ""}`} id="mobile-menu">
        <div className="mobile-drawer__top">
          <span className="brand">ruang temu</span>
          <button
            aria-label="Tutup menu navigasi"
            className="icon-button close-button"
            onClick={closeMenu}
            ref={closeButtonRef}
            type="button"
          >
            <Icon name="close" />
          </button>
        </div>
        <p className="mobile-drawer__label">Navigasi</p>
        <nav aria-label="Navigasi mobile" className="mobile-drawer__links">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} tabIndex={open ? 0 : -1}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-drawer__footer">
          <a className="button button--primary" href="#lokasi" onClick={closeMenu} tabIndex={open ? 0 : -1}>Reservasi Tempat <span aria-hidden="true">→</span></a>
          <p>coffee · space · community</p>
        </div>
      </div>
    </div>
  );
}
