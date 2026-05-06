import { motion } from 'motion/react';
import { ChevronRight, Box, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/warehouse/1920/1080?blur=2" 
          alt="Hurtownia PakDek Background" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="h-3 w-3" /> Profesjonalne Zaopatrzenie
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Wsparcie dla <span className="text-primary italic">biura</span>, 
              domu i <span className="text-primary italic">imprezy!</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
              Witamy w Hurtowni Wielobranżowej PAKDEK – kompleksowym centrum zaopatrzenia dla Twojej firmy. 
              Dostarczamy niezawodne produkty, które wspierają codzienną działalność gastronomii, sklepów i biur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#kontakt" 
                className="group flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105"
              >
                Zapytaj o Ofertę
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#oferta" 
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold backdrop-blur-sm transition-all"
              >
                <Box className="h-5 w-5" />
                Nasze Produkty
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical rail text typical of professional design */}
      <div className="absolute right-8 bottom-24 hidden lg:block overflow-hidden h-48 w-8">
        <span className="block origin-bottom-right rounded-bl-lg -rotate-90 text-[10px] whitespace-nowrap uppercase tracking-[0.4em] font-bold text-gray-500 opacity-50">
          PAKDEK • OBROŃCÓW POKOJU 51 • KĘPNO
        </span>
      </div>
    </section>
  );
}
