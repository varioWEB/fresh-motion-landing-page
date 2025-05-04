
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', url: '#' },
    { name: 'About Us', url: '#about' },
    { name: 'Menu', url: '#menu' },
    { name: 'How It Works', url: '#how-it-works' },
    { name: 'Testimonials', url: '#testimonials' },
    { name: 'Contact', url: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
  ];

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="mr-2 text-natural-600"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ 
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                <Leaf size={24} className="animate-sway" />
              </motion.div>
              <span className="text-xl font-bold text-natural-800">Healthy Food</span>
            </motion.div>
            <p className="text-gray-600 mb-6">
              Fresh and healthy meals delivered to your door, making nutritious eating convenient for everyone.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="text-natural-600 hover:text-natural-800 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1
                  }}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-natural-800 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.slice(0, 3).map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <a 
                    href={link.url} 
                    className="text-gray-600 hover:text-natural-600 transition-colors link-underline"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-natural-800 mb-6">Resources</h3>
            <ul className="space-y-3">
              {quickLinks.slice(3).map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                >
                  <a 
                    href={link.url} 
                    className="text-gray-600 hover:text-natural-600 transition-colors link-underline"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-natural-800 mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-600">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                1234 Healthy Street
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                Nutrition City, NC 12345
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <a href="mailto:info@healthyfood.com" className="hover:text-natural-600 transition-colors">
                  info@healthyfood.com
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <a href="tel:+15551234567" className="hover:text-natural-600 transition-colors">
                  (555) 123-4567
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 sm:mb-0">
              &copy; {new Date().getFullYear()} Healthy Food Delivery. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-natural-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-natural-600 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
