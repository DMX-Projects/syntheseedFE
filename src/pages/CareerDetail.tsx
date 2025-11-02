// src/pages/CareerDetail.tsx
import { useParams } from "react-router-dom";
import { useGetCareerByIdQuery } from "../services/careersApi";
import { Briefcase, MapPin, Clock, Share2 } from "lucide-react";
import Header from "../components/Header";
import { formatPlainTextToHtml, looksLikeHtml } from "../utils/formatText";


interface Career {
  id: number;
  title: string;
  department: string;
  location: string;
  work_mode: string;
  job_type: string;
  description: string;
  details: string;
  posted_on: string;
}

const CareerDetail = () => {
  const { id } = useParams();
  // use RTK Query hook for career details (cached, consistent with other APIs)
  const { data: careerData, isLoading, isError } = useGetCareerByIdQuery(id ?? '', {
    skip: !id,
  });

  // keep same variable name for existing JSX
  const career = careerData as Career | undefined;

  if (isError)
    return (
      <div className="text-center text-red-600 py-16 text-lg">Unable to load career details. Please try again.</div>
    );

  if (isLoading || !career)
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-16">
        {/* Skeleton header */}
        <div className="border-b pb-4">
          <div className="h-8 bg-gray-200/60 dark:bg-white/5 rounded w-1/2 animate-pulse mb-3"></div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-4 bg-gray-200/60 dark:bg-white/5 rounded w-36 animate-pulse"></div>
            <div className="h-4 bg-gray-200/60 dark:bg-white/5 rounded w-28 animate-pulse"></div>
            <div className="h-4 bg-gray-200/60 dark:bg-white/5 rounded w-32 animate-pulse"></div>
          </div>
        </div>

        {/* Description skeleton */}
        <div className="mt-4 space-y-3">
          <div className="h-4 bg-gray-200/60 dark:bg-white/5 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200/60 dark:bg-white/5 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200/60 dark:bg-white/5 rounded w-5/6 animate-pulse"></div>
        </div>

        {/* Share button skeleton */}
        <div className="flex justify-end mt-4">
          <div className="h-9 w-24 bg-gray-200/60 dark:bg-white/5 rounded-md animate-pulse"></div>
        </div>

        {/* Job details skeleton */}
        <div className="bg-bg-secondary rounded-2xl shadow-sm p-6 mt-6">
          <div className="h-6 bg-gray-200/60 dark:bg-white/5 rounded w-1/3 mb-4 animate-pulse"></div>
          <div className="space-y-3">
            <div className="h-3 bg-gray-200/60 dark:bg-white/5 rounded w-full animate-pulse"></div>
            <div className="h-3 bg-gray-200/60 dark:bg-white/5 rounded w-full animate-pulse"></div>
            <div className="h-3 bg-gray-200/60 dark:bg-white/5 rounded w-5/6 animate-pulse"></div>
            <div className="h-3 bg-gray-200/60 dark:bg-white/5 rounded w-3/4 animate-pulse"></div>
          </div>
        </div>
      </div>
    );

  return (
    
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-16">
      <Header />
      {/* Header Section */}
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-primary mb-2">{career.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-secondary text-sm">
          <span className="flex items-center gap-1">
            <Briefcase size={16} /> <span className="ml-1">{career.department}</span>
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={16} /> <span className="ml-1">{career.location}</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock size={16} /> <span className="ml-1">{career.job_type} • {career.work_mode}</span>
          </span>
        </div>
      </div>

      {/* Description Section */}
      <p className="mt-4 text-secondary leading-relaxed text-[15px]">{career.description}</p>

      {/* Share Button */}
      <div className="flex justify-end mt-3">
        <button
          onClick={() => navigator.share?.({ title: career.title, text: career.description, url: window.location.href })}
          className="btn-primary inline-flex items-center gap-2 px-3 py-2"
        >
          <Share2 size={16} /> Share
        </button>
      </div>

      {/* Job Details Section */}
      <div className="bg-bg-secondary rounded-2xl shadow-sm p-6 mt-6">
        <h2 className="text-xl font-semibold text-primary mb-3">Job Responsibilities & Requirements</h2>
        <div className="text-secondary leading-relaxed text-[15px] space-y-2">
          {/* If API already returned HTML, use it; otherwise format plain text into paragraphs/headings */}
          {career.details ? (
            looksLikeHtml(career.details) ? (
              <div dangerouslySetInnerHTML={{ __html: career.details }} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: formatPlainTextToHtml(career.details) }} />
            )
          ) : (
            <p className="text-secondary">No additional details provided.</p>
          )}
        </div>
      </div>

     
    </div>
  );
};

export default CareerDetail;
