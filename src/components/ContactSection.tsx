import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const hours = [
  { day: "Poniedziałek", time: "08:00 - 17:00" },
  { day: "Wtorek", time: "08:00 - 17:00" },
  { day: "Środa", time: "08:00 - 17:00" },
  { day: "Czwartek", time: "08:00 - 17:00" },
  { day: "Piątek", time: "08:00 - 17:00" },
  { day: "Sobota", time: "08:00 - 13:00" },
  { day: "Niedziela", time: "ZAMKNIĘTE", highlight: true },
];

export default function ContactSection() {
  const KEPNO_COORDS = { lat: 51.2785, lng: 18.0003 }; // Approx for Obrońców Pokoju 51, Kępno

  return (
    <section id="kontakt" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-[48px] overflow-hidden border border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-8 md:p-16 lg:border-r border-white/10">
              <h2 className="text-4xl md:text-5xl font-black mb-12">
                Odezwij się <span className="text-primary italic">śmiało!</span>
              </h2>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Adres</h3>
                    <p className="text-xl font-semibold">Obrońców Pokoju 51, <br/>Kępno 63-600</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Telefon</h3>
                    <p className="text-2xl font-bold hover:text-primary transition-colors">
                      <a href="tel:+48627820432">62 782 04 32</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">E-mail</h3>
                    <p className="text-xl font-semibold hover:text-primary transition-colors">
                      <a href="mailto:pakdek1@wp.pl">pakdek1@wp.pl</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 pt-6 ">
                   <a 
                    href="mailto:pakdek1@wp.pl" 
                    className="flex w-full items-center justify-center gap-3 bg-white text-black hover:bg-primary hover:text-white px-8 py-5 rounded-2xl font-black transition-all"
                  >
                    Możliwość zamówień dla firm <Send className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours & Map */}
            <div className="flex flex-col">
              <div className="p-8 md:p-16 flex-grow ">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" /> Godziny Otwarcia
                </h3>
                <div className="space-y-3">
                  {hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-gray-400 font-medium">{h.day}</span>
                      <span className={`font-bold ${h.highlight ? 'text-primary' : 'text-white'}`}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Container */}
              <div className="h-[400px] bg-zinc-900 border-t border-white/10 relative">
                <iframe
                  title="Google Maps Location"
                  className="w-full h-full grayscale invert opacity-80 contrast-125"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.1917637845!2d18.0003!3d51.2785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471017ef8e7c1f8b%3A0x7d6a5e1a1e1e1e1e!2zT2Jyb8WEY8OzdyBQb2tvanUgNTEsIDYzLTYwMCBLxJlwa28sIFBvbGFuZA!5e0!3m2!1sen!2spl!4v1714988000000!5m2!1sen!2spl"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border border-white/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
