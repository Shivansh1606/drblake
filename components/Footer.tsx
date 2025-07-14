import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Dr. Serena Blake, PsyD</h3>
              <p className="text-gray-400 mb-4">Licensed Clinical Psychologist</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal-400" />
                  <span className="text-sm">1287 Maplewood Drive, Los Angeles, CA 90026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-teal-400" />
                  <span className="text-sm">(323) 555-0192</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-teal-400" />
                  <span className="text-sm">serena@blakepsychology.com</span>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-teal-400" />
                  <span>In-person: Tue & Thu, 10 AM–6 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-teal-400" />
                  <span>Virtual: Mon, Wed & Fri, 1 PM–5 PM</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Anxiety & Stress Management</li>
                <li>Relationship Counseling</li>
                <li>Trauma Recovery</li>
                <li>Individual Therapy</li>
                <li>Couples Therapy</li>
                <li>Virtual Sessions</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 | {' '}
              <Link
                href="https://shivanshinfo.netlify.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium relative group"
                title="Check my portfolio"
                title="Check my portfolio"
              >
                made by shivansh
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-600">
                  Check my portfolio
                </span>
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-600">
                  Check my portfolio
                </span>
              </Link>
              <Heart className="inline h-4 w-4 text-red-500 mx-1" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}