import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Animezzers</h3>
            <p className="text-gray-300 mb-4">
              Anime dünyasının en güncel ve kapsamlı portalı. En yeni animeleri keşfedin, 
              favorilerinizi kaydedin ve anime topluluğuna katılın.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-discord text-xl"></i>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/discover" className="text-gray-300 hover:text-white transition-colors">
                  Keşfet
                </Link>
              </li>
              <li>
                <Link to="/popular" className="text-gray-300 hover:text-white transition-colors">
                  Popüler Animeler
                </Link>
              </li>
              <li>
                <Link to="/new-anime" className="text-gray-300 hover:text-white transition-colors">
                  Yeni Animeler
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-gray-300 hover:text-white transition-colors">
                  Forum
                </Link>
              </li>
            </ul>
          </div>

          {/* Destek */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Destek</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  SSS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Kullanım Şartları
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  DMCA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Animezzers. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Gizlilik
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Şartlar
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Çerezler
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 