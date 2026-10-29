"use client";

import { SERVER_IP, VERSION } from "@/lib/site";
import { useServerStatus } from "@/lib/useServerStatus";

// Recreates the in-game sidebar scoreboard, with the live player count
export default function Scoreboard() {
  const status = useServerStatus();
  const online = status.state === "online" ? status.players : status.state === "loading" ? "…" : 0;

  return (
    <aside className="scoreboard reveal" aria-label="In-game scoreboard">
      <div className="sb-title">CHLAMBA PRACTICE</div>
      <div className="sb-group">
        <span className="sb-head">▌ Server Stats</span>
        <span>Online: <b>{online}</b></span>
        <span>Version: <b>{VERSION}</b></span>
      </div>
      <div className="sb-group">
        <span className="sb-head">▌ Your Profile</span>
        <span>Rank: <b className="sb-rank">default</b></span>
        <span>Division: <b className="sb-div">Iron 1</b></span>
      </div>
      <div className="sb-ip">{SERVER_IP}</div>
    </aside>
  );
}
