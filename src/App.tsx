import React from 'react';
import { Heart, Users, Calendar, Target, DollarSign, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Impact from './components/Impact';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Donate from './components/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Mission />
      <Impact />
      <Timeline />
      <Testimonials />
      <Donate />
      <Footer />
    </div>
  );
}

export default App;