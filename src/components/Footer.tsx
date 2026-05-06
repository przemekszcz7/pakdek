import { Facebook, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="https://iili.io/BZRLVjt.md.jpg" 
              alt="PakDek Logo" 
              className="h-10 w-10 rounded-lg object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
              referrerPolicy="no-referrer"
            />
            <span className="font-black text-gray-400">PAKDEK © 2026</span>
          </div>

          <div className="flex items-center gap-8 text-sm font-medium text-gray-500">
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Twój lokalny hurt w pakowaniu
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61573699996575" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#1877F2]/10 text-[#1877F2] rounded-full hover:bg-[#1877F2]/20 transition-all"
            >
              <Facebook className="h-5 w-5" /> <span className="font-bold">Facebook</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-[10px] text-gray-700 uppercase tracking-[0.2rem]">
          Hurtownia Wielobranżowa PAKDEK • Baranów • Kępno
        </div>
      </div>
    </footer>
  );
}
