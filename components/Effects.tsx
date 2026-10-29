"use client";

import { useEffect, useRef, useState } from "react";

// Floating pixel particles behind the whole page
export function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    let raf = 0;
    let dots: { x: number; y: number; s: number; v: number; a: number; g: boolean }[] = [];

    const resize = () => {
      c.width = innerWidth;
      c.height = innerHeight;
      dots = Array.from({ length: Math.min(80, Math.floor(innerWidth / 18)) }, () => ({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        s: Math.random() * 2.5 + 1,
        v: Math.random() * 0.4 + 0.1,
        a: Math.random() * 0.5 + 0.15,
        g: Math.random() > 0.5,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      for (const d of dots) {
        d.y -= d.v;
        if (d.y < -5) {
          d.y = c.height + 5;
          d.x = Math.random() * c.width;
        }
        ctx.fillStyle = d.g ? `rgba(0,224,164,${d.a})` : `rgba(123,92,255,${d.a})`;
        ctx.fillRect(d.x, d.y, d.s, d.s);
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}

// Adds .visible to every .reveal element as it scrolls into view
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

// Global toast. Trigger with: window.dispatchEvent(new CustomEvent("toast", { detail: "text" }))
export function Toast() {
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const onToast = (e: Event) => {
      setMsg((e as CustomEvent<string>).detail);
      setShow(true);
      clearTimeout(t);
      t = setTimeout(() => setShow(false), 2200);
    };
    addEventListener("toast", onToast);
    return () => removeEventListener("toast", onToast);
  }, []);

  return (
    <div className={`toast${show ? " show" : ""}`} role="status">
      {msg}
    </div>
  );
}

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min((t - start) / 1400, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    });
    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
