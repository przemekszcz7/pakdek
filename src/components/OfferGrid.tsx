import { motion } from 'motion/react';
import { SprayCan as Spray, ShieldCheck, PenTool, Package, Factory, PartyPopper } from 'lucide-react';

const offers = [
  {
    title: "Środki czystości",
    description: "Chemia gospodarcza najwyższej jakości dla domu i firmy.",
    icon: Spray,
    color: "bg-red-500"
  },
  {
    title: "Artykuły higieniczne",
    description: "Kompleksowe zaopatrzenie w produkty higieniczne.",
    icon: ShieldCheck,
    color: "bg-red-600"
  },
  {
    title: "Artykuły biurowe",
    description: "Wszystko, czego potrzebuje Twoje biuro do pracy.",
    icon: PenTool,
    color: "bg-red-700"
  },
  {
    title: "Opakowania jednorazowe",
    description: "Szeroki wybór opakowań dla gastronomii i handlu.",
    icon: Package,
    color: "bg-red-800"
  },
  {
    title: "Dla produkcji",
    description: "Profesjonalne zaopatrzenie dla firm produkcyjnych.",
    icon: Factory,
    color: "bg-black"
  },
  {
    title: "Dekoracje imprezowe",
    description: "Balony, girlandy i akcesoria, które rozkręcą każdą imprezę.",
    icon: PartyPopper,
    color: "bg-primary"
  }
];

export default function OfferGrid() {
  return (
    <section id="oferta" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Kompleksowa <span className="text-primary italic">Oferta</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Zaufaj doświadczeniu, jakości i indywidualnemu podejściu. Z nami zaopatrzysz się szybko, wygodnie i kompleksowo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl hover:bg-white/10 transition-all group cursor-default"
            >
              <div className={`w-14 h-14 ${offer.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform`}>
                <offer.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{offer.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {offer.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
