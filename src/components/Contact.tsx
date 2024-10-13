import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 animate-fade-in">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nombre</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo Electrónico</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Mensaje</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" required></textarea>
            </div>
            <button type="submit" className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 transform hover:scale-105">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;