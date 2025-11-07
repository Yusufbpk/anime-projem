const mongoose = require('mongoose');
const User = require('../models/User');
const Anime = require('../models/Anime');
const Forum = require('../models/Forum');

// MongoDB bağlantısı
const connectDB = require('../config/database');

// Örnek anime verileri
const sampleAnimes = [
  {
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
      { number: 1, title: 'İnsanlığa Gelen Tehdit', duration: 24, releaseDate: new Date('2013-04-07') },
      { number: 2, title: 'O Gün', duration: 24, releaseDate: new Date('2013-04-14') },
      { number: 3, title: 'İnsanlığın Umudu', duration: 24, releaseDate: new Date('2013-04-21') },
      { number: 4, title: 'Survey Corps', duration: 24, releaseDate: new Date('2013-04-28') },
      { number: 5, title: 'İlk Görev', duration: 24, releaseDate: new Date('2013-05-05') }
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
    releaseDate: new Date('2013-04-07'),
    endDate: new Date('2013-09-29'),
    source: 'Manga',
    country: 'Japonya'
  },
  {
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
      { number: 1, title: 'Cruelty', duration: 24, releaseDate: new Date('2019-04-06') },
      { number: 2, title: 'Trainer Sakonji Urokodaki', duration: 24, releaseDate: new Date('2019-04-13') },
      { number: 3, title: 'Sabito and Makomo', duration: 24, releaseDate: new Date('2019-04-20') },
      { number: 4, title: 'Final Selection', duration: 24, releaseDate: new Date('2019-04-27') },
      { number: 5, title: 'My Own Steel', duration: 24, releaseDate: new Date('2019-05-04') }
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
    releaseDate: new Date('2019-04-06'),
    endDate: new Date('2019-09-28'),
    source: 'Manga',
    country: 'Japonya'
  },
  {
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
      { number: 1, title: 'I\'m Luffy! The Man Who\'s Gonna Be King of the Pirates!', duration: 24, releaseDate: new Date('1999-10-20') },
      { number: 2, title: 'Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!', duration: 24, releaseDate: new Date('1999-10-27') },
      { number: 3, title: 'Morgan versus Luffy! Who\'s the Mysterious Beautiful Girl?', duration: 24, releaseDate: new Date('1999-11-03') },
      { number: 4, title: 'Luffy\'s Past! Enter Red-Haired Shanks!', duration: 24, releaseDate: new Date('1999-11-10') },
      { number: 5, title: 'A Terrifying Mysterious Power! Captain Buggy, the Clown Pirate!', duration: 24, releaseDate: new Date('1999-11-17') }
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
    releaseDate: new Date('1999-10-20'),
    source: 'Manga',
    country: 'Japonya'
  }
];

// Örnek kullanıcı verileri
const sampleUsers = [
  {
    username: 'ysfkrkmz',
    email: 'ysf@example.com',
    password: '123456',
    isAdmin: true,
    profile: {
      bio: 'Anime tutkunu ve geliştirici',
      country: 'Türkiye'
    }
  },
  {
    username: 'esra',
    email: 'esra@example.com',
    password: '123456',
    isAdmin: true,
    profile: {
      bio: 'Anime ve manga hayranı',
      country: 'Türkiye'
    }
  },
  {
    username: 'anime_fan',
    email: 'fan@example.com',
    password: '123456',
    isAdmin: false,
    profile: {
      bio: 'Anime dünyasının tutkunu',
      country: 'Türkiye'
    }
  }
];

// Örnek forum gönderileri
const samplePosts = [
  {
    title: 'Attack on Titan Final Season Hakkında',
    content: 'Final season gerçekten harika! Eren\'in karakter gelişimi mükemmel. Animasyon kalitesi de çok yüksek.',
    category: 'Anime Tartışması',
    tags: ['Attack on Titan', 'Final Season', 'Eren'],
    views: 234,
    likes: [],
    dislikes: [],
    replies: []
  },
  {
    title: 'En İyi Anime Önerileri',
    content: 'Yeni anime arayanlar için önerilerim: Demon Slayer, Jujutsu Kaisen, One Piece. Bu animeler kesinlikle izlenmeli!',
    category: 'Öneri',
    tags: ['Öneri', 'Yeni Başlayanlar', 'Popüler'],
    views: 156,
    likes: [],
    dislikes: [],
    replies: []
  },
  {
    title: 'One Piece 1000+ Bölüm',
    content: '1000 bölümü geçti ama hala heyecan verici! Luffy\'nin güçlenmesi harika. Bu anime gerçekten efsane.',
    category: 'Anime Tartışması',
    tags: ['One Piece', 'Luffy', '1000 Bölüm'],
    views: 445,
    likes: [],
    dislikes: [],
    replies: []
  }
];

// Veri ekleme fonksiyonu
async function seedData() {
  try {
    // MongoDB'ye bağlan
    await connectDB();
    
    console.log('🗄️ MongoDB bağlantısı başarılı');
    
    // Mevcut verileri temizle
    await User.deleteMany({});
    await Anime.deleteMany({});
    await Forum.deleteMany({});
    
    console.log('🧹 Mevcut veriler temizlendi');
    
    // Kullanıcıları ekle
    const createdUsers = [];
    for (const userData of sampleUsers) {
      const user = new User(userData);
      await user.save();
      createdUsers.push(user);
      console.log(`👤 Kullanıcı eklendi: ${user.username}`);
    }
    
    // Animeleri ekle
    const createdAnimes = [];
    for (const animeData of sampleAnimes) {
      const anime = new Anime(animeData);
      await anime.save();
      createdAnimes.push(anime);
      console.log(`🎬 Anime eklendi: ${anime.title}`);
    }
    
    // Forum gönderilerini ekle
    for (let i = 0; i < samplePosts.length; i++) {
      const postData = samplePosts[i];
      const post = new Forum({
        ...postData,
        author: createdUsers[i % createdUsers.length]._id
      });
      await post.save();
      console.log(`📝 Forum gönderisi eklendi: ${post.title}`);
    }
    
    // Kullanıcılara favori animeler ekle
    for (const user of createdUsers) {
      user.favorites = createdAnimes.map(anime => anime._id);
      await user.save();
      console.log(`❤️ Favoriler eklendi: ${user.username}`);
    }
    
    console.log('✅ Tüm örnek veriler başarıyla eklendi!');
    console.log(`📊 Toplam: ${createdUsers.length} kullanıcı, ${createdAnimes.length} anime, ${samplePosts.length} forum gönderisi`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Veri ekleme hatası:', error);
    process.exit(1);
  }
}

// Script çalıştırılıyorsa veri ekle
if (require.main === module) {
  seedData();
}

module.exports = seedData;
