import React from 'react';
import { Activity, Heart, UserPlus } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: <Activity className="w-12 h-12 text-secondary mb-4" />, title: 'Entrenamiento Funcional', description: 'Mejora tus movimientos cotidianos y tu condición física general con nuestros programas de entrenamiento funcional.' },
    { icon: <Heart className="w-12 h-12 text-secondary mb-4" />, title: 'Rehabilitación', description: 'Recupera tu mejor forma con nuestros programas de rehabilitación especializados y diseñados para tus necesidades.' },
    { icon: <UserPlus className="w-12 h-12 text-secondary mb-4" />, title: 'Entrenamiento Personalizado', description: 'Alcanza tus metas más rápido con planes de entrenamiento personalizados adaptados a tu cuerpo y aspiraciones únicas.' },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 animate-fade-in">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;