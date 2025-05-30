
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Menu from '@/components/Menu';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Target elements with animation classes
    const animatedElements = document.querySelectorAll('.slide-up');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />
      <Hero />
      <div id="howItWorks">
        <HowItWorks />
      </div>
      <div id="order">
        <Menu />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="learn">
        <Testimonials />
      </div>
      <div id="about">
        <About />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
