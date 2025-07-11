import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Award, Users, CheckCircle, Heart } from 'lucide-react';

export default function About() {
  const credentials = [
    "Licensed Clinical Psychologist (PsyD)",
    "Cognitive-Behavioral Therapy Specialist",
    "Trauma-Informed Care Certified",
    "Mindfulness-Based Therapy Practitioner"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full text-sm font-medium text-teal-700 border border-teal-200 mb-6">
              <Heart className="w-4 h-4 mr-2" />
              About Dr. Blake
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight">
              Compassionate Care Meets
              <span className="block font-medium bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Evidence-Based Practice
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Creating a safe, supportive space for you to thrive
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl transform rotate-3"></div>
                <img 
                  src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029338.jpg"
                  alt="Dr. Serena Blake - Licensed Clinical Psychologist"
                  className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover object-center"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-teal-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-slate-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-slate-900">500+ Sessions</div>
                      <div className="text-slate-600">Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="text-3xl font-medium text-slate-900 mb-6">
                  Dr. Serena Blake, PsyD
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                  with eight years of experience and over 500 client sessions. She blends evidence-based 
                  approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                  personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                  Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                </p>
              </div>

              {/* Credentials */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Credentials & Specializations</h4>
                <div className="grid grid-cols-1 gap-3">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <span className="text-slate-700">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-teal-100">
                  <CardContent className="p-6 text-center">
                    <Award className="h-10 w-10 text-teal-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">8</div>
                    <div className="text-sm text-slate-600 font-medium">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="p-6 text-center">
                    <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
                    <div className="text-sm text-slate-600 font-medium">Client Sessions</div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-slate-900">Office Location</div>
                    <div className="text-slate-600">1287 Maplewood Drive, Los Angeles, CA 90026</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-slate-900">Office Hours</div>
                    <div className="text-slate-600 space-y-1">
                      <div>In-person: Tue & Thu, 10 AM–6 PM</div>
                      <div>Virtual: Mon, Wed & Fri, 1 PM–5 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}