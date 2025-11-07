const bcrypt = require('bcrypt');
const express = require("express");
const path = require("path");
const fs = require('fs');
const cors = require('cors');

// Mock data import
const { mockAnimes, mockUsers, mockPosts } = require('./data/mockData');

const app = express();
const port = process.env.PORT || 3000; // Frontend'in beklediği port

console.log('🚀 Server başlatılıyor - Mock Data ile çalışıyor');

// CORS middleware
app.use(cors({
    origin: ['http://localhost:5173'], // Vite dev server
    credentials: true
}));

// Statik dosyalar (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Body parser middleware
app.use(express.json());
const session = require('express-session');

app.use(session({
    secret: 'gizliAnahtar', // oturumları imzalamak için gizli bir anahtar
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // localde HTTPS kullanmadığımız için false
}));
app.use(express.urlencoded({ extended: true }));

// Admin middleware fonksiyonu
function adminMiddleware(req, res, next) {
    if (req.session && req.session.user && req.session.user.isAdmin) {
        next();
    } else {
        res.status(403).send("Bu sayfaya sadece adminler erişebilir!");
    }
}

// Admin paneli endpoint'i
app.get("/admin", adminMiddleware, (req, res) => {
    res.send(`Admin paneline hoş geldin ${req.session.user.username}`);
});

// ==================== ANIME API ENDPOINTS ====================

// Tüm animeleri getir
app.get("/api/anime", async (req, res) => {
    try {
        // Mock data'dan anime listesini getir
        const animeList = mockAnimes.map(anime => ({
            _id: anime.id,
            title: anime.title,
            image: anime.image,
            rating: anime.rating,
            episodes: anime.episodes,
            status: anime.status,
            description: anime.description
        }));

        res.json(animeList);
    } catch (error) {
        console.error('Anime listesi getirme hatası:', error);
        res.status(500).json({ error: 'Animeler yüklenirken hata oluştu' });
    }
});

// Belirli bir animeyi getir
app.get("/api/anime/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const anime = mockAnimes.find(a => a.id === id);

        if (!anime) {
            return res.status(404).json({ error: 'Anime bulunamadı' });
        }

        // Görüntülenme sayısını artır
        anime.stats.views += 1;

        res.json(anime);
    } catch (error) {
        console.error('Anime detay getirme hatası:', error);
        res.status(500).json({ error: 'Anime detayları yüklenirken hata oluştu' });
    }
});

// Popüler animeleri getir
app.get("/api/anime/popular", async (req, res) => {
    try {
        // Mock data'dan popüler animeleri getir
        const popularAnime = mockAnimes
            .filter(anime => anime.isPopular)
            .sort((a, b) => b.stats.views - a.stats.views)
            .slice(0, 10)
            .map(anime => ({
                _id: anime.id,
                title: anime.title,
                image: anime.image,
                rating: anime.rating,
                episodes: anime.episodes,
                status: anime.status,
                description: anime.description
            }));

        res.json(popularAnime);
    } catch (error) {
        console.error('Popüler anime getirme hatası:', error);
        res.status(500).json({ error: 'Popüler animeler yüklenirken hata oluştu' });
    }
});

// Yeni animeleri getir
app.get("/api/anime/new", async (req, res) => {
    try {
        // Mock data'dan yeni animeleri getir
        const newAnime = mockAnimes
            .filter(anime => anime.isNew)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 10)
            .map(anime => ({
                _id: anime.id,
                title: anime.title,
                image: anime.image,
                rating: anime.rating,
                episodes: anime.episodes,
                status: anime.status,
                description: anime.description
            }));

        res.json(newAnime);
    } catch (error) {
        console.error('Yeni anime getirme hatası:', error);
        res.status(500).json({ error: 'Yeni animeler yüklenirken hata oluştu' });
    }
});

// Anime arama
app.get("/api/anime/search/:query", async (req, res) => {
    try {
        const { query } = req.params;
        const searchResults = mockAnimes
            .filter(anime =>
                anime.title.toLowerCase().includes(query.toLowerCase()) ||
                anime.description.toLowerCase().includes(query.toLowerCase())
            )
            .map(anime => ({
                _id: anime.id,
                title: anime.title,
                image: anime.image,
                rating: anime.rating,
                episodes: anime.episodes,
                status: anime.status,
                description: anime.description
            }));

        res.json(searchResults);
    } catch (error) {
        console.error('Anime arama hatası:', error);
        res.status(500).json({ error: 'Arama yapılırken hata oluştu' });
    }
});

// ==================== KATEGORİ API ENDPOINTS ====================

