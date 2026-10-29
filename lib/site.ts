// ============================================================
//  EDIT THIS FILE — every piece of text on the site lives here
// ============================================================

export const SERVER_IP = "tn.ititan.org";
export const VERSION = "1.21.11";
export const DISCORD_URL = "https://discord.gg/your-invite";
export const STORE_URL = "https://store.chlamba.net";
export const MEMBERS = 500;

export const RANKS: Record<string, string> = {
  Owner: "#ff4d6d",
  Admin: "#ff9f1c",
  Developer: "#3ec5ff",
  Moderator: "#00e0a4",
  Helper: "#ffd23f",
  Builder: "#b86bff",
};

// "ign" = Minecraft username. The 3D skin render loads from it automatically.
export const STAFF = [
  { ign: "Notch", rank: "Owner", bio: "Founder of Chlamba. Sets the vision for the network." },
  { ign: "jeb_", rank: "Admin", bio: "Runs operations, events and the staff team." },
  { ign: "Dinnerbone", rank: "Developer", bio: "Builds the custom plugins behind every mode." },
  { ign: "Grumm", rank: "Moderator", bio: "Keeps chat clean and every fight fair." },
  { ign: "Technoblade", rank: "Moderator", bio: "Handles reports, appeals and anti-cheat reviews." },
  { ign: "Dream", rank: "Helper", bio: "First face new players meet. Ask anything." },
  { ign: "Grian", rank: "Builder", bio: "Designed spawn, the arenas and the lobby." },
];

// Skin shown in the hero
export const HERO_SKIN = "Technoblade";

export const MARQUEE = [
  "Modern Practice",
  `Version ${VERSION}`,
  "Ranked & Unranked",
  "Crystal • Sword • Axe • Mace",
  "Season 1 Battle Pass",
  "Daily Rewards",
  "Unique Cosmetics",
  "New Player Perks",
];

export type IconName =
  | "sword" | "shield" | "trophy" | "bolt" | "crown" | "gift" | "star" | "sparkle"
  | "calendar" | "users" | "rocket" | "lock" | "chest" | "flame" | "eye" | "target"
  | "axe" | "gem" | "potion" | "mace" | "heart";

// Practice kits. Each one has its own ranked + unranked queue.
export const KITS: { name: string; icon: IconName; color: string; text: string }[] = [
  { name: "Crystal", icon: "gem", color: "#ff4d8d", text: "End crystals, anchors and totems. Pure vanilla chaos." },
  { name: "Sword", icon: "sword", color: "#3ec5ff", text: "Diamond sword and shield. Spacing and crits decide it." },
  { name: "Axe", icon: "axe", color: "#ff9f1c", text: "Shield breaks and axe crits. Read your opponent." },
  { name: "Mace", icon: "mace", color: "#b86bff", text: "Wind charges and smash attacks from the sky." },
  { name: "UHC", icon: "heart", color: "#ffd23f", text: "No natural regen. Golden apples, lava and rods." },
  { name: "NethOP", icon: "potion", color: "#ff4d6d", text: "Full netherite, potions and totems. High-stakes." },
  { name: "Pot", icon: "flame", color: "#00e0a4", text: "Diamond gear and splash potions. Classic pot PvP." },
  { name: "SMP", icon: "shield", color: "#7b8cff", text: "Real survival loadouts: pearls, shields, gaps." },
];

// ELO divisions shown on the ranked ladder
export const DIVISIONS = [
  { name: "Bronze", elo: "0", color: "#c47a3e" },
  { name: "Silver", elo: "1000", color: "#b8c4d6" },
  { name: "Gold", elo: "1300", color: "#ffc53d" },
  { name: "Platinum", elo: "1600", color: "#3ee6c8" },
  { name: "Diamond", elo: "1900", color: "#3ec5ff" },
  { name: "Netherite", elo: "2200", color: "#ff4d8d" },
];

export const PVP_FEATURES: { icon: IconName; title: string; text: string; color: string }[] = [
  { icon: "target", title: "Ranked Queues", text: "ELO matchmaking per kit, placement matches and seasonal divisions from Bronze to Netherite.", color: "#ff4d6d" },
  { icon: "sword", title: "Unranked & Duels", text: "Warm up in unranked or /duel anyone with any kit, arena and round count.", color: "#00e0a4" },
  { icon: "users", title: "Parties", text: "Party up for split fights, party FFA and 2v2 / 3v3 team queues.", color: "#b86bff" },
  { icon: "flame", title: "FFA Arenas", text: "Drop in, fight, respawn. Kit-based free-for-all arenas that never close.", color: "#ff9f1c" },
  { icon: "trophy", title: "Leaderboards & Stats", text: "Per-kit ELO, win streaks and global top 10. Every hit is tracked.", color: "#ffd23f" },
  { icon: "shield", title: "Fair Play", text: `Modern ${VERSION} combat, low-ping hosting, anti-cheat and active staff review.`, color: "#3ec5ff" },
];

// Battle pass tiers. "current" is the sample progress shown on the track.
export const BATTLE_PASS = {
  season: "Season 1 — Awakening",
  endsIn: "42 days",
  current: 4,
  tiers: [
    { free: "100 Coins", premium: "Ember Trail" },
    { free: "Common Crate", premium: "Spark Kill Effect" },
    { free: "250 Coins", premium: "\"Rising\" Title" },
    { free: "XP Boost 1h", premium: "Rare Crate" },
    { free: "Daily Key", premium: "Frost Cage" },
    { free: "500 Coins", premium: "Voltage Trail" },
    { free: "Epic Crate", premium: "Thunder Kill Effect" },
    { free: "XP Boost 3h", premium: "Animated Banner" },
    { free: "1000 Coins", premium: "\"Awakened\" Title" },
    { free: "Legendary Crate", premium: "Mythic Dragon Wings" },
  ],
};

