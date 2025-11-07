import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Forum = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'Tümü', icon: '📋', count: 156 },
    { id: 'general', name: 'Genel', icon: '💬', count: 45 },
    { id: 'reviews', name: 'İncelemeler', icon: '⭐', count: 32 },
    { id: 'discussions', name: 'Tartışmalar', icon: '🤔', count: 28 },
    { id: 'news', name: 'Haberler', icon: '📰', count: 15 },
    { id: 'recommendations', name: 'Öneriler', icon: '💡', count: 36 }
  ]

  const posts = [
    {
      id: 1,
      title: 'Attack on Titan Final Season Hakkında Düşünceleriniz',
      author: 'AnimeFan123',
      avatar: '/images/c.jpg',
      category: 'discussions',
      replies: 24,
      views: 156,
      lastActivity: '2 saat önce',
      isPinned: true,
      isHot: true
    },
    {
      id: 2,
      title: 'Bu Sezon En İyi Anime Hangisi?',
      author: 'OtakuLife',
      avatar: '/images/c2.jpg',
      category: 'general',
      replies: 18,
      views: 89,
      lastActivity: '4 saat önce',
      isPinned: false,
      isHot: true
    },
    {
      id: 3,
      title: 'Demon Slayer Season 3 İncelemesi',
      author: 'WeebMaster',
      avatar: '/images/c3.jpg',
      category: 'reviews',
      replies: 12,
      views: 67,
      lastActivity: '6 saat önce',
      isPinned: false,
      isHot: false
    },
    {
      id: 4,
      title: 'Yeni Çıkan Anime Önerileri',
      author: 'AnimeLover',
      avatar: '/images/c4.jpg',
      category: 'recommendations',
      replies: 31,
      views: 203,
      lastActivity: '1 gün önce',
      isPinned: false,
      isHot: true
    },
    {
      id: 5,
      title: 'One Piece Live Action Duyurusu',
      author: 'NewsHunter',
      avatar: '/images/c7.jpg',
      category: 'news',
      replies: 8,
      views: 45,
      lastActivity: '1 gün önce',
      isPinned: true,
      isHot: false
    }
  ]

  const filteredPosts = posts.filter(post => {
    const categoryMatch = activeCategory === 'all' || post.category === activeCategory
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    return categoryMatch && searchMatch
  })

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Anime Forumu
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Anime tutkunları ile tartışın, öneriler paylaşın ve yeni arkadaşlar edinin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Arama
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Forum ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-800 border border-slate-600 text-white rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Kategoriler
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${activeCategory === category.id
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 mt-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  İstatistikler
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Toplam Konu</span>
                    <span className="text-white font-semibold">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Toplam Mesaj</span>
                    <span className="text-white font-semibold">1,234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Aktif Üyeler</span>
                    <span className="text-white font-semibold">89</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Create Post Button */}
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Yeni Konu Başlat</h3>
                    <p className="text-gray-400 text-sm">Düşüncelerinizi paylaşın</p>
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                    <span>✏️</span>
                    <span>Yeni Konu</span>
                  </button>
                </div>
              </div>

              {/* Posts */}
              <div className="bg-slate-800 rounded-xl shadow-xl border border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-700">
                  <h3 className="text-white font-semibold text-lg">
                    {activeCategory === 'all' ? 'Tüm Konular' : categories.find(c => c.id === activeCategory)?.name}
                  </h3>
                </div>

                <div className="divide-y divide-slate-700">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="p-6 hover:bg-slate-700/50 transition-colors">
                      <div className="flex items-start space-x-4">
                        {/* Avatar */}
                        <img
                          src={post.avatar}
                          alt={post.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {post.isPinned && (
                              <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded-full">
                                📌 Sabitlenmiş
                              </span>
                            )}
                            {post.isHot && (
                              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                                🔥 Popüler
                              </span>
                            )}
                            <span className="text-indigo-400 text-sm font-medium">
                              {categories.find(c => c.id === post.category)?.name}
                            </span>
                          </div>

                          <h4 className="text-white font-semibold text-lg mb-2 hover:text-indigo-400 transition-colors cursor-pointer">
                            {post.title}
                          </h4>

                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <div className="flex items-center space-x-4">
                              <span>👤 {post.author}</span>
                              <span>💬 {post.replies} yanıt</span>
                              <span>👁️ {post.views} görüntüleme</span>
                            </div>
                            <span>{post.lastActivity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="p-6 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      Toplam {filteredPosts.length} konu gösteriliyor
                    </span>
                    <div className="flex items-center space-x-2">
                      <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg transition-colors">
                        ← Önceki
                      </button>
                      <span className="text-white px-3 py-2">1</span>
                      <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg transition-colors">
                        Sonraki →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forum 