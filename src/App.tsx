import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Utensils, 
  Truck, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  Menu as MenuIcon, 
  X,
  ChevronRight,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const MENU_DATA = {
  Coffee: [
    { name: 'Espresso', price: '£2.50', desc: 'Rich and intense single shot' },
    { name: 'Latte', price: '£3.20', desc: 'Smooth espresso with steamed milk' },
    { name: 'Cappuccino', price: '£3.20', desc: 'Espresso with frothy milk foam' },
    { name: 'Flat White', price: '£3.00', desc: 'Velvety micro-foam over double espresso' },
  ],
  Breakfast: [
    { name: 'Classic Eggs', price: '£8.50', desc: 'Poached, scrambled or fried on sourdough' },
    { name: 'Avocado Toast', price: '£9.50', desc: 'Smashed avocado, chili flakes, lime' },
    { name: 'Breakfast Sandwich', price: '£7.00', desc: 'Bacon, egg, and cheese in a brioche bun' },
  ],
  Lunch: [
    { name: 'Becks Burger', price: '£12.50', desc: 'Beef patty, secret sauce, brioche bun' },
    { name: 'Chicken Wrap', price: '£10.50', desc: 'Grilled chicken, avocado, greens' },
    { name: 'Veggie Burger', price: '£11.50', desc: 'Plant-based patty with halloumi' },
  ],
  Drinks: [
    { name: 'Fresh Orange Juice', price: '£4.00', desc: 'Squeezed daily' },
    { name: 'Green Smoothie', price: '£5.50', desc: 'Spinach, apple, ginger, lemon' },
    { name: 'Iced Tea', price: '£3.50', desc: 'House-made peach or lemon' },
  ]
};

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521017432531-fbd92d744264?q=80&w=800&auto=format&fit=crop',
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState('Coffee');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="min-h-screen bg-coffee-black font-sans text-cream selection:bg-coffee-glow selection:text-white overflow-x-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-coffee-glow/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-coffee-accent/10 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-coffee-black/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-coffee-glow rounded-full blur-[8px] absolute opacity-50" />
            <span className="relative">BECKS CAFE</span>
          </a>
          
          <div className="hidden md:flex space-x-10 items-center">
            {['About', 'Services', 'Menu', 'Location'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase tracking-[0.2em] font-semibold hover:text-coffee-glow transition-all duration-300 opacity-70 hover:opacity-100">
                {item}
              </a>
            ))}
            <a href="tel:+442074058565" className="px-6 py-2.5 bg-white text-coffee-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-coffee-glow hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Call Now
            </a>
          </div>

          <button className="md:hidden p-2 text-cream" onClick={() => setMobileMenuOpen(true)}>
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[60] bg-coffee-black/95 backdrop-blur-2xl flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-xl font-serif font-bold tracking-tighter">BECKS CAFE</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-full"><X size={24} /></button>
            </div>
            <div className="flex flex-col space-y-8">
              {['About', 'Services', 'Menu', 'Location'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-5xl font-serif font-bold tracking-tight hover:text-coffee-glow transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-8">
                <a 
                  href="tel:+442074058565" 
                  className="w-full block bg-coffee-glow text-white px-8 py-5 rounded-2xl text-center text-xl font-bold shadow-[0_0_30px_rgba(255,78,0,0.3)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
                <div className="w-2 h-2 bg-coffee-glow rounded-full animate-pulse shadow-[0_0_10px_#FF4E00]" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-70">Open Daily in London</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter">
                The Art of <br />
                <span className="text-coffee-glow text-glow italic">Coffee.</span>
              </h1>
              <p className="text-lg md:text-xl font-light mb-12 opacity-60 max-w-lg leading-relaxed">
                Experience a modern sanctuary in the heart of Holborn. Where minimal design meets exceptional taste.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#menu" className="group relative px-10 py-5 bg-coffee-glow text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,78,0,0.4)]">
                  <span className="relative z-10 flex items-center gap-2">View Menu <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                </a>
                <a href="#location" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                  Find Us
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative z-10 aspect-square rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop" 
                  alt="Coffee" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-coffee-glow/20 blur-[60px] rounded-full animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-coffee-accent/20 blur-[80px] rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeIn}>
              <span className="text-coffee-glow font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Our Essence</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12 leading-tight tracking-tight">
                A popular local café in London known for great coffee, tasty meals, and friendly service.
              </h2>
              <div className="h-px w-24 bg-coffee-glow/30 mx-auto mb-12" />
              <p className="text-xl md:text-2xl font-light opacity-50 leading-relaxed italic">
                "We believe in the power of a perfect brew and a warm welcome. Whether you're starting your day or taking a well-deserved break, Becks Cafe is your home away from home."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section id="services" className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Utensils size={32} />, title: 'Dine-in', desc: 'Enjoy our cozy atmosphere and friendly table service.', color: 'from-orange-500/10' },
              { icon: <Coffee size={32} />, title: 'Takeaway', desc: 'Quick and easy. Grab your favorites on the go.', color: 'from-amber-500/10' },
              { icon: <Truck size={32} />, title: 'Delivery', desc: 'Fresh meals delivered straight to your doorstep.', color: 'from-red-500/10' },
            ].map((service, idx) => (
              <motion.div 
                key={service.title}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className={`group relative p-10 rounded-[32px] bg-white/[0.02] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-coffee-glow mb-8 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                  <p className="text-cream/50 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section - Glassmorphism */}
      <section id="menu" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <span className="text-coffee-glow font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">The Collection</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter">Signature Menu</h2>
            
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {Object.keys(MENU_DATA).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveMenuTab(tab)}
                  className={`px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-500 ${activeMenuTab === tab ? 'bg-coffee-glow text-white shadow-[0_0_30px_rgba(255,78,0,0.3)]' : 'bg-white/5 text-cream/40 hover:bg-white/10 hover:text-cream'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto p-1 bg-white/[0.02] border border-white/5 rounded-[40px] backdrop-blur-sm">
            <motion.div 
              key={activeMenuTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-x-12 gap-y-8 p-12"
            >
              {MENU_DATA[activeMenuTab as keyof typeof MENU_DATA].map((item) => (
                <div key={item.name} className="group relative">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="text-xl font-serif font-bold group-hover:text-coffee-glow transition-colors">{item.name}</h4>
                    <div className="flex-1 mx-4 border-b border-white/10 border-dotted mb-1.5" />
                    <span className="text-lg font-serif font-bold text-coffee-glow">{item.price}</span>
                  </div>
                  <p className="text-sm text-cream/40 font-light">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Immersive */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <motion.div {...fadeIn} className="flex justify-between items-end">
            <div>
              <span className="text-coffee-glow font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Visuals</span>
              <h2 className="text-4xl font-serif font-bold tracking-tight">Atmosphere</h2>
            </div>
            <div className="hidden md:block h-px flex-1 mx-12 bg-white/10" />
            <a href="#" className="text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">Follow @beckscafe</a>
          </motion.div>
        </div>
        
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-12">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="min-w-[300px] md:min-w-[450px] aspect-[4/5] rounded-[32px] overflow-hidden group relative"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location Section - Dark Map */}
      <section id="location" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <span className="text-coffee-glow font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Visit Us</span>
              <h2 className="text-5xl font-serif font-bold mb-10 tracking-tight">Holborn, London</h2>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-coffee-glow shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xl font-serif font-bold mb-2">28 Red Lion St</p>
                    <p className="text-cream/50">London WC1R 4PS, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-coffee-glow shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xl font-serif font-bold mb-2">Opening Hours</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-cream/50 text-sm">
                      <span>Mon - Fri</span> <span>07:30 - 18:00</span>
                      <span>Saturday</span> <span>08:30 - 17:00</span>
                      <span>Sunday</span> <span>09:00 - 16:00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href="https://maps.google.com/?q=28+Red+Lion+St,+London+WC1R+4PS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  Get Directions <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="relative aspect-square rounded-[40px] overflow-hidden border border-white/10 shadow-2xl grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.896677443176!2d-0.1182236!3d51.5191436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b499849202f%3A0x67341851e36c28f7!2s28%20Red%20Lion%20St%2C%20London%20WC1R%204PS!5e0!3m2!1sen!2suk!4v1711530000000!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-coffee-glow/5" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-6xl md:text-8xl font-serif font-bold mb-12 tracking-tighter leading-[0.9]">
              Ready for your <br />
              <span className="text-coffee-glow italic">Next Cup?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:+442074058565" className="px-12 py-6 bg-white text-coffee-black rounded-2xl font-bold text-xl hover:bg-coffee-glow hover:text-white transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                Call +44 20 7405 8565
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-sm">
              <span className="text-2xl font-serif font-bold tracking-tighter block mb-6">BECKS CAFE</span>
              <p className="text-cream/40 font-light leading-relaxed">
                A modern sanctuary in London. Crafting exceptional coffee experiences since 2016.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-20">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-coffee-glow mb-6">Explore</h4>
                <ul className="space-y-4 text-sm font-medium text-cream/60">
                  <li><a href="#about" className="hover:text-cream transition-colors">About</a></li>
                  <li><a href="#menu" className="hover:text-cream transition-colors">Menu</a></li>
                  <li><a href="#services" className="hover:text-cream transition-colors">Services</a></li>
                  <li><a href="#location" className="hover:text-cream transition-colors">Location</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-coffee-glow mb-6">Social</h4>
                <ul className="space-y-4 text-sm font-medium text-cream/60">
                  <li><a href="#" className="hover:text-cream transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-cream transition-colors">Facebook</a></li>
                  <li><a href="#" className="hover:text-cream transition-colors">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-cream/30">
            <p>© 2026 Becks Cafe London</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-cream transition-colors">Privacy</a>
              <a href="#" className="hover:text-cream transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
