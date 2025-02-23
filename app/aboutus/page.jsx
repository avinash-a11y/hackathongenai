"use client";
import React from 'react'; 
import Header from '../dashboard/_components/Header';
import ChatBotWidget from '../chatbot';
const About = () => {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      {/* Hero Section with Image Background */}
      <section className="relative w-full h-screen overflow-hidden">
        <img 
          src="https://cdn.prod.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg" 
          alt="AI Background" 
          width={"1920"} 
          height={"1080"} 
          className="opacity-70 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-8xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
              Revolutionizing Careers with AI
            </h1>
            <p className="text-lg sm:text-2xl mb-8 text-white">
              Empowering professionals and students with personalized interview coaching and career guidance.
            </p>
            <a
              href="#team"
              className="inline-block py-3 px-8 rounded-full text-lg font-semibold bg-indigo-700 hover:bg-indigo-800 text-white transition-all duration-300"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section with Clean, Spacious Layout */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-12">
            Who We Are
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            At CareerTech, we’re reshaping the future of career development with cutting-edge AI solutions tailored to help you unlock your potential.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            Our mission is to provide the tools, resources, and expertise that give everyone the chance to succeed in their dream career.
          </p>
        </div>
      </section>

      {/* Team Section with Hover Effects */}
      <section id="team" className="py-24 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-12">
            Meet the Innovators Behind CareerTech
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Team Member 1 */}
            <div className="relative group">
                <img
                  src="https://res.cloudinary.com/dsguaqukb/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1740222374/avinash_bj99da.jpg"
                  alt="Team Member"
                  className="w-48 h-48 object-cover rounded-full mx-auto group-hover:scale-105 transition-transform duration-300"
                />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Avinash Gupta</h3>
              <p className="text-gray-600">Co-Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="relative group">
                <img
                  src="https://res.cloudinary.com/dsguaqukb/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724749146/murali_kk_ehj53c.jpg"
                  alt="Team Member"
                  className="w-48 h-48 object-cover rounded-full mx-auto group-hover:scale-105 transition-transform duration-300"
                />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Murali Krishna</h3>
              <p className="text-gray-600">CTO & Co-Founder</p>
            </div>

            {/* Team Member 3 */}
            <div className="relative group">
                             <img
                  src="https://res.cloudinary.com/dsguaqukb/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1740222326/pranay_licldz.jpg"
                  alt="Team Member"
                  className="w-48 h-48 object-cover rounded-full mx-auto group-hover:scale-105 transition-transform duration-300"
                />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Pranay</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section with Parallax Effect */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(https://your-image-url.jpg)' }}></div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Join the future of career development. Let us help you get to your next big step.
          </p>
          <a
            href="#contact"
            className="inline-block py-3 px-8 rounded-full text-lg font-semibold bg-white text-indigo-700 hover:bg-indigo-100 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      <ChatBotWidget />
    </div>
  );
};

export default About;
