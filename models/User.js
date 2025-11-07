const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Kullanıcı şeması tanımlama
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Kullanıcı adı gereklidir'],
    unique: true,
    trim: true,
    minlength: [3, 'Kullanıcı adı en az 3 karakter olmalıdır'],
    maxlength: [20, 'Kullanıcı adı en fazla 20 karakter olabilir']
  },
  email: {
    type: String,
    required: [true, 'E-posta adresi gereklidir'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Geçerli bir e-posta adresi giriniz']
  },
  password: {
    type: String,
    required: [true, 'Şifre gereklidir'],
    minlength: [6, 'Şifre en az 6 karakter olmalıdır']
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: null
  },
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anime'
  }],
  watchlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anime'
  }],
  watchedEpisodes: [{
    animeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Anime'
    },
    episodeNumber: Number,
    watchedAt: {
      type: Date,
      default: Date.now
    }
  }],
  profile: {
    bio: {
      type: String,
      maxlength: [500, 'Biyografi en fazla 500 karakter olabilir']
    },
    birthDate: Date,
    country: String,
    website: String
  },
  preferences: {
    language: {
      type: String,
      default: 'tr'
    },
    theme: {
      type: String,
      default: 'dark'
    },
    notifications: {
      email: {
        type: Boolean,
        default: true
      },
      push: {
        type: Boolean,
        default: true
      }
    }
  },
  stats: {
    totalWatchTime: {
      type: Number,
      default: 0
    },
    totalEpisodesWatched: {
      type: Number,
      default: 0
    },
    totalAnimesWatched: {
      type: Number,
      default: 0
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // createdAt ve updatedAt alanlarını otomatik ekler
});

// Şifre hashleme middleware (kayıt olurken)
userSchema.pre('save', async function(next) {
  // Eğer şifre değişmemişse hashleme
  if (!this.isModified('password')) return next();
  
  try {
    // Şifreyi hashle (salt rounds: 10)
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Şifre karşılaştırma metodu
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Kullanıcı bilgilerini JSON'a çevirirken şifreyi çıkar
userSchema.methods.toJSON = function() {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

// Kullanıcı modeli oluşturma
const User = mongoose.model('User', userSchema);

module.exports = User;
