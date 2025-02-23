import { Lightbulb, Volume2 } from 'lucide-react';
import React, { useState } from 'react';

function QuestionsSection({ mockInterviewQuestions, activeQuestionIndex }) {
  const [isSpeaking, setIsSpeaking] = useState(false); // Track speaking state

  // Text-to-Speech Functionality
  const textToSpeech = (text) => {
    console.log('Text to speak:', text);
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
  
      speech.onstart = () => {
        console.log('Speech started');
        setIsSpeaking(true); 
      };
  
      speech.onend = () => {
        console.log('Speech ended');
        setIsSpeaking(false);
      };
  
      speech.onerror = (event) => {
        console.error('Speech error:', event.error);
        setIsSpeaking(false);
      };
  
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, your browser does not support text to speech');
    }
  };
  

  return (
    mockInterviewQuestions && (
      <div className='container mx-auto px-6 py-12'>
        {/* Questions Navigation */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {mockInterviewQuestions.map((question, index) => (
            <div
              key={index}
              className={`p-3 rounded-full text-xs md:text-sm text-center cursor-pointer transition-all duration-300
                ${activeQuestionIndex === index ? 'bg-indigo-600 text-white scale-110' : 'bg-gray-200 hover:bg-indigo-200'} 
                transform hover:scale-105`}
            >
              Question #{index + 1}
            </div>
          ))}
        </div>

        {/* Active Question */}
        <div className='my-8'>
          <h2 className='text-xl font-semibold text-gray-900'>
            {mockInterviewQuestions[activeQuestionIndex]?.Question}
          </h2>
        </div>

        {/* Volume Button for Text-to-Speech */}
        <div className='my-4'>
          <Volume2
            className={`cursor-pointer hover:text-indigo-600 transition-all duration-300 hover:scale-110 ${
              isSpeaking ? 'text-indigo-400' : 'text-indigo-600'
            }`}
            size={30}
            onClick={() =>
              textToSpeech(mockInterviewQuestions[activeQuestionIndex]?.Question)
            }
          />
        </div>

        {/* Note Section */}
        <div className='bg-indigo-50 p-6 rounded-lg shadow-md mt-12'>
          <h2 className='flex gap-2 items-center text-indigo-600 text-lg'>
            <Lightbulb size={20} />
            <strong>Note:</strong>
          </h2>
          <p className='text-sm text-gray-700 mt-2'>
            {process.env.NEXT_PUBLIC_INFORMATION}
          </p>
        </div>
      </div>
    )
  );
}

export default QuestionsSection;
