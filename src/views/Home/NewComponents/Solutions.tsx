import React from 'react';
import { 
  FaRobot, 
  FaUserPlus, 
  FaComments, 
  FaFileMedical, 
  FaBullseye, 
  FaDatabase, 
  FaLanguage, 
  FaMoneyCheckAlt, 
  FaChartLine 
} from 'react-icons/fa';

interface Card {
  title: string;
  desc: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const Solutions: React.FC = () => {
  const cards: Card[] = [
    {
      title: 'Custom AI-Powered Website',
      desc: 'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
      icon: <FaRobot className="text-4xl text-blue-500 mb-4" />,
      hoverColor: 'hover:shadow-blue-400',
    },
    {
      title: 'Enhanced Patient Conversion',
      desc: 'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
      icon: <FaUserPlus className="text-4xl text-green-500 mb-4" />,
      hoverColor: 'hover:shadow-green-400',
    },
    {
      title: 'Real-Time Query Handling',
      desc: 'Instant response system for patient inquiries with AI-powered chat support.',
      icon: <FaComments className="text-4xl text-purple-500 mb-4" />,
      hoverColor: 'hover:shadow-purple-400',
    },
    {
      title: 'Medical Report Analysis',
      desc: 'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
      icon: <FaFileMedical className="text-4xl text-pink-500 mb-4" />,
      hoverColor: 'hover:shadow-pink-400',
    },
    {
      title: 'Improved Lead Generation',
      desc: 'Data-driven lead generation strategies to attract and engage potential patients.',
      icon: <FaBullseye className="text-4xl text-yellow-500 mb-4" />,
      hoverColor: 'hover:shadow-yellow-400',
    },
    {
      title: 'Comprehensive Healthcare Database',
      desc: 'Extensive medical information database for accurate patient guidance and support.',
      icon: <FaDatabase className="text-4xl text-teal-500 mb-4" />,
      hoverColor: 'hover:shadow-teal-400',
    },
    {
      title: 'Multilingual Support',
      desc: 'Breaking language barriers with comprehensive multilingual communication tools.',
      icon: <FaLanguage className="text-4xl text-indigo-500 mb-4" />,
      hoverColor: 'hover:shadow-indigo-400',
    },
    {
      title: 'Seamless Payment Handling',
      desc: 'Secure and efficient payment processing for medical services globally.',
      icon: <FaMoneyCheckAlt className="text-4xl text-red-500 mb-4" />,
      hoverColor: 'hover:shadow-red-400',
    },
    {
      title: 'Marketing And SEO Support',
      desc: 'Optimized digital presence with advanced SEO and marketing strategies.',
      icon: <FaChartLine className="text-4xl text-cyan-500 mb-4" />,
      hoverColor: 'hover:shadow-cyan-400',
    },
  ];

  return (
    <div className="py-16 px-4 md:px-20 min-h-screen">
      <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Solutions
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-white/90 ${card.hoverColor}`}
          >
            <div className="flex items-center justify-center">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-gray-800 mt-4">{card.title}</h3>
            <p className="text-gray-600 text-center">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
