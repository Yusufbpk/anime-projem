const mongoose = require('mongoose');

// Anime şeması tanımlama
const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Anime başlığı gereklidir'],
    trim: true,
    maxlength: [100, 'Başlık en fazla 100 karakter olabilir']
  },
  originalTitle: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Anime açıklaması gereklidir'],
    maxlength: [2000, 'Açıklama en fazla 2000 karakter olabilir']
  },
  shortDescription: {
    type: String,
    maxlength: [300, 'Kısa açıklama en fazla 300 karakter olabilir']
  },
  image: {
    type: String,
    required: [true, 'Anime görseli gereklidir']
  },
  banner: {
    type: String
  },
  trailer: {
    type: String
  },
  rating: {
    type: Number,
    default: 0,
    min: [0, 'Puan 0\'dan küçük olamaz'],
    max: [10, 'Puan 10\'dan büyük olamaz']
  },
  totalRatings: {
    type: Number,
    default: 0
  },
  episodes: {
    type: Number,
    required: [true, 'Bölüm sayısı gereklidir'],
    min: [1, 'En az 1 bölüm olmalıdır']
  },
  status: {
    type: String,
    enum: ['Devam Ediyor', 'Tamamlandı', 'Yakında', 'Duraklatıldı'],
    default: 'Devam Ediyor'
  },
  type: {
    type: String,
    enum: ['TV', 'Movie', 'OVA', 'Special', 'ONA'],
    default: 'TV'
  },
  genres: [{
    type: String,
    required: [true, 'En az bir kategori gereklidir']
  }],
  year: {
    type: Number,
    required: [true, 'Yayın yılı gereklidir'],
    min: [1900, 'Geçerli bir yıl giriniz'],
    max: [new Date().getFullYear() + 1, 'Gelecek yıl olamaz']
  },
  season: {
    type: String,
    enum: ['Winter', 'Spring', 'Summer', 'Fall'],
    required: [true, 'Sezon bilgisi gereklidir']
  },
  studio: {
    type: String,
    required: [true, 'Stüdyo bilgisi gereklidir']
  },
  director: {
    type: String
  },
  duration: {
    type: Number, // dakika cinsinden
    default: 24
  },
  language: {
    type: String,
    default: 'Japonca'
  },
  subtitles: [{
    type: String,
    default: ['Türkçe', 'İngilizce']
  }],
  quality: {
    type: String,
    enum: ['480p', '720p', '1080p', '4K'],
    default: '1080p'
  },
  ageRating: {
    type: String,
    enum: ['G', 'PG', 'PG-13', 'R', 'NC-17'],
    default: 'PG-13'
  },
  characters: [{
    name: {
      type: String,
      required: true
    },
    image: String,
    role: {
      type: String,
      enum: ['Ana Karakter', 'Yan Karakter', 'Antagonist', 'Destek Karakter'],
      default: 'Yan Karakter'
    },
    voiceActor: String
  }],
  episodes: [{
    number: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: String,
    duration: {
      type: Number,
      default: 24
    },
    thumbnail: String,
    videoUrl: String,
    releaseDate: Date
  }],
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      maxlength: [1000, 'Yorum en fazla 1000 karakter olabilir']
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  stats: {
    views: {
      type: Number,
      default: 0
    },
    favorites: {
      type: Number,
      default: 0
    },
    downloads: {
      type: Number,
      default: 0
    },
    shares: {
      type: Number,
      default: 0
    }
  },
  tags: [{
    type: String
  }],
  relatedAnimes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anime'
  }],
  isFeatured: {
    type: Boolean,
    default: false
  },
  isPopular: {
    type: Boolean,
    default: false
  },
  isNew: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  releaseDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  source: {
    type: String,
    enum: ['Manga', 'Light Novel', 'Original', 'Game', 'Visual Novel'],
    default: 'Original'
  },
  country: {
    type: String,
    default: 'Japonya'
  }
}, {
  timestamps: true
});

// Anime başlığına göre arama indeksi
animeSchema.index({ title: 'text', description: 'text' });

// Ortalama puan hesaplama
animeSchema.methods.calculateAverageRating = function() {
  if (this.reviews.length === 0) return 0;
  
  const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
  return (totalRating / this.reviews.length).toFixed(1);
};

// İstatistikleri güncelleme
animeSchema.methods.updateStats = function() {
  this.stats.views = this.stats.views || 0;
  this.stats.favorites = this.stats.favorites || 0;
  this.stats.downloads = this.stats.downloads || 0;
  this.stats.shares = this.stats.shares || 0;
};

// Anime modeli oluşturma
const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;
