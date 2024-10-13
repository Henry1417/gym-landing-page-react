import React from 'react';
import { Dumbbell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Dumbbell className="text-secondary w-8 h-8 mr-2" />
          <span className="text-2xl font-bold text-secondary">GymFocus</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#servicios" className="text-white hover:text-secondary transition duration-300">Servicios</a></li>
            <li><a href="#testimonios" className="text-white hover:text-secondary transition duration-300">Testimonios</a></li>
            <li><a href="#contacto" className="text-white hover:text-secondary transition duration-300">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;