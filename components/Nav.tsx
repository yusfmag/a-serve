"use client";

import { useEffect, useState } from "react";
import { DISCORD_URL } from "@/lib/site";

const LINKS = [
  { href: "#kits", label: "Kits" },
  { href: "#ranked", label: "Ranked" },
  { href: "#battlepass", label: "Battle Pass" },
  { href: "#cosmetics", label: "Cosmetics" },
  { href: "#staff", label: "Staff" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 20);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled || open ? " scrolled" : ""}`}>
      <a href="#top" className="logo" onClick={() => setOpen(false)}>
        <span className="logo-mark" />
        CHLAMBA
      </a>
      <nav className={`nav-links${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="nav-right">
        <a href={DISCORD_URL} target="_blank" rel="noopener" className="btn btn-sm btn-primary">
          Join Discord
        </a>
        <button className={`burger${open ? " open" : ""}`} onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
