import { motion } from 'motion/react';
import { Gift, Cookie, Check } from 'lucide-react';

export default function ProductSpotlight() {
  return (
    <div className="space-y-24 py-24 px-4 overflow-hidden">
      {/* Packaging Section */}
      <section id="pakowanie" className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4">
            <Gift className="h-4 w-4" /> Sztuka Pakowania
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Twoje prezenty zasługują na <span className="text-primary italic">wyjątkową</span> oprawę
          </h2>
          <p className="text-gray-400 text-lg mb-8 font-light italic">
            Mamy wszystkie akcesoria, żeby Twoje produkty i upominki wyglądały profesjonalnie i efektownie.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Wełna drzewna naturalna",
              "Torby prezentowe wzory",
              "Pudełka ozdobne",
              "Wstążki kolorowe",
              "Worki celofanowe świąteczne",
              "Papier ozdobny",
              "Folie i taśmy",
              "Worki celofanowe zwykłe"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                <div className="h-2 w-2 bg-primary rounded-full" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <img 
            src="https://iili.io/BZ5xcv4.md.jpg" 
            alt="Akcesoria do pakowania PakDek" 
            className="relative rounded-[40px] shadow-2xl border border-white/5 object-cover h-[500px] w-full"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Gastro Section */}
      <section id="gastronomia" className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 relative group"
        >
          <div className="absolute -inset-4 bg-red-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <img 
            src="https://iili.io/BZ5q7ou.md.jpg" 
            alt="Kitchen Supplies" 
            className="relative rounded-[40px] shadow-2xl border border-white/5 object-cover h-[500px] w-full"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4">
            <Cookie className="h-4 w-4" /> Kuchnia i Gastronomia
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Niezbędniki dostępne <span className="text-primary italic">od ręki!</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 font-light">
            Szukasz sprawdzonych produktów do pakowania, pieczenia i przechowywania żywności? Dla domu, gastronomii i firm.
          </p>
          <div className="space-y-6">
            {[
              { t: "Folia aluminiowa", d: "Idealna do pieczenia, grillowania i zabezpieczania potraw." },
              { t: "Folia spożywcza", d: "Świetnie trzyma świeżość i chroni żywność przed wysychaniem." },
              { t: "Papier do pieczenia", d: "Nieprzywierający, wytrzymały, idealny do ciast i mięsa." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0 h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{item.t}</h4>
                  <p className="text-gray-400 text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
