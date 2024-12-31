import React from 'react';
import { Mail, Phone, MapPin, PenOff, Instagram, Github, LinkedinIcon } from 'lucide-react';

const Contact = () => {
  return (
    <section id='contact' className="bg-[#abd1c6] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-1">
        <h2 className="text-3xl font-bold text-[#001e1d] mb-12 text-center sm:text-[2.4rem]">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="mailto:ibeokoyefranklin@gmail.com">
          <div className="flex flex-col items-center p-6 bg-[#004643] rounded-lg shadow-sm">
            <Mail className="w-8 h-8 text-[#fffffe] mb-4" />
            <h3 className="text-lg text-[#abd1c6] font-semibold mb-2 sm:text-[23px] md:text-[17px]">Ibeokoyefranklin@gmail.com</h3>
          </div>
          </a>
          <a>
          <div className="flex flex-col items-center p-6 bg-[#004643] rounded-lg shadow-sm">
            <Phone className="w-8 h-8 text-[#fffffe] mb-4" />
            <h3 className="text-lg text-[#abd1c6] font-semibold mb-2 sm:text-[23px] md:text-[17px]">+2348065100998</h3>
          </div>
          </a>
          <a>
          <div className="flex flex-col items-center p-6 bg-[#004643] rounded-lg shadow-sm">
            <MapPin className="w-8 h-8 text-[#fffffe] mb-4" />
            <h3 className="text-lg text-[#abd1c6] font-semibold mb-2 sm:text-[23px] md:text-[17px]">Lagos, Nigeria</h3>
          </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;