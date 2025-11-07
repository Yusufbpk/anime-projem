import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import NewAnime from './pages/NewAnime'
import PopularAnime from './pages/PopularAnime'
import Categories from './pages/Categories'
import Calendar from './pages/Calendar'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Player from './pages/Player'
import Forum from './pages/Forum'
import Favorites from './pages/Favorites'
import Saved from './pages/Saved'
import UserSettings from './pages/UserSettings'
import MyPosts from './pages/MyPosts'
import AnimeInfo from './pages/AnimeInfo'
import Discover from './pages/Discover'
import AdminPanel from './pages/AdminPanel'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 flex flex-col">
        <Navbar />
        <main className="pt-16 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-anime" element={<NewAnime />} />
            <Route path="/popular" element={<PopularAnime />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/player/:id" element={<Player />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<UserSettings />} />
            <Route path="/my-posts" element={<MyPosts />} />
            <Route path="/anime/:id" element={<AnimeInfo />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 