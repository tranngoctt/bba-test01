
// Bài 1: createCharacters

function createCharacters() {
  // 1) Mảng gốc characters: { name, level, health }
  const characters = [
    { name: "Mario", level: 10, health: 400 },
    { name: "Luigi", level: 12, health: 350 },
    { name: "Peach", level: 15, health: 380 },
    { name: "Yoshi", level: 8, health: 200 },
    { name: "Bowser", level: 30, health: 500 },
  ];

  // 2) Map -> tạo mảng mới charactersPowerUp
  const charactersPowerUp = characters.map((c) => ({
    name: c.name.toUpperCase(),
    level: c.level * 2,
    health: c.health * 3,
  }));

  // 3) Filter -> possibleWinners (health > 1000)
  const possibleWinners = charactersPowerUp.filter((c) => c.health > 1000);

  console.log("=== charactersPowerUp ===");
  console.log(charactersPowerUp);
  console.log("=== possibleWinners (health > 1000) ===");
  console.log(possibleWinners);

  // Trả về nếu cần dùng tiếp
  return { characters, charactersPowerUp, possibleWinners };
}

// ======================
// Bài 2: printLeaderboard(players)
// ======================
function printLeaderboard(players) {
  // Copy mảng để không làm thay đổi mảng gốc
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  console.log("\n=== Leaderboard ===");
  sortedPlayers.forEach((p, index) => {
    const rank = index + 1;

    let medal = "";
    if (rank === 1) medal = "🥇 ";
    else if (rank === 2) medal = "🥈 ";
    else if (rank === 3) medal = "🥉 ";

    // Format: 🥇 1. Mario - 1000 pts
    console.log(`${medal}${rank}. ${p.name} - ${p.score} pts`);
  });
}

// ======================
// RUN TEST (theo đề gợi ý)
// ======================
createCharacters();

const players = [
  { name: "Mario", score: 1000 },
  { name: "Luigi", score: 900 },
  { name: "Peach", score: 850 },
  { name: "Yoshi", score: 800 },
  { name: "Phong", score: 500 },
];

printLeaderboard(players);
