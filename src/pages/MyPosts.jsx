import React, { useState } from 'react'

const MyPosts = () => {
  const [posts] = useState([
    {
      id: 1,
      title: 'Attack on Titan Final Season Hakkında',
      content: 'Final season gerçekten harika! Eren\'in karakter gelişimi mükemmel.',
      replies: 15,
      views: 234,
      date: '2 saat önce'
    },
    {
      id: 2,
      title: 'En İyi Anime Önerileri',
      content: 'Yeni anime arayanlar için önerilerim: Demon Slayer, Jujutsu Kaisen, One Piece',
      replies: 8,
      views: 156,
      date: '5 saat önce'
    }
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">Paylaşımlarım</h1>
      
      {posts.length === 0 ? (
        <div className="text-center text-white py-12">
          <p className="text-xl mb-4">Henüz paylaşım yapmadınız.</p>
          <p className="text-gray-400">Forum\'da anime hakkında paylaşım yapabilirsiniz.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-slate-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-3">{post.content}</p>
                </div>
                <div className="text-right text-sm text-gray-400">
                  <div>{post.replies} yanıt</div>
                  <div>{post.views} görüntüleme</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{post.date}</span>
                <div className="space-x-2">
                  <button className="text-indigo-400 hover:text-indigo-300">
                    Düzenle
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Sil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyPosts 