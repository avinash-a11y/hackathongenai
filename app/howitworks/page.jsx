import React from 'react';
import Header from '../dashboard/_components/Header';
const HowItWorks = () => {
  return (
    <div className="font-sans text-gray-900">
        <Header />
      {/* Hero Section */}
      <section className="relative w-full h-60 bg-gradient-to-r from-indigo-600 to-purple-800 text-white flex items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold">How PrepAI Works</h1>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-12">
            Build Your Future in 3 Simple Steps
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            Our AI-powered platform helps you create a standout resume and practice mock interviews effortlessly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">

            {/* Step 1: Resume Builder */}
            <div className="flex flex-col items-center">
              <div className="bg-indigo-700 text-white rounded-full p-6 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                  <path d="M14 2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-8 12H4V4h8v10H6z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 1: Resume Builder</h3>
              <p className="text-gray-600">Create a professional, polished resume with our AI-powered resume builder. Choose templates and customize based on your industry and skills.</p>
            </div>

            {/* Step 2: Mock Interviews */}
            <div className="flex flex-col items-center">
              <div className="bg-indigo-700 text-white rounded-full p-6 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
                  <path d="M9 0a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3 3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm-1 10V3a2 2 0 1 1 4 0v7a2 2 0 1 1-4 0zm3.5-2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 2: Mock Interviews</h3>
              <p className="text-gray-600">Prepare for interviews with our AI-driven mock interview sessions. Receive real-time feedback and improve your performance.</p>
            </div>

            {/* Step 3: Career Placement Assistance */}
            <div className="flex flex-col items-center">
              <div className="bg-indigo-700 text-white rounded-full p-6 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-person-check-fill" viewBox="0 0 16 16">
                  <path d="M12.7 9.3a1 1 0 1 0-1.4-1.4l-2.3 2.3-1.6-1.5a1 1 0 1 0-1.4 1.4l2.3 2.2 3-3zM8 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zM4 8a4 4 0 1 1 4 4 4 4 0 0 1-4-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 3: Career Placement Assistance</h3>
              <p className="text-gray-600">Once you're ready, we'll help you find the best job opportunities and connect you with recruiters to kickstart your career.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-800 text-white text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Ready to Build Your Career?
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Get started today by creating your resume and practicing with mock interviews.
        </p>
        <a
          href="howitworks"
          className="inline-block py-3 px-8 rounded-full text-lg font-semibold bg-white text-indigo-700 hover:bg-indigo-100 transition-all duration-300"
        >
          Start Now
        </a>
      </section>

    </div>
  );
};

export default HowItWorks;
