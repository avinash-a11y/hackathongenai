  "use client";
  import { UserButton } from '@clerk/nextjs';
  import React from 'react';
  import AddNewInterview from './_components/AddNewInterview';
  import InterviewList from './_components/InterviewList';
  import ChatBotWidget from '../chatbot';
  function Dashboard() {
    return (
      <div className="min-h-screen p-8">
        <div className="space-y-10">
          {/* Header Section */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-extrabold text-gray-800 tracking-wide leading-tight text-center">
              Dashboard
            </h2>
            <h3 className="text-xl text-gray-600 mt-4 text-center">
              Create and Start your AI Interview 🧑‍💻
            </h3>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-12">
            {/* Add New Interview Section */}
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="w-full max-w-md">
                <AddNewInterview />
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center">
              <img
                src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg"
                alt="Job Interview Illustration"
                className="w-full max-w-sm rounded-xl  transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </div>

          {/* Previous Interview List */}
          <div className="space-y-8">
            <InterviewList />
          </div>
        </div>
        <ChatBotWidget />
      </div>
    );
  }

  export default Dashboard;
