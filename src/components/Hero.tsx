
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-cover bg-center pt-16" 
      style={{
        backgroundImage: `url('/lovable-uploads/77a66f31-2d13-4c45-8a3c-8f52509da021.png')`,
        backgroundSize: 'cover'
      }}
    >
      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 items-center min-h-[calc(100vh-64px)]">
          <div className="py-24 z-10">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg text-shadow-blur leading-tight">
                Healthy Food<br />Delivery
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-14 text-2xl sm:text-3xl text-white max-w-lg text-shadow-blur"
            >
              Fresh and healthy meals delivered to your door
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                onClick={() => scrollToSection('order')}
                className="btn-primary group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <span className="relative z-10">Order Now</span>
                <span className="absolute inset-0 bg-natural-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('learn')}
                className="btn-secondary bg-white/50 backdrop-blur-sm text-natural-800 hover:bg-white/70 group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <ArrowDown size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ y: -10, opacity: 0 }}
        animate={{ 
          y: 0,
          opacity: 1,
          transition: {
            delay: 1.5,
          }
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => scrollToSection('howItWorks')}
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <motion.div
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <ArrowDown size={30} className="text-white" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
