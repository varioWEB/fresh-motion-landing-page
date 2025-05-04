
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Utensils, Truck } from 'lucide-react';

const steps = [
  {
    icon: ShoppingCart,
    title: 'Choose Your Meals',
    description: 'Browse our menu and select your favorite healthy meals',
  },
  {
    icon: Utensils,
    title: 'We Cook Fresh',
    description: 'Our chefs prepare your meals with fresh ingredients',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Enjoy convenient delivery to your doorstep',
  },
];

const HowItWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="how-it-works" className="section bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-natural-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-natural-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Getting healthy meals delivered is easy with our simple 3-step process
          </motion.p>
        </div>

        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="card flex flex-col items-center text-center p-8 hover:shadow-lg"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2,
                  },
                },
              }}
            >
              <div className="bg-natural-100 p-5 rounded-full mb-6">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <step.icon size={28} className="text-natural-600" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-natural-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
