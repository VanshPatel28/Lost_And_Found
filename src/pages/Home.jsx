import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Search, Compass, MessageCircle, CheckCircle, Lock, Globe, Users, Key, Briefcase, Smartphone
} from 'lucide-react';

// --- Placeholder Data ---
const featuredItems = [
  { id: 1, title: "Black Leather Wallet", location: "Near City Mall", date: "1 hour ago", type: 'found', icon: <Briefcase size={20} /> },
  { id: 2, title: "iPhone 13 Pro", location: "Library 3rd Floor", date: "3 hours ago", type: 'lost', icon: <Smartphone size={20} /> },
  { id: 3, title: "Set of Car Keys", location: "Main Street Parking", date: "1 day ago", type: 'found', icon: <Key size={20} /> },
  { id: 4, title: "Red Backpack", location: "Campus Bus Stop", date: "2 days ago", type: 'lost', icon: <Briefcase size={20} /> },
];

const howItWorks = [
  { icon: <Compass size={40} className="text-primary-blue" />, title: "1)  Report & Detail", description: "Quickly log the item with details, photos, and contact info." },
  { icon: <Search size={40} className="text-primary-blue" />, title: "2)  Search & Filter", description: "Instantly browse local reports by keyword, category, or time." },
  { icon: <MessageCircle size={40} className="text-primary-blue" />, title: "3)  Connect Safely", description: "Use secure channels to coordinate the safe return of the item." },
];

const whyChoose = [
  { icon: <CheckCircle size={30} className="text-accent-blue" />, title: "Always Free", text: "No fees for reporting, searching, or connecting." },
  { icon: <Lock size={30} className="text-accent-blue" />, title: "Secure Contact", text: "Protect your privacy until you are ready to connect." },
  { icon: <Globe size={30} className="text-accent-blue" />, title: "Wide Coverage", text: "Tap into a broad network of community users." },
  { icon: <Users size={30} className="text-accent-blue" />, title: "Community Driven", text: "Built on goodwill and trust to maximize successful reunions." },
];

// --- Framer Motion Components & Helpers ---

const MotionSection = ({ children, className, id }) => (
    <motion.section
        id={id}
        className={`py-16 md:py-24 ${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    </motion.section>
);

const SectionTitle = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-16">
        {children}
    </h2>
);

const CTAButton = ({ to, children, className }) => (
    <Link to={to} className={`
        py-3 px-8 font-semibold rounded-full shadow-lg transition duration-300 transform 
        hover:scale-[1.03] active:scale-95 text-white flex items-center justify-center whitespace-nowrap
        ${className}
    `}>
        {children}
    </Link>
);


// --- Home Page Component ---

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. Hero Section - pb-32 is the fixed spacing */}
      <MotionSection id="hero" className="bg-light-bg-blue pb-32 pt-24"> 
        <div className="text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Lost something? Found something?
            <span className="block text-primary-blue mt-2">Let’s reunite them!</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A community-driven platform to help you find what’s lost — fast, easy, and secure.
          </motion.p>
          
        </div>
      </MotionSection>

      {/* 2. How It Works Section - FIX: Removed border-gray-200 */}
      <MotionSection id="how-it-works" className="bg-white"> 
        <SectionTitle>How It Works</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((step, index) => (
            <motion.div 
              key={index} 
              // Removed border class here
              className="p-6 md:p-8 bg-gradient-to-br from-white to-light-bg-blue rounded-2xl shadow-xl transform hover:shadow-2xl transition duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </MotionSection>

      {/* 3. Featured Items Section */}
      <MotionSection id="featured-items" className="bg-gray-50">
        <SectionTitle>Recently Reported Items</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              className={`p-5 rounded-xl shadow-lg border border-opacity-50 ${item.type === 'lost' ? 'border-red-400' : 'border-green-400'} bg-white cursor-pointer transition duration-300`}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, shadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex justify-between items-center mb-3">
                  <div className={`p-2 rounded-full ${item.type === 'lost' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {item.icon}
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${item.type === 'lost' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                      {item.type.toUpperCase()}
                  </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500 mb-3">{item.location}</p>
              <p className="text-xs text-gray-400 mb-4">Reported: {item.date}</p>
              
              <Link to={`/list?search=${item.title.split(' ')[0]}`} className="text-primary-blue hover:underline text-sm font-semibold flex items-center">
                  View Details &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </MotionSection>
      
      {/* 4. Why Choose FindIt Section */}
      <MotionSection id="why-choose" className="bg-white">
        <SectionTitle>Why Use FindIt?</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChoose.map((reason, index) => (
            <motion.div 
              key={index} 
              className="p-6 rounded-2xl shadow-md border border-gray-200 bg-white text-center"
              initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)" }}
            >
              <div className="mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </MotionSection>

      {/* 5. Call to Action Section */}
      <MotionSection id="cta" className="bg-primary-blue">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                Ready to reunite with your belongings? Join the community today.
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-5">
                <CTAButton to="/report-lost" className="bg-red-600 hover:bg-red-700">
                    I Lost Something
                </CTAButton>
                <CTAButton to="/report-found" className="bg-accent-blue text-white hover:bg-blue-600">
                    I Found Something
                </CTAButton>
            </div>
        </div>
      </MotionSection>

      {/* 6. Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6 border-b border-gray-700 pb-6">
            <div className="text-2xl font-bold text-white mb-4 md:mb-0">FindIt</div>
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
              <Link to="/about" className="hover:text-accent-blue transition">About</Link>
              <Link to="/contact" className="hover:text-accent-blue transition">Contact</Link>
              <Link to="/faq" className="hover:text-accent-blue transition">FAQ</Link>
              <Link to="/terms" className="hover:text-accent-blue transition">Terms</Link>
              <Link to="/privacy" className="hover:text-accent-blue transition">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;