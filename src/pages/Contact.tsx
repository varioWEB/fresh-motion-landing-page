
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }).optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Mock form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon!",
        variant: "default",
      });
      
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-natural-800 mb-4">Contact Us</h1>
            <p className="text-xl text-natural-600 max-w-2xl mx-auto">
              Have questions or special dietary needs? We're here to help!
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-natural-800 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-natural-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-natural-200 focus:border-natural-500 outline-none transition ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-natural-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-natural-200 focus:border-natural-500 outline-none transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-natural-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-natural-200 focus:border-natural-500 outline-none transition"
                    placeholder="(123) 456-7890"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-natural-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-natural-200 focus:border-natural-500 outline-none transition resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us how we can help you..."
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl shadow-sm p-8 border border-natural-100">
                <h3 className="text-xl font-semibold text-natural-800 mb-4">Our Location</h3>
                <p className="text-natural-600 mb-3">
                  123 Health Street<br />
                  Nutrition City, NC 28123<br />
                  United States
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-8 border border-natural-100">
                <h3 className="text-xl font-semibold text-natural-800 mb-4">Contact Information</h3>
                <div className="space-y-3 text-natural-600">
                  <p>
                    <span className="font-medium">Email:</span><br />
                    info@healthyfood.com
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span><br />
                    (555) 123-4567
                  </p>
                  <p>
                    <span className="font-medium">Hours:</span><br />
                    Monday-Friday: 9am - 6pm<br />
                    Saturday: 10am - 4pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="bg-natural-600 rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Help?</h3>
                <p className="mb-4">
                  Our customer service team is ready to assist you with any questions about our meal plans, delivery options, or special dietary requirements.
                </p>
                <a 
                  href="tel:+15551234567" 
                  className="inline-flex items-center px-4 py-2 bg-white text-natural-600 rounded-md font-medium hover:bg-natural-50 transition-colors"
                >
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
