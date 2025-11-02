import { useEffect, useState } from "react";
import axios from "axios";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface Career {
  id: number;
  title: string;
  department: string;
  location: string;
  job_type: string;
  description: string;
}

export default function AllCareersPage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [tiltedIcon, setTiltedIcon] = useState<number | null>(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await axios.get<Career[]>("http://127.0.0.1:8050/api/careers/");
        setCareers(res.data || []);
      } catch (err) {
        console.error("Error fetching careers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  const handleCardClick = (id: number) => {
    setTiltedIcon(id);
    setTimeout(() => setTiltedIcon(null), 400);
  };

  return (
    <section className="min-h-screen bg-[#e9fbfa] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-teal-800 mb-12">
          All Available Careers
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading careers...</p>
        ) : (
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {careers.map((career) => (
              <article
                key={career.id}
                onClick={() => handleCardClick(career.id)}
                className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                        {career.title}
                      </h3>
                      <span className="inline-block text-sm font-medium text-teal-700 bg-teal-50 px-3 py-1 rounded-full mb-3">
                        {career.department}
                      </span>
                    </div>

                    {/* Tilt-only icon */}
                    <div
                      className={`ml-3 p-2 rounded-lg shadow-md transform transition-transform duration-300 
                        ${tiltedIcon === career.id ? "rotate-12 scale-110" : ""}
                        bg-gradient-to-br from-cyan-400 to-teal-500 text-white`}
                      style={{
                        minWidth: 44,
                        minHeight: 44,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Briefcase size={20} strokeWidth={1.8} />
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-6 line-clamp-3">
                    {career.description || "No description available."}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{career.location}</span>
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{career.job_type}</span>
                    </span>
                  </div>

                  {/* View Role Button (fixed at bottom, works properly) */}
                  <Link
                    to={`/careers/${career.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="block text-teal-700 font-semibold hover:text-teal-800"
                  >
                    View Role →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
