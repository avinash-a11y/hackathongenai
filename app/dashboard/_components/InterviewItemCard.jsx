import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

function InterviewItemCard({ interview }) {
  const router = useRouter();
  
  const onStart = () => {
    router.push('/dashboard/interview/' + interview?.mockId);
  };

  const onFeedback = () => {
    router.push('/dashboard/interview/' + interview?.mockId + '/feedback');
  };

  return (
    <div className='bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow'>
      <h2 className='font-semibold text-xl text-gray-800 mb-2'>{interview?.jobPosition}</h2>
      <p className='text-sm text-gray-700 mb-1'>{interview?.jobExperience} Years of Experience</p>
      <p className='text-xs text-gray-500 mb-4'>Created At: {interview?.createdAt}</p>

      <div className='flex justify-between gap-4 mt-4'>
        {/* Feedback Button */}
        <Button
          size='sm'
          variant='outline'
          className='w-full py-2 text-sm font-medium text-indigo-600 border-indigo-600 hover:bg-indigo-100 transition-all duration-200'
          onClick={onFeedback}
        >
          Feedback
        </Button>

        {/* Start Button */}
        <Button
          size='sm'
          className='w-full py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200'
          onClick={onStart}
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default InterviewItemCard;
