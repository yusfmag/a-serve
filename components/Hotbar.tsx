"use client";

import { useState } from "react";
import { HOTBAR } from "@/lib/site";
import Icon from "./Icon";

export default function Hotbar() {
  const [selected, setSelected] = useState(0);
  const item = HOTBAR[selected];

  return (
    <div className="hotbar-wrap reveal">
      <div className="hotbar" role="tablist" aria-label="Lobby hotbar">
        {HOTBAR.map((slot, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={selected === i}
            aria-label={slot?.name ?? "Empty slot"}
            disabled={!slot}
            className={`slot${selected === i ? " active" : ""}`}
            onClick={() => slot && setSelected(i)}
            style={slot ? ({ "--c": slot.color } as React.CSSProperties) : undefined}
          >
            {slot && <Icon name={slot.icon} size={28} />}
            <span className="slot-key">{i + 1}</span>
          </button>
        ))}
      </div>

      {item && (
        <div className="mc-tooltip hotbar-detail" key={selected} style={{ "--c": item.color } as React.CSSProperties}>
          <span className="mc-tooltip-title">{item.name}</span>
          <p>{item.text}</p>
          <span className="mc-tooltip-action">{item.action}</span>
        </div>
      )}
      <p className="hotbar-hint">Click a slot — or press 1–9 in game</p>
    </div>
  );
}
