import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transforma tu Cuerpo, Transforma tu Vida</h1>
          <p className="text-xl mb-8">Entrenamiento funcional, rehabilitación y programas personalizados diseñados especialmente para ti.</p>
          <a href="#contacto" className="bg-secondary text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-600 transition duration-300">¡Comienza Hoy!</a>
        </div>
        <div className="md:w-1/2 animate-slide-in">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Persona entrenando" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;