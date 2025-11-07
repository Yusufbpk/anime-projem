import React, { useState } from 'react'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const animeSchedule = {
    5: [{ title: 'Attack on Titan', episode: 'S4E25', time: '21:00' }],
    12: [{ title: 'Demon Slayer', episode: 'S3E11', time: '20:30' }],
    19: [{ title: 'One Piece', episode: 'E1089', time: '19:00' }],
    26: [{ title: 'Jujutsu Kaisen', episode: 'S2E23', time: '22:00' }]
  }

  const renderCalendar = () => {
    const days = []
    
    // Önceki ayın günleri
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2 text-gray-600"></div>)
    }
    
    // Bu ayın günleri
    for (let day = 1; day <= daysInMonth; day++) {
      const hasAnime = animeSchedule[day]
      days.push(
        <div key={day} className={`p-2 border border-slate-700 min-h-20 ${hasAnime ? 'bg-indigo-900' : ''}`}>
          <div className="text-white font-medium">{day}</div>
          {hasAnime && (
            <div className="mt-1">
              {hasAnime.map((anime, index) => (
                <div key={index} className="text-xs text-indigo-300">
                  <div className="font-medium">{anime.title}</div>
                  <div>{anime.episode} - {anime.time}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }
    
    return days
  }

  const monthNames = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Anime Takvimi
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Yayın programını takip edin ve hiçbir bölümü kaçırmayın
          </p>
        </div>
      
        <div className="bg-slate-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
            >
              ← Önceki
            </button>
            <h2 className="text-xl font-bold text-white">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
            >
              Sonraki →
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(day => (
              <div key={day} className="p-2 text-center text-gray-400 font-medium">
                {day}
              </div>
            ))}
            {renderCalendar()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar 