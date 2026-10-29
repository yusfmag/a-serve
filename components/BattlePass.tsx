"use client";

import { useState } from "react";
import { BATTLE_PASS, MC_COLORS, REWARD_TYPES, type RewardType } from "@/lib/site";
import Icon from "./Icon";

const { maxLevel, currentLevel, tiers } = BATTLE_PASS;
const currentTier = Math.max(0, tiers.findIndex((t) => currentLevel >= t.from && currentLevel <= t.to));

// "Dark Red Glow" -> the Dark Red swatch; falls back to the reward type's color
const COLOR_NAMES = [...MC_COLORS].sort((a, b) => b.name.length - a.name.length);
function swatchFor(name: string, type: RewardType) {
  if (type !== "Glow" && type !== "Chat Color") return null;
  return COLOR_NAMES.find((c) => name.startsWith(c.name + " "))?.hex ?? null;
}

function tierState(i: number) {
  if (tiers[i].to < currentLevel) return "done";
  return i === currentTier ? "current" : "locked";
}

export default function BattlePass() {
  const [selected, setSelected] = useState(currentTier);
  const tier = tiers[selected];
  const state = tierState(selected);
  const counts = Object.entries(
    tiers.flatMap((t) => t.rewards).reduce<Record<string, number>>((acc, r) => ({ ...acc, [r.type]: (acc[r.type] ?? 0) + 1 }), {})
  );

  return (
    <div className="glass bp reveal">
      <div className="bp-top">
        <div>
          <span className="bp-label">Your progress</span>
          <div className="bp-tier">
            Level {currentLevel} <span>/ {maxLevel}</span>
          </div>
        </div>
        <div className="bp-total">
          <Icon name="gift" size={16} /> {tiers.reduce((n, t) => n + t.rewards.length, 0)} rewards to unlock
        </div>
      </div>

      <div className="bp-bar">
        <div className="bp-fill" style={{ width: `${(currentLevel / maxLevel) * 100}%` }} />
        {tiers.slice(0, -1).map((t) => (
          <span key={t.to} className="bp-mark" style={{ left: `${(t.to / maxLevel) * 100}%` }} />
        ))}
      </div>

      <div className="bp-tiers" role="tablist" aria-label="Battle pass tiers">
        {tiers.map((t, i) => {
          const s = tierState(i);
          return (
            <button
              key={t.from}
              role="tab"
              aria-selected={selected === i}
              className={`bp-node ${s}${selected === i ? " active" : ""}`}
              onClick={() => setSelected(i)}
            >
              <span className="bp-node-icon">
                <Icon name={s === "locked" ? "lock" : s === "done" ? "shield" : "sparkle"} size={16} />
              </span>
              <span className="bp-node-lv">
                {t.from}–{t.to}
              </span>
            </button>
          );
        })}
      </div>

      <div className="bp-detail">
        <div className="mc-tooltip bp-tooltip" key={selected}>
          <span className="bp-tt-head">
            {state === "locked" ? <Icon name="lock" size={14} /> : <span className="bp-diamond">◆</span>}
            <span className={state === "locked" ? "bp-tt-locked" : "bp-tt-open"}>
              Level {tier.from}-{tier.to}
            </span>
          </span>
          <span className="bp-tt-state">{state === "locked" ? "Locked tier" : state === "done" ? "Unlocked" : "In progress"}</span>

          <span className="bp-tt-sub">Tier Rewards</span>
          <p>
            {state === "locked" ? (
              <>Reach <b>Level {tier.from}</b> to unlock these items. </>
            ) : state === "current" ? (
              <>You are <b>currently working</b> on this tier. </>
            ) : null}
            {tier.text}
          </p>

          <ul className="bp-rewards">
            {tier.rewards.map((r) => {
              const meta = REWARD_TYPES[r.type];
              const swatch = swatchFor(r.name, r.type);
              return (
                <li key={r.name} className={state === "locked" ? "locked" : ""} style={{ "--c": meta.color } as React.CSSProperties}>
                  <span className="bp-r-icon">
                    {swatch ? <i className="bp-swatch" style={{ background: swatch }} /> : <Icon name={meta.icon} size={14} />}
                  </span>
                  <span className="bp-r-name">{r.name}</span>
                  <span className="bp-r-type">{r.type}</span>
                </li>
              );
            })}
          </ul>

          <span className="bp-tt-foot">
            ⓘ {state === "locked" ? "Level up to unlock" : state === "current" ? "Almost done, keep going" : "All rewards claimed"}
          </span>
        </div>

        <div className="bp-summary">
          <span className="bp-label">Across all 50 levels</span>
          {counts.map(([type, n]) => {
            const meta = REWARD_TYPES[type as RewardType];
            return (
              <div key={type} className="bp-sum-row" style={{ "--c": meta.color } as React.CSSProperties}>
                <span className="bp-r-icon">
                  <Icon name={meta.icon} size={14} />
                </span>
                <span>{n > 1 ? `${type}s` : type}</span>
                <b>{n}</b>
              </div>
            );
          })}
          <p className="bp-xp-note">
            <Icon name="bolt" size={14} /> Earn XP from matches and daily rewards to level up.
          </p>
        </div>
      </div>
    </div>
  );
}
