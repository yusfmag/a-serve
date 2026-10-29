// ============================================================
//  EDIT THIS FILE — every piece of text on the site lives here
// ============================================================

export const SERVER_IP = "chlamba.ititan.org";
export const VERSION = "1.21.11";
export const DISCORD_URL = "https://discord.gg/bKyda4nDvd";
export const STORE_URL = "https://store.chlamba.net";
export const MEMBERS = 500;

export type IconName =
  | "sword" | "shield" | "trophy" | "bolt" | "crown" | "gift" | "star" | "sparkle"
  | "calendar" | "users" | "rocket" | "lock" | "chest" | "flame" | "eye" | "target"
  | "axe" | "gem" | "potion" | "mace" | "heart" | "book" | "tag" | "compass" | "gear";

// Ranks, same order and names as the LuckPerms groups (highest weight first)
export const STAFF_RANKS: Record<string, string> = {
  Owner: "#ff4d6d",
  Creator: "#ff55ff",
  Admin: "#ff9f1c",
  Mod: "#3ec5ff",
  Helper: "#ffd23f",
};

export const PLAYER_RANKS = [
  { name: "MVP", color: "#55ffff", text: "Top supporter rank. Stand out in every lobby and queue." },
  { name: "VIP", color: "#55ff55", text: "Supporter rank. Thanks for keeping Chlamba running." },
  { name: "Default", color: "#aaaaaa", text: "Every player. Full access to every kit and queue." },
];

// "ign" = Minecraft username. The 3D skin render loads from it automatically.
export const STAFF = [
  { ign: "Tsukiym", rank: "Owner", bio: "Founder of Chlamba. Runs the server, the kits and the community." },
];

// Skin shown in the hero
export const HERO_SKIN = "Tsukiym";

export const MARQUEE = [
  "Modern Practice",
  `Version ${VERSION}`,
  "Ranked & Unranked",
  "Iron → Netherite Divisions",
  "Trails & Glows",
  "Kit Editor",
  "Parties",
  "Daily Rewards",
];

// The lobby hotbar, slot by slot. null = empty slot.
export const HOTBAR: ({ name: string; icon: IconName; color: string; action: string; text: string } | null)[] = [
  { name: "Unranked Queue", icon: "sword", color: "#aaaaaa", action: "Right-click to queue", text: "Jump into a casual match on any kit. No ELO on the line, perfect for warming up." },
  { name: "Ranked Queue", icon: "sparkle", color: "#55ffff", action: "Right-click to queue", text: "Fight for ELO and climb the divisions, from Iron all the way to Netherite." },
  { name: "Kit Editor", icon: "book", color: "#ffaa00", action: "Right-click to edit", text: "Rearrange every kit's layout exactly how you like it. Your layout follows you into every match." },
  null,
  { name: "Create Party", icon: "tag", color: "#ff55ff", action: "Right-click to create", text: "Invite your friends, then run party FFA, split fights or queue together." },
  null,
  { name: "Divisions", icon: "gem", color: "#55ff55", action: "Right-click to view", text: "See every rank, how much ELO each one needs and how close you are to the next." },
  { name: "Leaderboards", icon: "compass", color: "#ffff55", action: "Right-click to view", text: "Top players globally, plus your personal stats: kills, wins and losses." },
  { name: "Settings", icon: "gear", color: "#ff5555", action: "Right-click to open", text: "Toggle scoreboard, duel requests, spectators, time of day and more." },
];

// Practice kits. Each one has its own ranked + unranked queue.
export const KITS: { name: string; icon: IconName; color: string; text: string }[] = [
  { name: "Crystal", icon: "gem", color: "#ff4d8d", text: "End crystals, anchors and totems. Pure vanilla chaos." },
  { name: "Sword", icon: "sword", color: "#3ec5ff", text: "Diamond sword and shield. Spacing and crits decide it." },
  { name: "Axe", icon: "axe", color: "#ff9f1c", text: "Shield breaks and axe crits. Read your opponent." },
  { name: "Mace", icon: "mace", color: "#b86bff", text: "Wind charges and smash attacks from the sky." },
  { name: "UHC", icon: "heart", color: "#ffd23f", text: "No natural regen. Golden apples, lava and rods." },
  { name: "NethOP", icon: "potion", color: "#ff4d6d", text: "Full netherite, potions and totems. High stakes." },
  { name: "Pot", icon: "flame", color: "#00e0a4", text: "Diamond gear and splash potions. Classic pot PvP." },
  { name: "SMP", icon: "shield", color: "#7b8cff", text: "Real survival loadouts: pearls, shields, gaps." },
];

// Divisions as shown in the in-game /divisions menu.
// Emerald 3 = 1100 ELO is confirmed in game; the others assume 100 ELO per step — adjust to match your config.
export const DIVISIONS = [
  { family: "Iron", color: "#d8dde6", tiers: [0, 100, 200] },
  { family: "Gold", color: "#ffc53d", tiers: [300, 400, 500] },
  { family: "Diamond", color: "#5ef0ff", tiers: [600, 700, 800] },
  { family: "Emerald", color: "#3ee67a", tiers: [900, 1000, 1100] },
  { family: "Netherite", color: "#c9a8ff", tiers: [1200] },
];

