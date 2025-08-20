'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import moment from 'moment-jalaali';

moment.loadPersian({ dialect: 'persian-modern' });

const allMonths = [
  "فروردین", "اردیبهشت", "خرداد",
  "تیر", "مرداد", "شهریور",
  "مهر", "آبان", "آذر",
  "دی", "بهمن", "اسفند"
];

const currentMonth = moment().format("jMMMM");
const currentIndex = allMonths.indexOf(currentMonth);

const rotated = [
  ...allMonths.slice(currentIndex + 1),
  ...allMonths.slice(0, currentIndex + 1)
];

// فرضاً رطوبت یا دما رو همین‌طوری دستی پر می‌کنیم
const rawData = {
  "آذر": 60,
  "دی": 70,
  "بهمن": 55,
  "اسفند": 56,
  "فروردین": 78,
  "اردیبهشت": 40,
  "خرداد": 35,
};

const data = rotated.map(month => {
  const number = allMonths.indexOf(month) + 1;
  const label = `${month}${month === currentMonth ? " " : ""}`;
  return {
    name: label,
    value: rawData[month] ?? 0
  };
});

export default function ChartBar() {
  return (
    <div className="w-full h-fit">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            interval={0}
            fontSize={13}
            height={50}
            tick={{ fill: "#334155" }}
        />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
