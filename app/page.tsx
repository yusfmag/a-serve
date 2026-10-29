import {
  BATTLE_PASS,
  DAILY_REWARDS,
  DIVISIONS,
  FAQ,
  KITS,
  VERSION,
  JOIN_STEPS,
  MARQUEE,
  MEMBERS,
  NEW_PLAYER_PERKS,
  PVP_FEATURES,
  SOCIALS,
  STORE_URL,
} from "@/lib/site";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Staff from "@/components/Staff";
import Cosmetics from "@/components/Cosmetics";
import Icon from "@/components/Icon";
import { CopyButton, IpCard } from "@/components/CopyIp";
import { Particles, RevealObserver, Toast } from "@/components/Effects";

type Vars = React.CSSProperties & Record<`--${string}`, string | number>;

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text: string }) {
  return (
    <div className="section-head reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default function Home() {
  const progress = (BATTLE_PASS.current / BATTLE_PASS.tiers.length) * 100;

  return (
    <>
      <Particles />
      <div className="bg-grid" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      <Nav />

      <main>
        <Hero />

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={i}>
                {m}
                <i className="marquee-dot" />
              </span>
            ))}
          </div>
        </div>

        {/* KITS */}
        <section id="kits" className="section">
          <SectionHead
            eyebrow="Kits"
            title={<>Pick your <span className="grad">weapon</span></>}
            text={`Eight modern ${VERSION} kits, each with its own ranked ladder, unranked queue and FFA arena.`}
          />
          <div className="kits">
            {KITS.map((k) => (
              <div key={k.name} className="glass kit reveal" style={{ "--c": k.color } as Vars}>
                <div className="kit-icon">
                  <Icon name={k.icon} size={30} />
                </div>
                <h3>{k.name}</h3>
                <p>{k.text}</p>
                <div className="kit-tags">
                  <span>Ranked</span>
                  <span>Unranked</span>
                  <span>FFA</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RANKED */}
        <section id="ranked" className="section">
          <SectionHead
            eyebrow="Ranked"
            title={<>Climb to <span className="grad">Netherite</span></>}
            text="Every kit has its own ELO. Win placements, climb divisions and finish the season with exclusive rewards."
          />
          <div className="divisions reveal">
            {DIVISIONS.map((d, i) => (
              <div key={d.name} className="division" style={{ "--c": d.color, "--h": `${40 + i * 12}%` } as Vars}>
                <div className="division-bar">
                  <Icon name={i === DIVISIONS.length - 1 ? "crown" : "shield"} size={26} />
                </div>
                <span className="division-name">{d.name}</span>
                <span className="division-elo">{d.elo}+ ELO</span>
              </div>
            ))}
          </div>
        </section>

        {/* PRACTICE FEATURES */}
        <section id="pvp" className="section">
          <SectionHead
            eyebrow="Modern Practice"
            title={<>Built for <span className="grad">real fighters</span></>}
            text="Queues, parties, FFA and stats. Everything a practice server needs, tuned by players who actually PvP."
          />
          <div className="features">
            {PVP_FEATURES.map((f) => (
              <div key={f.title} className="glass feature reveal" style={{ "--c": f.color } as Vars}>
                <div className="feature-icon">
                  <Icon name={f.icon} size={26} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BATTLE PASS */}
        <section id="battlepass" className="section">
          <SectionHead
            eyebrow="Battle Pass"
            title={<>{BATTLE_PASS.season.split("—")[0]}<span className="grad">—{BATTLE_PASS.season.split("—")[1]}</span></>}
            text="Play, complete challenges and unlock a reward at every tier. Free for everyone, with an exclusive premium track."
          />

          <div className="glass bp reveal">
            <div className="bp-top">
              <div>
                <span className="bp-label">Season progress</span>
                <div className="bp-tier">
                  Tier {BATTLE_PASS.current} <span>/ {BATTLE_PASS.tiers.length}</span>
                </div>
              </div>
              <div className="bp-ends">
                <Icon name="calendar" size={16} /> Ends in {BATTLE_PASS.endsIn}
              </div>
            </div>
            <div className="bp-bar">
              <div className="bp-fill" style={{ width: `${progress}%` }} />
            </div>

            <div className="bp-track">
              <div className="bp-rowlabels">
                <span className="lbl-premium"><Icon name="crown" size={14} /> Premium</span>
                <span className="lbl-free">Free</span>
              </div>
              <div className="bp-scroll">
                {BATTLE_PASS.tiers.map((t, i) => {
                  const n = i + 1;
                  const state = n < BATTLE_PASS.current ? "done" : n === BATTLE_PASS.current ? "current" : "locked";
                  const last = n === BATTLE_PASS.tiers.length;
                  return (
                    <div key={n} className={`bp-col ${state}${last ? " final" : ""}`}>
                      <div className="bp-cell premium">
                        <Icon name={last ? "sparkle" : "crown"} size={20} />
                        <span>{t.premium}</span>
                      </div>
                      <div className="bp-num">{n}</div>
                      <div className="bp-cell free">
                        <Icon name="gift" size={18} />
                        <span>{t.free}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* DAILY REWARDS */}
        <section id="daily" className="section">
          <SectionHead
            eyebrow="Daily Rewards"
            title={<>Log in. <span className="grad">Get paid.</span></>}
            text="Type /daily every day. Keep your 7-day streak alive to unlock the Mystery Crate."
          />
          <div className="daily">
            {DAILY_REWARDS.map((d, i) => (
              <div
                key={d.day}
                className={`glass day reveal${d.big ? " big" : ""}${i < 3 ? " claimed" : ""}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="day-num">Day {d.day}</span>
                <span className="day-icon">
                  <Icon name={d.big ? "chest" : i < 3 ? "shield" : "gift"} size={d.big ? 48 : 28} />
                </span>
                <span className="day-reward">{d.reward}</span>
                {i < 3 && <span className="day-check">Claimed</span>}
              </div>
            ))}
          </div>
        </section>

        {/* COSMETICS */}
        <section id="cosmetics" className="section">
          <SectionHead
            eyebrow="Unique Cosmetics"
            title={<>Stand out <span className="grad">in every fight</span></>}
            text="Kill effects, trails, cages and titles designed in-house. Most can only be earned and are never sold."
          />
          <Cosmetics />
        </section>

        {/* NEW PLAYERS */}
        <section id="newplayers" className="section">
          <div className="newbie glass reveal">
            <div className="newbie-head">
              <span className="eyebrow">New here?</span>
              <h2>
                Perks only <span className="grad">new players</span> get
              </h2>
              <p>Your first week on Chlamba comes loaded. Every perk is unique to new players and can&apos;t be bought.</p>
            </div>
            <div className="perks">
              {NEW_PLAYER_PERKS.map((p) => (
                <div key={p.title} className="perk">
                  <span className="perk-icon">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STAFF */}
        <section id="staff" className="section">
          <SectionHead
            eyebrow="The Team"
            title={<>Meet the <span className="grad">Staff</span></>}
            text={`The people behind Chlamba, keeping ${MEMBERS}+ members safe, every fight fair and every event fun.`}
          />
          <Staff />
        </section>

        {/* HOW TO JOIN */}
        <section id="join" className="section">
          <SectionHead eyebrow="Get Started" title={<>Join in <span className="grad">30 seconds</span></>} text="Three steps between you and your first win." />
          <div className="steps">
            {JOIN_STEPS.map((s, i) => (
              <div key={s.title} className="glass step reveal">
                <span className="step-num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="join-ip reveal">
            <IpCard />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section section-narrow">
          <SectionHead eyebrow="FAQ" title="Questions? Answered." text="Everything you need to know before you jump in." />
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q} className="glass faq-item reveal">
                <summary>
                  {f.q}
                  <span className="faq-plus" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* SOCIALS */}
        <section id="socials" className="section">
          <SectionHead
            eyebrow="Community"
            title={<>Join the <span className="grad">squad</span></>}
            text="Updates, events, giveaways and clips. Follow us everywhere."
          />
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.name} className="glass social reveal" href={s.url} target="_blank" rel="noopener" style={{ "--c": s.color } as Vars}>
                <span className="social-icon">
                  <Icon name={s.icon} />
                </span>
                <span>
                  <span className="s-name">{s.name}</span>
                  <span className="s-handle">{s.handle}</span>
                </span>
                <span className="arrow">↗</span>
              </a>
            ))}
          </div>

          <div className="cta reveal">
            <div className="cta-glow" />
            <div>
              <h3>Ready to fight?</h3>
              <p>Launch Minecraft, add the server and claim your Welcome Crate.</p>
            </div>
            <div className="cta-actions">
              <a href={STORE_URL} target="_blank" rel="noopener" className="btn btn-ghost">
                Visit Store
              </a>
              <CopyButton />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="logo">
          <span className="logo-mark" />
          CHLAMBA
        </div>
        <p>&copy; {new Date().getFullYear()} Chlamba Network. Not affiliated with Mojang AB or Microsoft.</p>
      </footer>

      <Toast />
      <RevealObserver />
    </>
  );
}
