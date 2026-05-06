import { motion } from 'motion/react';
import { Phone, Mail, Facebook, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src="https://iili.io/BZRLVjt.md.jpg" 
              alt="PakDek Logo" 
              className="h-12 w-12 rounded-lg object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-extrabold tracking-tighter text-white">
              PAK<span className="text-primary">DEK</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#oferta" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Oferta</a>
            <a href="#pakowanie" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Pakowanie</a>
            <a href="#gastronomia" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Gastronomia</a>
            <a href="#kontakt" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Kontakt</a>
            <div className="flex items-center gap-4 border-l border-white/10 pl-8">
              <a href="tel:+48627820432" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                <Phone className="h-4 w-4 text-primary" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573699996575" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600/10 rounded-full hover:bg-blue-600/20 transition-colors">
                <Facebook className="h-4 w-4 text-blue-500" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10 px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#oferta" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-gray-300 hover:text-primary">Oferta</a>
          <a href="#pakowanie" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-gray-300 hover:text-primary">Pakowanie</a>
          <a href="#gastronomia" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-gray-300 hover:text-primary">Gastronomia</a>
          <a href="#kontakt" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-gray-300 hover:text-primary">Kontakt</a>
          <div className="flex gap-4 pt-4 border-t border-white/10">
            <a href="tel:+48627820432" className="flex items-center gap-2 text-primary font-bold">
              <Phone className="h-5 w-5" /> 62 782 04 32
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
