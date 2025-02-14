import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';

const Timeline = () => {
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
    <section id="timeline" className="py-12 md:py-20 bg-beige-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-wine mb-4">2025 Mission Timeline</h2>
          <p className="text-lg md:text-xl text-mauve max-w-3xl mx-auto">
            Our comprehensive soap-making program will empower 80 high school girls in Holeta
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-beige-200 hidden md:block"></div>

              <div className="space-y-6 md:space-y-12">
                <div className="relative fade-in">
                  <div className="ml-auto md:ml-0 md:flex md:items-center md:justify-end md:w-1/2 md:pr-8">
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl md:w-96">
                      <div className="flex items-center mb-4">
                        <Calendar className="text-wine mr-2" size={24} />
                        <h3 className="text-lg md:text-xl font-serif font-semibold text-wine">Phase 1: Preparation</h3>
                      </div>
                      <p className="text-wine font-semibold">January-May 2025</p>
                      <div className="mt-4 space-y-4 text-mauve text-base md:text-lg">
                        <p>During the preparation phase, we will focus on collecting resources, planning logistics, and securing necessary partnerships. This includes identifying and acquiring essential raw materials such as oils, lye, molds, fragrances, and packaging materials, while also partnering with suppliers and donors for in-kind donations.</p>
                        <p>We will develop structured training modules covering both soap-making techniques and business skills, ensuring our educational materials address key areas like branding, pricing, marketing, and financial literacy. Our team will identify trainers and volunteers, assigning specific roles for logistics, training, and evaluation.</p>
                        <p>Community engagement will be crucial as we identify potential participants, prioritizing low-income women and young entrepreneurs. We'll conduct outreach through churches, local leaders, and social media while preparing training facilities and arranging necessary transportation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative fade-in delay-200">
                  <div className="mr-auto md:mr-0 md:flex md:items-center md:w-1/2 md:pl-8">
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl md:w-96">
                      <div className="flex items-center mb-4">
                        <Calendar className="text-wine mr-2" size={24} />
                        <h3 className="text-lg md:text-xl font-serif font-semibold text-wine">Phase 2: Implementation</h3>
                      </div>
                      <p className="text-wine font-semibold">June-July 2025</p>
                      <div className="mt-4 space-y-4 text-mauve text-base md:text-lg">
                        <p>The implementation phase will focus on hands-on training and skills development. Participants will engage in comprehensive soap-making workshops covering ingredient selection, safety measures, and production techniques through practical demonstrations and guided practice sessions.</p>
                        <p>Alongside technical training, we'll conduct business development workshops focusing on marketing strategies, financial management, and business planning. These sessions will equip participants with the knowledge needed to establish and grow their own enterprises.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative fade-in delay-300">
                  <div className="ml-auto md:ml-0 md:flex md:items-center md:justify-end md:w-1/2 md:pr-8">
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl md:w-96">
                      <div className="flex items-center mb-4">
                        <Calendar className="text-wine mr-2" size={24} />
                        <h3 className="text-lg md:text-xl font-serif font-semibold text-wine">Phase 3: Evaluation</h3>
                      </div>
                      <p className="text-wine font-semibold">August-December 2025</p>
                      <div className="mt-4 space-y-4 text-mauve text-base md:text-lg">
                        <p>The evaluation phase will focus on assessing program impact and ensuring long-term sustainability. We'll conduct comprehensive surveys and interviews with participants to measure knowledge gained, income generated, and overall business success rates.</p>
                        <p>Based on participant feedback and program outcomes, we'll refine our training materials and implementation strategies. Throughout this phase, we'll continue providing mentorship and networking opportunities while connecting participants with funding resources and potential business partnerships.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="md:sticky md:top-1/2 md:-translate-y-1/2 fade-in delay-400">
              <blockquote className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
                <p className="text-lg md:text-xl text-wine font-serif italic mb-4">
                  "For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."
                </p>
                <cite className="text-mauve block text-base md:text-lg">- Jeremiah 29:11</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;