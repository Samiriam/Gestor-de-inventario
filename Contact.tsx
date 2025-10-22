
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    alert('Mensaje enviado! (simulación)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Contacto
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[#008C9E]">Horarios</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between border-b pb-2"><span>Lun a Sab</span> <strong>15:00 – 20:00 Hrs</strong></p>
                <p className="flex justify-between border-b pb-2"><span>Dom</span> <strong>14:00 – 19:30 Hrs</strong></p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#008C9E]">Dirección</h3>
              <address className="not-italic text-gray-600">
                <p>Januario Espinosa 1610, Linares, Maule</p>
                <p>Al interior de Boulevard Central</p>
              </address>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-[#008C9E]">Contacta Con Nosotros</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="ej: Juan Soto" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#007BFF] focus:border-[#007BFF]" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo Electrónico" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#007BFF] focus:border-[#007BFF]" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Asunto" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#007BFF] focus:border-[#007BFF]" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Escribe tu mensaje</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Escríbenos tu mensaje" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#007BFF] focus:border-[#007BFF]" required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-[#007BFF] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