export const DAILY_REWARDS = [
  { day: 1, reward: "50 Coins" },
  { day: 2, reward: "Common Key" },
  { day: 3, reward: "100 Coins" },
  { day: 4, reward: "XP Boost" },
  { day: 5, reward: "Rare Key" },
  { day: 6, reward: "250 Coins" },
  { day: 7, reward: "Mystery Crate", big: true },
];

export const RARITY: Record<string, string> = {
  Common: "#9aa3b8",
  Rare: "#3ec5ff",
  Epic: "#b86bff",
  Legendary: "#ff9f1c",
  Mythic: "#ff4d8d",
};

export const COSMETICS: Record<string, { name: string; rarity: string; icon: IconName }[]> = {
  "Kill Effects": [
    { name: "Thunder Strike", rarity: "Legendary", icon: "bolt" },
    { name: "Soul Burst", rarity: "Epic", icon: "sparkle" },
    { name: "Blood Moon", rarity: "Mythic", icon: "eye" },
    { name: "Firework", rarity: "Rare", icon: "star" },
  ],
  Trails: [
    { name: "Ember Trail", rarity: "Rare", icon: "flame" },
    { name: "Voltage", rarity: "Epic", icon: "bolt" },
    { name: "Stardust", rarity: "Legendary", icon: "sparkle" },
    { name: "Void Walker", rarity: "Mythic", icon: "eye" },
  ],
  Cages: [
    { name: "Glass Box", rarity: "Common", icon: "lock" },
    { name: "Frost Cage", rarity: "Rare", icon: "lock" },
    { name: "Nether Gate", rarity: "Epic", icon: "flame" },
    { name: "Dragon Lair", rarity: "Mythic", icon: "crown" },
  ],
  Titles: [
    { name: "Rookie", rarity: "Common", icon: "star" },
    { name: "Duelist", rarity: "Epic", icon: "sword" },
    { name: "Awakened", rarity: "Legendary", icon: "crown" },
    { name: "Untouchable", rarity: "Mythic", icon: "shield" },
  ],
};

export const NEW_PLAYER_PERKS: { icon: IconName; title: string; text: string }[] = [
  { icon: "chest", title: "Welcome Crate", text: "A free crate with a guaranteed Rare cosmetic the moment you join." },
  { icon: "star", title: "Exclusive Rookie Tag", text: "A unique tag only new players get. Never sold, never repeated." },
  { icon: "rocket", title: "2x XP First Week", text: "Level up your battle pass twice as fast for your first 7 days." },
  { icon: "shield", title: "Spawn Protection", text: "30 minutes of protection to learn the ropes before the fights begin." },
  { icon: "gift", title: "Starter Kit", text: "Full gear set and a coin bonus so you can compete from day one." },
  { icon: "users", title: "Helper Guide", text: "A real staff member ready to show you around. Just type /helpme." },
];

export const JOIN_STEPS = [
  { title: "Launch Minecraft", text: `Open Minecraft Java Edition on version ${VERSION}.` },
  { title: "Add the server", text: "Go to Multiplayer → Add Server and paste the IP." },
  { title: "Pick a kit & queue", text: "Open your Welcome Crate, choose a kit and hit ranked or unranked." },
];

export const FAQ = [
  { q: "What version do I need?", a: `Chlamba runs on ${VERSION}. Join with Java Edition ${VERSION} for the full modern practice experience.` },
  { q: "Which kits can I play?", a: "Crystal, Sword, Axe, Mace, UHC, NethOP, Pot and SMP, each with its own ranked and unranked queue." },
  { q: "How does ranked work?", a: "Each kit has its own ELO. Play placement matches, then climb from Bronze to Netherite. Divisions reset every season." },
  { q: "Is the server free to play?", a: "Yes. Everything that affects gameplay is free. The store only sells cosmetics and the premium battle pass track." },
  { q: "How does the battle pass work?", a: "Earn XP by playing matches and completing daily challenges. Each tier unlocks a free reward, and premium owners get an extra exclusive reward per tier." },
  { q: "How do daily rewards work?", a: "Log in every day and type /daily. Keep your streak for 7 days to unlock the Mystery Crate." },
  { q: "How do I report a cheater or apply for staff?", a: "Open a ticket in our Discord. Staff applications open regularly, so watch the announcements channel." },
];

export type SocialIcon = "discord" | "youtube" | "tiktok" | "instagram" | "x" | "store";

export const SOCIALS: { name: string; handle: string; url: string; color: string; icon: SocialIcon }[] = [
  { name: "Discord", handle: `${MEMBERS}+ members`, url: DISCORD_URL, color: "#5865F2", icon: "discord" },
  { name: "YouTube", handle: "@chlamba", url: "https://youtube.com/@chlamba", color: "#ff3b3b", icon: "youtube" },
  { name: "TikTok", handle: "@chlamba", url: "https://tiktok.com/@chlamba", color: "#25f4ee", icon: "tiktok" },
  { name: "Instagram", handle: "@chlamba", url: "https://instagram.com/chlamba", color: "#e4405f", icon: "instagram" },
  { name: "X", handle: "@chlamba", url: "https://x.com/chlamba", color: "#e7e9ea", icon: "x" },
  { name: "Store", handle: "Cosmetics & Pass", url: STORE_URL, color: "#ffd23f", icon: "store" },
];
