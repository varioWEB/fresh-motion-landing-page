
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
    <section className="relative min-h-screen overflow-hidden bg-beige-50 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-64px)]">
          <div className="py-12 lg:pl-6">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-natural-800 mb-4">
                Healthy Food Delivery
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-8 text-xl text-natural-700 max-w-lg"
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
                className="btn-secondary link-underline group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Learn More
                <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
              alt="Healthy food bowl with vegetables"
              className="rounded-2xl w-full max-w-xl h-auto object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
