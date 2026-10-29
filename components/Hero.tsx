"use client";

import { useEffect, useState } from "react";
import { HERO_SKIN, KITS, MEMBERS, SERVER_IP, VERSION } from "@/lib/site";
import { IpCard } from "./CopyIp";
import { CountUp } from "./Effects";
import Icon from "./Icon";

type Status = { state: "loading" | "online" | "offline" | "error"; players?: number };

export default function Hero() {
  const [status, setStatus] = useState<Status>({ state: "loading" });

  useEffect(() => {
    // Free public API, no key needed
    fetch(`https://api.mcsrvstat.us/3/${SERVER_IP}`)
      .then((r) => r.json())
      .then((d) => setStatus(d.online ? { state: "online", players: d.players?.online ?? 0 } : { state: "offline" }))
      .catch(() => setStatus({ state: "error" }));
  }, []);

  const statusText = {
    loading: "Checking server…",
    online: `${status.players} playing now`,
    offline: "Server offline",
    error: "Status unavailable",
  }[status.state];

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className={`status-pill ${status.state}`}>
          <span className="dot" />
          {statusText}
          <span className="pill-sep" />
          <span className="pill-version">{VERSION}</span>
        </div>

        <h1 className="hero-title">
          <span className="glitch" data-text="CHLAMBA">CHLAMBA</span>
        </h1>
        <p className="hero-tagline">
          Modern Practice. <span className="grad">Real rewards.</span> One community.
        </p>
        <p className="hero-sub">
          Queue ranked across 8 kits on {VERSION} combat, climb from Bronze to Netherite, level up the Season 1
          battle pass and collect cosmetics you won&apos;t find anywhere else.
        </p>

        <div className="hero-actions">
          <IpCard />
          <a href="#kits" className="btn btn-ghost">
            Explore
          </a>
        </div>

        <div className="stats">
          <div className="stat">
            <span className="stat-num"><CountUp to={MEMBERS} suffix="+" /></span>
            <span className="stat-label">Members</span>
          </div>
          <div className="stat">
            <span className="stat-num">{VERSION}</span>
            <span className="stat-label">Version</span>
          </div>
          <div className="stat">
            <span className="stat-num"><CountUp to={KITS.length} /></span>
            <span className="stat-label">Ranked Kits</span>
          </div>
          <div className="stat">
            <span className="stat-num">24/7</span>
            <span className="stat-label">Uptime</span>
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="hero-glow" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-skin" src={`https://mc-heads.net/body/${HERO_SKIN}/360`} alt="" />
        <div className="chip chip-1"><Icon name="target" size={16} /> Ranked Practice</div>
        <div className="chip chip-2"><Icon name="crown" size={16} /> Season 1 Pass</div>
        <div className="chip chip-3"><Icon name="gift" size={16} /> Daily Rewards</div>
      </div>
    </section>
  );
}
