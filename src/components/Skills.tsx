import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML', level: 95, color: 'bg-orange-500' },
    { name: 'CSS', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 88, color: 'bg-yellow-500' },
    { name: 'React', level: 92, color: 'bg-cyan-500' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' }
  ];

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

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 
            className={`text-4xl font-bold text-center text-gray-800 mb-16 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transform transition-all duration-1500 ease-out`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 150 + 300}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;