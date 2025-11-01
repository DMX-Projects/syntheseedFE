// src/components/CareerList.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCareers } from "../services/careersApi";

const CareerList = () => {
  const [careers, setCareers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCareers()
      .then((data) => setCareers(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading careers...</p>;

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Open Positions</h1>
      <div className="grid gap-6">
        {careers.map((career) => (
          <Link
            key={career.id}
            to={`/careers/${career.id}`}
            className="block border rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{career.title}</h2>
            <p className="text-gray-600 mt-2">
              {career.short_description || "No description available"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CareerList;
