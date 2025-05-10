
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrench, Users, Briefcase } from 'lucide-react';
type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
};
const ServiceCard = ({
  title,
  description,
  icon: Icon,
  delay = 0
}: ServiceCardProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return <motion.div ref={ref} initial="hidden" animate={controls} variants={{
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay
      }
    }
  }} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-natural-100 text-natural-600">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-natural-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>;
};
const ServicesSection = () => {
  const services = [{
    title: "Meal Preparation",
    description: "Fresh, nutritious meals prepared by our professional chefs using locally sourced ingredients.",
    icon: Wrench
  }, {
    title: "Custom Diet Plans",
    description: "Personalized nutrition plans crafted by certified nutritionists to meet your health goals.",
    icon: Users
  }, {
    title: "Corporate Catering",
    description: "Healthy catering solutions for your office meetings, events, and workforce.",
    icon: Briefcase
  }];
  const headerControls = useAnimation();
  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  useEffect(() => {
    if (headerInView) {
      headerControls.start('visible');
    }
  }, [headerControls, headerInView]);
  return <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={headerRef} initial="hidden" animate={headerControls} variants={{
        hidden: {
          opacity: 0,
          y: -20
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5
          }
        }
      }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-natural-800 mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-natural-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            We offer a range of services designed to make healthy eating convenient, 
            delicious, and tailored to your individual needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} delay={index * 0.2} />)}
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="h-64 md:h-auto">
              <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=800" alt="Healthy meal preparation" className="w-full h-full object-cover" />
            </motion.div>
            <div className="p-8 md:p-12">
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.5
            }} className="text-2xl md:text-3xl font-bold text-natural-800 mb-4">
                Subscription Service
              </motion.h2>
              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.7
            }} className="text-gray-700 mb-6">
                Weekly meal delivery with fresh, seasonal dishes right to your doorstep.
              </motion.p>
              <motion.button initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.9
            }} className="rounded-md bg-natural-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-natural-700 hover:shadow-lg">
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ServicesSection;
