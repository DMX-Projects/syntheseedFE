// src/pages/CareerDetail.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Briefcase, MapPin, Clock, Share2 } from "lucide-react";

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
  const navigate = useNavigate();
  const [career, setCareer] = useState<Career | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchCareer = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8050/api/careers/${id}/`);
        if (!response.ok) throw new Error("Career not found");
        const data = await response.json();
        setCareer(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load career details. Please try again.");
      }
    };

    fetchCareer();
  }, [id]);

  if (error)
    return (
      <div className="text-center text-red-600 py-16 text-lg">{error}</div>
    );

  if (!career)
    return (
      <div className="flex justify-center items-center py-16 text-gray-500 text-lg">
        Loading career details...
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-16">
      {/* Header Section */}
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {career.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-gray-600 text-sm">
          <span className="flex items-center gap-1">
            <Briefcase size={16} /> {career.department}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={16} /> {career.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={16} /> {career.job_type} • {career.work_mode}
          </span>
        </div>
      </div>

      {/* Description Section */}
      <p className="mt-4 text-gray-700 leading-relaxed text-[15px]">
        {career.description}
      </p>

      {/* Share Button */}
      <div className="flex justify-end mt-3">
        <button
          onClick={() => navigator.share?.({
            title: career.title,
            text: career.description,
            url: window.location.href,
          })}
          className="bg-[#0097b2] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#007d94] transition"
        >
          <Share2 size={16} /> Share
        </button>
      </div>

      {/* Job Details Section */}
      <div className="bg-[#f5fbfc] rounded-2xl shadow-sm p-6 mt-6">
        <h2 className="text-xl font-semibold text-[#006d77] mb-3">
          Job Responsibilities & Requirements
        </h2>
        <div
          className="text-gray-700 leading-relaxed text-[15px] space-y-2"
          dangerouslySetInnerHTML={{ __html: career.details }}
        />
      </div>

      {/* Apply Now Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
          className="bg-[#0097b2] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#007d94] transition"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default CareerDetail;
