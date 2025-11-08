const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/anime_projem';
    
   
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

