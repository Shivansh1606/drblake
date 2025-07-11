'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Code, Send, Database, ChevronRight } from 'lucide-react';

interface PortfolioNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function PortfolioNav({ activeSection, setActiveSection }: PortfolioNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: 'about', label: 'About', icon: <User className="h-4 w-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="h-4 w-4" /> },
    { id: 'contact', label: 'Contact', icon: <Send className="h-4 w-4" /> },
    { id: 'info', label: 'Info', icon: <Database className="h-4 w-4" /> },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
          setIsOpen(false);
        } else {
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
          className={`w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl border-0 transition-all duration-300 transform hover:scale-110 ${
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
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-2 mr-20">
          <nav className="space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-6 py-4 text-left rounded-xl transition-all duration-300 group transform hover:scale-105 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white' 
                    : 'hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 text-white/80 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-br from-blue-400 to-purple-400 text-white' 
                    : 'bg-gradient-to-br from-blue-100/20 to-purple-100/20 text-blue-300 group-hover:from-blue-200/30 group-hover:to-purple-200/30'
                }`}>
                  {item.icon}
                </div>
                <span className="font-medium transition-colors duration-300">
                  {item.label}
                </span>
                <ChevronRight className={`h-4 w-4 group-hover:translate-x-1 transition-all duration-300 ml-auto ${
                  activeSection === item.id ? 'text-white' : 'text-white/60 group-hover:text-white'
                }`} />
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