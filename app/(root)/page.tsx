"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants/index.ts";
import InterviewCard from "@/components/InterviewCard";

export default function Page() {
  return (
    <>
    <section className="card-cta flex items-center justify-between max-sm:flex-col p-8">
      <div className="flex flex-col gap-6 max-w-lg">
        <h2 className="text-3xl font-semibold">
          Get job-ready with AI-enhanced interview practice and feedback
        </h2>
        <p className="text-lg text-gray-600">
          Practice on real interview questions & get instant feedback
        </p>
        <Button asChild className="btn-primary max-sm:w-full">
          <Link href="/interview">Start an Interview</Link>
        </Button>
      </div>

      <Image
        src="/robot.png"
        alt="robo-dude"
        width={400}
        height={400}
        className="max-sm:hidden"
      />
    </section>
    <section className="flex flex-col gap-6 mt-8">
      <h2>Your Interview</h2>
      <div className="interviews-section">
       {dummyInterviews.map((interview) => (
  <InterviewCard key={interview.id} {...interview} />
))}


      </div>
    </section>

    <section className="flex flex-col gap-6 mt-8">
      <h2>Take an interview</h2>
      <div className ="interviews-section">
        {dummyInterviews.map((interview) => (
  <InterviewCard key={interview.id} {...interview} />
))}
        {/* <p>There are no interviews available</p> */}
      </div>
      </section>
    </>
  );
}
