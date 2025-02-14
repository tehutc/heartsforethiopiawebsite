import React, { useEffect } from 'react';
import { Heart, Users, Target } from 'lucide-react';

const Mission = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission" className="py-20 bg-beige-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-wine mb-4">Our Mission</h2>
          <p className="text-xl text-mauve max-w-3xl mx-auto">
            We are dedicated to creating lasting positive change in Ethiopia through faith-based service and practical skills development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center fade-in">
            <div className="bg-beige-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-wine" size={40} />
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-wine">Faith-Based Service</h3>
            <p className="text-mauve">
              Combining spiritual guidance with practical action to create meaningful impact in communities.
            </p>
          </div>

          <div className="text-center fade-in delay-200">
            <div className="bg-beige-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-wine" size={40} />
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-wine">Community Empowerment</h3>
            <p className="text-mauve">
              Empowering individuals with skills and knowledge to build sustainable futures.
            </p>
          </div>

          <div className="text-center fade-in delay-300">
            <div className="bg-beige-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-wine" size={40} />
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-wine">Sustainable Development</h3>
            <p className="text-mauve">
              Creating long-term solutions that continue to benefit communities for years to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;