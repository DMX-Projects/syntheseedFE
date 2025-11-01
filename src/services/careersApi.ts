// src/services/careersApi.ts
const BASE_URL = "http://127.0.0.1:8050/api/careers/";

// 🧩 Get all careers
export const getAllCareers = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch careers");
  }
  return response.json();
};

// 🧩 Get a single career by ID
export const getCareerById = async (id: string) => {
  const response = await fetch(`${BASE_URL}${id}/`);
  if (!response.ok) {
    throw new Error("Failed to fetch career details");
  }
  return response.json();
};

// 🧩 Apply for a specific career (multipart form data)
export const applyForCareer = async (id: string, formData: FormData) => {
  const token = localStorage.getItem("authToken"); // optional if login system exists

  const response = await fetch(`${BASE_URL}${id}/apply/`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    body: formData, // send file and text data
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.error || "Failed to submit application");
  }

  return data;
};
