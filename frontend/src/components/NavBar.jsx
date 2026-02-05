import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: "Ana Sayfa" },
  { path: "/projects", label: "Projeler" },
  { path: "/about-us", label: "Hakkımızda" },
  { path: "/profile", label: "Profil" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${
        isScrolled ? "glass-strong py-3 shadow-lg" : "bg-transparent py-5"
      }`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-[#4F348D]">
          TUI<span className="text-[#0D2D31]">EVOLUTION</span>
        </Link>

        {/* Ortadaki Cam Efektli Kapsül */}
        <div className="hidden md:flex items-center">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                to={link.path} 
                key={link.path} 
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  location.pathname === link.path 
                  ? "bg-[#4F348D] text-white shadow-md" 
                  : "text-[#4F348D] hover:bg-white/40"
                }`}
              > 
                {link.label} 
              </Link>
            ))}
          </div>
        </div>

        {/* Giriş Butonu */}
        <div className="hidden md:block">
          <Link to="/profile" className="bg-[#4F348D] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-[#0D2D31] transition-all">
            Giriş Yap
          </Link>
        </div>

        {/* Mobil Buton */}
        <button className="md:hidden p-2 text-[#4F348D]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </nav>

      {/* Mobil Menü */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="text-[#4F348D] font-semibold text-lg">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};