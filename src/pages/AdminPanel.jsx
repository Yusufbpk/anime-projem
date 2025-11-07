import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [users, setUsers] = useState([])
  const [animes, setAnimes] = useState([])
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAnimes: 0,
    totalPosts: 0,
    activeUsers: 0
  })
  const navigate = useNavigate()

  useEffect(() => {
    // Kullanıcı kontrolü
    const user = JSON.parse(sessionStorage.getItem('user') || '{}')
    if (!user.isAdmin) {
      navigate('/login')
      return
    }

    // Mock veriler
    setUsers([
      { id: 1, username: 'ysfkrkmz', email: 'ysf@example.com', isAdmin: true, createdAt: '2025-08-04', status: 'active' },
      { id: 2, username: 'esra', email: 'esra@example.com', isAdmin: true, createdAt: '2025-08-05', status: 'active' },
      { id: 3, username: 'user1', email: 'user1@example.com', isAdmin: false, createdAt: '2025-08-06', status: 'active' },
      { id: 4, username: 'user2', email: 'user2@example.com', isAdmin: false, createdAt: '2025-08-07', status: 'inactive' }
    ])

    setAnimes([
      { id: 1, title: 'Attack on Titan', status: 'active', views: 15000, rating: 9.0 },
      { id: 2, title: 'Demon Slayer', status: 'active', views: 12000, rating: 8.8 },
      { id: 3, title: 'One Piece', status: 'active', views: 20000, rating: 9.2 },
      { id: 4, title: 'Naruto', status: 'pending', views: 8000, rating: 8.7 }
    ])

    setStats({
      totalUsers: 4,
      totalAnimes: 4,
      totalPosts: 15,
      activeUsers: 3
    })
  }, [navigate])

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'users', name: 'Kullanıcılar', icon: '👥' },
    { id: 'animes', name: 'Animeler', icon: '🎬' },
    { id: 'posts', name: 'Gönderiler', icon: '📝' },
    { id: 'analytics', name: 'Analitik', icon: '📈' },
    { id: 'reports', name: 'Raporlar', icon: '🚨' },
    { id: 'settings', name: 'Ayarlar', icon: '⚙️' }
  ]

  const handleUserAction = (userId, action) => {
    console.log(`${action} action for user ${userId}`)
    // Burada gerçek API çağrısı yapılacak
  }

  const handleAnimeAction = (animeId, action) => {
    console.log(`${action} action for anime ${animeId}`)
    // Burada gerçek API çağrısı yapılacak
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                Admin Paneli
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Site yönetimi ve kullanıcı kontrolü
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 ${activeTab === tab.id
                        ? 'bg-slate-700 text-indigo-400 shadow-lg border border-indigo-500'
                        : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        }`}
                    >
                      <span className="text-xl">{tab.icon}</span>
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-700">
                {/* Dashboard Tab */}
                {activeTab === 'dashboard' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Dashboard
                    </h2>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <div className="flex items-center">
                          <div className="p-3 rounded-full bg-blue-500 bg-opacity-20">
                            <span className="text-2xl">👥</span>
                          </div>
                          <div className="ml-4">
                            <p className="text-gray-400 text-sm">Toplam Kullanıcı</p>
                            <p className="text-white text-2xl font-bold">{stats.totalUsers}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <div className="flex items-center">
                          <div className="p-3 rounded-full bg-green-500 bg-opacity-20">
                            <span className="text-2xl">🎬</span>
                          </div>
                          <div className="ml-4">
                            <p className="text-gray-400 text-sm">Toplam Anime</p>
                            <p className="text-white text-2xl font-bold">{stats.totalAnimes}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <div className="flex items-center">
                          <div className="p-3 rounded-full bg-purple-500 bg-opacity-20">
                            <span className="text-2xl">📝</span>
                          </div>
                          <div className="ml-4">
                            <p className="text-gray-400 text-sm">Toplam Gönderi</p>
                            <p className="text-white text-2xl font-bold">{stats.totalPosts}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <div className="flex items-center">
                          <div className="p-3 rounded-full bg-yellow-500 bg-opacity-20">
                            <span className="text-2xl">🟢</span>
                          </div>
                          <div className="ml-4">
                            <p className="text-gray-400 text-sm">Aktif Kullanıcı</p>
                            <p className="text-white text-2xl font-bold">{stats.activeUsers}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                      <h3 className="text-white font-semibold text-lg mb-4">Son Aktiviteler</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-slate-600 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-green-400">🟢</span>
                            <div>
                              <p className="text-white text-sm">Yeni kullanıcı kaydoldu</p>
                              <p className="text-gray-400 text-xs">user2 - 2 saat önce</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-600 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-blue-400">📝</span>
                            <div>
                              <p className="text-white text-sm">Yeni forum gönderisi</p>
                              <p className="text-gray-400 text-xs">Attack on Titan hakkında - 3 saat önce</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-600 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-yellow-400">⭐</span>
                            <div>
                              <p className="text-white text-sm">Yeni anime eklendi</p>
                              <p className="text-gray-400 text-xs">Demon Slayer - 5 saat önce</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Users Tab */}
                {activeTab === 'users' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Kullanıcı Yönetimi
                    </h2>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-slate-700">
                          <tr>
                            <th className="p-4 text-white font-semibold">ID</th>
                            <th className="p-4 text-white font-semibold">Kullanıcı Adı</th>
                            <th className="p-4 text-white font-semibold">E-posta</th>
                            <th className="p-4 text-white font-semibold">Rol</th>
                            <th className="p-4 text-white font-semibold">Durum</th>
                            <th className="p-4 text-white font-semibold">Kayıt Tarihi</th>
                            <th className="p-4 text-white font-semibold">İşlemler</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user) => (
                            <tr key={user.id} className="border-b border-slate-700">
                              <td className="p-4 text-white">{user.id}</td>
                              <td className="p-4 text-white">{user.username}</td>
                              <td className="p-4 text-white">{user.email}</td>
                              <td className="p-4">
                                <span className={`px-2 py-1 rounded-full text-xs ${user.isAdmin ? 'bg-red-500 text-white' : 'bg-gray-500 text-white'
                                  }`}>
                                  {user.isAdmin ? 'Admin' : 'Kullanıcı'}
                                </span>
                              </td>
                              <td className="p-4">
                                <span className={`px-2 py-1 rounded-full text-xs ${user.status === 'active' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                                  }`}>
                                  {user.status === 'active' ? 'Aktif' : 'Pasif'}
                                </span>
                              </td>
                              <td className="p-4 text-white">{user.createdAt}</td>
                              <td className="p-4">
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => handleUserAction(user.id, 'edit')}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                                  >
                                    Düzenle
                                  </button>
                                  <button
                                    onClick={() => handleUserAction(user.id, 'delete')}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                  >
                                    Sil
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Animes Tab */}
                {activeTab === 'animes' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Anime Yönetimi
                    </h2>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-slate-700">
                          <tr>
                            <th className="p-4 text-white font-semibold">ID</th>
                            <th className="p-4 text-white font-semibold">Başlık</th>
                            <th className="p-4 text-white font-semibold">Durum</th>
                            <th className="p-4 text-white font-semibold">Görüntülenme</th>
                            <th className="p-4 text-white font-semibold">Puan</th>
                            <th className="p-4 text-white font-semibold">İşlemler</th>
                          </tr>
                        </thead>
                        <tbody>
                          {animes.map((anime) => (
                            <tr key={anime.id} className="border-b border-slate-700">
                              <td className="p-4 text-white">{anime.id}</td>
                              <td className="p-4 text-white">{anime.title}</td>
                              <td className="p-4">
                                <span className={`px-2 py-1 rounded-full text-xs ${anime.status === 'active' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                                  }`}>
                                  {anime.status === 'active' ? 'Aktif' : 'Beklemede'}
                                </span>
                              </td>
                              <td className="p-4 text-white">{anime.views.toLocaleString()}</td>
                              <td className="p-4 text-white">{anime.rating}</td>
                              <td className="p-4">
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => handleAnimeAction(anime.id, 'edit')}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                                  >
                                    Düzenle
                                  </button>
                                  <button
                                    onClick={() => handleAnimeAction(anime.id, 'delete')}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                  >
                                    Sil
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Posts Tab */}
                {activeTab === 'posts' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Forum Gönderileri
                    </h2>

                    <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                      <p className="text-gray-400">Forum gönderileri yönetimi burada olacak.</p>
                    </div>
                  </div>
                )}

                {/* Analytics Tab */}
                {activeTab === 'analytics' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Analitik ve İstatistikler
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-white font-semibold text-lg mb-4">Haftalık İstatistikler</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Yeni Kullanıcılar:</span>
                            <span className="text-green-400 font-semibold">+45</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Toplam İzlenme:</span>
                            <span className="text-blue-400 font-semibold">125K</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Yeni Yorumlar:</span>
                            <span className="text-purple-400 font-semibold">+89</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Favori Ekleme:</span>
                            <span className="text-pink-400 font-semibold">+234</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-white font-semibold text-lg mb-4">En Popüler İçerikler</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Attack on Titan</span>
                            <span className="text-yellow-400 font-semibold">15.2K izlenme</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Demon Slayer</span>
                            <span className="text-yellow-400 font-semibold">12.8K izlenme</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">One Piece</span>
                            <span className="text-yellow-400 font-semibold">11.5K izlenme</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Naruto</span>
                            <span className="text-yellow-400 font-semibold">9.8K izlenme</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                      <h3 className="text-white font-semibold text-lg mb-4">Kullanıcı Aktivite Grafiği</h3>
                      <div className="h-64 bg-slate-600 rounded-lg flex items-center justify-center">
                        <p className="text-gray-400">Grafik burada gösterilecek</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Reports Tab */}
                {activeTab === 'reports' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Kullanıcı Raporları
                    </h2>

                    <div className="space-y-4">
                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <h3 className="text-white font-semibold">Yüksek Öncelik</h3>
                          </div>
                          <span className="text-red-400 text-sm">2 saat önce</span>
                        </div>
                        <p className="text-gray-300 mb-3">Attack on Titan 3. bölümde ses sorunu var. Kullanıcılar şikayet ediyor.</p>
                        <div className="flex space-x-2">
                          <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                            Çözüldü
                          </button>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                            İncele
                          </button>
                          <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm">
                            Arşivle
                          </button>
                        </div>
                      </div>

                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <h3 className="text-white font-semibold">Orta Öncelik</h3>
                          </div>
                          <span className="text-yellow-400 text-sm">5 saat önce</span>
                        </div>
                        <p className="text-gray-300 mb-3">Demon Slayer altyazıları Türkçe değil. Düzeltilmesi gerekiyor.</p>
                        <div className="flex space-x-2">
                          <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                            Çözüldü
                          </button>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                            İncele
                          </button>
                          <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm">
                            Arşivle
                          </button>
                        </div>
                      </div>

                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <h3 className="text-white font-semibold">Düşük Öncelik</h3>
                          </div>
                          <span className="text-blue-400 text-sm">1 gün önce</span>
                        </div>
                        <p className="text-gray-300 mb-3">Site tasarımında küçük bir hata var. Mobil görünümde menü düzgün çalışmıyor.</p>
                        <div className="flex space-x-2">
                          <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                            Çözüldü
                          </button>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                            İncele
                          </button>
                          <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm">
                            Arşivle
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Settings Tab */}
                {activeTab === 'settings' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Site Ayarları
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-white font-semibold text-lg mb-4">Genel Ayarlar</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Site Adı
                            </label>
                            <input
                              type="text"
                              defaultValue="Anime Projem"
                              className="w-full bg-gray-800 border border-slate-500 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Site Açıklaması
                            </label>
                            <textarea
                              rows={3}
                              defaultValue="Anime tutkunları için en iyi platform"
                              className="w-full bg-gray-800 border border-slate-500 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Bakım Modu
                            </label>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-white font-semibold text-lg mb-4">Güvenlik Ayarları</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Maksimum Giriş Denemesi
                            </label>
                            <input
                              type="number"
                              defaultValue="5"
                              className="w-full bg-gray-800 border border-slate-500 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Oturum Süresi (dakika)
                            </label>
                            <input
                              type="number"
                              defaultValue="30"
                              className="w-full bg-gray-800 border border-slate-500 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              İki Faktörlü Doğrulama
                            </label>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-white font-semibold text-lg mb-4">Bildirim Ayarları</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">E-posta Bildirimleri</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" defaultChecked className="sr-only peer" />
                              <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Sistem Bildirimleri</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" defaultChecked className="sr-only peer" />
                              <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Rapor Bildirimleri</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel 