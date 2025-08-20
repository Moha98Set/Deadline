'use client';

import { ChevronsUp,ChevronsDown } from 'lucide-react';

export default function StatCard({ title, value, percent, icon, color }) {
  const isPositive = percent >= 0;
  return (
    <div className="relative h-52 bg-white p-4 rounded-lg shadow flex items-center gap-4 border-2">
      <div className='w-12 h-12 absolute top-5 right-8 rounded-lg flex items-center justify-center bg-slate-200'>
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500 absolute top-20 right-5">{title}</div>
        <div className="text-3xl font-extrabold absolute bottom-7">{value}</div>
        <div className={`absolute left-5 bottom-10 font-bold text-sm px-2 py-1 rounded-full flex items-center gap-1 ${isPositive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
        <span>{Math.abs(percent)}%</span>
          {isPositive ? <ChevronsUp size={20} /> : <ChevronsDown  size={20} />}          
        </div>
      </div>
    </div>
  );
}
