import React, { useState } from 'react'
import AnimeCard from '../components/AnimeCard'

const Discover = () => {
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')
  const [animeList] = useState([
    {
      id: 1,
      title: 'Attack on Titan',
      image: '/images/AOT.gif',
      rating: 9.0,
      episodes: 25,
      status: 'Tamamlandı',
      description: 'İnsanlığın dev duvarların arkasında yaşadığı bir dünyada, devler insanları yemeye başlar.',
      genre: 'Aksiyon',
      year: 2013
    },
    {
      id: 2,
      title: 'Demon Slayer',
      image: '/images/ds.jpg',
      rating: 8.8,
      episodes: 26,
      status: 'Tamamlandı',
      description: 'Tanjiro Kamado, ailesini katleden şeytanları avlamak için yola çıkar.',
      genre: 'Aksiyon',
      year: 2019
    },
    {
      id: 3,
      title: 'One Piece',
      image: '/images/l1.jpg',
      rating: 9.2,
      episodes: '1000+',
      status: 'Devam Ediyor',
      description: 'Korsanların en büyük hazineyi aradığı büyük bir macera.',
      genre: 'Macera',
      year: 1999
    },
    {
      id: 4,
      title: 'Jujutsu Kaisen',
      image: '/images/c.jpg',
      rating: 8.5,
      episodes: 24,
      status: 'Tamamlandı',
      description: 'Lanetli ruhlarla savaşan büyücülerin hikayesi.',
      genre: 'Fantastik',
      year: 2020
    }
  ])

  const genres = ['Tümü', 'Aksiyon', 'Romantik', 'Komedi', 'Drama', 'Fantastik', 'Macera']
  const years = ['Tümü', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015']

  const filteredAnime = animeList.filter(anime => {
    const genreMatch = selectedGenre === 'all' || anime.genre === selectedGenre
    const yearMatch = selectedYear === 'all' || anime.year.toString() === selectedYear
    return genreMatch && yearMatch
  })

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Keşfet
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Binlerce anime arasından size en uygun olanı bulun
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Kategori</label>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full bg-gray-800 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre === 'Tümü' ? 'all' : genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Yıl</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-gray-800 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {years.map((year) => (
                  <option key={year} value={year === 'Tümü' ? 'all' : year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>

        {filteredAnime.length === 0 && (
          <div className="text-center text-white py-12">
            <p className="text-xl mb-4">Seçilen kriterlere uygun anime bulunamadı.</p>
            <p className="text-gray-400">Farklı filtreler deneyebilirsiniz.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Discover 