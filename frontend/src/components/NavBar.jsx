import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/projects', label: 'Projeler' },
    { path: '/about-us', label: 'Hakkımızda' },
    { path: '/profile', label: 'Profil' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass-strong py-3 shadow-md" : "bg-[#BDF1F9] py-5"
    }`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-[#4F348D] tracking-tight">
          TUI<span className="text-[#0D2D31]">EVOLUTION</span>
        </Link>

        {/* Masaüstü Navigasyon - Bu div linkleri yan yana dizer */}
        <div className="hidden md:flex items-center gap-4">
          <div className="glass-pill rounded-full px-3 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  location.pathname === link.path 
                  ? "bg-[#4F348D] text-white shadow-sm" 
                  : "text-[#4F348D] hover:bg-white/40"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobil Buton */}
        <button className="md:hidden text-[#4F348D]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobil Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#BDF1F9] border-t border-[#4F348D]/10 p-6 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#4F348D] font-semibold text-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};