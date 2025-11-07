import React, { useState, useEffect } from 'react'

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userData = sessionStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-white">Lütfen giriş yapın.</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title">Profil</h1>
        
        <div className="bg-slate-800 rounded-lg p-6 mb-6">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{user.username.charAt(0).toUpperCase()}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{user.username}</h2>
              <p className="text-gray-400">Üye olma tarihi: {new Date().toLocaleDateString('tr-TR')}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">İstatistikler</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">İzlenen Anime:</span>
                <span className="text-white">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Favori Anime:</span>
                <span className="text-white">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Toplam İzleme Saati:</span>
                <span className="text-white">156 saat</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Son İzlenenler</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white">Attack on Titan</span>
                <span className="text-gray-400">Bölüm 25</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Demon Slayer</span>
                <span className="text-gray-400">Bölüm 11</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">One Piece</span>
                <span className="text-gray-400">Bölüm 1089</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile 