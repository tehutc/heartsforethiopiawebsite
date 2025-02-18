import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
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
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/group.jpeg")',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#896262', opacity: 0.6 }}
      />

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 fade-in font-serif">
          Empowering Communities Through Faith & Action
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl fade-in delay-200">
          Join us in our mission to transform lives in Holeta, Ethiopia through sustainable development and spiritual guidance
        </p>
        <a
          href="#donate"
          className="btn-primary text-lg md:text-xl px-8 py-4 fade-in delay-300"
        >
          Support Our Mission
        </a>

        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  );
};

export default Hero;