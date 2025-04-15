'use client'

import { useState } from "react";
import SearchForm from "@/app/components/searchForm";

export default function Home() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const res = await fetch("http://localhost:3000/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    });
    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-right">جستجوی کاربر</h1>
      <SearchForm onSearch={handleSearch} />

      <div className="mt-6 text-right">
        {results.length === 0 ? (
          <p>نتیجه‌ای یافت نشد.</p>
        ) : (
          results.map((item, idx) => (
            <div key={idx} className="border-b py-2">
              <p>شماره تلفن: {item.phone}</p>
              <p>کد ملی: {item.nationalCode}</p>
              {/* سایر اطلاعات دلخواه */}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
