
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const controls = useAnimation();
  const { toast } = useToast();
  
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Success!",
        description: "You've been added to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <section ref={ref} id="newsletter" className="section bg-gradient-to-br from-natural-100 to-beige-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
            className="animate-float"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-natural-800 mb-4">
              Stay Updated With Healthy Tips
            </h2>
            <p className="text-lg text-natural-700 mb-8">
              Join our newsletter for weekly recipe ideas, nutrition tips, and exclusive offers
            </p>
          </motion.div>
          
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.3,
                },
              },
            }}
          >
            <div className={`relative flex-grow transition-all duration-300 ${isFocused ? 'sm:flex-grow-[1.2]' : ''}`}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full px-6 py-3 rounded-md border border-natural-300 focus:outline-none focus:ring-2 focus:ring-natural-500"
                required
              />
            </div>
            
            <motion.button
              type="submit"
              className="btn-primary whitespace-nowrap"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.form>
          
          <motion.p
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.6,
                },
              },
            }}
            className="text-sm text-gray-500 mt-4"
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
