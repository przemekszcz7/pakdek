/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OfferGrid from './components/OfferGrid';
import ProductSpotlight from './components/ProductSpotlight';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Intro text from user request */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-y border-white/5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed italic text-gray-300">
              "Obsługujemy gastronomię, sklepy, biura, szkoły oraz firmy produkcyjne, 
              dostarczając niezawodne produkty, które wspierają codzienną działalność."
            </p>
          </motion.div>
        </section>

        <OfferGrid />
        
        <ProductSpotlight />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
