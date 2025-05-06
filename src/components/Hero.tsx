
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-cover bg-center pt-16" 
      style={{
        backgroundImage: `url('/lovable-uploads/31bc2335-660e-4f62-82a9-f95b6e9b8ca9.png')`,
        backgroundSize: 'cover'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 items-center min-h-[calc(100vh-64px)]">
          <div className="py-12 z-10">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-natural-800 mb-4 drop-shadow-lg">
                Healthy Food Delivery
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-8 text-xl text-natural-800 max-w-lg drop-shadow-md"
            >
              Fresh and healthy meals delivered to your door
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#order"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Order Now
              </motion.a>
              
              <motion.a
                href="#learn"
                className="btn-secondary bg-white/50 backdrop-blur-sm text-natural-800 hover:bg-white/70 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Learn More
                <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
