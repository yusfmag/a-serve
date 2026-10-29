"use client";

import { DIVISIONS, HERO_SKIN, MEMBERS, VERSION } from "@/lib/site";
import { useServerStatus } from "@/lib/useServerStatus";
import { IpCard } from "./CopyIp";
import { CountUp } from "./Effects";
import Icon from "./Icon";

const DIVISION_COUNT = DIVISIONS.reduce((n, d) => n + d.tiers.length, 0);

export default function Hero() {
  const status = useServerStatus();

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
          Queue ranked on {VERSION} combat, climb from Iron to Netherite, build your kit layouts and show off
          trails, glows and name colors you won&apos;t find anywhere else.
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
            <span className="stat-num"><CountUp to={DIVISION_COUNT} /></span>
            <span className="stat-label">Divisions</span>
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
        <div className="chip chip-3"><Icon name="gem" size={16} /> Iron → Netherite</div>
      </div>
    </section>
  );
}
