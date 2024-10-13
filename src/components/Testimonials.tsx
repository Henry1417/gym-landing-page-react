import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: 'Laura G.', quote: '¡El programa de entrenamiento personalizado me ayudó a lograr mis metas de fitness más rápido de lo que jamás pensé posible!' },
    { name: 'Miguel R.', quote: 'Después de mi lesión, el programa de rehabilitación aquí me puso de nuevo en pie y más fuerte que nunca.' },
    { name: 'Sofía T.', quote: 'El entrenamiento funcional ha mejorado mi vida diaria de maneras que nunca esperé. Me siento con más energía y capaz.' },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Lo que Dicen Nuestros Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 animate-fade-in">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-secondary">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;