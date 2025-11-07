// Mock Anime Data
const mockAnimes = [
  {
    id: '1',
    title: 'Attack on Titan',
    originalTitle: '進撃の巨人',
    description: 'İnsanlığın dev duvarların arkasında yaşadığı bir dünyada, devler insanları yemeye başlar. Eren Yeager ve arkadaşları, insanlığı korumak için Survey Corps\'a katılır.',
    shortDescription: 'İnsanlığın devlerle mücadelesi',
    image: '/images/AOT.gif',
    banner: '/images/AOT2.gif',
    rating: 9.0,
    episodes: 25,
    status: 'Tamamlandı',
    type: 'TV',
    genres: ['Aksiyon', 'Drama', 'Fantastik'],
    year: 2013,
    season: 'Spring',
    studio: 'Wit Studio',
    director: 'Tetsurō Araki',
    duration: 24,
    language: 'Japonca',
    subtitles: ['Türkçe', 'İngilizce'],
    quality: '1080p',
    ageRating: 'R',
    characters: [
      { name: 'Eren Yeager', image: '/images/c.jpg', role: 'Ana Karakter', voiceActor: 'Yuki Kaji' },
      { name: 'Mikasa Ackerman', image: '/images/c2.jpg', role: 'Ana Karakter', voiceActor: 'Yui Ishikawa' },
      { name: 'Armin Arlert', image: '/images/c3.jpg', role: 'Ana Karakter', voiceActor: 'Marina Inoue' }
    ],
    episodes: [
      { number: 1, title: 'İnsanlığa Gelen Tehdit', duration: 24, releaseDate: '2013-04-07' },
      { number: 2, title: 'O Gün', duration: 24, releaseDate: '2013-04-14' },
      { number: 3, title: 'İnsanlığın Umudu', duration: 24, releaseDate: '2013-04-21' },
      { number: 4, title: 'Survey Corps', duration: 24, releaseDate: '2013-04-28' },
      { number: 5, title: 'İlk Görev', duration: 24, releaseDate: '2013-05-05' }
    ],
    stats: {
      views: 15000,
      favorites: 1200,
      downloads: 800,
      shares: 300
    },
    tags: ['dev', 'savaş', 'drama', 'fantastik'],
    isFeatured: true,
    isPopular: true,
    isNew: false,
    isActive: true,
    releaseDate: '2013-04-07',
    endDate: '2013-09-29',
    source: 'Manga',
    country: 'Japonya'
  },
  {
    id: '2',
    title: 'Demon Slayer',
    originalTitle: '鬼滅の刃',
    description: 'Tanjiro Kamado, ailesini katleden şeytanları avlamak için yola çıkar. Kız kardeşini kurtarmak için mücadele eder.',
    shortDescription: 'Şeytan avcısının hikayesi',
    image: '/images/ds.jpg',
    banner: '/images/ds1.webp',
    rating: 8.8,
    episodes: 26,
    status: 'Tamamlandı',
    type: 'TV',
    genres: ['Aksiyon', 'Fantastik', 'Tarih'],
    year: 2019,
    season: 'Spring',
    studio: 'ufotable',
    director: 'Haruo Sotozaki',
    duration: 24,
    language: 'Japonca',
    subtitles: ['Türkçe', 'İngilizce'],
    quality: '1080p',
    ageRating: 'PG-13',
    characters: [
      { name: 'Tanjiro Kamado', image: '/images/c.jpg', role: 'Ana Karakter', voiceActor: 'Natsuki Hanae' },
      { name: 'Nezuko Kamado', image: '/images/c2.jpg', role: 'Ana Karakter', voiceActor: 'Akari Kitō' },
      { name: 'Zenitsu Agatsuma', image: '/images/c3.jpg', role: 'Ana Karakter', voiceActor: 'Hiro Shimono' }
    ],
    episodes: [
      { number: 1, title: 'Cruelty', duration: 24, releaseDate: '2019-04-06' },
      { number: 2, title: 'Trainer Sakonji Urokodaki', duration: 24, releaseDate: '2019-04-13' },
      { number: 3, title: 'Sabito and Makomo', duration: 24, releaseDate: '2019-04-20' },
      { number: 4, title: 'Final Selection', duration: 24, releaseDate: '2019-04-27' },
      { number: 5, title: 'My Own Steel', duration: 24, releaseDate: '2019-05-04' }
    ],
    stats: {
      views: 12000,
      favorites: 1000,
      downloads: 600,
      shares: 250
    },
    tags: ['şeytan', 'kılıç', 'tarih', 'fantastik'],
    isFeatured: true,
    isPopular: true,
    isNew: false,
    isActive: true,
    releaseDate: '2019-04-06',
    endDate: '2019-09-28',
    source: 'Manga',
    country: 'Japonya'
  },
  {
    id: '3',
    title: 'One Piece',
    originalTitle: 'ワンピース',
    description: 'Korsanların en büyük hazineyi aradığı büyük bir macera. Monkey D. Luffy ve arkadaşları One Piece\'i bulmak için yola çıkar.',
    shortDescription: 'Korsanların büyük macerası',
    image: '/images/l1.jpg',
    banner: '/images/l2.webp',
    rating: 9.2,
    episodes: 1000,
    status: 'Devam Ediyor',
    type: 'TV',
    genres: ['Aksiyon', 'Macera', 'Komedi'],
    year: 1999,
    season: 'Fall',
    studio: 'Toei Animation',
    director: 'Kōnosuke Uda',
    duration: 24,
    language: 'Japonca',
    subtitles: ['Türkçe', 'İngilizce'],
    quality: '1080p',
    ageRating: 'PG-13',
    characters: [
      { name: 'Monkey D. Luffy', image: '/images/c.jpg', role: 'Ana Karakter', voiceActor: 'Mayumi Tanaka' },
      { name: 'Roronoa Zoro', image: '/images/c2.jpg', role: 'Ana Karakter', voiceActor: 'Kazuya Nakai' },
      { name: 'Nami', image: '/images/c3.jpg', role: 'Ana Karakter', voiceActor: 'Akemi Okamura' }
    ],
    episodes: [
      { number: 1, title: 'I\'m Luffy! The Man Who\'s Gonna Be King of the Pirates!', duration: 24, releaseDate: '1999-10-20' },
      { number: 2, title: 'Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!', duration: 24, releaseDate: '1999-10-27' },
      { number: 3, title: 'Morgan versus Luffy! Who\'s the Mysterious Beautiful Girl?', duration: 24, releaseDate: '1999-11-03' },
      { number: 4, title: 'Luffy\'s Past! Enter Red-Haired Shanks!', duration: 24, releaseDate: '1999-11-10' },
      { number: 5, title: 'A Terrifying Mysterious Power! Captain Buggy, the Clown Pirate!', duration: 24, releaseDate: '1999-11-17' }
    ],
    stats: {
      views: 20000,
      favorites: 1500,
      downloads: 1000,
      shares: 500
    },
    tags: ['korsan', 'macera', 'komedi', 'aksiyon'],
    isFeatured: true,
    isPopular: true,
    isNew: false,
    isActive: true,
    releaseDate: '1999-10-20',
    source: 'Manga',
    country: 'Japonya'
  }
];

