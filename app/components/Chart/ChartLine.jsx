'use client';

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import moment from "moment-jalaali";

moment.loadPersian({ dialect: "persian-modern" });

export default function TempChart({ serial }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!serial) return;

    fetch(`/api/chart?serial_number=${serial}`)
      .then((res) => res.json())
      .then((originalData) => {
        const today = moment().format("jYYYY-jMM-jDD");
        const yesterday = moment().subtract(1, "days").format("jYYYY-jMM-jDD");

        const updated = originalData.map((item) => {
          let label = item.day;
          if (item.day === today) label = "امروز";
          else if (item.day === yesterday) label = "دیروز";
          else label = moment(item.day, "jYYYY-jMM-jDD").format("jMM-jDD");

          return { ...item, label };
        });

        setData(updated);
      });
  }, [serial]);

  const customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg shadow bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-600 text-sm">
          <div className="font-bold text-slate-700 dark:text-slate-300 mb-2">{label}</div>
          {payload.map((entry, index) => (
            <div key={index} className="text-slate-600 dark:text-slate-400">
              <span className="font-medium" style={{ color: entry.stroke }}>
                {entry.name}
              </span>
              : {entry.value}°
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[500px] bg-white dark:bg-gray-900 rounded-xl shadow p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="label" stroke="#64748b" fontSize={12} />
          <YAxis stroke="#64748b" fontSize={12} />
          <Tooltip content={customTooltip} />
          <Legend
            wrapperStyle={{
              paddingTop: "10px",
              color: "#475569",
              fontSize: "14px",
            }}
          />
          <Line type="monotone" dataKey="max" stroke="#f97316" strokeWidth={2.5} dot={{ r: 4 }} name="حداکثر" />
          <Line type="monotone" dataKey="avg" stroke="#14b8a6" strokeWidth={2.5} dot={{ r: 4 }} name="میانگین" />
          <Line type="monotone" dataKey="min" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4 }} name="حداقل" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
