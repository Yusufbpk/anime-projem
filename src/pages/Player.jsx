import React, { useState, useEffect } from 'react'

const Player = () => {
  const [anime, setAnime] = useState(null)
  const [currentEpisode, setCurrentEpisode] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(50)
  const [quality, setQuality] = useState('1080p')
  const [showControls, setShowControls] = useState(true)
  const [progress, setProgress] = useState(25)

  useEffect(() => {
    setAnime({
      id: 1,
      title: 'Attack on Titan',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&h=400&fit=crop',
      banner: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=400&fit=crop',
      description: 'İnsanlığın dev duvarların arkasında yaşadığı bir dünyada, devler insanları yemeye başlar. Eren Yeager ve arkadaşları, insanlığı korumak için Survey Corps\'a katılır.',
      episodes: 25,
      rating: 9.0,
      genre: 'Aksiyon',
      year: 2013,
      status: 'Tamamlandı',
      duration: '24 dk',
      currentEpisode: currentEpisode
    })
  }, [currentEpisode])

  if (!anime) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-white">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <style dangerouslySetInnerHTML={{__html: `
        .episode-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .episode-scroll::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
          border-radius: 10px;
          margin: 4px 0;
        }
        .episode-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #6366f1 0%, #4f46e5 100%);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .episode-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #818cf8 0%, #6366f1 100%);
          width: 10px;
        }
        .episode-card {
          position: relative;
          overflow: visible;
        }
        .episode-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 0.5rem;
          padding: 2px;
          background: linear-gradient(135deg, #6366f1 0%, #06b6d4 50%, #6366f1 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        .episode-card:hover::before {
          opacity: 1;
        }
        .episode-card::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 0.5rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%);
          opacity: 0;
          transition: all 0.3s ease;
          filter: blur(8px);
          z-index: -1;
        }
        .episode-card:hover::after {
          opacity: 1;
          filter: blur(12px);
        }
      `}} />
      
      {/* Video Player Section */}
      <div className="relative bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="relative group">
            <div 
              className="aspect-video bg-gradient-to-br from-slate-900 to-black flex items-center justify-center relative overflow-hidden"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              <div className="absolute inset-0 opacity-20">
                <img 
                  src={anime.banner || anime.image} 
                  alt={anime.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center text-white z-10 relative">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center mx-auto hover:bg-indigo-700 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                    <div className="text-4xl">▶</div>
                  </div>
                </div>
                <h1 className="text-4xl font-bold mb-2">{anime.title}</h1>
                <p className="text-xl text-gray-300 mb-4">Bölüm {currentEpisode}</p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <span>⭐ {anime.rating}</span>
                  <span>📺 {anime.episodes} Bölüm</span>
                  <span>⏱️ {anime.duration}</span>
                </div>
              </div>
              
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-indigo-400 transition-colors text-2xl"
                    >
                      {isPlaying ? '⏸' : '▶'}
                    </button>
                    <div className="flex items-center space-x-3">
                      <span className="text-white text-sm font-mono">00:00</span>
                      <div className="w-80 h-2 bg-gray-600 rounded-full relative group">
                        <div className="w-1/3 h-2 bg-indigo-500 rounded-full transition-all duration-200"></div>
                        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-indigo-500 rounded-full transform -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-white text-sm font-mono">00:25</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <select 
                      value={quality} 
                      onChange={(e) => setQuality(e.target.value)}
                      className="bg-slate-800/80 text-white text-sm rounded px-3 py-1 border border-slate-600 focus:border-indigo-500 focus:outline-none backdrop-blur-sm"
                    >
                      <option value="1080p">1080p</option>
                      <option value="720p">720p</option>
                      <option value="480p">480p</option>
                    </select>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-lg">🔊</span>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-20 accent-indigo-500"
                      />
                    </div>
                    
                    <button className="text-white hover:text-indigo-400 transition-colors text-xl">
                      ⚙️
                    </button>
                    <button className="text-white hover:text-indigo-400 transition-colors text-xl">
                      ⛶
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Bölümler ve Anime Bilgi Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Bölümler Listesi - Sol */}
            <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-between">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-indigo-400">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Tüm Bölümler
                </span>
                <span className="text-sm text-gray-400 font-normal">{anime.episodes} Bölüm</span>
              </h3>
              
              <div className="space-y-2 max-h-96 overflow-y-auto pr-2 episode-scroll">
                {Array.from({ length: anime.episodes }, (_, i) => (
                  <div
                    key={i + 1}
                    className={`episode-card flex items-center justify-between p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                      currentEpisode === i + 1
                        ? 'bg-indigo-600/20 border-l-4 border-indigo-500'
                        : 'bg-slate-700/30 hover:bg-slate-700/50 border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-4 flex-1 relative z-10">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                        currentEpisode === i + 1 ? 'bg-indigo-600 text-white' : 'bg-slate-600 text-gray-300'
                      }`}>
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-white font-medium text-sm">Bölüm {i + 1}</h4>
                          {currentEpisode === i + 1 && (
                            <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full">İzleniyor</span>
                          )}
                          {i + 1 < currentEpisode && (
                            <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              İzlendi
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="text-xs text-gray-400 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            24 dk
                          </span>
                          {i + 1 < currentEpisode && (
                            <span className="text-xs text-gray-400">• %100</span>
                          )}
                          {currentEpisode === i + 1 && progress > 0 && (
                            <span className="text-xs text-gray-400">• %{progress}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setCurrentEpisode(i + 1)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center space-x-1 relative z-10 ${
                        currentEpisode === i + 1
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'bg-slate-600 text-white hover:bg-slate-500'
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      {currentEpisode === i + 1 ? 'İzleniyor' : i + 1 < currentEpisode ? 'Tekrar İzle' : 'İzle'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Anime Bilgi Kartı - Sağ */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-6 shadow-2xl border border-slate-600">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <img 
                    src={anime.image} 
                    alt={anime.title}
                    className="w-40 h-56 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                    {anime.status}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">{anime.title}</h2>
                <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300 mb-4">
                  <span className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span>{anime.rating}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>📺</span>
                    <span>{anime.episodes} Bölüm</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>🎭</span>
                    <span>{anime.genre}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>📅</span>
                    <span>{anime.year}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>⏱️</span>
                    <span>{anime.duration}</span>
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">{anime.description}</p>
              </div>
            </div>
          </div>

          {/* Ana İçerik Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sol Kolon - Ek Bilgiler */}
            <div className="lg:col-span-2 space-y-6">
              {/* Episode Description */}
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Bölüm {currentEpisode} Açıklaması
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Bu bölümde {anime.title} serisinin {currentEpisode}. bölümü yer almaktadır. 
                  Anime'nin hikayesi devam ederken, karakterlerin gelişimi ve olayların akışı 
                  izleyicileri etkilemeye devam ediyor. Her bölümde yeni sürprizler ve heyecan 
                  dolu anlar sizleri bekliyor.
                </p>
              </div>

              {/* Comments Section */}
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Yorumlar
                </h3>
                <div className="space-y-4">
                  {[
                    { user: 'AnimeFan123', comment: 'Bu bölüm gerçekten harikaydı! Eren\'in karakter gelişimi mükemmel.', rating: 5, time: '2 saat önce' },
                    { user: 'OtakuLife', comment: 'Animasyon kalitesi çok yüksek, özellikle savaş sahneleri.', rating: 4, time: '5 saat önce' },
                    { user: 'WeebMaster', comment: 'Bu anime gerçekten izlenmeye değer. Her bölümde yeni sürprizler var.', rating: 5, time: '1 gün önce' }
                  ].map((comment, index) => (
                    <div key={index} className="bg-slate-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {comment.user.charAt(0)}
                          </div>
                          <span className="text-white font-medium">{comment.user}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-sm ${i < comment.rating ? 'text-yellow-400' : 'text-gray-500'}`}>⭐</span>
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm">{comment.time}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">{comment.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sağ Kolon - Yan Bilgiler */}
            <div className="lg:col-span-1 space-y-6">
              {/* Related Anime */}
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Benzer Animeler
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Demon Slayer', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=400&fit=crop', rating: 8.8, episodes: 26 },
                    { title: 'One Piece', image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=400&fit=crop', rating: 9.2, episodes: '1000+' },
                    { title: 'Jujutsu Kaisen', image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=300&h=400&fit=crop', rating: 8.5, episodes: 24 }
                  ].map((related, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-all duration-200 hover:transform hover:scale-105 group cursor-pointer"
                    >
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-16 h-20 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                      />
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-medium group-hover:text-indigo-400 transition-colors">{related.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-yellow-400 text-xs">⭐</span>
                          <span className="text-gray-400 text-xs">{related.rating}</span>
                          <span className="text-gray-500 text-xs">•</span>
                          <span className="text-gray-400 text-xs">{related.episodes} Bölüm</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Section */}
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  İndirme
                </h3>
                <div className="space-y-3">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors font-medium">
                    📥 1080p İndir
                  </button>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-medium">
                    📥 720p İndir
                  </button>
                  <button className="w-full bg-slate-600 hover:bg-slate-700 text-white py-3 rounded-lg transition-colors font-medium">
                    📥 480p İndir
                  </button>
                </div>
              </div>

              {/* Quality Settings */}
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Kalite Ayarları
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Video Kalitesi</span>
                    <select 
                      value={quality} 
                      onChange={(e) => setQuality(e.target.value)}
                      className="bg-indigo-800 text-white text-sm rounded px-3 py-1 border border-indigo-600 focus:border-indigo-500 focus:outline-none"
                    >
                      <option value="1080p">1080p</option>
                      <option value="720p">720p</option>
                      <option value="480p">480p</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Ses</span>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="w-24 accent-indigo-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Altyazı</span>
                    <select className="bg-indigo-800 text-white text-sm rounded px-3 py-1 border border-indigo-600 focus:border-indigo-500 focus:outline-none">
                      <option value="tr">Türkçe</option>
                      <option value="en">İngilizce</option>
                      <option value="off">Kapalı</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Share Section */}
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Paylaş
                </h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-medium">
                    📘 Facebook
                  </button>
                  <button className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-lg transition-colors font-medium">
                    🐦 Twitter
                  </button>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors font-medium">
                    📷 Instagram
                  </button>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors font-medium">
                    📱 WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player