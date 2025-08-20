'use client';

import { Bell, Settings } from 'lucide-react';

export default function Navbar({serial}) {
  return (
    <div className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      <div className="text-lg font-semibold">{serial === '4505DA165623' ? 'آقای روزبه (داراب)' : 'آقای صفر زاده (خفر)'}</div>
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button>
          <Settings size={20} />
        </button>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </div>
  );
}
