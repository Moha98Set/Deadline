'use client';

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryPhone = searchParams.get("phone") || "";
    setPhone(queryPhone);
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, nationalId, phone })
    });

    const data = await res.json();
    if (res.ok) {
      router.push("/dashboard");
    } else {
      setError(data.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">ثبت‌نام</h2>

        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        <label className="block mb-2 text-sm">نام و نام خانوادگی</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-4"
          required
        />

        <label className="block mb-2 text-sm">کد ملی</label>
        <input
          type="text"
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-4"
          required
        />

        <label className="block mb-2 text-sm">شماره موبایل</label>
        <input
          type="text"
          value={phone}
          className="w-full border border-gray-300 p-2 rounded mb-4 bg-gray-100 cursor-not-allowed"
          readOnly
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          ثبت‌نام
        </button>
      </form>
    </div>
  );
}
