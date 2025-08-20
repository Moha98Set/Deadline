'use client'

import dynamic from 'next/dynamic'
import DashBoard from './components/Dash'; '@/app/components/Dash'

const MapClient = dynamic(() => import('@/app/components/MapClient'), { ssr: false });

export default function Home() {
  return (
    <>
      <div className="flex overflow-hidden">
        <div className="z-0 fixed top-0 bottom-0 left-0 right-0">
          <MapClient />
        </div>        
          <DashBoard />        
      </div>
    </>
  );
}