// Kategorileri getir
app.get("/api/categories", async (req, res) => {
    try {
        const categories = [
            { name: 'Aksiyon', count: 150, color: 'bg-red-600' },
            { name: 'Romantik', count: 89, color: 'bg-pink-600' },
            { name: 'Komedi', count: 120, color: 'bg-yellow-600' },
            { name: 'Drama', count: 95, color: 'bg-blue-600' },
            { name: 'Fantastik', count: 110, color: 'bg-purple-600' },
            { name: 'Macera', count: 130, color: 'bg-green-600' },
            { name: 'Bilim Kurgu', count: 75, color: 'bg-indigo-600' },
            { name: 'Spor', count: 45, color: 'bg-orange-600' },
            { name: 'Gizem', count: 60, color: 'bg-gray-600' },
            { name: 'Psikolojik', count: 40, color: 'bg-red-800' },
            { name: 'Tarih', count: 35, color: 'bg-yellow-800' },
            { name: 'Müzik', count: 25, color: 'bg-pink-800' }
        ];

        res.json(categories);
    } catch (error) {
        console.error('Kategori getirme hatası:', error);
        res.status(500).json({ error: 'Kategoriler yüklenirken hata oluştu' });
    }
});

// ==================== FORUM API ENDPOINTS ====================

// Forum gönderilerini getir
app.get("/api/forum/posts", async (req, res) => {
    try {
        // Mock data'dan forum gönderilerini getir
        const posts = mockPosts
            .filter(post => post.status === 'active')
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 20);

        res.json(posts);
    } catch (error) {
        console.error('Forum gönderileri getirme hatası:', error);
        res.status(500).json({ error: 'Forum gönderileri yüklenirken hata oluştu' });
    }
});

// ==================== KULLANICI API ENDPOINTS ====================

// Kullanıcı kayıt endpoint'i
app.post('/api/register', async (req, res) => {
    try {
        console.log("Register isteği alındı:", req.body);

        const { username, email, password } = req.body;

        // Veri kontrolü
        if (!username || !email || !password) {
            console.log("Eksik veri:", { username, email, password });
            return res.status(400).json({ error: 'Kullanıcı adı, e-posta ve şifre gerekli!' });
        }

        // Mock data'dan kullanıcı kontrolü
        const existingUser = mockUsers.find(u => u.username === username);
        if (existingUser) {
            return res.status(400).json({ error: 'Bu kullanıcı adı zaten kullanılıyor!' });
        }

        // E-posta kontrolü
        const existingEmail = mockUsers.find(u => u.email === email);
        if (existingEmail) {
            return res.status(400).json({ error: 'Bu e-posta adresi zaten kullanılıyor!' });
        }

        // Yeni kullanıcı oluştur (mock data'ya ekle)
        const newUser = {
            id: Date.now().toString(),
            username,
            email,
            password,
            isAdmin: false
        };

        mockUsers.push(newUser);

        console.log("Kullanıcı başarıyla kaydedildi:", username);

        // Session'a kullanıcı bilgilerini kaydet
        req.session.user = {
            id: newUser.id,
            username: newUser.username,
            isAdmin: newUser.isAdmin
        };

        res.json({
            message: 'Kayıt başarılı! Hoş geldin ' + username,
            user: {
                id: newUser.id,
                username: newUser.username,
                isAdmin: newUser.isAdmin
            }
        });

    } catch (error) {
        console.error("Register hatası:", error);
        res.status(500).json({ error: 'Kayıt olurken bir hata oluştu!' });
    }
});

// Kullanıcı giriş endpoint'i
app.post("/api/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log('Login attempt:', { username, password: '***' });

        // Mock data'dan kullanıcıyı bul
        const user = mockUsers.find(u => u.username === username);
        if (!user) {
            console.log('User not found:', username);
            return res.status(401).json({ error: "Kullanıcı bulunamadı!" });
        }

        // Şifreyi kontrol et (123456 için)
        const isPasswordCorrect = password === '123456';
        console.log('Password check result:', isPasswordCorrect);

        if (!isPasswordCorrect) {
            console.log('Password incorrect for user:', username);
            return res.status(401).json({ error: "Şifre yanlış!" });
        }

        // Kullanıcı oturumunu başlat
        req.session.user = {
            id: user.id,
            username: user.username,
            isAdmin: user.isAdmin
        };

        console.log('Login successful for user:', username, 'Admin:', user.isAdmin);

        res.json({
            message: `Giriş başarılı! Hoş geldin ${user.username}`,
            user: {
                id: user.id,
                username: user.username,
                isAdmin: user.isAdmin
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Giriş yapılırken bir hata oluştu.' });
    }
});

// Kullanıcı çıkış endpoint'i
app.post("/api/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: 'Çıkış yapılırken hata oluştu' });
        }
        res.json({ message: 'Başarıyla çıkış yapıldı' });
    });
});