// Minecraft's 16 chat colors, used by Glows and Name Colors
export const MC_COLORS = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "Dark Blue", hex: "#0000aa" },
  { name: "Dark Green", hex: "#00aa00" },
  { name: "Dark Aqua", hex: "#00aaaa" },
  { name: "Dark Red", hex: "#aa0000" },
  { name: "Dark Purple", hex: "#aa00aa" },
  { name: "Gold", hex: "#ffaa00" },
  { name: "Gray", hex: "#aaaaaa" },
  { name: "Dark Gray", hex: "#555555" },
  { name: "Blue", hex: "#5555ff" },
  { name: "Green", hex: "#55ff55" },
  { name: "Aqua", hex: "#55ffff" },
  { name: "Red", hex: "#ff5555" },
  { name: "Light Purple", hex: "#ff55ff" },
  { name: "Yellow", hex: "#ffff55" },
  { name: "White", hex: "#ffffff" },
];

// Trails from the in-game Trails Menu
export const TRAILS = [
  { name: "Flame", color: "#ff8a1c" },
  { name: "Redstone", color: "#ff2a2a" },
  { name: "Slime", color: "#7ad13e" },
  { name: "Cloud", color: "#eef3f8" },
  { name: "Smoke", color: "#7a808c" },
  { name: "Notes", color: "#4fe36b" },
  { name: "Lava", color: "#ff5a1a" },
  { name: "Water", color: "#3b7cff" },
  { name: "Frost", color: "#7ee8ff" },
  { name: "Portal", color: "#a24dff" },
];

// Battle pass tiers. "current" is the sample progress shown on the track.
export const BATTLE_PASS = {
  season: "Season 1 — Awakening",
  endsIn: "42 days",
  current: 4,
  tiers: [
    { free: "100 Coins", premium: "Flame Trail" },
    { free: "Green Name", premium: "Aqua Glow" },
    { free: "250 Coins", premium: "Cloud Trail" },
    { free: "XP Boost 1h", premium: "Gold Name" },
    { free: "Daily Key", premium: "Light Purple Glow" },
    { free: "500 Coins", premium: "Frost Trail" },
    { free: "Yellow Glow", premium: "Lava Trail" },
    { free: "XP Boost 3h", premium: "Dark Red Glow" },
    { free: "1000 Coins", premium: "Portal Trail" },
    { free: "Legendary Crate", premium: "Rainbow Glow" },
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

export const NEW_PLAYER_PERKS: { icon: IconName; title: string; text: string }[] = [
  { icon: "chest", title: "Welcome Crate", text: "A free crate with a guaranteed trail or glow the moment you join." },
  { icon: "star", title: "Exclusive Rookie Tag", text: "A unique tag only new players get. Never sold, never repeated." },
  { icon: "rocket", title: "2x XP First Week", text: "Level up your battle pass twice as fast for your first 7 days." },
  { icon: "sparkle", title: "Free Name Color", text: "Pick any color from the Color Picker for your first week." },
  { icon: "book", title: "Kit Editor Guide", text: "Set up your layouts before your first ranked match." },
  { icon: "users", title: "Helper Support", text: "A real staff member ready to show you around. Just ask in chat." },
];

export const JOIN_STEPS = [
  { title: "Launch Minecraft", text: `Open Minecraft Java Edition on version ${VERSION}.` },
  { title: "Add the server", text: "Go to Multiplayer → Add Server and paste the IP." },
  { title: "Pick a kit & queue", text: "Use the sword for unranked or the star for ranked. That's it." },
];

export const FAQ = [
  { q: "What version do I need?", a: `Chlamba runs on ${VERSION}. Join with Java Edition ${VERSION} for the full modern practice experience.` },
  { q: "How do divisions work?", a: "Win ranked matches to gain ELO. You start in Iron and climb through Gold, Diamond and Emerald (three levels each) to reach Netherite at the top." },
  { q: "Can I change my kit layout?", a: "Yes. Right-click the Kit Editor book in the lobby to rearrange any kit. Your layout is saved and used in every match." },
  { q: "What cosmetics are there?", a: "Trails, glows (16 colors plus rainbow) and name colors. Browse them at the Cosmetics Shop in the lobby." },
  { q: "Is the server free to play?", a: "Yes. Every kit and queue is free. VIP and MVP ranks and cosmetics help support the server." },
  { q: "How do I report a cheater or apply for staff?", a: "Open a ticket in our Discord. Staff applications open regularly, so watch the announcements channel." },
];

export type SocialIcon = "discord" | "youtube" | "tiktok" | "instagram" | "x" | "store";

export const SOCIALS: { name: string; handle: string; url: string; color: string; icon: SocialIcon }[] = [
  { name: "Discord", handle: `${MEMBERS}+ members`, url: DISCORD_URL, color: "#5865F2", icon: "discord" },
  { name: "YouTube", handle: "@chlamba", url: "https://youtube.com/@chlamba", color: "#ff3b3b", icon: "youtube" },
  { name: "TikTok", handle: "@chlamba", url: "https://tiktok.com/@chlamba", color: "#25f4ee", icon: "tiktok" },
  { name: "Instagram", handle: "@chlamba", url: "https://instagram.com/chlamba", color: "#e4405f", icon: "instagram" },
  { name: "X", handle: "@chlamba", url: "https://x.com/chlamba", color: "#e7e9ea", icon: "x" },
  { name: "Store", handle: "Ranks & cosmetics", url: STORE_URL, color: "#ffd23f", icon: "store" },
];
