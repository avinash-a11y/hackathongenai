'use client';
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  /**
   * Used to get interview details by MockId/InterviewId
   */
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    const jsonMockResponse = JSON.parse(result[0].jsonMockResp);
    setMockInterviewQuestions(jsonMockResponse);
    setInterviewData(result[0]);
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {/* Questions */}
        <QuestionsSection
          mockInterviewQuestions={mockInterviewQuestions}
          activeQuestionIndex={activeQuestionIndex}
        />

        {/* Video / Audio Recording */}
        <RecordAnswerSection
          mockInterviewQuestions={mockInterviewQuestions}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
      </div>
      <div className="flex justify-end gap-6 mb-10">
        {activeQuestionIndex > 0 && (
          <Button
            className="bg-indigo-600 hover:bg-white hover:text-indigo-600 border-indigo-600 border-2"
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          >
            Previous Question
          </Button>
        )}
        {activeQuestionIndex !== mockInterviewQuestions?.length - 1 && (
          <Button
            className="bg-indigo-600 hover:bg-white hover:text-indigo-600 border-indigo-600 border-2"
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next Question
          </Button>
        )}
        {activeQuestionIndex === mockInterviewQuestions?.length - 1 && (
          <Link href={'/dashboard/interview/' + interviewData?.mockId + '/feedback'}>
            <Button className="bg-indigo-600 hover:bg-white hover:text-indigo-600 border-indigo-600 border-2">
              End Interview
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default StartInterview;
