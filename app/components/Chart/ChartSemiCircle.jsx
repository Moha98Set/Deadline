'use client';

import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'پیشرفت',
    value: 70.55,
    fill: '#3B82F6', // رنگ آبی Tailwind
  },
];

export default function ChartSemiCircle() {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
      <div className="text-center mb-4">
        <div className="text-xl font-bold">70.55%</div>
      </div>

      <div className="w-48 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="100%"
            innerRadius="200%"
            outerRadius="200%"
            startAngle={180}
            endAngle={0}
            barSize={16}
            data={data}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              dataKey="value"
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
