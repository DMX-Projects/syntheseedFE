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
  // show only recent 6
  const careers = (careersData as Career[]).slice(0, 6);

  return (
    <section id="careers" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-4">
          Join Our Team
        </h2>
        <p className="text-secondary mb-12 text-lg">
          Build the future of innovation with us — explore our open roles.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {isLoading ? (
            <p className="text-secondary">Loading careers...</p>
          ) : (
            careers.map((career: Career) => (
            <div
              key={career.id}
              className="relative bg-bg-secondary rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[250px] max-w-[340px] mx-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                boxShadow: "0 6px 18px rgba(6,182,212,0.1)",
              }}
            >
              {/* Glowing tilted icon */}
              <div
                className="absolute top-5 right-5 bg-gradient-to-tr from-cyan-500 to-teal-500 p-3 rounded-xl text-white shadow-lg transform rotate-6 hover:rotate-12 transition-all duration-300"
                style={{
                  boxShadow: "0 0 20px rgba(6,182,212,0.4)",
                }}
              >
                <Briefcase size={20} />
              </div>

              <div className="flex flex-col items-start text-left">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {career.title}
                </h3>

                <span className="bg-cyan-50 text-cyan-700 text-sm px-3 py-1 rounded-full mb-3 font-medium">
                  {career.department}
                </span>

                <p className="text-secondary text-sm leading-relaxed line-clamp-3 flex-grow">
                  {career.description}
                </p>
              </div>

              {/* Details row */}
              <div className="mt-4 text-secondary text-sm flex items-center flex-wrap gap-4">
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-cyan-500" />
                  {career.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-cyan-500" />
                  {career.job_type}
                </span>
              </div>

              {/* View role link (bottom-left) */}
              <div className="mt-4 text-left">
                <Link
                  to={`/careers/${career.id}`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-teal-700 transition"
                >
                  View Role →
                </Link>
              </div>
            </div>
            ))
          )}
        </div>

        <div className="mt-12">
          <Link
            to="/careers/all"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-primary"
          >
            View All Careers
          </Link>
        </div>
      </div>
    </section>
  );
}
