import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-wine text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Covenant Ministry</h3>
            <p className="text-beige-100">
              Empowering communities through faith-based service and sustainable development.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#mission" className="text-beige-100 hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#impact" className="text-beige-100 hover:text-white transition-colors">2023 Impact</a></li>
              <li><a href="#timeline" className="text-beige-100 hover:text-white transition-colors">2025 Mission</a></li>
              <li><a href="#donate" className="text-beige-100 hover:text-white transition-colors">Donate</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Contact Us</h3>
            <p className="text-beige-100">
              For more information about our mission work or how to get involved, please reach out to us.
            </p>
            <a href="mailto:heartsforethiopia@gmail.com" className="text-beige-100 hover:text-white transition-colors mt-2 block">
              heartsforethiopia@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-wine-light mt-12 pt-8 text-center">
          <p className="text-beige-100">
            © {new Date().getFullYear()} Covenant Ministry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;