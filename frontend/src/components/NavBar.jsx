import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, User, LogIn, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-accent tracking-tighter">
          TUI<span className="text-textPrimary">EVOLUTION</span>
        </Link>

        {/* ORTA MENÜ (Ana Navigasyon) */}
        <div className="hidden md:flex items-center gap-8 bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20">
          <Link to="/" className="hover:text-accent font-medium transition-colors">Home</Link>
          <Link to="/projects" className="hover:text-accent font-medium transition-colors">Projects</Link>
          
          {/* HOVER MENÜ (Hakkımızda) */}
          <div 
            className="relative h-full flex items-center cursor-pointer"
            onMouseEnter={() => setIsAboutHovered(true)}
            onMouseLeave={() => setIsAboutHovered(false)}
          >
            <span className="hover:text-accent font-medium flex items-center gap-1 transition-colors">
              About Us <ChevronDown size={16}/>
            </span>
            
            {/* Açılır Menü */}
            {isAboutHovered && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-bgSecondary rounded-xl shadow-xl overflow-hidden animate-fade-in flex flex-col border border-white/20">
                {/* Üçgen Ok */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-bgSecondary rotate-45 border-l border-t border-white/20"></div>
                
                <Link to="/about" className="relative z-10 px-4 py-3 hover:bg-accent hover:text-white text-sm transition-colors text-center">
                  Genel Bakış
                </Link>
                <div className="h-[1px] bg-accent/20 mx-2"></div>
                <div className="flex justify-between">
                   <span className="px-4 py-3 text-xs opacity-70 w-full text-center">Evrim & Tuana</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SAĞ TARAF (Profil & Tema) */}
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-bgSecondary/50 text-accent transition-colors">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {user ? (
            <div className="flex items-center gap-3 bg-bgSecondary/30 px-3 py-1 rounded-full border border-accent/20">
              <Link to="/profile" className="flex items-center gap-2 font-medium text-sm">
                <User size={18} className="text-accent" />
                <span className="hidden sm:inline">{user.name}</span>
              </Link>
              <div className="w-[1px] h-4 bg-accent/30"></div>
              <button onClick={logout} className="text-xs text-red-500 hover:font-bold">Sign Out</button>
            </div>
          ) : (
            <button 
              onClick={login} 
              className="flex items-center gap-2 bg-accent text-white px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              <LogIn size={16} /> Sign In
            </button>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;