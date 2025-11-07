const mongoose = require('mongoose');

// Forum gönderisi şeması tanımlama
const forumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Gönderi başlığı gereklidir'],
    trim: true,
    maxlength: [200, 'Başlık en fazla 200 karakter olabilir']
  },
  content: {
    type: String,
    required: [true, 'Gönderi içeriği gereklidir'],
    maxlength: [5000, 'İçerik en fazla 5000 karakter olabilir']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Yazar bilgisi gereklidir']
  },
  category: {
    type: String,
    enum: ['Genel', 'Anime Tartışması', 'Öneri', 'Soru', 'Haber', 'Fan Art', 'Cosplay', 'Manga', 'Light Novel', 'Oyun'],
    default: 'Genel'
  },
  tags: [{
    type: String,
    maxlength: [20, 'Etiket en fazla 20 karakter olabilir']
  }],
  anime: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anime'
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  dislikes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  views: {
    type: Number,
    default: 0
  },
  replies: [{
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true,
      maxlength: [2000, 'Yanıt en fazla 2000 karakter olabilir']
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    dislikes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    createdAt: {
      type: Date,
      default: Date.now
    },
    isEdited: {
      type: Boolean,
      default: false
    },
    editedAt: Date
  }],
  isPinned: {
    type: Boolean,
    default: false
  },
  isLocked: {
    type: Boolean,
    default: false
  },
  isSticky: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['active', 'hidden', 'deleted'],
    default: 'active'
  },
  reports: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    reason: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  lastActivity: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Başlık ve içeriğe göre arama indeksi
forumSchema.index({ title: 'text', content: 'text' });

// Beğeni sayısını hesaplama
forumSchema.virtual('likeCount').get(function() {
  return this.likes.length;
});

// Beğenmeme sayısını hesaplama
forumSchema.virtual('dislikeCount').get(function() {
  return this.dislikes.length;
});

// Yanıt sayısını hesaplama
forumSchema.virtual('replyCount').get(function() {
  return this.replies.length;
});

// Toplam etkileşim sayısını hesaplama
forumSchema.virtual('totalEngagement').get(function() {
  return this.likes.length + this.dislikes.length + this.replies.length;
});

// Forum modeli oluşturma
const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;
