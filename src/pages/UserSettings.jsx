import React, { useState } from 'react'

const UserSettings = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [formData, setFormData] = useState({
    username: 'AnimeFan123',
    email: 'user@example.com',
    avatar: '/images/c.jpg',
    bio: 'Anime tutkunu bir kullanıcıyım. Favori türlerim aksiyon ve fantastik.',
    notifications: {
      email: true,
      push: false,
      newsletter: true
    },
    privacy: {
      profile: 'public',
      activity: 'friends',
      search: true
    }
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNotificationChange = (type, value) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: value
      }
    }))
  }

  const handlePrivacyChange = (type, value) => {
    setFormData(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [type]: value
      }
    }))
  }

  const tabs = [
    { id: 'profile', name: 'Profil', icon: '👤' },
    { id: 'account', name: 'Hesap', icon: '🔐' },
    { id: 'notifications', name: 'Bildirimler', icon: '🔔' },
    { id: 'privacy', name: 'Gizlilik', icon: '🔒' },
    { id: 'preferences', name: 'Tercihler', icon: '⚙️' }
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Kullanıcı Ayarları
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Hesabınızı ve tercihlerinizi yönetin
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
                      className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-indigo-600 text-white shadow-lg'
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
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      Profil Bilgileri
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Avatar Section */}
                      <div className="flex items-center space-x-6">
                        <div className="relative">
                          <img 
                            src={formData.avatar} 
                            alt="Avatar"
                            className="w-24 h-24 rounded-full object-cover border-4 border-slate-600"
                          />
                          <button className="absolute -bottom-2 -right-2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors">
                            📷
                          </button>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">Profil Fotoğrafı</h3>
                          <p className="text-gray-400 text-sm">JPG, PNG veya GIF. Max 2MB.</p>
                        </div>
                      </div>

                      {/* Form Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Kullanıcı Adı
                          </label>
                          <input
                            type="text"
                            value={formData.username}
                            onChange={(e) => handleInputChange('username', e.target.value)}
                            className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            E-posta
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Hakkımda
                        </label>
                        <textarea
                          value={formData.bio}
                          onChange={(e) => handleInputChange('bio', e.target.value)}
                          rows={4}
                          className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 resize-none"
                          placeholder="Kendiniz hakkında kısa bir açıklama yazın..."
                        />
                      </div>

                      <div className="flex justify-end">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                          Değişiklikleri Kaydet
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Account Tab */}
                {activeTab === 'account' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      Hesap Güvenliği
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Mevcut Şifre
                        </label>
                        <input
                          type="password"
                          className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                          placeholder="Mevcut şifrenizi girin"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Yeni Şifre
                          </label>
                          <input
                            type="password"
                            className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                            placeholder="Yeni şifrenizi girin"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Şifre Tekrar
                          </label>
                          <input
                            type="password"
                            className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                            placeholder="Şifrenizi tekrar girin"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                          Şifreyi Değiştir
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notifications Tab */}
                {activeTab === 'notifications' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      Bildirim Ayarları
                    </h2>
                    
                    <div className="space-y-6">
                      {[
                        { key: 'email', label: 'E-posta Bildirimleri', description: 'Yeni anime ve güncellemeler hakkında e-posta al' },
                        { key: 'push', label: 'Push Bildirimleri', description: 'Tarayıcı push bildirimleri al' },
                        { key: 'newsletter', label: 'Haftalık Bülten', description: 'Haftalık anime önerileri ve haberler' }
                      ].map((notification) => (
                        <div key={notification.key} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                          <div>
                            <h3 className="text-white font-semibold">{notification.label}</h3>
                            <p className="text-gray-400 text-sm">{notification.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.notifications[notification.key]}
                              onChange={(e) => handleNotificationChange(notification.key, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Privacy Tab */}
                {activeTab === 'privacy' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      Gizlilik Ayarları
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Profil Görünürlüğü
                        </label>
                        <select
                          value={formData.privacy.profile}
                          onChange={(e) => handlePrivacyChange('profile', e.target.value)}
                          className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                        >
                          <option value="public">Herkese Açık</option>
                          <option value="friends">Sadece Arkadaşlar</option>
                          <option value="private">Gizli</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Aktivite Görünürlüğü
                        </label>
                        <select
                          value={formData.privacy.activity}
                          onChange={(e) => handlePrivacyChange('activity', e.target.value)}
                          className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                        >
                          <option value="public">Herkese Açık</option>
                          <option value="friends">Sadece Arkadaşlar</option>
                          <option value="private">Gizli</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                        <div>
                          <h3 className="text-white font-semibold">Arama Motorlarında Görün</h3>
                          <p className="text-gray-400 text-sm">Profilinizin arama motorlarında görünmesine izin ver</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.privacy.search}
                            onChange={(e) => handlePrivacyChange('search', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Preferences Tab */}
                {activeTab === 'preferences' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      Uygulama Tercihleri
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Tema
                        </label>
                        <select className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200">
                          <option value="dark">Koyu Tema</option>
                          <option value="light">Açık Tema</option>
                          <option value="auto">Sistem</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Dil
                        </label>
                        <select className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200">
                          <option value="tr">Türkçe</option>
                          <option value="en">English</option>
                          <option value="ja">日本語</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                        <div>
                          <h3 className="text-white font-semibold">Otomatik Oynatma</h3>
                          <p className="text-gray-400 text-sm">Video otomatik olarak oynatılsın</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
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

export default UserSettings 