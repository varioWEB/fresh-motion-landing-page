
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Vegan', 'Protein', 'Low-Carb'];

const meals = [
  {
    id: 1,
    name: 'Buddha Bowl',
    description: 'Rice, avocado, chickpeas, and fresh vegetables',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500',
    price: 12.99,
    categories: ['All', 'Vegan'],
  },
  {
    id: 2,
    name: 'Grilled Chicken Salad',
    description: 'Grilled chicken breast with fresh greens and vinaigrette',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500',
    price: 13.99,
    categories: ['All', 'Protein', 'Low-Carb'],
  },
  {
    id: 3,
    name: 'Quinoa Power Bowl',
    description: 'Quinoa with roasted vegetables and tahini dressing',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=500',
    price: 11.99,
    categories: ['All', 'Vegan'],
  },
  {
    id: 4,
    name: 'Salmon & Vegetables',
    description: 'Baked salmon with seasonal roasted vegetables',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=500',
    price: 15.99,
    categories: ['All', 'Protein', 'Low-Carb'],
  },
  {
    id: 5,
    name: 'Mediterranean Plate',
    description: 'Hummus, falafel, tabbouleh, and warm pita bread',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=500',
    price: 12.99,
    categories: ['All', 'Vegan'],
  },
  {
    id: 6,
    name: 'Steak & Sweet Potato',
    description: 'Grass-fed steak with roasted sweet potato',
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&q=80&w=500',
    price: 16.99,
    categories: ['All', 'Protein'],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleMeals, setVisibleMeals] = useState(meals);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setVisibleMeals(meals);
    } else {
      setVisibleMeals(meals.filter(meal => meal.categories.includes(category)));
    }
  };

  return (
    <section id="menu" className="section bg-beige-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-natural-800 mb-4">Our Menu</h2>
          <div className="w-16 h-1 bg-natural-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our selection of healthy and delicious meals prepared with fresh ingredients
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-natural-600 text-white' 
                  : 'bg-white text-natural-700 hover:bg-natural-100'
              }`}
              onClick={() => handleCategoryChange(category)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {visibleMeals.map((meal) => (
              <motion.div
                key={meal.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover-zoom group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6 relative">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-natural-800">{meal.name}</h3>
                    <span className="text-natural-600 font-semibold">${meal.price}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{meal.description}</p>
                  
                  <motion.div
                    className="absolute inset-0 bg-natural-600/95 text-white p-6 flex flex-col justify-end"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-2">{meal.name}</h3>
                    <p className="mb-4">{meal.description}</p>
                    <button className="bg-white text-natural-800 py-2 px-4 rounded-md hover:bg-natural-100 transition-colors">
                      Add to Cart
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Menu;
