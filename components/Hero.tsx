'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://www.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_3717378.html")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-teal-800/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Find Your Path to
          <span className="block text-teal-200">Healing & Growth</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 font-light max-w-3xl mx-auto">
          Compassionate, evidence-based therapy to help you overcome anxiety, strengthen relationships, and heal from trauma
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Book a Free Consult
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-6 text-white">
            <a href="tel:3235550192" className="flex items-center gap-2 hover:text-teal-200 transition-colors">
              <Phone className="h-5 w-5" />
              <span className="text-sm sm:text-base">(323) 555-0192</span>
            </a>
            <a href="mailto:serena@blakepsychology.com" className="flex items-center gap-2 hover:text-teal-200 transition-colors">
              <Mail className="h-5 w-5" />
              <span className="text-sm sm:text-base">Email</span>
            </a>
          </div>
        </div>

        <div className="text-white/80 text-sm sm:text-base">
          <p className="mb-2">Dr. Serena Blake, PsyD • Licensed Clinical Psychologist</p>
          <p>8 years of experience • 500+ client sessions</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}