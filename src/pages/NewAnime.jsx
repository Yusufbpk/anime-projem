import React, { useState, useEffect } from 'react'
import AnimeCard from '../components/AnimeCard'

const NewAnime = () => {
  const [animeList, setAnimeList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data - Backend'den gelecek
    setAnimeList([
      {
        id: 1,
        title: 'Jujutsu Kaisen Season 2',
        image: '/images/c.jpg',
        rating: 8.9,
        episodes: 23,
        status: 'Devam Ediyor',
        description: 'Yuji Itadori\'nin lanetli ruhlarla savaşmaya devam ettiği yeni sezon.'
      },
      {
        id: 2,
        title: 'Demon Slayer: Hashira Training Arc',
        image: '/images/ds.jpg',
        rating: 8.7,
        episodes: 11,
        status: 'Tamamlandı',
        description: 'Hashira eğitiminin gösterildiği yeni sezon.'
      },
      {
        id: 3,
        title: 'One Piece: Egghead Arc',
        image: '/images/l1.jpg',
        rating: 9.1,
        episodes: 15,
        status: 'Devam Ediyor',
        description: 'Straw Hat Pirates\'ın Egghead adasındaki maceraları.'
      }
    ])
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-white">Yükleniyor...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">Yeni Animeler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {animeList.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  )
}

export default NewAnime 