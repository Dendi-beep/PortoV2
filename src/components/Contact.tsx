import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'dendy@example.com' },
    { icon: Phone, label: 'Phone', value: '+62 123 456 7890' },
    { icon: MapPin, label: 'Location', value: 'Jakarta, Indonesia' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 
            className={`text-4xl font-bold text-center text-white mb-16 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Let's Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h3 
                className={`text-2xl font-semibold text-white mb-8 transform transition-all duration-1000 delay-300 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
              >
                Get in touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className={`flex items-center gap-4 transform transition-all duration-700 ${
                      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 500}ms` }}
                  >
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div>
                      <p className="text-white text-opacity-80 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div 
                className={`mt-12 transform transition-all duration-1000 delay-1000 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Hello World!</h4>
                <p className="text-white text-opacity-90 leading-relaxed">
                  Ready to start your next project? Let's create something amazing together. 
                  I'm always excited to work on new challenges and bring innovative ideas to life.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-gray-800 py-3 rounded-lg font-semibold flex items-center justify-center gap-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;