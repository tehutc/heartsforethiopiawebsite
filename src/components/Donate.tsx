import React, { useEffect } from 'react';

const Donate = () => {
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
    <section id="donate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-wine mb-4">Support Our Mission</h2>
          <p className="text-xl text-mauve max-w-3xl mx-auto">
            Help us reach our goal of $20,000 to empower the youth of Holeta through sustainable skills training
          </p>
        </div>

        <div className="bg-beige-100 rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto fade-in delay-200">
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-beige-200 w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Covenant Ministry Logo"
                  className="w-14 h-14 object-contain rounded-full"
                />
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold mb-4 text-wine">100% of Your Donation Goes to Resources</h3>
              <p className="text-mauve">
                Your contribution directly supports our soap-making program, providing materials, training, and opportunities for young women in Ethiopia.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <script src="https://donorbox.org/widget.js" paypalexpress="false"></script>
              <iframe
                src="https://donorbox.org/2025-ethiopia-mission-2?preview=1737405663"
                name="donorbox"
                allowpaymentrequest="true"
                seamless="seamless"
                frameBorder="0"
                scrolling="no"
                height="900px"
                width="100%"
                style={{ maxWidth: '500px', minWidth: '250px', maxHeight: 'none!important' }}
              ></iframe>
              <a
                href="https://donorbox.org/2025-ethiopia-mission-2?preview=1737405663"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-wine hover:text-mauve transition-colors"
              >
                In case this window doesn't work, click here to donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;