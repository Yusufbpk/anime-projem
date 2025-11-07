import React from 'react'
import { Link } from 'react-router-dom'

const AnimeCard = ({ anime, featured = false }) => {
  const { id, title, image, rating, episodes, status, description } = anime

  return (
    <div className={`group relative bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${featured ? 'lg:col-span-1' : ''}`}>
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = '/images/placeholder.jpg'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
          <span className="text-yellow-400">⭐</span>
          <span>{rating}</span>
        </div>
        
        {/* Status Badge */}
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
          status === 'Tamamlandı' 
            ? 'bg-green-600 text-white' 
            : 'bg-yellow-600 text-white'
        }`}>
          {status}
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-indigo-600 hover:bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-300 cursor-pointer">
            <span className="text-white text-xl">▶</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        
        {featured && (
          <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
          <span className="flex items-center space-x-1">
            <span>📺</span>
            <span>{episodes} Bölüm</span>
          </span>
          <span className="flex items-center space-x-1 text-indigo-400 font-semibold">
            <span>⭐</span>
            <span>{rating}/10</span>
          </span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link 
            to={`/anime/${id}`}
            className="flex-1 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={(e) => {
              // Link'in çalıştığından emin olmak için
              console.log('Anime detay linkine tıklandı:', `/anime/${id}`)
            }}
          >
            <span className="flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
              <span>Detaylar</span>
            </span>
          </Link>
          <Link 
            to={`/player/${id}`}
            className="flex-1 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>İzle</span>
            </span>
          </Link>
        </div>
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500 rounded-xl transition-colors duration-300 pointer-events-none"></div>
    </div>
  )
}

export default AnimeCard 