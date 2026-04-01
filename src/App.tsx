import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  Hammer,
  Building2,
  Wrench,
  Search,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#gallery' },
    { name: 'Service Areas', href: '#areas' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-accent p-1.5 rounded-md">
            <Hammer className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-primary' : 'text-white'}`}>
            MONTEBELLO<span className={isScrolled ? 'text-accent-hover' : 'text-accent'}>ROOFING</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-semibold hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
          <a href="#contact" className="btn-primary">Get Free Estimate</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-primary' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-0">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="nav-dropdown-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="p-4">
                <a href="#contact" className="btn-primary w-full" onClick={() => setIsMobileMenuOpen(false)}>Get Free Estimate</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image - YOUR real job photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/job1.jpg"
          alt="Professional Roofing Service Reisterstown MD" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-3 py-1 rounded-full mb-6">
            <ShieldCheck className="text-accent w-4 h-4" />
            <span className="text-accent text-sm font-bold uppercase tracking-wider">Licensed & Insured in Maryland</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Top-Rated Roofing Contractor in <span className="text-accent">Reisterstown, MD (21136)</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            Expert residential and commercial roofing services you can trust in Baltimore County. We provide durable, high-quality solutions for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2">
              Get Free Estimate <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:4433007832" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> (443) 300-7832
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" className="w-12 h-12 rounded-full border-2 border-primary" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-white text-sm font-medium">500+ Happy Customers in Reisterstown</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Contact Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block bg-white p-8 rounded-2xl shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-primary mb-2">Request Free Inspection</h3>
          <p className="text-gray-600 mb-6">Get a professional assessment of your roof today.</p>
          <form action="mailto:montebelloroofing@gmail.com" method="post" encType="text/plain" className="space-y-4">
            <input name="Name" type="text" placeholder="Full Name" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
            <input name="Phone" type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
            <select name="Service" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
              <option>Select Service</option>
              <option>Roof Repair</option>
              <option>Roof Replacement</option>
              <option>Commercial Roofing</option>
              <option>Inspection</option>
            </select>
            <button type="submit" className="btn-primary w-full py-4 text-lg">Send Request</button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-4">We respect your privacy. No spam, ever.</p>
        </motion.div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Roofs Completed', value: '2,500+' },
    { label: 'Google Rating', value: '5.0 ⭐' },
    { label: 'Service Areas', value: '12+' },
  ];

  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-accent mb-1">{stat.value}</div>
              <div className="text-gray-600 font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Residential Roofing in Reisterstown MD",
      description: "We specialize in high-quality residential roofing solutions for homeowners in Reisterstown and Baltimore County. From asphalt shingles to premium slate, we ensure your home is protected with the best materials and craftsmanship.",
      icon: <Hammer className="w-8 h-8" />,
      keywords: ["Home roofing 21136", "Shingle repair", "Residential roofers MD"]
    },
    {
      title: "Commercial Roofing in Baltimore County",
      description: "Our commercial roofing division handles flat roofs, TPO, EPDM, and metal roofing for businesses across Baltimore County. We understand the unique needs of commercial properties and provide durable, long-lasting systems.",
      icon: <Building2 className="w-8 h-8" />,
      keywords: ["Flat roof repair", "Commercial roofing contractor", "TPO installation"]
    },
    {
      title: "Roof Repair 21136",
      description: "Don't let a small leak turn into a major disaster. Our rapid response roof repair team in 21136 identifies issues quickly and provides cost-effective repairs to extend the life of your roof.",
      icon: <Wrench className="w-8 h-8" />,
      keywords: ["Emergency roof repair", "Leak detection", "Storm damage repair"]
    },
    {
      title: "Roof Replacement Reisterstown",
      description: "When it's time for a new roof, Montebello Roofing is the trusted choice for roof replacement in Reisterstown. We offer a wide range of styles and colors to enhance your home's curb appeal and value.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      keywords: ["New roof installation", "Full roof replacement", "Roofing estimates"]
    },
    {
      title: "Professional Roof Inspections",
      description: "Our comprehensive roof inspections provide peace of mind. Whether for insurance claims, real estate transactions, or routine maintenance, we provide detailed reports on your roof's condition.",
      icon: <Search className="w-8 h-8" />,
      keywords: ["Roof certification", "Insurance claim inspection", "Free roof check"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary mb-6">Comprehensive Roofing Services in Reisterstown, MD</h3>
          <p className="text-gray-600 text-lg">
            From minor repairs to full commercial installations, we are the one-stop shop for all your roofing needs in Baltimore County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center text-accent mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.keywords.map((kw, kidx) => (
                  <span key={kidx} className="text-[10px] font-bold uppercase tracking-tighter bg-gray-100 text-gray-500 px-2 py-1 rounded">
                    {kw}
                  </span>
                ))}
              </div>
              <a href="#contact" className="text-accent-hover font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { title: "Local & Trusted", desc: "Based right here in Reisterstown, MD 21136. We know the local climate and building codes." },
    { title: "Fast Response", desc: "We prioritize emergency repairs and provide quick estimates to keep your property safe." },
    { title: "Premium Materials", desc: "We only use top-tier materials from GAF, CertainTeed, and Owens Corning." },
    { title: "Expert Craftsmen", desc: "Our team is highly trained, certified, and dedicated to perfection on every job." },
    { title: "Strong Warranties", desc: "We stand behind our work with industry-leading labor and material warranties." },
    { title: "Competitive Pricing", desc: "High-quality roofing doesn't have to break the bank. We offer fair, transparent pricing." },
  ];

  return (
    <section id="about" className="section-padding bg-primary text-white">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-accent font-bold uppercase tracking-widest mb-4">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-black mb-8">The Preferred Roofing Contractor in 21136</h3>
          <p className="text-gray-400 text-lg mb-10">
            Montebello Roofing has built a reputation for excellence through years of dedicated service to the Reisterstown community. We don't just build roofs; we build relationships.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{f.title}</h4>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a href="#contact" className="btn-primary px-10">Start Your Project</a>
          </div>
        </div>
        <div className="relative">
          <img 
            src="/job2.jpg"
            alt="Montebello Roofing Team at Work" 
            className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
          />
          <div className="absolute -bottom-8 -left-8 bg-accent p-8 rounded-2xl hidden md:block">
            <div className="text-5xl font-black mb-1">100%</div>
            <div className="text-sm font-bold uppercase tracking-widest">Satisfaction Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- NEW PHOTO GALLERY SECTION ---
const Gallery = () => {
  // Update this list if you add more photos later
  const photos = [
    { src: '/job1.jpg', alt: 'Roofing job completed in Reisterstown MD' },
    { src: '/job2.jpg', alt: 'Residential roof replacement Baltimore County' },
    { src: '/job3.jpg', alt: 'Roof repair completed in 21136' },
    { src: '/job4.jpg', alt: 'New shingle installation Reisterstown' },
    { src: '/job5.jpg', alt: 'Commercial roofing project Baltimore County' },
    { src: '/job6.jpg', alt: 'Storm damage roof repair Maryland' },
  ];

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest mb-4">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary mb-6">Real Jobs. Real Results.</h3>
          <p className="text-gray-600 text-lg">
            Every roof we install or repair is a reflection of our commitment to quality craftsmanship in Reisterstown and Baltimore County.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer aspect-square shadow-md"
              onClick={() => setSelected(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">View Photo</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <button
                className="absolute top-6 right-6 text-white bg-white/20 rounded-full p-2 hover:bg-white/40 transition-colors"
                onClick={() => setSelected(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selected}
                alt="Roofing job"
                className="max-w-full max-h-[85vh] rounded-xl object-contain"
                onClick={e => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary px-10 text-lg">Get a Free Estimate</a>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "John D.",
      location: "Reisterstown, MD",
      text: "Montebello Roofing did an amazing job on our full roof replacement. They were professional, clean, and finished ahead of schedule. Highly recommend for anyone in 21136!",
      rating: 5
    },
    {
      name: "Sarah M.",
      location: "Owings Mills, MD",
      text: "I had a leak during a heavy storm and they came out the same day to patch it. The repair was solid and the price was very fair. Great local service.",
      rating: 5
    },
    {
      name: "Michael R.",
      location: "Glyndon, MD",
      text: "Best roofing contractor in Baltimore County. Their attention to detail is unmatched. They handled the insurance claim process for us which was a huge relief.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest mb-4">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary">What Your Neighbors Are Saying</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(r.rating)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-600 italic mb-6">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-bold text-primary">{r.name}</div>
                  <div className="text-gray-500 text-sm">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceAreas = () => {
  const areas = [
    "Reisterstown (21136)",
    "Owings Mills",
    "Glyndon",
    "Pikesville",
    "Finksburg",
    "Westminster",
    "Towson",
    "Timonium",
    "Hunt Valley",
    "Cockeysville",
    "Baltimore County",
    "Carroll County"
  ];

  return (
    <section id="areas" className="section-padding bg-gray-50">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-accent font-bold uppercase tracking-widest mb-4">Our Service Areas</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary mb-8">Serving Reisterstown & Beyond</h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            We are proud to be the top-rated roofing contractor serving Baltimore County and surrounding areas. Our local presence allows us to provide faster service and better support for our community.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {areas.map((area, i) => (
              <div key={i} className="flex items-center gap-2 text-primary font-semibold">
                <MapPin className="text-accent w-4 h-4" /> {area}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49247.44754854553!2d-76.8677!3d39.4668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c83e2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sReisterstown%2C%20MD%2021136!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Montebello Roofing Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How much does a new roof cost in Reisterstown?", a: "Roofing costs vary based on material, size, and complexity. On average, a shingle roof replacement in 21136 ranges from $8,000 to $15,000. We provide free, detailed estimates." },
    { q: "Do you offer emergency roof repairs?", a: "Yes! We understand that storm damage can happen anytime. We offer rapid response emergency repairs in Reisterstown and Baltimore County." },
    { q: "Are you licensed and insured in Maryland?", a: "Absolutely. We are fully licensed (MHIC) and carry comprehensive liability and workers' compensation insurance for your protection." },
    { q: "How long does a roof replacement take?", a: "Most residential roof replacements are completed in just 1-2 days, depending on the size of the home and weather conditions." },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest mb-4">FAQ</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary">Roofing Questions Answered</h3>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 className="text-lg font-bold text-primary mb-2 flex gap-3">
                <span className="text-accent-hover">Q:</span> {faq.q}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-bold text-accent-hover">A:</span> {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-accent font-bold uppercase tracking-widest mb-4">Contact Us</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-8">Ready to Protect Your Property?</h3>
            <p className="text-gray-400 text-lg mb-10">
              Contact Montebello Roofing today for your free, no-obligation roof inspection and estimate. We're here to help you with all your roofing needs in Reisterstown and Baltimore County.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Call Us Today</div>
                  <div className="text-xl font-bold">(443) 300-7832</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email Us</div>
                  <div className="text-xl font-bold">montebelloroofing@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Our Location</div>
                  <div className="text-xl font-bold">Reisterstown, MD 21136</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <h4 className="text-2xl font-bold text-primary mb-6">Request Free Roof Inspection</h4>
            <form action="mailto:montebelloroofing@gmail.com" method="post" encType="text/plain" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input name="Name" type="text" placeholder="John Doe" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input name="Phone" type="tel" placeholder="(443) 300-7832" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input name="Email" type="email" placeholder="john@example.com" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Property Address</label>
                <input name="Address" type="text" placeholder="123 Main St, Reisterstown, MD 21136" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Service Needed</label>
                <select name="Service" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-accent">
                  <option>Residential Roof Replacement</option>
                  <option>Residential Roof Repair</option>
                  <option>Commercial Roofing</option>
                  <option>Roof Inspection</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message (Optional)</label>
                <textarea name="Message" rows={4} placeholder="Tell us about your roofing project..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-4 text-lg shadow-lg shadow-accent/20">Request Free Inspection</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-accent p-1.5 rounded-md">
                <Hammer className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                MONTEBELLO<span className="text-accent">ROOFING</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Your local roofing experts in Reisterstown, MD. Providing high-quality residential and commercial roofing services since 2010.
            </p>
            <div className="flex items-center gap-2 text-accent font-bold">
              <Clock className="w-4 h-4" /> Mon - Sat: 7:00 AM - 6:00 PM
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Our Work</a></li>
              <li><a href="#areas" className="hover:text-accent transition-colors">Service Areas</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">Customer Reviews</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-accent transition-colors">Residential Roofing</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Commercial Roofing</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Roof Repair</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Roof Replacement</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Storm Damage Repair</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Roof Inspections</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <MapPin className="text-accent w-5 h-5 shrink-0" />
                <span>Reisterstown, MD 21136</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone className="text-accent w-5 h-5 shrink-0" />
                <a href="tel:4433007832" className="hover:text-white transition-colors">(443) 300-7832</a>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail className="text-accent w-5 h-5 shrink-0" />
                <a href="mailto:montebelloroofing@gmail.com" className="hover:text-white transition-colors">montebelloroofing@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Montebello Roofing. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a 
        href="tel:4433007832" 
        className="bg-accent text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform md:hidden"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a 
        href="#contact" 
        className="bg-primary text-white px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 hover:bg-accent transition-colors"
      >
        <MessageSquare className="w-5 h-5" /> <span className="hidden sm:inline">Request Estimate</span>
      </a>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans text-primary bg-white">
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <ServiceAreas />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
