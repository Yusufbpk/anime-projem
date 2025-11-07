import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  const categories = [
    { 
      name: 'Aksiyon', 
      count: 150, 
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ), 
      description: 'Heyecan dolu savaş sahneleri' 
    },
    { 
      name: 'Romantik', 
      count: 89, 
      icon: (
        <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ), 
      description: 'Aşk ve ilişki hikayeleri' 
    },
    { 
      name: 'Komedi', 
      count: 120, 
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ), 
      description: 'Eğlenceli ve güldürücü içerik' 
    },
    { 
      name: 'Drama', 
      count: 95, 
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ), 
      description: 'Duygusal ve derin hikayeler' 
    },
    { 
      name: 'Fantastik', 
      count: 110, 
      icon: (
        <svg className="w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ), 
      description: 'Büyü ve fantazi dünyaları' 
    },
    { 
      name: 'Macera', 
      count: 130, 
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ), 
      description: 'Keşif ve yolculuk hikayeleri' 
    },
    { 
      name: 'Bilim Kurgu', 
      count: 75, 
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ), 
      description: 'Gelecek ve teknoloji' 
    },
    { 
      name: 'Spor', 
      count: 45, 
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ), 
      description: 'Spor ve rekabet temalı' 
    },
    { 
      name: 'Gizem', 
      count: 60, 
      icon: (
        <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ), 
      description: 'Gizem ve dedektif hikayeleri' 
    },
    { 
      name: 'Psikolojik', 
      count: 40, 
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ), 
      description: 'Zihinsel ve psikolojik konular' 
    },
    { 
      name: 'Tarih', 
      count: 35, 
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ), 
      description: 'Tarihi dönemler ve olaylar' 
    },
    { 
      name: 'Müzik', 
      count: 25, 
      icon: (
        <svg className="w-8 h-8 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      ), 
      description: 'Müzik ve performans temalı' 
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Kategoriler
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Favori türünüzü keşfedin ve size en uygun animeleri bulun
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/categories/${category.name.toLowerCase()}`}
              className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {category.icon}
                </div>
                
                {/* Category Name */}
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  {category.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Count */}
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-indigo-400 font-semibold">{category.count}</span>
                  <span className="text-gray-500 text-sm">Anime</span>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500 rounded-xl transition-colors duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Kategori İstatistikleri
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">
                  {categories.reduce((sum, cat) => sum + cat.count, 0)}
                </div>
                <div className="text-gray-400">Toplam Anime</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {categories.length}
                </div>
                <div className="text-gray-400">Kategori</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {Math.round(categories.reduce((sum, cat) => sum + cat.count, 0) / categories.length)}
                </div>
                <div className="text-gray-400">Ortalama Anime/Kategori</div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              En Popüler Kategoriler
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories
              .sort((a, b) => b.count - a.count)
              .slice(0, 6)
              .map((category, index) => (
                <div key={category.name} className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6">{category.icon}</div>
                      <div>
                        <h3 className="text-white font-semibold">{category.name}</h3>
                        <p className="text-gray-400 text-sm">{category.count} Anime</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-indigo-400">
                      #{index + 1}
                    </div>
                  </div>
                  
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(category.count / categories[0].count) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories 