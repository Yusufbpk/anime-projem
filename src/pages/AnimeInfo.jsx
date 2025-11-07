import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const AnimeInfo = () => {
  const { id } = useParams()
  const [anime, setAnime] = useState(null)
  const [activeTab, setActiveTab] = useState('info') // Tab sistemi için state
  const [reportModal, setReportModal] = useState(false) // Sorun bildir modalı için state
  const [reportReason, setReportReason] = useState('') // Sorun bildir sebebi

  useEffect(() => {
    // Mock data - Backend'den gelecek
    setAnime({
      id: id,
      title: 'Attack on Titan',
      image: '/images/AOT.gif',
      rating: 9.0,
      totalEpisodes: 25,
      status: 'Tamamlandı',
      description: 'İnsanlığın dev duvarların arkasında yaşadığı bir dünyada, devler insanları yemeye başlar. Eren Yeager ve arkadaşları, insanlığı korumak için Survey Corps\'a katılır.',
      genres: ['Aksiyon', 'Drama', 'Fantastik'],
      year: 2013,
      studio: 'Wit Studio',
      director: 'Tetsurō Araki',
      duration: '24 dakika',
      language: 'Japonca',
      subtitles: 'Türkçe, İngilizce',
      quality: '1080p HD',
      characters: [
        { name: 'Eren Yeager', image: '/images/c.jpg', role: 'Ana Karakter' },
        { name: 'Mikasa Ackerman', image: '/images/c2.jpg', role: 'Ana Karakter' },
        { name: 'Armin Arlert', image: '/images/c3.jpg', role: 'Ana Karakter' }
      ],
      episodes: [
        { number: 1, title: 'İnsanlığa Gelen Tehdit', duration: '24:15' },
        { number: 2, title: 'O Gün', duration: '23:45' },
        { number: 3, title: 'İnsanlığın Umudu', duration: '24:30' },
        { number: 4, title: 'Survey Corps', duration: '23:55' },
        { number: 5, title: 'İlk Görev', duration: '24:10' }
      ],
      reviews: [
        { user: 'anime_fan', rating: 5, comment: 'Mükemmel bir anime! Karakter gelişimi harika.' },
        { user: 'otaku_life', rating: 4, comment: 'Çok etkileyici, özellikle animasyon kalitesi.' },
        { user: 'weeb_master', rating: 5, comment: 'Kesinlikle izlenmesi gereken bir yapım.' }
      ]
    })
  }, [id])

  // Sorun bildir fonksiyonu
  const handleReport = () => {
    if (reportReason.trim()) {
      console.log('Sorun bildirildi:', reportReason)
      setReportModal(false)
      setReportReason('')
      alert('Sorun bildiriminiz alınmıştır. Teşekkürler!')
    }
  }

  if (!anime) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-white">Yükleniyor...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hareketli Arka Plan */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/images/AOT2.gif" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Ana Bilgi Kartı */}
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-8 mb-8 border border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Anime Posteri */}
              <div className="lg:col-span-1">
                <div className="relative group">
                  <img 
                    src={anime.image} 
                    alt={anime.title} 
                    className="w-full h-96 object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span>{anime.rating}</span>
                  </div>
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    anime.status === 'Tamamlandı' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-yellow-600 text-white'
                  }`}>
                    {anime.status}
                  </div>
                </div>
              </div>

              {/* Anime Bilgileri */}
              <div className="lg:col-span-3">
                <h1 className="text-4xl font-bold text-white mb-4">{anime.title}</h1>
                
                {/* Hızlı Bilgiler */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-lg p-4 text-center hover:bg-slate-700/80 transition-colors">
                    <div className="text-gray-400 text-sm">Yıl</div>
                    <div className="text-white font-semibold">{anime.year}</div>
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-lg p-4 text-center hover:bg-slate-700/80 transition-colors">
                    <div className="text-gray-400 text-sm">Bölüm</div>
                                         <div className="text-white font-semibold">{anime.totalEpisodes}</div>
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-lg p-4 text-center hover:bg-slate-700/80 transition-colors">
                    <div className="text-gray-400 text-sm">Süre</div>
                    <div className="text-white font-semibold">{anime.duration}</div>
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-lg p-4 text-center hover:bg-slate-700/80 transition-colors">
                    <div className="text-gray-400 text-sm">Kalite</div>
                    <div className="text-white font-semibold">{anime.quality}</div>
                  </div>
                </div>

                {/* Kategoriler */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {anime.genres.map((genre) => (
                      <span key={genre} className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Açıklama */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Açıklama</h3>
                  <p className="text-gray-300 leading-relaxed">{anime.description}</p>
                </div>

                {/* Detay Bilgiler */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Stüdyo:</span>
                      <span className="text-white">{anime.studio}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Yönetmen:</span>
                      <span className="text-white">{anime.director}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Dil:</span>
                      <span className="text-white">{anime.language}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Altyazı:</span>
                      <span className="text-white">{anime.subtitles}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Puan:</span>
                      <span className="text-white">⭐ {anime.rating}/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Durum:</span>
                      <span className="text-white">{anime.status}</span>
                    </div>
                  </div>
                </div>

                {/* Aksiyon Butonları */}
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to={`/player/${anime.id}`}
                    className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <span className="flex items-center space-x-2">
                      <span>▶</span>
                      <span>İzle</span>
                    </span>
                  </Link>
                  <button className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <span className="flex items-center space-x-2">
                      <span>❤️</span>
                      <span>Favorilere Ekle</span>
                    </span>
                  </button>
                  <button 
                    onClick={() => setReportModal(true)}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <span className="flex items-center space-x-2">
                      <span>⚠️</span>
                      <span>Sorun Bildir</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Sistemi */}
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl border border-slate-700">
            {/* Tab Butonları */}
            <div className="flex border-b border-slate-700">
              {[
                { id: 'info', name: 'Bilgiler', icon: '📖' },
                { id: 'episodes', name: 'Bölümler', icon: '📺' },
                { id: 'characters', name: 'Karakterler', icon: '👥' },
                { id: 'reviews', name: 'Yorumlar', icon: '💬' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-indigo-400 border-b-2 border-indigo-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Tab İçerikleri */}
            <div className="p-6">
              {/* Bilgiler Tab */}
              {activeTab === 'info' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Teknik Bilgiler</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Format:</span>
                          <span className="text-white">TV Serisi</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Bölüm Süresi:</span>
                          <span className="text-white">24 dakika</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Yayın Tarihi:</span>
                          <span className="text-white">7 Nisan 2013</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Bitiş Tarihi:</span>
                          <span className="text-white">29 Eylül 2013</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">İstatistikler</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">İzlenme:</span>
                          <span className="text-white">1.2M+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Beğeni:</span>
                          <span className="text-white">98%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Yorum:</span>
                          <span className="text-white">15.4K</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Favori:</span>
                          <span className="text-white">89.2K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bölümler Tab */}
              {activeTab === 'episodes' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Tüm Bölümler</h3>
                  <div className="space-y-3">
                    {anime.episodes.map((episode) => (
                      <div key={episode.number} className="bg-slate-700/50 rounded-lg p-4 flex items-center justify-between hover:bg-slate-700 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                            {episode.number}
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{episode.title}</h4>
                            <p className="text-gray-400 text-sm">{episode.duration}</p>
                          </div>
                        </div>
                        <Link 
                          to={`/player/${anime.id}/episode/${episode.number}`}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          İzle
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Karakterler Tab */}
              {activeTab === 'characters' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Karakterler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {anime.characters.map((character, index) => (
                      <div key={index} className="bg-slate-700/50 rounded-lg p-4 flex items-center space-x-4">
                        <img 
                          src={character.image} 
                          alt={character.name} 
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-white font-medium">{character.name}</h4>
                          <p className="text-gray-400 text-sm">{character.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Yorumlar Tab */}
              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Kullanıcı Yorumları</h3>
                  <div className="space-y-4">
                    {anime.reviews.map((review, index) => (
                      <div key={index} className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {review.user.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-white font-medium">{review.user}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}>
                                ⭐
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-300">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sorun Bildir Modal */}
      {reportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-white mb-4">Sorun Bildir</h3>
            <textarea
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              placeholder="Sorununuzu detaylı bir şekilde açıklayın..."
              className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
              rows={4}
            />
            <div className="flex space-x-3 mt-4">
              <button
                onClick={() => setReportModal(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                İptal
              </button>
              <button
                onClick={handleReport}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Gönder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnimeInfo 