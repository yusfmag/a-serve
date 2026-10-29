"use client";

import { SERVER_IP } from "@/lib/site";

export async function copyIp() {
  let msg = "Server IP copied. See you in game!";
  try {
    await navigator.clipboard.writeText(SERVER_IP);
  } catch {
    msg = `Server IP: ${SERVER_IP}`;
  }
  dispatchEvent(new CustomEvent("toast", { detail: msg }));
}

export function IpCard() {
  return (
    <button className="ip-card" type="button" onClick={copyIp} aria-label="Copy server IP">
      <span className="ip-meta">Server IP</span>
      <span className="ip">{SERVER_IP}</span>
      <span className="ip-copy">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
          <path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1Zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H8V7h11v14Z" />
        </svg>
        Copy
      </span>
    </button>
  );
}

export function CopyButton({ label = "Copy IP", className = "btn btn-primary" }: { label?: string; className?: string }) {
  return (
    <button className={className} type="button" onClick={copyIp}>
      {label}
    </button>
  );
}