// Kullanıcı profili getir
app.get("/api/user/profile", async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ error: 'Oturum açmanız gerekiyor' });
        }

        const user = mockUsers.find(u => u.id === req.session.user.id);
        if (!user) {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
        }

        // Kullanıcı bilgilerini döndür (şifre hariç)
        const { password, ...userProfile } = user;
        res.json(userProfile);
    } catch (error) {
        console.error('Profil getirme hatası:', error);
        res.status(500).json({ error: 'Profil yüklenirken hata oluştu' });
    }
});

// ==================== FAVORİLER API ENDPOINTS ====================

// Favorilere anime ekle
app.post("/api/user/favorites/:animeId", async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ error: 'Oturum açmanız gerekiyor' });
        }

        const { animeId } = req.params;
        const user = mockUsers.find(u => u.id === req.session.user.id);

        if (!user) {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
        }

        // Kullanıcının favorileri yoksa oluştur
        if (!user.favorites) {
            user.favorites = [];
        }

        // Anime zaten favorilerde mi kontrol et
        const isAlreadyFavorite = user.favorites.includes(animeId);

        if (isAlreadyFavorite) {
            // Favorilerden çıkar
            user.favorites = user.favorites.filter(id => id !== animeId);
            res.json({ message: 'Anime favorilerden çıkarıldı', isFavorite: false });
        } else {
            // Favorilere ekle
            user.favorites.push(animeId);
            res.json({ message: 'Anime favorilere eklendi', isFavorite: true });
        }
    } catch (error) {
        console.error('Favori ekleme hatası:', error);
        res.status(500).json({ error: 'Favori işlemi sırasında hata oluştu' });
    }
});

// Kullanıcının favorilerini getir
app.get("/api/user/favorites", async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ error: 'Oturum açmanız gerekiyor' });
        }

        const user = mockUsers.find(u => u.id === req.session.user.id);
        if (!user) {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
        }

        // Kullanıcının favorilerini getir
        const favorites = mockAnimes.filter(anime =>
            user.favorites && user.favorites.includes(anime.id)
        ).map(anime => ({
            _id: anime.id,
            title: anime.title,
            image: anime.image,
            rating: anime.rating,
            episodes: anime.episodes,
            status: anime.status
        }));

        res.json(favorites);
    } catch (error) {
        console.error('Favoriler getirme hatası:', error);
        res.status(500).json({ error: 'Favoriler yüklenirken hata oluştu' });
    }
});

// ==================== İZLEME GEÇMİŞİ API ENDPOINTS ====================

// Bölüm izleme kaydı ekle
app.post("/api/user/watched/:animeId/:episodeNumber", async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ error: 'Oturum açmanız gerekiyor' });
        }

        const { animeId, episodeNumber } = req.params;
        const user = mockUsers.find(u => u.id === req.session.user.id);

        if (!user) {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
        }

        // Kullanıcının izleme geçmişi yoksa oluştur
        if (!user.watchedEpisodes) {
            user.watchedEpisodes = [];
        }

        // Bölüm zaten izlenmiş mi kontrol et
        const existingWatched = user.watchedEpisodes.find(
            episode => episode.animeId === animeId && episode.episodeNumber === parseInt(episodeNumber)
        );

        if (!existingWatched) {
            // İzleme kaydı ekle
            user.watchedEpisodes.push({
                animeId,
                episodeNumber: parseInt(episodeNumber),
                watchedAt: new Date()
            });

            // İstatistikleri güncelle
            if (!user.stats) {
                user.stats = { totalEpisodesWatched: 0 };
            }
            user.stats.totalEpisodesWatched += 1;
        }

        res.json({ message: 'Bölüm izleme kaydı eklendi' });
    } catch (error) {
        console.error('İzleme kaydı hatası:', error);
        res.status(500).json({ error: 'İzleme kaydı sırasında hata oluştu' });
    }
});

// ==================== SORUN BİLDİRME API ENDPOINTS ====================

// Sorun bildir
app.post("/api/report", async (req, res) => {
    try {
        const { type, targetId, reason, description } = req.body;

        // Burada sorun bildirimi veritabanına kaydedilebilir
        console.log('Sorun bildirildi:', { type, targetId, reason, description });

        res.json({ message: 'Sorun bildiriminiz alınmıştır. Teşekkürler!' });
    } catch (error) {
        console.error('Sorun bildirme hatası:', error);
        res.status(500).json({ error: 'Sorun bildirilirken hata oluştu' });
    }
});

// ==================== STATİK SAYFA YÖNLENDİRMELERİ ====================

// Anasayfa yönlendirmesi
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "anime.html"));
});

// Register sayfası
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "register.html"));
});

// Server'ı başlat
app.listen(port, () => {
    console.log(`✅ Sunucu çalışıyor: http://localhost:${port}`);
    console.log(`📁 Çalışma dizini: ${__dirname}`);
    console.log(`🔗 Frontend: http://localhost:5173`);
    console.log(`🗄️ Mock Data: Kullanılıyor (MongoDB bağlantısı yok)`);
});