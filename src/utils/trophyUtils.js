// Trophy type colors and styling
export const trophyColors = {
  Bronze: {
    color: '#CD7F32',
    backgroundColor: 'rgba(205, 127, 50, 0.1)',
    border: '2px solid #CD7F32',
  },
  Silver: {
    color: '#C0C0C0',
    backgroundColor: 'rgba(192, 192, 192, 0.1)',
    border: '2px solid #C0C0C0',
  },
  Gold: {
    color: '#FFD700',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    border: '2px solid #FFD700',
  },
  Platinum: {
    color: '#E5E4E2',
    backgroundColor: 'rgba(229, 228, 226, 0.2)',
    border: '2px solid #E5E4E2',
  },
};

export const trophyEmojis = {
  Bronze: '🥉',
  Silver: '🥈',
  Gold: '🥇',
  Platinum: '💎',
};

// PS5 Trophy images by type
export const trophyImages = {
  Bronze: 'https://i.blogs.es/95d53a/4/450_1000.webp',
  Silver: 'https://i.blogs.es/35dfd8/1/450_1000.webp',
  Gold: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ps5-bronze-trophy.png',
  Platinum: 'https://i.blogs.es/35dfd8/1/450_1000.webp',
};

export const getTrophyStyle = (type) => {
  return trophyColors[type] || trophyColors.Bronze;
};

export const getTrophyEmoji = (type) => {
  return trophyEmojis[type] || '🏆';
};

export const getTrophyImage = (type) => {
  return trophyImages[type] || trophyImages.Bronze;
};
