import {
  BATTLE_PASS,
  DAILY_REWARDS,
  DIVISIONS,
  FAQ,
  JOIN_STEPS,
  KITS,
  MARQUEE,
  MEMBERS,
  NEW_PLAYER_PERKS,
  PLAYER_RANKS,
  SOCIALS,
  STAFF_RANKS,
  STORE_URL,
  VERSION,
} from "@/lib/site";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Hotbar from "@/components/Hotbar";
import BattlePass from "@/components/BattlePass";
import Scoreboard from "@/components/Scoreboard";
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

        {/* LOBBY */}
        <section id="lobby" className="section">
          <SectionHead
            eyebrow="The Lobby"
            title={<>Everything is <span className="grad">one click away</span></>}
            text="Queue, edit kits, party up and check your stats straight from your hotbar. This is exactly what you get when you join."
          />
          <div className="lobby">
            <Hotbar />
            <Scoreboard />
          </div>
        </section>

        {/* KITS */}
        <section id="kits" className="section">
          <SectionHead
            eyebrow="Kits"
            title={<>Pick your <span className="grad">weapon</span></>}
            text={`Modern ${VERSION} kits with ranked and unranked queues. Customize every layout in the Kit Editor.`}
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
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DIVISIONS */}
        <section id="divisions" className="section">
          <SectionHead
            eyebrow="Divisions"
            title={<>Iron to <span className="grad">Netherite</span></>}
            text="Win ranked matches, earn ELO and climb. Hover any rank to see what it takes."
          />
          <div className="ladder reveal">
            {DIVISIONS.map((d, gi) => (
              <div key={d.family} className="ladder-group" style={{ "--c": d.color } as Vars}>
                <span className="ladder-family">{d.family}</span>
                <div className="ladder-tiers">
                  {d.tiers.map((elo, ti) => {
                    const label = d.tiers.length > 1 ? `${d.family} ${ti + 1}` : d.family;
                    return (
                      <div key={label} className={`rank-gem${gi === DIVISIONS.length - 1 ? " top" : ""}`} tabIndex={0}>
                        <Icon name={gi === DIVISIONS.length - 1 ? "crown" : "gem"} size={gi === DIVISIONS.length - 1 ? 34 : 24} />
                        {d.tiers.length > 1 && <span className="rank-num">{ti + 1}</span>}
                        <div className="mc-tooltip gem-tip" role="tooltip">
                          <span className="mc-tooltip-title" style={{ color: d.color }}>{label}</span>
                          <p>To reach this rank you need {elo} elo.</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <span className="ladder-elo">{d.tiers[0]}+ ELO</span>
              </div>
            ))}
          </div>
        </section>

        {/* BATTLE PASS */}
        <section id="battlepass" className="section">
          <SectionHead
            eyebrow="Battle Pass"
            title={<>Unlock <span className="grad">exclusive rewards</span></>}
            text={`${BATTLE_PASS.maxLevel} levels, a new tier every 5. Trails, glows, chat colors, kill effects and more. Click a tier to see what's inside.`}
          />
          <BattlePass />
        </section>

        {/* DAILY REWARDS */}
        <section id="daily" className="section">
          <SectionHead
            eyebrow="Daily Rewards"
            title={<>You get XP <span className="grad">to level up</span></>}
            text="Log in every day to earn XP and level up. Keep your 7-day streak alive for the biggest XP bonus."
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
                  <Icon name={d.big ? "rocket" : i < 3 ? "shield" : "bolt"} size={d.big ? 48 : 28} />
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
            eyebrow="Cosmetics Shop"
            title={<>Customize your <span className="grad">appearance</span></>}
            text="Browse trails, glows and name colors. Find the Cosmetics Shop NPC in the lobby."
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

        {/* RANKS */}
        <section id="ranks" className="section">
          <SectionHead
            eyebrow="Ranks"
            title={<>Every rank on <span className="grad">Chlamba</span></>}
            text="Support the server with a player rank, or meet the staff ranks that keep it running."
          />
          <div className="ranks">
            <div className="ranks-col">
              <h3 className="ranks-title">Player Ranks</h3>
              {PLAYER_RANKS.map((r) => (
                <div key={r.name} className="glass player-rank reveal" style={{ "--c": r.color } as Vars}>
                  <span className="rank-tag">[{r.name}]</span>
                  <p>{r.text}</p>
                </div>
              ))}
              <a href={STORE_URL} target="_blank" rel="noopener" className="btn btn-ghost ranks-store">
                Get a rank
              </a>
            </div>
            <div className="ranks-col">
              <h3 className="ranks-title">Staff Ranks</h3>
              <div className="glass staff-ladder reveal">
                {Object.entries(STAFF_RANKS).map(([name, color], i) => (
                  <div key={name} className="staff-step" style={{ "--c": color } as Vars}>
                    <span className="staff-step-num">{i + 1}</span>
                    <span className="rank-tag">[{name}]</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STAFF */}
        <section id="staff" className="section">
          <SectionHead
            eyebrow="The Team"
            title={<>Meet the <span className="grad">Staff</span></>}
            text={`The team behind Chlamba, keeping ${MEMBERS}+ members safe and every fight fair.`}
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
              <p>Launch Minecraft {VERSION}, add the server and hit ranked.</p>
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" className="logo-img" width={36} height={36} />
          CHLAMBA
        </div>
        <p>&copy; {new Date().getFullYear()} Chlamba Network. Not affiliated with Mojang AB or Microsoft.</p>
      </footer>

      <Toast />
      <RevealObserver />
    </>
  );
}
