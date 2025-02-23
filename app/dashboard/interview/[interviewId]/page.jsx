'use client';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import 'animate.css';

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  /**
   * Fetch interview details by MockId/InterviewId
   */
  const GetInterviewDetails = async () => {
    setLoading(true);
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    setInterviewData(result[0]);
    setLoading(false);
  };

  return (
    <div className='container mx-auto px-6 py-12'>
      {/* Title Section with Fade-in Animation */}
      <h2 className='text-3xl font-bold text-gray-900 mb-10 animate__animated animate__fadeIn'>
        Let’s Get Started
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* Job Information Section */}
        <div className='flex flex-col gap-8'>
          {/* Job Details Card with subtle hover animation */}
          <div className='p-6 bg-white rounded-lg shadow-md border border-gray-200 transition-transform duration-300 transform hover:scale-105'>
            <p className='text-xl  text-gray-800'>
            <strong className='text-gray-700'>Job: </strong>
              {interviewData?.jobPosition}
            </p>
            <p className='text-xl text-gray-600'>
              <strong className='text-gray-700'>Description: </strong> 
              {interviewData?.jobDescription}
            </p>
            <p className='text-xl text-gray-600'>
              <strong className='text-gray-700'>Experience: </strong> 
              {interviewData?.jobExperience} Years
            </p>
          </div>

          {/* Information Section with smooth slide-up animation */}
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

        {/* Webcam Section */}
        <div className='flex justify-center items-center'>
          {webCamEnabled ? (
            <div className='w-full flex justify-center'>
              <Webcam
                className='rounded-lg shadow-xl transition-transform duration-500 transform scale-100'
                onUserMedia={() => setWebCamEnabled(true)}
                onUserMediaError={() => setWebCamEnabled(false)}
                mirrored={true}
                style={{
                  height: '350px',
                  width: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
              />
            </div>
          ) : (
            <div className='flex flex-col justify-center items-center'>
              <WebcamIcon className='h-72 w-72 text-gray-400 mb-6 transition-all duration-300 transform hover:scale-110' />
              <Button
                variant='outline'
                className='w-full max-w-xs py-3 text-lg text-gray-700 hover:bg-gray-200 border-gray-300 hover:border-gray-400 transition-all duration-300 transform hover:scale-105'
                onClick={() => setWebCamEnabled(true)}
              >
                Enable Camera
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Start Interview Button with smooth hover effect */}
      <div className='flex justify-end mt-8'>
        <Link href={'/dashboard/interview/' + params.interviewId + '/start'}>
          <Button className='bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105'>
            Start Interview
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;
