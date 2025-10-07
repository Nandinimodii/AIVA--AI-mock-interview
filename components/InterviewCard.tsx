"use client";

import React from 'react';
import dayjs from 'dayjs';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { getRandomInterviewCover } from '@/lib/utils';
import DisplayTechIcons from './DisplayTechIcons';

// Define props shape (simplified for working code)
interface InterviewCardProps {
  interviewId: string;
  userId: string;
  role: string;
  type: string;
  techstack: string[];
  createdAt?: string | Date;
}

interface Feedback {
  createdAt?: string | Date;
  totalScore?: number;
  finalAssessment?: string;
}

const InterviewCard: React.FC<InterviewCardProps> = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt
}) => {
  const feedback: Feedback | null = null;
  const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview relative p-4">
        <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
          <p className="badge-text">{normalizedType}</p>
        </div>

        <Image
          src={getRandomInterviewCover()}
          alt="cover"
          width={90}
          height={90}
          className="rounded-full object-cover w-[90px] h-[90px]"
        />

        <h3 className="mt-5 capitalize">{role} Interview</h3>

        <div className="flex flex-row gap-2 mt-2 items-center">
          <Image src="/calendar.svg" alt="calendar" width={22} height={22} />
          <p>{formattedDate}</p>

          <div className="flex flex-row gap-2 items-center ml-auto">
            <Image src="/star.svg" alt="star" width={22} height={22} />
            <p>{(feedback && feedback.totalScore ? feedback.totalScore : '---') + '/100'}</p>
          </div>
        </div>

        <p className="line-clamp-2 mt-5">
          {feedback?.finalAssessment ||
            "You haven't taken the interview yet. Take it now to improve your skills and boost your confidence."}
        </p>

        <div className="flex flex-row justify-between items-center mt-5">
          <DisplayTechIcons techStack={techstack} />

          <Button className="btn-primary">
            <Link
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }
            >
              {feedback ? 'Check Feedback' : 'Take Interview'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
