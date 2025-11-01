// src/components/CareersSection.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock } from "lucide-react";

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
  const [careers, setCareers] = useState<Career[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8050/api/careers/")
      .then((res) => res.json())
      .then((data) => setCareers(data.slice(0, 6))) // show only recent 6
      .catch((err) => console.error("Error fetching careers:", err));
  }, []);

  return (
    <section
      id="careers"
      className="py-20"
      style={{
        background: "linear-gradient(180deg, #f6fdfd 0%, #eef9fb 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-teal-800 mb-4">
          Join Our Team
        </h2>
        <p className="text-slate-600 mb-12 text-lg">
          Build the future of innovation with us — explore our open roles.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {careers.map((career) => (
            <div
              key={career.id}
              className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[250px] max-w-[340px] mx-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {career.title}
                </h3>

                <span className="bg-cyan-50 text-cyan-700 text-sm px-3 py-1 rounded-full mb-3 font-medium">
                  {career.department}
                </span>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 flex-grow">
                  {career.description}
                </p>
              </div>

              {/* Details row */}
              <div className="mt-4 text-slate-500 text-sm flex items-center flex-wrap gap-4">
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
                  className="inline-flex items-center gap-2 text-cyan-700 font-semibold hover:text-teal-700 transition"
                >
                  View Role →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/careers/all"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition font-semibold shadow-lg"
          >
            View All Careers
          </Link>
        </div>
      </div>
    </section>
  );
}
