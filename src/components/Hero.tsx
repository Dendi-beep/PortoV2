import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white bg-opacity-5 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name Animation */}
          <h1 
            className={`text-5xl md:text-7xl font-bold text-white mb-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Dendy Setiawan
          </h1>

          {/* Subtitle Animation */}
          <p 
            className={`text-xl md:text-2xl text-white text-opacity-90 mb-12 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            I'm a front-end developer specializing in building interactive user interfaces.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            {/* Profile Image */}
            <div 
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}
            >
              <div className="relative group">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Dendy Setiawan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* CTA Button */}
            <div 
              className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <button className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
                <span className="flex items-center gap-3">
                  <Download className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-y-[-2px]" />
                  Download CV
                </span>
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div 
            className={`flex justify-center gap-6 transform transition-all duration-1000 delay-900 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' }
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white transform transition-all duration-300 hover:bg-opacity-30 hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;