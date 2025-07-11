'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Phone, User, Code, Database, ArrowLeft, Send, Heart, FileText, Award } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import PortfolioNav from '@/components/PortfolioNav';

const techData = [
  { name: 'HTML', value: 9, color: '#E34F26' },
  { name: 'CSS', value: 8, color: '#1572B6' },
  { name: 'JavaScript', value: 8, color: '#F7DF1E' },
  { name: 'React', value: 7, color: '#61DAFB' },
  { name: 'Node.js', value: 7, color: '#339933' },
  { name: 'Express.js', value: 7, color: '#000000' },
  { name: 'MongoDB', value: 7, color: '#47A248' },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissions, setSubmissions] = useState<any[]>([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: contactForm.name,
            email: contactForm.email,
            message: contactForm.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      alert('Message sent successfully!');
      setContactForm({ name: '', email: '', message: '' });
      fetchSubmissions();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    // Removed pie chart functionality
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <PortfolioNav activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Header */}
      <header className="relative pt-20 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Dr. Blake's Site</span>
            </Link>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 text-center sm:text-left">
              {/* Image on the left */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
                  <img src="https://i.ibb.co/RkvF7Qxy/IMG-20250706-212555.jpg" alt="IMG-20250706-212555" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-3">
                  <Code className="h-6 w-6 text-white" />
                </div>
              </div>
              
              {/* Text content on the right */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Shivansh
                </h1>
                <p className="text-xl sm:text-2xl text-blue-200 mb-8">
                  Software Developer
                </p>
                
                {/* Contact Links */}
                <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto">
                  <a 
                    href="https://www.linkedin.com/in/shivansh-0270532a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-xs">LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/Shivansh1606"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                    <span className="text-xs">GitHub</span>
                  </a>
                  <a 
                    href="mailto:shivanshsingh255@gmail.com"
                    className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-xs">Email</span>
                  </a>
                  <a 
                    href="tel:+917078496801"
                    className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="text-xs">Mobile</span>
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/12n9bCr0EBnL1EZP5S0NaYPG2Ng8nSrBO/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <FileText className="h-5 w-5" />
                    <span className="text-xs">Resume</span>
                  </a>
                  <a 
                    href="https://drive.google.com/drive/folders/1l84o5ypbvBfxtnCVkDbK2QAZXFabDTZo?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <Award className="h-5 w-5" />
                    <span className="text-xs">Certificates</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {activeSection === 'about' && (
          <section id="about" className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <User className="h-8 w-8 text-blue-400" />
                  <h2 className="text-3xl font-bold">About Me</h2>
                </div>
                
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Hello! I'm <span className="text-blue-300 font-semibold">Shivansh</span>, a passionate and dedicated tech enthusiast with a Master's degree (MCA) from IMS Engineering College, Ghaziabad. I specialize in Full Stack Web Development and have foundational skills in Data Analysis and Core Java with OOPs concepts.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    As a Full Stack Developer, I'm comfortable working across both frontend and backend technologies. I have hands-on experience with HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB, and I enjoy creating dynamic, user-friendly web applications that solve real-world problems.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    In addition to web development, I have beginner-level knowledge in data analysis using tools like Excel, Python (Pandas), and Power BI, and I'm continuously working on improving my analytical thinking and data-driven decision-making.
                  </p>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-300">Education</h3>
                    <p className="text-white/90">Master of Computer Applications (MCA)</p>
                    <p className="text-white/70">IMS Engineering College, Ghaziabad</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-300">Specialization</h3>
                    <p className="text-white/90">Full Stack Web Development</p>
                    <p className="text-white/70">Frontend & Backend Technologies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {activeSection === 'skills' && (
          <section id="skills" className="max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <Code className="h-8 w-8 text-blue-400" />
                  <h2 className="text-3xl font-bold">Technical Skills</h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-semibold mb-6 text-blue-300">Full Stack Technologies</h3>
                    <div className="space-y-4">
                      {techData.map((tech, index) => (
                        <div key={tech.name} className="flex items-center justify-between">
                          <span className="text-lg font-medium">{tech.name}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-white/20 rounded-full h-3">
                              <div 
                                className="h-3 rounded-full transition-all duration-1000 ease-out"
                                style={{ 
                                  width: `${(tech.value / 10) * 100}%`,
                                  backgroundColor: tech.color,
                                  animationDelay: `${index * 200}ms`
                                }}
                              />
                            </div>
                            <span className="text-sm font-semibold w-8">{tech.value}/10</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {activeSection === 'contact' && (
          <section id="contact" className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <Send className="h-8 w-8 text-blue-400" />
                  <h2 className="text-3xl font-bold">Get In Touch</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        )}

        {activeSection === 'info' && (
          <section id="info" className="max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <Database className="h-8 w-8 text-blue-400" />
                  <h2 className="text-3xl font-bold">Contact Submissions</h2>
                </div>
                
                {submissions.length === 0 ? (
                  <p className="text-white/70 text-center py-8">No submissions yet.</p>
                ) : (
                  <div className="space-y-4">
                    {submissions.map((submission, index) => (
                      <Card key={index} className="bg-white/5 border-white/10">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-semibold text-blue-300">{submission.name}</h3>
                            <span className="text-sm text-white/60">
                              {new Date(submission.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-white/80 mb-2">
                            <strong>Email:</strong> {submission.email}
                          </p>
                          <p className="text-white/80">
                            <strong>Message:</strong> {submission.message}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        )}
      </main>
    </div>
  );
}