// Mock Users Data
const mockUsers = [
  {
    id: '1',
    username: 'ysfkrkmz',
    email: 'ysf@example.com',
    password: '$2b$10$rQJ8N5qX2vK9mH3nL7pQ8eR4tY6uI1oA2sD5fG8hJ9kL3mN6oP7qR8sT9uV0wX1yZ2aB3cD4eF5gH6iI7jJ8kK9lL0mM1nN2oO3pP4qQ5rR6sS7tT8uU9vV0wW1xX2yY3zZ',
    isAdmin: true,
    avatar: null,
    favorites: ['1', '2', '3'],
    watchlist: ['1', '2'],
    watchedEpisodes: [
      { animeId: '1', episodeNumber: 1, watchedAt: '2024-01-15' },
      { animeId: '1', episodeNumber: 2, watchedAt: '2024-01-16' },
      { animeId: '2', episodeNumber: 1, watchedAt: '2024-01-17' }
    ],
    profile: {
      bio: 'Anime tutkunu ve geliştirici',
      birthDate: '1995-01-01',
      country: 'Türkiye',
      website: 'https://github.com/ysfkrkmz'
    },
    preferences: {
      language: 'tr',
      theme: 'dark',
      notifications: {
        email: true,
        push: true
      }
    },
    stats: {
      totalWatchTime: 120,
      totalEpisodesWatched: 15,
      totalAnimesWatched: 3
    },
    isActive: true,
    lastLogin: '2024-01-20T10:30:00Z',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-20T10:30:00Z'
  },
  {
    id: '2',
    username: 'esra',
    email: 'esra@example.com',
    password: '$2b$10$rQJ8N5qX2vK9mH3nL7pQ8eR4tY6uI1oA2sD5fG8hJ9kL3mN6oP7qR8sT9uV0wX1yZ2aB3cD4eF5gH6iI7jJ8kK9lL0mM1nN2oO3pP4qQ5rR6sS7tT8uU9vV0wW1xX2yY3zZ',
    isAdmin: true,
    avatar: null,
    favorites: ['2', '3'],
    watchlist: ['1'],
    watchedEpisodes: [
      { animeId: '2', episodeNumber: 1, watchedAt: '2024-01-18' },
      { animeId: '2', episodeNumber: 2, watchedAt: '2024-01-19' }
    ],
    profile: {
      bio: 'Anime ve manga hayranı',
      birthDate: '1998-05-15',
      country: 'Türkiye',
      website: null
    },
    preferences: {
      language: 'tr',
      theme: 'dark',
      notifications: {
        email: true,
        push: false
      }
    },
    stats: {
      totalWatchTime: 80,
      totalEpisodesWatched: 10,
      totalAnimesWatched: 2
    },
    isActive: true,
    lastLogin: '2024-01-19T15:45:00Z',
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-19T15:45:00Z'
  },
  {
    id: '3',
    username: 'anime_fan',
    email: 'fan@example.com',
    password: '$2b$10$rQJ8N5qX2vK9mH3nL7pQ8eR4tY6uI1oA2sD5fG8hJ9kL3mN6oP7qR8sT9uV0wX1yZ2aB3cD4eF5gH6iI7jJ8kK9lL0mM1nN2oO3pP4qQ5rR6sS7tT8uU9vV0wW1xX2yY3zZ',
    isAdmin: false,
    avatar: null,
    favorites: ['1', '3'],
    watchlist: ['2'],
    watchedEpisodes: [
      { animeId: '1', episodeNumber: 1, watchedAt: '2024-01-20' }
    ],
    profile: {
      bio: 'Anime dünyasının tutkunu',
      birthDate: '2000-08-20',
      country: 'Türkiye',
      website: null
    },
    preferences: {
      language: 'tr',
      theme: 'dark',
      notifications: {
        email: false,
        push: true
      }
    },
    stats: {
      totalWatchTime: 40,
      totalEpisodesWatched: 5,
      totalAnimesWatched: 1
    },
    isActive: true,
    lastLogin: '2024-01-20T09:15:00Z',
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-20T09:15:00Z'
  }
];

