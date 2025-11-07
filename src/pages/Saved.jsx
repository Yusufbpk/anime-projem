import React, { useState, useEffect } from 'react'
import AnimeCard from '../components/AnimeCard'

const Saved = () => {
  const [savedAnime, setSavedAnime] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Kullanıcı bilgisini al
    const userData = sessionStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }

    // Kullanıcıya özel kaydedilmiş animeleri yükle
    if (userData) {
      const user = JSON.parse(userData)
      // Gerçek uygulamada bu veri API'den gelecek
      const userSavedAnime = [
        {
          id: 1,
          title: 'Jujutsu Kaisen',
          image: '/images/c.jpg',
          rating: 8.5,
          episodes: 24,
          status: 'Tamamlandı',
          description: 'Lanetli ruhlarla savaşan büyücülerin hikayesi.',
          savedAt: '2025-01-15'
        },
        {
          id: 2,
          title: 'My Hero Academia',
          image: '/images/c2.jpg',
          rating: 8.3,
          episodes: 25,
          status: 'Tamamlandı',
          description: 'Süper güçlere sahip olanların eğitim gördüğü bir dünya.',
          savedAt: '2025-01-10'
        },
        {
          id: 3,
          title: 'Demon Slayer',
          image: '/images/ds.jpg',
          rating: 8.8,
          episodes: 26,
          status: 'Tamamlandı',
          description: 'Tanjiro Kamado, ailesini katleden şeytanları avlamak için yola çıkar.',
          savedAt: '2025-01-05'
        },
        {
          id: 4,
          title: 'One Piece',
          image: '/images/l1.jpg',
          rating: 9.2,
          episodes: '1000+',
          status: 'Devam Ediyor',
          description: 'Korsanların en büyük hazineyi aradığı büyük bir macera.',
          savedAt: '2025-01-01'
        }
      ]
      setSavedAnime(userSavedAnime)
    }
  }, [])

  const handleRemoveFromSaved = (animeId) => {
    setSavedAnime(prev => prev.filter(anime => anime.id !== animeId))
    // Gerçek uygulamada bu işlem API'ye gönderilecek
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-white py-12">
          <h1 className="text-2xl font-bold mb-4">Giriş Yapın</h1>
          <p className="text-gray-400 mb-6">Kaydettiğiniz animeleri görmek için giriş yapmanız gerekiyor.</p>
          <a href="/login" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors">
            Giriş Yap
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="section-title">Kaydettiklerim</h1>
        {savedAnime.length > 0 && (
          <div className="text-gray-400 text-sm">
            {savedAnime.length} anime kaydedildi
          </div>
        )}
      </div>
      
      {savedAnime.length === 0 ? (
        <div className="text-center text-white py-12">
          <div className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
              className="mx-auto text-gray-400 mb-4">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <p className="text-xl mb-4">Henüz anime kaydetmediniz.</p>
          <p className="text-gray-400 mb-6">Daha sonra izlemek istediğiniz animeleri kaydedebilirsiniz.</p>
          <a href="/discover" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors">
            Anime Keşfet
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {savedAnime.map((anime) => (
            <div key={anime.id} className="relative group">
              <AnimeCard anime={anime} />
              <button
                onClick={() => handleRemoveFromSaved(anime.id)}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                title="Kayıtlardan çıkar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                {anime.savedAt}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Saved 