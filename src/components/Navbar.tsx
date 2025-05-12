
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl`}
    >
      <div className={`rounded-xl transition-all duration-300 ${
        isScrolled 
          ? 'bg-white py-3 shadow-lg' 
          : 'bg-white/30 backdrop-blur-md py-4'
      }`}>
        <nav className="flex items-center justify-between px-6">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ 
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="mr-2 text-natural-600"
            >
              <Leaf size={28} className="animate-sway text-natural-600" />
            </motion.div>
            <Link to="/" className="text-xl font-bold text-natural-600">
              Healthy Food
            </Link>
          </motion.div>
          
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.1 * index 
                }}
              >
                {item.path.includes('#') ? (
                  <HashLink 
                    smooth
                    to={item.path}
                    className="nav-link text-natural-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-natural-600 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 hover:text-natural-700"
                  >
                    {item.name}
                  </HashLink>
                ) : (
                  <Link
                    to={item.path}
                    className="nav-link text-natural-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-natural-600 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 hover:text-natural-700"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/contact" 
              className="rounded-md bg-natural-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-natural-700 hover:shadow-lg hover:animate-pulse"
            >
              Sign Up
            </Link>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
