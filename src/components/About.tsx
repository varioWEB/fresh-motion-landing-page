
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const paragraphs = [
    "At Healthy Food Delivery, we're passionate about making nutritious eating easy and delicious for everyone.",
    "Our mission is to provide busy individuals with convenient access to chef-prepared, nutrient-dense meals made from locally sourced ingredients.",
    "Founded in 2020, we've already delivered over 100,000 healthy meals across the city, helping our customers maintain balanced diets without sacrificing taste or convenience."
  ];
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="about" className="section bg-beige-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-natural-200 rounded-lg transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800"
              alt="Our kitchen team preparing healthy meals" 
              className="relative z-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          
          <div className="lg:pl-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-natural-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.h2>
            
            <motion.div 
              className="w-16 h-1 bg-natural-500 mb-6"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-gray-700"
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.3 + index * 0.2,
                      },
                    },
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            
            <motion.button
              className="mt-8 btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.9,
                  },
                },
              }}
            >
              Learn Our Story
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
