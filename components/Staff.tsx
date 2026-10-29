"use client";

import { useState } from "react";
import { RANKS, STAFF } from "@/lib/site";

export default function Staff() {
  const [filter, setFilter] = useState("All");
  const ranks = ["All", ...Object.keys(RANKS).filter((r) => STAFF.some((s) => s.rank === r))];
  const list = filter === "All" ? STAFF : STAFF.filter((s) => s.rank === filter);

  return (
    <>
      <div className="filters reveal" role="tablist">
        {ranks.map((r) => (
          <button
            key={r}
            role="tab"
            aria-selected={filter === r}
            className={`filter${filter === r ? " active" : ""}`}
            onClick={() => setFilter(r)}
          >
            {r !== "All" && <span className="filter-dot" style={{ background: RANKS[r] }} />}
            {r}
          </button>
        ))}
      </div>

      <div className="staff-grid">
        {list.map((s, i) => (
          <div
            key={s.ign}
            className="glass staff-card"
            style={{ "--c": RANKS[s.rank] ?? "#8b93a7", animationDelay: `${i * 60}ms` } as React.CSSProperties}
          >
            <div className="staff-visual">
              <span className="rank">{s.rank}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://mc-heads.net/body/${encodeURIComponent(s.ign)}/200`} alt={`${s.ign}'s skin`} loading="lazy" />
            </div>
            <div className="staff-name">{s.ign}</div>
            <p className="staff-bio">{s.bio}</p>
          </div>
        ))}
      </div>
    </>
  );
}
