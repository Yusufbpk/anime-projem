import React, { useState, useEffect } from 'react'
import AnimeCard from '../components/AnimeCard'

const PopularAnime = () => {
  const [animeList, setAnimeList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data - Backend'den gelecek
    setAnimeList([
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
      },
      {
        id: 4,
        title: 'Naruto',
        image: '/images/c4.jpg',
        rating: 8.7,
        episodes: 720,
        status: 'Tamamlandı',
        description: 'Ninja dünyasında en güçlü olmaya çalışan Naruto Uzumaki.'
      },
      {
        id: 5,
        title: 'Dragon Ball',
        image: '/images/c7.jpg',
        rating: 8.6,
        episodes: 153,
        status: 'Tamamlandı',
        description: 'Goku ve arkadaşlarının dünyayı korumak için verdiği mücadele.'
      },
      {
        id: 6,
        title: 'Death Note',
        image: '/images/r2.avif',
        rating: 9.0,
        episodes: 37,
        status: 'Tamamlandı',
        description: 'Ölüm defterini bulan Light Yagami\'nin hikayesi.'
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
      <h1 className="section-title">Popüler Animeler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {animeList.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  )
}

export default PopularAnime 