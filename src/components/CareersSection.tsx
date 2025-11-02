import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { useGetCareersQuery } from "../services/careersApi";

interface Career {
  id: number;
  title: string;
  department: string;
  location: string;
  work_mode: string;
  job_type: string;
  description: string;
}

export default function CareersSection() {
  const { data: careersData = [], isLoading } = useGetCareersQuery();
  const careers = (careersData as Career[]).slice(0, 6);

  return (
    <section id="careers" className="py-20 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Join Our Team
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Build the future of innovation with us — explore our open roles.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {isLoading ? (
            // Skeleton placeholders (match AllCareersPage loaders)
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass-effect rounded-2xl p-6 min-h-[260px]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="h-6 w-40 bg-gray-200/60 dark:bg-white/5 rounded animate-pulse mb-3"></div>
                    <div className="h-4 w-28 bg-gray-200/60 dark:bg-white/5 rounded animate-pulse"></div>
                  </div>
                  <div className="h-11 w-11 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg shadow animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200/60 dark:bg-white/5 rounded w-full animate-pulse"></div>
                  <div className="h-3 bg-gray-200/60 dark:bg-white/5 rounded w-5/6 animate-pulse"></div>
                </div>
              </div>
            ))
          ) : (
            careers.map((career: Career) => (
              <div
                key={career.id}
                className="relative bg-[#111827] border border-gray-800/60 rounded-2xl p-8 flex flex-col justify-between 
                  min-h-[260px] max-w-[380px] mx-auto shadow-lg transition-all duration-300 hover:-translate-y-2 
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:border-cyan-500/40"
              >
                {/* Glowing cyan square icon */}
                <div
                  className="absolute top-5 right-5 bg-gradient-to-tr from-cyan-400 to-teal-500 
                    p-4 rounded-xl text-white shadow-lg shadow-cyan-500/20"
                >
                  <Briefcase size={22} />
                </div>

                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center justify-between w-full mb-3">
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {career.title}
                    </h3>
                  </div>

                  <span className="inline-block bg-cyan-900/40 text-cyan-300 text-sm px-3 py-1 rounded-full mb-4 font-medium">
                    {career.department}
                  </span>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4 flex-grow">
                    {career.description}
                  </p>
                </div>

                <div className="mt-5 text-gray-400 text-sm flex items-center flex-wrap gap-4">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-cyan-400" />
                    {career.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-cyan-400" />
                    {career.job_type}
                  </span>
                </div>

                <div className="mt-5 text-left">
                  <Link
                    to={`/careers/${career.id}`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-teal-400 transition"
                  >
                    View Role →
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/careers/all"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/30 transition"
          >
            View All Careers
          </Link>
        </div>
      </div>
    </section>
  );
}
