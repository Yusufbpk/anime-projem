# 🎬 Anime Projem - Modern Anime İzleme Platformu

Bu proje, React ve Node.js kullanılarak geliştirilmiş modern bir anime izleme platformudur. Kullanıcılar anime izleyebilir, favorilere ekleyebilir, forum tartışmalarına katılabilir ve daha fazlasını yapabilir.

## 🚀 Özellikler

### Frontend (React + Vite)
- ✅ **Modern UI/UX**: Tailwind CSS ile responsive tasarım
- ✅ **Dark Theme**: Göz yormayan koyu tema
- ✅ **Animasyonlar**: Smooth geçişler ve hover efektleri
- ✅ **Responsive**: Mobile-first yaklaşım
- ✅ **Component-based**: Modüler kod yapısı

### Backend (Node.js + Express + MongoDB)
- ✅ **MongoDB Entegrasyonu**: Mongoose ile veritabanı yönetimi
- ✅ **User Authentication**: bcrypt ile güvenli şifre hashleme
- ✅ **Session Management**: Express-session ile oturum yönetimi
- ✅ **RESTful API**: Modern API tasarımı
- ✅ **Admin Panel**: Kullanıcı ve içerik yönetimi

### Ana Özellikler
- 🎬 **Anime İzleme**: Video player ile anime izleme
- ❤️ **Favoriler**: Kullanıcıların favori animelerini kaydetmesi
- 📝 **Forum Sistemi**: Anime tartışmaları ve yorumlar
- 🔍 **Arama**: Anime arama ve filtreleme
- 👥 **Kullanıcı Profilleri**: Kişiselleştirilmiş kullanıcı deneyimi
- ⚙️ **Admin Paneli**: Site yönetimi ve kullanıcı kontrolü
- 📊 **İstatistikler**: İzlenme, beğeni ve etkileşim istatistikleri

## 🛠️ Teknolojiler

### Frontend
- **React 18**: Modern UI framework
- **Vite**: Hızlı build tool
- **React Router**: Sayfa yönlendirmesi
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL veritabanı
- **Mongoose**: MongoDB ODM
- **bcrypt**: Şifre hashleme
- **express-session**: Oturum yönetimi
- **CORS**: Cross-origin resource sharing

## 📦 Kurulum

### Gereksinimler
- Node.js (v16 veya üzeri)
- MongoDB (v4.4 veya üzeri)
- npm veya yarn

### 1. Projeyi Klonlayın
```bash
git clone <repository-url>
cd anime-projem
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. MongoDB'yi Başlatın
MongoDB'nin sisteminizde kurulu ve çalışır durumda olduğundan emin olun.

### 4. Veritabanını Hazırlayın
```bash
npm run seed
```

### 5. Geliştirme Sunucularını Başlatın

**Tek Komutla (Önerilen):**
```bash
npm start
```

**Veya Manuel:**
```bash
npm run server  # Backend (Port 3000)
npm run dev     # Frontend (Port 5173)
```

### 6. Tarayıcıda Açın
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 📁 Proje Yapısı

```
anime-projem/
├── config/
│   └── database.js          # MongoDB bağlantı konfigürasyonu
├── models/
│   ├── User.js              # Kullanıcı modeli
│   ├── Anime.js             # Anime modeli
│   └── Forum.js             # Forum modeli
├── scripts/
│   └── seedData.js          # Örnek veri ekleme script'i
├── src/
│   ├── components/          # React bileşenleri
│   │   ├── AnimeCard.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/              # Sayfa bileşenleri
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Player.jsx
│   │   ├── AnimeInfo.jsx
│   │   └── AdminPanel.jsx
│   ├── App.jsx             # Ana uygulama bileşeni
│   └── main.jsx            # Uygulama giriş noktası
├── public/                 # Statik dosyalar
│   └── images/            # Anime görselleri
├── server.js              # Express sunucu
├── package.json           # Proje bağımlılıkları
└── README.md             # Proje dokümantasyonu
```

## 🔧 API Endpoints

### Anime Endpoints
- `GET /api/anime` - Tüm animeleri getir
- `GET /api/anime/:id` - Belirli animeyi getir
- `GET /api/anime/popular` - Popüler animeleri getir
- `GET /api/anime/new` - Yeni animeleri getir
- `GET /api/anime/search/:query` - Anime arama

### Kullanıcı Endpoints
- `POST /api/register` - Kullanıcı kaydı
- `POST /api/login` - Kullanıcı girişi
- `POST /api/logout` - Kullanıcı çıkışı
- `GET /api/user/profile` - Kullanıcı profili

### Favori Endpoints
- `POST /api/user/favorites/:animeId` - Favorilere ekle/çıkar
- `GET /api/user/favorites` - Kullanıcının favorilerini getir

### Forum Endpoints
- `GET /api/forum/posts` - Forum gönderilerini getir

## 👥 Kullanıcı Rolleri

### Normal Kullanıcı
- Anime izleme
- Favorilere ekleme
- Forum yazıları oluşturma
- Profil yönetimi

### Admin
- Tüm kullanıcı yetkileri
- Kullanıcı yönetimi
- Anime yönetimi
- Forum moderasyonu
- Site ayarları

## 🎨 UI/UX Özellikleri

### Tasarım Prensipleri
- **Dark Theme**: Göz yormayan koyu tema
- **Responsive Design**: Tüm cihazlarda uyumlu
- **Modern Animations**: Smooth geçişler
- **Intuitive Navigation**: Kolay kullanım

### Renk Paleti
- **Primary**: Indigo (#6366f1)
- **Background**: Slate (#0f172a)
- **Text**: White (#ffffff)
- **Accent**: Purple (#a855f7)

## 🔒 Güvenlik

### Kullanıcı Güvenliği
- bcrypt ile şifre hashleme
- Session-based authentication
- CORS yapılandırması
- Input validation

### Veri Güvenliği
- MongoDB injection koruması
- XSS koruması
- CSRF koruması

## 📊 Veritabanı Şeması

### User Collection
```javascript
{
  username: String,
  email: String,
  password: String (hashed),
  isAdmin: Boolean,
  favorites: [Anime IDs],
  watchlist: [Anime IDs],
  watchedEpisodes: [Episode Records],
  profile: {
    bio: String,
    birthDate: Date,
    country: String
  },
  stats: {
    totalWatchTime: Number,
    totalEpisodesWatched: Number
  }
}
```

### Anime Collection
```javascript
{
  title: String,
  description: String,
  image: String,
  rating: Number,
  episodes: Number,
  status: String,
  genres: [String],
  year: Number,
  studio: String,
  characters: [Character Objects],
  stats: {
    views: Number,
    favorites: Number,
    downloads: Number
  }
}
```

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
```env
MONGODB_URI=mongodb://localhost:27017/anime_projem
PORT=3000
SESSION_SECRET=your_session_secret
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

**Yusuf Karakuz** - Anime tutkunu ve full-stack geliştirici

## 🙏 Teşekkürler

- React ve Vite ekibine
- Tailwind CSS ekibine
- MongoDB ve Mongoose ekibine
- Tüm açık kaynak topluluğuna

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
