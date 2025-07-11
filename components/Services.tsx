import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Heart className="h-12 w-12 text-rose-500" />,
      title: "Anxiety & Stress Management",
      description: "Learn evidence-based techniques to manage anxiety and stress effectively. Through cognitive-behavioral therapy and mindfulness practices, we'll work together to develop coping strategies that help you feel more grounded and in control. Sessions focus on identifying triggers, challenging negative thought patterns, and building resilience for long-term wellness.",
      image: "https://images.pexels.com/photos/3799830/pexels-photo-3799830.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      fee: "$200 / session"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      title: "Relationship Counseling",
      description: "Strengthen your connections and improve communication with your partner. Whether you're facing challenges in dating, marriage, or family relationships, we'll explore healthy communication patterns, conflict resolution strategies, and emotional intimacy. Both individual and couples sessions available to help you build lasting, fulfilling relationships.",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      fee: "$240 / couples session"
    },
    {
      icon: <Shield className="h-12 w-12 text-emerald-500" />,
      title: "Trauma Recovery",
      description: "Find healing and reclaim your sense of safety through trauma-informed therapy. Using evidence-based approaches like EMDR and somatic techniques, we'll work at your pace to process difficult experiences and develop healthy coping mechanisms. My goal is to help you move from surviving to thriving, building resilience and post-traumatic growth.",
      image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      fee: "$200 / session"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Services & Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mental health support tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-teal-600">
                      {service.fee}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              All sessions available both in-person and virtually via Zoom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}