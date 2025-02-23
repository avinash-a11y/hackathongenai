'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiAIModel';
import { LoaderCircle } from 'lucide-react';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useRouter } from 'next/navigation';

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [jobExperience, setJobExperience] = useState('');
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);

    const InputPrompt =
      'Job Position: ' +
      jobPosition +
      ', Job Description: ' +
      jobDesc +
      ', Years of Experience: ' +
      jobExperience +
      ', Depends on this information please give me ' +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      ' Interview questions with answered in json format, Give Questions and Answered as field in JSON' +
      'like {Question: , Answer: }';

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = result.response
      .text()
      .replace('```json', '')
      .replace('```', '');
    console.log('respai', JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);

    if (MockJsonResp) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobDescription: jobDesc,
          jobPosition: jobPosition,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format('DD-MM-yyyy'),
        })
        .returning({ mockId: MockInterview.mockId });

      console.log('Inserted Id:', resp);
      if (resp) {
        setOpenDialog(false);
        router.push('/dashboard/interview/' + resp[0]?.mockId);
      }
    } else {
      console.log('ERROR!');
    }

    setLoading(false);
  };

  return (
    <div className="p-10">
      <div
        className="p-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:scale-105 hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out transform"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="font-bold text-xl">+ Add New Mock Interview</h2>
      </div>

      <Dialog open={openDialog} onOpenChange={(state) => setOpenDialog(state)}>
        <DialogContent className="max-w-2xl rounded-lg p-8 bg-white shadow-lg transition-transform duration-300 ease-out transform">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-3xl font-semibold text-gray-800">
              Tell us more about your job Interviewing
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600">
              Please provide the details of the role you're hiring for, along with the experience required.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={onSubmit}>
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="jobPosition" className="text-lg font-medium text-gray-700">Job Role/Position</label>
                <Input
                  id="jobPosition"
                  placeholder="Ex. Full Stack Developer"
                  required
                  onChange={(e) => setJobPosition(e.target.value)}
                  className="rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="jobDesc" className="text-lg font-medium text-gray-700">Job Description / Tech Stack</label>
                <Textarea
                  id="jobDesc"
                  placeholder="Ex. Full React, Angular, NodeJs, etc."
                  required
                  onChange={(e) => setJobDesc(e.target.value)}
                  className="rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="jobExperience" className="text-lg font-medium text-gray-700">Years of Experience</label>
                <Input
                  id="jobExperience"
                  placeholder="5"
                  type="number"
                  max="50"
                  required
                  onChange={(e) => setJobExperience(e.target.value)}
                  className="rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpenDialog(false)}
                className="text-gray-600 hover:bg-gray-100 transition-all duration-300 ease-in-out"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <LoaderCircle className="animate-spin text-white" size={20} />
                    Generating from AI
                  </span>
                ) : (
                  'Start Interview'
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
