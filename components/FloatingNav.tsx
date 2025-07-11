'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Briefcase, HelpCircle, Mail, ChevronRight } from 'lucide-react';

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: 'hero', label: 'Home', icon: <Home className="h-4 w-4" /> },
    { id: 'about', label: 'About', icon: <User className="h-4 w-4" /> },
    { id: 'services', label: 'Services', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'faq', label: 'FAQ', icon: <HelpCircle className="h-4 w-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false);
          setIsOpen(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = sectionId === 'hero' 
      ? document.body 
      : document.getElementById(sectionId);
    
    if (element) {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Menu Button */}
      <div 
        className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full bg-gradient-to-br from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-2xl border-0 transition-all duration-300 transform hover:scale-110 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Navigation Menu */}
      <div 
        className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-500 ease-in-out ${
          isOpen && isVisible 
            ? 'translate-x-0 opacity-100 scale-100' 
            : 'translate-x-20 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-2 mr-20">
          <nav className="space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 text-left rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 hover:text-teal-700 group transform hover:scale-105 ${
                  index === 0 ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-teal-100 to-blue-100 text-teal-600 group-hover:from-teal-200 group-hover:to-blue-200 transition-all duration-300">
                  {item.icon}
                </div>
                <span className="font-medium text-slate-700 group-hover:text-teal-700 transition-colors duration-300">
                  {item.label}
                </span>
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}