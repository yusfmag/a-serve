"use client";

import { useState } from "react";
import { COSMETICS, RARITY } from "@/lib/site";
import Icon from "./Icon";

export default function Cosmetics() {
  const tabs = Object.keys(COSMETICS);
  const [tab, setTab] = useState(tabs[0]);

  return (
    <div className="cosmetics reveal">
      <div className="tabs" role="tablist">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} className={`tab${tab === t ? " active" : ""}`} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>

      <div className="cosmetic-grid" key={tab}>
        {COSMETICS[tab].map((c, i) => (
          <div
            key={c.name}
            className="glass cosmetic"
            style={{ "--c": RARITY[c.rarity], animationDelay: `${i * 70}ms` } as React.CSSProperties}
          >
            <div className="cosmetic-preview">
              <span className="cosmetic-icon">
                <Icon name={c.icon} size={40} />
              </span>
            </div>
            <div className="cosmetic-info">
              <span className="cosmetic-name">{c.name}</span>
              <span className="rarity">{c.rarity}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="rarity-legend">
        {Object.entries(RARITY).map(([name, color]) => (
          <span key={name} style={{ color }}>
            <i style={{ background: color }} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
