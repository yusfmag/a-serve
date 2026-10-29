"use client";

import { useEffect, useState } from "react";
import { SERVER_IP } from "./site";

export type ServerStatus = { state: "loading" | "online" | "offline" | "error"; players?: number; max?: number };

// Free public API, no key needed. Results are shared between components on the page.
let request: Promise<ServerStatus> | null = null;

function load() {
  request ??= fetch(`https://api.mcsrvstat.us/3/${SERVER_IP}`)
    .then((r) => r.json())
    .then((d): ServerStatus => (d.online ? { state: "online", players: d.players?.online ?? 0, max: d.players?.max } : { state: "offline" }))
    .catch((): ServerStatus => ({ state: "error" }));
  return request;
}

export function useServerStatus() {
  const [status, setStatus] = useState<ServerStatus>({ state: "loading" });
  useEffect(() => {
    load().then(setStatus);
  }, []);
  return status;
}
