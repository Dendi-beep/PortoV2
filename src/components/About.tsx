import React, { useState, useEffect, useRef } from "react";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Menulis kode yang mudah dirawat dan dapat diskalakan dengan mengikuti praktik terbaik dan standar modern.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Membuat antarmuka pengguna yang indah dan intuitif dengan memperhatikan detail dan pengalaman pengguna.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Mengoptimalkan aplikasi agar cepat dan efisien demi memberikan pengalaman pengguna terbaik.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Bekerja secara efektif dengan tim dan pemangku kepentingan untuk menyukseskan proyek.",
    },
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
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2
                className={`text-4xl font-bold text-gray-800 mb-8 transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                About Me
              </h2>

              <div className="space-y-6">
                <p
                  className={`text-lg text-gray-600 leading-relaxed transform transition-all duration-1000 delay-300 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                >
                  Saya seorang pengembang front-end yang bersemangat dengan
                  pengalaman lebih dari 5 tahun dalam membuat aplikasi web
                  modern. Saya berspesialisasi dalam React, TypeScript, dan
                  kerangka kerja CSS modern untuk membangun antarmuka pengguna
                  yang responsif dan interaktif.
                </p>

                <p
                  className={`text-lg text-gray-600 leading-relaxed transform transition-all duration-1000 delay-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                >
                  Saat saya tidak sedang membuat kode, Anda dapat menemukan saya
                  menjelajahi teknologi baru, berkontribusi pada proyek sumber
                  terbuka, atau berbagi pengetahuan saya melalui postingan blog
                  dan bimbingan.
                </p>
              </div>

              <div
                className={`mt-8 transform transition-all duration-1000 delay-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-3 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                  Mari Bekerja Sama
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`bg-white rounded-xl p-6 shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200 + 400}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg flex items-center justify-center mb-4 transform transition-transform duration-300 hover:rotate-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
