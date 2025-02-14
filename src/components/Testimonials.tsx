import React, { useEffect } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  amharic: string;
  english: string;
}

const testimonials: Testimonial[] = [
  {
    amharic: "ሪያሊቲ/reality  ፣ ማህበረሰብና መፅሐፍ ቅዱስን ቆም ብዬ እንዳይ ጠቅሞኛል ለሁሉም ነገር ውስጣችን አቅም አለ እኛ የሚፈርድብን እንጂ መንገድ የሚያሳየን ማንነታችንን እንናውቅና እራሳችንን እንድንሆን የሚመክረን የለም ከእድገት አንፃር ውሳኔ መወሰን ላይ ደርሰናል ለሚመጣብን ነገር ምን ምላሽ መስጠት እንዳለብን ተረድተናል ሴት ማለት ጠንካራ እንደሆነች በዚህም ማን እንደሆንኩ ተራ እንዳልሆንኩ በዓላማና ለዓላማ እንደ ተፈጠርኩ እና ምንም ነገር እንደምችል ከሥልጠናው በኋላ ውስጤን አሳምኜው 10 ኛ ክፍል ፀጥ ነበር የምለው፣ አሁን አወራለሁ፣ ስለኔ እራሴው መናገር ጀምሬያለሁ...",
    english: "Reality, society and the Bible have helped me to stop and think. There is a capacity for everything. We are the ones who judge us, show us the way, know who we are and advise us to be ourselves. We have reached a point of making decisions in terms of growth. We have understood how to respond to what comes our way. That a woman is strong, this is who I am, that I am not ordinary, that I was created with a purpose and for a purpose. And after the training, I convinced myself. I was quiet in the 10th grade, now I speak, I have started talking about myself..."
  },
  {
    amharic: "ከሥልጠናው በኋላ ጠንካራ ሴት መሆኔን አቅጄ በእቅድ መንቀሳቀስ እንዳለብኝ በሴትነቴ ጠንካራ መሆኔን በእምነቴም ጠንካራ እንድሆንና እራሴን እንድቀበል አድርጎኛል",
    english: "After the training, I learned that I am a strong woman. I need to plan and act according to a plan. I am strong in my femininity. It also made me strong in my faith and accept myself."
  },
  {
    amharic: "ስልጠናው ወደ ተግባር አስቀይሮናል በፊት እንደ ቀልድ ያየሁት ሕይወቴ አሁን ላይ ስለነገዬም እንዳስብ/እንዳቅድ አድርጎኛል ሕልሜን በደንብ እንድኖረው አድርጎኛል 12 ስገባ ውጤት ቢመጣልኝም ባይመጣልኝም ምን ማድረግ እንዳለብኝ ለራሴ ነግሬአለሁ ለሌሎች ጓደኞቼም /ለ 5 / ልጆች ሀሳብ አካፍዬ አሳምኛቼዋለው በፊት ትግስተኛ አልነበርኩም ፣ከሰው ጋር አልስማማም ነበር፣ተሳዳቢ ነበርኩ አሁን ግን ቀንሻለሁ ውድድር እንኳን ተወዳድሬ አሸናፊ ሆኛለሁ እና ለውጥማ በደንብ አለ",
    english: "The training has turned us into action. My life, which I used to see as a joke, is now different. It has made me think/plan for the future. It has made me live my dreams well. When I entered 12th grade, I told myself what to do, whether I get results or not. I have shared my ideas with other friends and convinced them. Before, I was not patient, I did not agree with people, I was abusive, but now I have changed. I have even competed and won competitions and the change is good."
  },
  {
    amharic: "እናቷን አታውቃትም፣ አባቷን ታውቀዋለች፤ ግን አብረው አይኖሩም ከስልጠናው በፊት ከሰዎች ጋር አታወራም፣አብራ ከምትኖራቸው ጋር/አክስቶች ብላለች/ አትወያይም፣አትመካከርም፣ሳትነግራቸው DV ሞላች፣ትምህርቷን ችላ አለች 10ኛ ክፍል ወደቀች፣በተደጋጋሚ እራሷን ለማጥፋት ሞክራ ነበር... በዲቪ ይህን ሀገር ካስለቀቅከኝ ብዬ ለፈጣሪም ተሳልኩ ምንም የለም...ማህበረሰቡጋ ያለው አመለካከት የፍርድ ነው፣ ሥልጠና መጣ ጠራሽኝ፣አበበችጋ ከሆነ ሂጂ አሉኝ መጣሁ ከስልጠናው በኋላ ከሰው ጋር ማውራት ጀመርኩ በተስፋ ተሞላሁ፣ይህንን ተስፋ አስቆራጭ ማህበረሰብም ልሠራበት አሰብኩ፣አስተሳሰቡንም ለመለወጥ እፈልጋለሁ ት/ቴን ባግባቡ እየተከታተልኩ ነው አሁን ከሰዎች ጋር ቁርኝት እንዲኖረኝ ግልፅነቴን መጨመር እፈልጋለሁ ካወራኋት በኋላ ልትሰናበተኝ ስታቅፈኝ በዛውም ፀለይኩላት ፀልዬ ስጨርስ እያለቀሰች ነበር",
    english: "She doesn't know her mother, she knows her father; but they don't live together. Before the training, she didn't talk to people. She lived with her aunts but didn't discuss or consult with them. She filled out a DV application without telling them, ignored her studies, failed 10th grade, and tried to end her life repeatedly. After the training, I started talking to people. I was filled with hope, I thought I could work in this hopeless society, I want to change its thinking. I am now attending school properly. I want to increase my openness to have connections with people."
  }
];

const Testimonials = () => {
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
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-wine mb-4">Voices of Change</h2>
          <p className="text-lg md:text-xl text-mauve max-w-3xl mx-auto">
            Real stories from the women whose lives have been transformed through our program
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-beige-100 rounded-lg p-6 md:p-8 shadow-lg fade-in delay-${index * 100}`}
            >
              <div className="flex items-start">
                <div className="bg-wine rounded-full p-2 md:p-3 mr-4 flex-shrink-0">
                  <Quote className="text-white w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-mauve mb-4 font-serif text-base md:text-lg">{testimonial.amharic}</p>
                  <p className="text-wine italic text-sm md:text-base">{testimonial.english}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;