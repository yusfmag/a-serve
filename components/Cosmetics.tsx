"use client";

import { useState } from "react";
import { MC_COLORS, STAFF, TRAILS } from "@/lib/site";

const TABS = ["Trails", "Glows", "Name Colors"] as const;

export default function Cosmetics() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Trails");
  const [name, setName] = useState(MC_COLORS[13]);
  const ign = STAFF[0]?.ign ?? "Player";

  return (
    <div className="cosmetics reveal">
      <div className="tabs" role="tablist">
        {TABS.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} className={`tab${tab === t ? " active" : ""}`} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>

      {tab === "Trails" && (
        <div className="trail-grid" key="trails">
          {TRAILS.map((t, i) => (
            <div key={t.name} className="glass trail" style={{ "--c": t.color, animationDelay: `${i * 50}ms` } as React.CSSProperties}>
              <div className="trail-preview" aria-hidden="true">
                {Array.from({ length: 9 }, (_, p) => (
                  <i key={p} style={{ left: `${10 + ((p * 37) % 80)}%`, animationDelay: `${(p * 0.27) % 2}s`, animationDuration: `${1.6 + (p % 3) * 0.4}s` }} />
                ))}
              </div>
              <span className="trail-name">{t.name}</span>
            </div>
          ))}
        </div>
      )}

      {tab === "Glows" && (
        <div className="glow-grid" key="glows">
          {MC_COLORS.map((c, i) => (
            <div key={c.name} className="glow" style={{ "--c": c.hex, animationDelay: `${i * 30}ms` } as React.CSSProperties}>
              <span className="glow-swatch" />
              <span className="glow-name">{c.name}</span>
            </div>
          ))}
          <div className="glow rainbow">
            <span className="glow-swatch" />
            <span className="glow-name">Rainbow</span>
          </div>
        </div>
      )}

      {tab === "Name Colors" && (
        <div className="names" key="names">
          <div className="glass name-preview">
            <span className="name-chat">
              <span className="name-rank">[Owner]</span> <span style={{ color: name.hex }}>{ign}</span>
              <span className="name-msg">: gg, who wants a rematch?</span>
            </span>
            <span className="name-label">{name.name}</span>
          </div>
          <div className="name-swatches">
            {MC_COLORS.map((c) => (
              <button
                key={c.name}
                className={`name-swatch${name.name === c.name ? " active" : ""}`}
                style={{ background: c.hex }}
                onClick={() => setName(c)}
                aria-label={c.name}
                title={c.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
