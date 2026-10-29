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

// The lobby hotbar, slot by slot. null = empty slot. "head" shows the player's skin head instead of an icon.
export const HOTBAR: ({ name: string; icon: IconName; color: string; action: string; text: string; head?: boolean } | null)[] = [
  { name: "Queues", icon: "sword", color: "#aaaaaa", action: "Right-click to queue", text: "Jump into ranked or unranked on any kit. Fight for ELO or just warm up." },
  { name: "Leaderboards", icon: "sparkle", color: "#55ffff", action: "Right-click to view", text: "See the top players globally and check the rankings for every kit." },
  { name: "Kit Editor", icon: "book", color: "#ffaa00", action: "Right-click to edit", text: "Rearrange every kit's layout exactly how you like it. Your layout follows you into every match." },
  null,
  { name: "Create Party", icon: "tag", color: "#ff55ff", action: "Right-click to create", text: "Invite your friends, then run party FFA, split fights or queue together." },
  null,
  { name: "Divisions", icon: "gem", color: "#55ff55", action: "Right-click to view", text: "See every rank, how much ELO each one needs and how close you are to the next." },
  { name: "Settings", icon: "compass", color: "#ffff55", action: "Right-click to open", text: "Change your server settings: scoreboard, duel requests, spectators and more." },
  { name: "Your Stats", icon: "users", color: "#ff5555", action: "Right-click to view", text: "Your personal statistics: kills, wins, losses and ELO for every kit.", head: true },
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

// Battle pass, exactly as the in-game /battlepass menu: 50 levels, rewards unlock every 5 levels.
// "currentLevel" is the sample progress shown on the site.
export type RewardType = "Trail" | "Chat Color" | "Glow" | "Kill Effect" | "Kill Message" | "Text Style" | "Gradient" | "Special";

export const REWARD_TYPES: Record<RewardType, { color: string; icon: IconName }> = {
  Trail: { color: "#55ffff", icon: "sparkle" },
  "Chat Color": { color: "#ffff55", icon: "tag" },
  Glow: { color: "#ff55ff", icon: "star" },
  "Kill Effect": { color: "#ff5555", icon: "bolt" },
  "Kill Message": { color: "#ffaa00", icon: "sword" },
  "Text Style": { color: "#d0d0d8", icon: "book" },
  Gradient: { color: "#55ff55", icon: "flame" },
  Special: { color: "#c9a8ff", icon: "crown" },
};

export const BATTLE_PASS: {
  maxLevel: number;
  currentLevel: number;
  tiers: { from: number; to: number; text: string; rewards: { name: string; type: RewardType }[] }[];
} = {
  maxLevel: 50,
  currentLevel: 3,
  tiers: [
    {
      from: 1, to: 5, text: "Your first cosmetics. Keep playing to unlock them all.",
      rewards: [
        { name: "Smoke Trail", type: "Trail" },
        { name: "Cloud Trail", type: "Trail" },
        { name: "Gray Chat Color", type: "Chat Color" },
        { name: "Water Trail", type: "Trail" },
        { name: "White Glow", type: "Glow" },
        { name: "Lightning Kill Effect", type: "Kill Effect" },
      ],
    },
    {
      from: 6, to: 10, text: "Expand your collection with more cosmetics here.",
      rewards: [
        { name: "Critical Trail", type: "Trail" },
        { name: "Green Chat Color", type: "Chat Color" },
        { name: "Gray Glow", type: "Glow" },
        { name: "Notes Trail", type: "Trail" },
        { name: "Aqua Chat Color", type: "Chat Color" },
        { name: "Tryhard Kill Message", type: "Kill Message" },
      ],
    },
    {
      from: 11, to: 15, text: "Continue your progress with better cosmetics here.",
      rewards: [
        { name: "Green Glow", type: "Glow" },
        { name: "Yellow Chat Color", type: "Chat Color" },
        { name: "Slime Trail", type: "Trail" },
        { name: "Fireworks Kill Effect", type: "Kill Effect" },
      ],
    },
    {
      from: 16, to: 20, text: "Gain access to exclusive mid-tier cosmetics here.",
      rewards: [
        { name: "Aqua Glow", type: "Glow" },
        { name: "Red Chat Color", type: "Chat Color" },
        { name: "Heart Trail", type: "Trail" },
        { name: "Red Glow", type: "Glow" },
        { name: "Destroyed Kill Message", type: "Kill Message" },
      ],
    },
    {
      from: 21, to: 25, text: "Unlock premium cosmetics with advanced effects here.",
      rewards: [
        { name: "Gold Chat Color", type: "Chat Color" },
        { name: "Gold Glow", type: "Glow" },
        { name: "Flame Trail", type: "Trail" },
        { name: "Bold Text Style", type: "Text Style" },
        { name: "Angry Kill Effect", type: "Kill Effect" },
      ],
    },
    {
      from: 26, to: 30, text: "Access special colors and styles at this tier.",
      rewards: [
        { name: "Light Purple Chat", type: "Chat Color" },
        { name: "Pink Glow", type: "Glow" },
        { name: "Italic Text Style", type: "Text Style" },
        { name: "Glitch Kill Message", type: "Kill Message" },
      ],
    },
    {
      from: 31, to: 35, text: "Unlock gradient colors and advanced trails here.",
      rewards: [
        { name: "Ice Gradient", type: "Gradient" },
        { name: "Lava Trail", type: "Trail" },
        { name: "Dark Red Glow", type: "Glow" },
        { name: "Hearts Kill Effect", type: "Kill Effect" },
      ],
    },
    {
      from: 36, to: 40, text: "Obtain epic gradients and glows at this tier.",
      rewards: [
        { name: "Sunset Gradient", type: "Gradient" },
        { name: "Purple Glow", type: "Glow" },
        { name: "Underlined Text", type: "Text Style" },
        { name: "Magic Gradient", type: "Gradient" },
        { name: "Nature Kill Message", type: "Kill Message" },
      ],
    },
    {
      from: 41, to: 45, text: "Access legendary effects and rare cosmetics here.",
      rewards: [
        { name: "Cherry Blossom Trail", type: "Trail" },
        { name: "Rainbow Glow", type: "Glow" },
        { name: "Special Color Codes", type: "Special" },
        { name: "Lava Kill Effect", type: "Kill Effect" },
        { name: "Sorcerer Kill Message", type: "Kill Message" },
      ],
    },
    {
      from: 46, to: 50, text: "Complete the battle pass with ultimate legendary rewards.",
      rewards: [
        { name: "Flashing Glow", type: "Glow" },
        { name: "Magic Text Effect", type: "Text Style" },
        { name: "Rainbow Gradient", type: "Gradient" },
        { name: "Inferno Kill Message", type: "Kill Message" },
      ],
    },
  ],
};

export const DAILY_REWARDS = [
  { day: 1, reward: "100 XP" },
  { day: 2, reward: "150 XP" },
  { day: 3, reward: "200 XP" },
  { day: 4, reward: "250 XP" },
  { day: 5, reward: "300 XP" },
  { day: 6, reward: "400 XP" },
  { day: 7, reward: "1000 XP Bonus", big: true },
];

export const JOIN_STEPS = [
  { title: "Launch Minecraft", text: `Open Minecraft Java Edition on version ${VERSION}.` },
  { title: "Add the server", text: "Go to Multiplayer → Add Server and paste the IP." },
  { title: "Pick a kit & queue", text: "Right-click the sword, choose ranked or unranked and pick your kit. That's it." },
];

export const FAQ = [
  { q: "What version do I need?", a: `Chlamba runs on ${VERSION}. Join with Java Edition ${VERSION} for the full modern practice experience.` },
  { q: "How do divisions work?", a: "Win ranked matches to gain ELO. You start in Iron and climb through Gold, Diamond and Emerald (three levels each) to reach Netherite at the top." },
  { q: "Can I change my kit layout?", a: "Yes. Right-click the Kit Editor book in the lobby to rearrange any kit. Your layout is saved and used in every match." },
  { q: "How does the battle pass work?", a: "Earn XP by playing and logging in daily to level up. The pass has 50 levels, and every 5 levels unlocks a new tier of trails, glows, chat colors, kill effects, kill messages, text styles and gradients." },
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
