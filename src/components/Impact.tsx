import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ImpactDetails {
  title: string;
  description: string[];
  achievements: string[];
}

const impactData: Record<string, ImpactDetails> = {
  "Community Development in Holeta": {
    title: "Children's Home & Community Support in Holeta",
    description: [
      "In 2023, our ministry provided comprehensive care and support to the Holeta community through various Christ-centered initiatives.",
      "We believe in nurturing both the physical and spiritual needs of our community, following Jesus's example of compassionate service."
    ],
    achievements: [
      "Provided holistic care for 13 children (7 boys, 6 girls) in our children's home",
      "Enrolled all school-age children in quality private schools",
      "Supplied nutritious meals, clothing, and emotional support",
      "Facilitated successful adoption of 3 baby boys into loving Christian families",
      "Supported 150 children through our sponsorship program across multiple regions",
      "Operated a community kindergarten serving 109 children",
      "Provided monthly support to 10 elderly community members"
    ]
  },
  "Providing Resources to the Blind Community": {
    title: "Blind Student Support Program in Hawassa",
    description: [
      "Through God's guidance, we expanded our ministry to serve the blind community in Hawassa, ensuring they have access to both educational resources and God's Word.",
      "This initiative embodies our commitment to serving all of God's children, regardless of their physical abilities."
    ],
    achievements: [
      "Launched a new sponsorship program supporting 22 blind students",
      "Distributed essential tools including braille Bibles, walking canes, and voice recorders",
      "Established a computerized audio library for enhanced learning",
      "Provided comprehensive Braille support materials",
      "Built 7 houses for homeless families, complete with bedding and necessities",
      "Created an accessible learning environment for visually impaired students"
    ]
  },
  "Skills Training Programs": {
    title: "Christ-Centered Skills Development",
    description: [
      "Our skills training programs combine practical education with Biblical principles, empowering participants to grow in both faith and capability.",
      "We believe in equipping our community members with the tools they need to build sustainable futures while growing in their faith."
    ],
    achievements: [
      "Conducted life skills training for 70 high school girls",
      "Integrated Biblical teachings into all training programs",
      "Provided vocational training opportunities",
      "Distributed essential supplies and learning materials",
      "Organized spiritual development sessions",
      "Facilitated mentorship connections with local Christian leaders"
    ]
  },
  "Local Partnership Initiatives": {
    title: "Building Kingdom Partnerships",
    description: [
      "Through faithful collaboration with local churches and international partners, we've expanded our reach and deepened our impact.",
      "These partnerships demonstrate the power of the Body of Christ working together for His glory."
    ],
    achievements: [
      "Partnered with Denver Team for life skills training and resource distribution",
      "Collaborated with Project 1:27 & U.S. Family Foundation for student sponsorships",
      "Worked with Neidermeyer Family Foundation for various donations",
      "Engaged with Aryam's Project for volunteer activities",
      "Strengthened relationships with local churches",
      "Organized joint community service projects with Christian organizations"
    ]
  }
};

const impactPhotos = [
  {
    url: "./assets/holeta/holeta12.jpeg",
    caption: "Community Development in Holeta",
    description: "Serving Christ by serving others"
  },
  {
    url: "./assets/hawassa/hawassa4.jpeg",
    caption: "Providing Resources to the Blind Community",
    description: "Sharing God's Word through braille Bibles"
  },
  {
    url: "./assets/holeta/holeta3.jpeg",
    caption: "Skills Training Programs",
    description: "Empowering through life skills education and faith"
  },
  {
    url: "./assets/holeta/holeta2.jpeg",
    caption: "Local Partnership Initiatives",
    description: "Building His kingdom together"
  }
];

const Impact = () => {
  const [selectedImpact, setSelectedImpact] = useState<string | null>(null);

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

  const handleOpenModal = (caption: string) => {
    setSelectedImpact(caption);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedImpact(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="impact" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-wine mb-4">2023 Impact in Ethiopia</h2>
          <p className="text-lg md:text-xl text-mauve max-w-3xl mx-auto">
            Through God's grace, our ministry has made significant impacts in Holeta and Hawassa,
            serving communities with Christ's love
          </p>
          <p className="text-base md:text-lg text-wine mt-4 italic">
            "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." - Galatians 6:9
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
          {impactPhotos.map((photo, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-xl fade-in delay-${index * 100} cursor-pointer`}
              onClick={() => handleOpenModal(photo.caption)}
            >
              <div className="aspect-[16/9]">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  style={{ backgroundColor: '#896262', opacity: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-white text-lg md:text-xl font-serif mb-2">{photo.caption}</h3>
                    <p className="text-beige-100 text-sm italic">{photo.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImpact && impactData[selectedImpact] && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-beige-200 p-4 md:p-6 flex justify-between items-center">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-wine pr-8">{impactData[selectedImpact].title}</h3>
                <button
                  onClick={handleCloseModal}
                  className="text-wine hover:text-mauve transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-4 md:p-6">
                {impactData[selectedImpact].description.map((desc, index) => (
                  <p key={index} className="text-mauve mb-4 text-base md:text-lg">{desc}</p>
                ))}
                <h4 className="text-lg md:text-xl font-serif font-semibold text-wine mb-4 mt-6">2023 Achievements:</h4>
                <ul className="space-y-3">
                  {impactData[selectedImpact].achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-wine rounded-full mt-2 mr-3"></span>
                      <span className="text-mauve text-base md:text-lg">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="bg-beige-100 rounded-lg p-4 md:p-8 shadow-xl fade-in delay-400">
          <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 text-wine text-center">Key Achievements Through Faith</h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-wine rounded-full mt-1"></span>
                <span className="ml-4 text-base md:text-lg text-mauve">Established Christ-centered community development programs in Holeta, fostering spiritual and economic growth</span>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-wine rounded-full mt-1"></span>
                <span className="ml-4 text-base md:text-lg text-mauve">Distributed braille Bibles and essential resources to the blind community in Hawassa, sharing God's Word</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-wine rounded-full mt-1"></span>
                <span className="ml-4 text-base md:text-lg text-mauve">Built partnerships with local churches and Christian organizations to expand our ministry's reach</span>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-wine rounded-full mt-1"></span>
                <span className="ml-4 text-base md:text-lg text-mauve">Developed faith-based skills training programs that empower women through Biblical principles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;