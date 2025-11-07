import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimeCard from '../components/AnimeCard'

const Home = () => {
  const [featuredAnime, setFeaturedAnime] = useState([])
  const [latestAnime, setLatestAnime] = useState([])
  const [popularAnime, setPopularAnime] = useState([])

  // Mock data - Backend'den gelecek
  useEffect(() => {
    // Featured anime data
    setFeaturedAnime([
      {
        id: 1,
        title: 'Attack on Titan',
        image: '/images/AOT.gif',
        rating: 9.0,
        episodes: 25,
        status: 'Tamamlandı',
        description: 'İnsanlığın dev duvarların arkasında yaşadığı bir dünyada, devler insanları yemeye başlar.'
      },
      {
        id: 2,
        title: 'Demon Slayer',
        image: '/images/ds.jpg',
        rating: 8.8,
        episodes: 26,
        status: 'Tamamlandı',
        description: 'Tanjiro Kamado, ailesini katleden şeytanları avlamak için yola çıkar.'
      },
      {
        id: 3,
        title: 'One Piece',
        image: '/images/l1.jpg',
        rating: 9.2,
        episodes: '1000+',
        status: 'Devam Ediyor',
        description: 'Korsanların en büyük hazineyi aradığı büyük bir macera.'
      }
    ])

    // Latest anime data
    setLatestAnime([
      {
        id: 4,
        title: 'Jujutsu Kaisen',
        image: '/images/c.jpg',
        rating: 8.5,
        episodes: 24,
        status: 'Tamamlandı',
        description: 'Lanetli ruhlarla savaşan büyücülerin hikayesi.'
      },
      {
        id: 5,
        title: 'My Hero Academia',
        image: '/images/c2.jpg',
        rating: 8.3,
        episodes: 25,
        status: 'Tamamlandı',
        description: 'Süper güçlere sahip olanların eğitim gördüğü bir dünya.'
      },
      {
        id: 6,
        title: 'Black Clover',
        image: '/images/c3.jpg',
        rating: 7.8,
        episodes: 170,
        status: 'Tamamlandı',
        description: 'Sihir dünyasında en güçlü büyücü olmaya çalışan Asta.'
      }
    ])

    // Popular anime data
    setPopularAnime([
      {
        id: 7,
        title: 'Naruto',
        image: '/images/c4.jpg',
        rating: 8.7,
        episodes: 720,
        status: 'Tamamlandı',
        description: 'Ninja dünyasında en güçlü olmaya çalışan Naruto Uzumaki.'
      },
      {
        id: 8,
        title: 'Dragon Ball',
        image: '/images/c7.jpg',
        rating: 8.6,
        episodes: 153,
        status: 'Tamamlandı',
        description: 'Goku ve arkadaşlarının dünyayı korumak için verdiği mücadele.'
      },
      {
        id: 9,
        title: 'Death Note',
        image: '/images/r2.avif',
        rating: 9.0,
        episodes: 37,
        status: 'Tamamlandı',
        description: 'Ölüm defterini bulan Light Yagami\'nin hikayesi.'
      }
    ])
  }, [])

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/AOT2.gif" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
        </div>
        
        {/* Anime Poster Overlay */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-8 opacity-20">
          <img 
            src="/images/AOT.gif" 
            alt="Anime Poster"
            className="w-64 h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Anime Dünyasına
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Hoş Geldiniz
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              En yeni ve popüler animeleri keşfedin, favorilerinizi kaydedin ve anime topluluğuna katılın. 
              Binlerce anime arasından size en uygun olanı bulun.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/discover" 
                className="group bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <span className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  <span>Keşfet</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12,5 19,12 12,19" />
                  </svg>
                </span>
              </Link>
              <Link 
                to="/popular" 
                className="group bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-slate-600 hover:border-slate-500"
              >
                <span className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  <span>Popüler Animeler</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12,5 19,12 12,19" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Anime Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Öne Çıkan
              </span>
              <span className="block">Animeler</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              En çok izlenen ve beğenilen animeleri keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredAnime.map((anime, index) => (
              <div key={anime.id} className="group">
                <AnimeCard anime={anime} featured={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Anime Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                En Yeni
              </span>
              <span className="block">Animeler</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Güncel anime serilerini kaçırmayın</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {latestAnime.map((anime) => (
              <div key={anime.id} className="group">
                <AnimeCard anime={anime} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/new-anime" 
              className="group bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 inline-flex"
            >
              <span>Tümünü Gör</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Anime Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                Popüler
              </span>
              <span className="block">Animeler</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">En çok izlenen anime serileri</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularAnime.map((anime) => (
              <div key={anime.id} className="group">
                <AnimeCard anime={anime} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/popular" 
              className="group bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 inline-flex"
            >
              <span>Tümünü Gör</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Kategoriler
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Favori türünüzü keşfedin</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Aksiyon', icon: '⚔️', color: 'from-red-500 to-red-600' },
              { name: 'Romantik', icon: '💕', color: 'from-pink-500 to-pink-600' },
              { name: 'Komedi', icon: '😂', color: 'from-yellow-500 to-yellow-600' },
              { name: 'Drama', icon: '🎭', color: 'from-purple-500 to-purple-600' },
              { name: 'Fantastik', icon: '✨', color: 'from-indigo-500 to-indigo-600' },
              { name: 'Macera', icon: '🗺️', color: 'from-green-500 to-green-600' }
            ].map((category) => (
              <Link
                key={category.name}
                to={`/categories/${category.name.toLowerCase()}`}
                className={`group bg-gradient-to-br ${category.color} hover:scale-105 p-6 rounded-xl text-center transition-all duration-300 transform hover:shadow-2xl shadow-lg`}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Anime', icon: '📺' },
              { number: '50K+', label: 'Kullanıcı', icon: '👥' },
              { number: '24/7', label: 'Yayın', icon: '🔄' },
              { number: 'HD', label: 'Kalite', icon: '🎬' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 