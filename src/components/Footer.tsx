import React from 'react';
import { Dumbbell, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Dumbbell className="text-secondary w-8 h-8 mr-2" />
            <span className="text-2xl font-bold">GymFocus</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-secondary transition duration-300"><Facebook /></a>
            <a href="#" className="hover:text-secondary transition duration-300"><Instagram /></a>
            <a href="#" className="hover:text-secondary transition duration-300"><Twitter /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 GymFocus. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;