// Mock Forum Posts Data
const mockPosts = [
  {
    id: '1',
    title: 'Attack on Titan Final Season Hakkında',
    content: 'Final season gerçekten harika! Eren\'in karakter gelişimi mükemmel. Animasyon kalitesi de çok yüksek.',
    author: {
      id: '1',
      username: 'ysfkrkmz'
    },
    category: 'Anime Tartışması',
    tags: ['Attack on Titan', 'Final Season', 'Eren'],
    anime: '1',
    views: 234,
    likes: ['2', '3'],
    dislikes: [],
    replies: [
      {
        id: '1',
        author: {
          id: '2',
          username: 'esra'
        },
        content: 'Kesinlikle katılıyorum! Eren\'in dönüşümü gerçekten etkileyici.',
        likes: ['1'],
        dislikes: [],
        createdAt: '2024-01-19T14:30:00Z',
        isEdited: false
      }
    ],
    isPinned: false,
    isLocked: false,
    isSticky: false,
    status: 'active',
    reports: [],
    lastActivity: '2024-01-19T14:30:00Z',
    createdAt: '2024-01-18T10:00:00Z',
    updatedAt: '2024-01-19T14:30:00Z'
  },
  {
    id: '2',
    title: 'En İyi Anime Önerileri',
    content: 'Yeni anime arayanlar için önerilerim: Demon Slayer, Jujutsu Kaisen, One Piece. Bu animeler kesinlikle izlenmeli!',
    author: {
      id: '2',
      username: 'esra'
    },
    category: 'Öneri',
    tags: ['Öneri', 'Yeni Başlayanlar', 'Popüler'],
    anime: null,
    views: 156,
    likes: ['1', '3'],
    dislikes: [],
    replies: [
      {
        id: '2',
        author: {
          id: '3',
          username: 'anime_fan'
        },
        content: 'One Piece gerçekten harika! 1000+ bölüm ama hiç sıkılmıyorsunuz.',
        likes: ['1', '2'],
        dislikes: [],
        createdAt: '2024-01-19T16:45:00Z',
        isEdited: false
      }
    ],
    isPinned: false,
    isLocked: false,
    isSticky: false,
    status: 'active',
    reports: [],
    lastActivity: '2024-01-19T16:45:00Z',
    createdAt: '2024-01-17T12:00:00Z',
    updatedAt: '2024-01-19T16:45:00Z'
  },
  {
    id: '3',
    title: 'One Piece 1000+ Bölüm',
    content: '1000 bölümü geçti ama hala heyecan verici! Luffy\'nin güçlenmesi harika. Bu anime gerçekten efsane.',
    author: {
      id: '3',
      username: 'anime_fan'
    },
    category: 'Anime Tartışması',
    tags: ['One Piece', 'Luffy', '1000 Bölüm'],
    anime: '3',
    views: 445,
    likes: ['1', '2'],
    dislikes: [],
    replies: [
      {
        id: '3',
        author: {
          id: '1',
          username: 'ysfkrkmz'
        },
        content: 'Luffy\'nin Gear 5 dönüşümü gerçekten muhteşemdi!',
        likes: ['2', '3'],
        dislikes: [],
        createdAt: '2024-01-20T11:20:00Z',
        isEdited: false
      }
    ],
    isPinned: false,
    isLocked: false,
    isSticky: false,
    status: 'active',
    reports: [],
    lastActivity: '2024-01-20T11:20:00Z',
    createdAt: '2024-01-16T09:00:00Z',
    updatedAt: '2024-01-20T11:20:00Z'
  }
];

module.exports = {
  mockAnimes,
  mockUsers,
  mockPosts
};
