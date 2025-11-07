const mongoose = require('mongoose');

// MongoDB bağlantı konfigürasyonu
const connectDB = async () => {
  try {
    // MongoDB bağlantı URI'si
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/anime_projem';
    
    // MongoDB'ye bağlan
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB bağlantısı başarılı: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB bağlantı hatası:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
