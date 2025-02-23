"use client";
// pages/index.js
import { motion } from "framer-motion";
import ChatBotWidget from "./chatbot";
import Link from "next/link";
// import Header from "./dashboard/_components/Header";

const Hero = () => (
  <section
    className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 overflow-hidden mt-20 md:mt-0"
    id="home"
  >
    {/* Content Wrapper */}
    <div className="container mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side: Text */}
      <div className="text-center md:text-left md:w-1/2 z-10 relative mt-60 md:mt-0">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-white"
        >
          Get Ready for Your Dream Job with AI-Powered Mock Interviews
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-lg sm:text-2xl mt-6 max-w-3xl mx-auto text-white"
        >
          Prepare for your interviews, create a standout resume, and elevate
          your career with cutting-edge AI technology.
        </motion.p>
        <Link href="/dashboard">
          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg font-semibold rounded-full shadow-lg transition-transform duration-200 transform"
          >
            Start Your Journey
          </motion.button>
        </Link>
      </div>

      {/* Right Side: Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="md:w-1/2 mt-12 md:mt-0"
      >
        <img
          src="https://interviewdesk.ai/wp-content/uploads/2023/11/Mock-Interview-from-MAANG-interviewers.png" // Replace this with your actual image path
          alt="Side Image"
          className="w-full h-auto rounded-lg object-cover mt-5"
        />
      </motion.div>
    </div>
  </section>
);
export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white text-black py-6 shadow-md">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      {/* Logo Section */}
      <Link href={"/"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-indigo-600" // Updated to darker color for better contrast
        >
          <a href="#">PrepAI</a>
        </motion.div>
      </Link>
      {/* Navigation Links */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:flex space-x-8 text-lg font-medium"
      >
        <a
          href="/#home"
          className="hover:text-indigo-500 transition duration-300"
        >
          Home
        </a>
        <a
          href="/#features"
          className="hover:text-indigo-500 transition duration-300"
        >
          Features
        </a>
        <a
          href="/#testimonials"
          className="hover:text-indigo-500 transition duration-300"
        >
          Testimonials
        </a>

        <a
          href="/whychooseus"
          className="hover:text-indigo-500 transition duration-300"
        >
          whychooseus
        </a>
      </motion.nav>

      {/* Call-to-action Button */}
      <Link href={"/dashboard"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a className="bg-indigo-500 px-6 py-2 rounded-full text-white font-semibold hover:bg-indigo-600 transition duration-300">
            Get Started
          </a>
        </motion.div>
      </Link>
    </div>
  </header>
);

const Features = () => (
  <section className="py-20 bg-transparent" id="features">
    <div className="text-center mb-16 px-4 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight"
      >
        Features that Will Transform Your Career
      </motion.h2>
    </div>

    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-4">
      {/* Feature Card 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-6 mb-6 mx-auto flex items-center justify-center rounded-full w-32 h-32 overflow-hidden" // Increased size here
        >
          <img
            src="https://res.cloudinary.com/dsguaqukb/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1740264595/WhatsApp_Image_2025-02-23_at_04.16.57_0dda1cd3_efgyis.jpg"
            alt="AI Interview"
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-2xl font-semibold text-gray-800"
        >
          AI-Powered Mock Interviews
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-4 text-gray-600"
        >
          Practice with our AI-powered mock interviews that simulate real-world
          scenarios and provide personalized feedback.
        </motion.p>
      </motion.div>

      {/* Feature Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="p-6 mb-6 mx-auto flex items-center justify-center rounded-full w-32 h-32 overflow-hidden" // Increased size here
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1870/1870080.png"
            alt="Smart Resume"
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-2xl font-semibold text-gray-800"
        >
          Smart Resume Builder
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-gray-600"
        >
          Create the perfect resume in minutes with AI suggestions and automatic
          formatting.
        </motion.p>
      </motion.div>

      {/* Feature Card 3 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-6 mb-6 mx-auto flex items-center justify-center rounded-full w-32 h-32 overflow-hidden" // Increased size here
        >
          <img
            src="https://cdn-icons-png.freepik.com/512/8437/8437070.png"
            alt="Real-time Feedback"
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-2xl font-semibold text-gray-800"
        >
          Real-time Feedback
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-4 text-gray-600"
        >
          Get instant, actionable feedback after each interview round to improve
          with every session.
        </motion.p>
      </motion.div>
    </div>
  </section>
);
const Testimonials = () => (
  <section
    className="py-20 bg-gradient-to-r from-blue-100 to-indigo-200"
    id="testimonials"
  >
    <div className="text-center mb-16 px-4 sm:px-8">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-extrabold text-gray-800"
      >
        Hear from Our Successful Users
      </motion.h2>
    </div>

    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Testimonial 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="bg-white p-10 rounded-2xl shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-500"
      >
        <div className="flex justify-center mb-6">
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="Emily W."
            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-300 shadow-lg"
          />
        </div>
        <p className="text-lg font-semibold text-gray-700 mb-4 italic">
          "The mock interview helped me land my dream job! I felt fully
          prepared, and the feedback was incredibly helpful."
        </p>
        <div className="text-center">
          <span className="block font-semibold text-gray-800">Emily W.</span>
          <span className="text-gray-500">Software Developer</span>
        </div>
      </motion.div>

      {/* Testimonial 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-white p-10 rounded-2xl shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-500"
      >
        <div className="flex justify-center mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="James T."
            className="w-24 h-24 rounded-full object-cover border-4 border-pink-300 shadow-lg"
          />
        </div>
        <p className="text-lg font-semibold text-gray-700 mb-4 italic">
          "The resume builder was a game-changer! It gave me a perfect resume,
          optimized for every job application."
        </p>
        <div className="text-center">
          <span className="block font-semibold text-gray-800">James T.</span>
          <span className="text-gray-500">Marketing Specialist</span>
        </div>
      </motion.div>

      {/* Testimonial 3 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="bg-white p-10 rounded-2xl shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-500"
      >
        <div className="flex justify-center mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="Daniel H."
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-300 shadow-lg"
          />
        </div>
        <p className="text-lg font-semibold text-gray-700 mb-4 italic">
          "The platform's AI-driven insights helped me ace my interview. I can't
          recommend it enough!"
        </p>
        <div className="text-center">
          <span className="block font-semibold text-gray-800">Daniel H.</span>
          <span className="text-gray-500">Product Manager</span>
        </div>
      </motion.div>
    </div>
  </section>
);
const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 text-center">
      {/* Logo and brief description */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-indigo-400">PrepAI</h2>
        <p className="mt-2 text-gray-400 text-sm max-w-lg mx-auto">
          Empowering your career journey with AI-driven tools for success.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-8">
        <a
          href="#"
          className="text-gray-400 hover:text-indigo-400 transition-all duration-300"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-indigo-400 transition-all duration-300"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-indigo-400 transition-all duration-300"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-indigo-400 transition-all duration-300"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Simple Footer Links */}
      <div className="text-sm text-gray-400 mb-4">
        <a href="#" className="hover:text-indigo-400 mx-4">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-indigo-400 mx-4">
          Terms & Conditions
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} PrepAI. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
      <ChatBotWidget />
    </div>
  );
}
