'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import Sidebar from '@/app/components/Sidebar/SideBar';
import Navbar from '@/app/components/Navbar/Navbar2';
import ChartLine from '@/app/components/Chart/ChartLine';
import ChartBar from '@/app/components/Chart/ChartBar';
import ChartSemiCircle from '@/app//components/Chart/ChartSemiCircle';
import Sensor from '@/app/components/Sensor';
import Sensor2 from '@/app/components/Sensor2';
import Operator from '@/app/components/Operator';


export default function DashboardPage() {

  const { serial } = useParams();
  const [temp, setTemp] = useState();
  const [hum, setHum] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!serial) return;

    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`/api/data/golkhune/Latest?serial_number=${serial}`);
        const result = await res.json();

        console.log(result)

        if (res.ok && result.data) {
            const tRaw = result.data.TEMP;
            const hRaw = result.data.HUM1;

            const t = typeof tRaw === 'string' ? tRaw.trim() : String(tRaw ?? '').trim();
            const h = typeof hRaw === 'string' ? hRaw.trim() : String(hRaw ?? '').trim();

            setTemp(!isNaN(parseFloat(t)) ? t : '---');
            setHum(!isNaN(parseFloat(h)) ? h : '---');
            console.log('Temp - Hum:', t , h)
            } else {
            setError('No data found');
            }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('خطا در دریافت اطلاعات');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [serial]);

  console.log('Temp - Hum: ',temp, '-', hum)

  return (
    <div className="flex mt-20 bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar serial={serial} />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-6">
          <div className="col-span-2 space-y-6">
            <div className="p-6">

                {loading && <p className="text-center text-gray-500">در حال دریافت اطلاعات...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                {!loading && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-2">
                        <Sensor name="دما" temp={temp} />
                    </div>
                    <div className="p-2">
                        <Sensor2 name="رطوبت" temp={hum} />
                    </div>
                    </div>
                )}

                </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h2 className="font-semibold text-lg mb-4">رطوبت محیط </h2>
              <ChartBar />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center justify-center">
            <h2 className="font-semibold text-lg mb-2">میزان هوشمند سازی گلخانه های استان</h2>
            <ChartSemiCircle />
            <div className="text-center mt-4 text-sm text-gray-500">
             
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-6 w-full">
              <div className="text-center flex-1">
                <p className="font-semibold text-gray-800">$20K</p>
                <p className="text-red-500">هدف</p>
              </div>
              <div className="text-center flex-1">
                <p className="font-semibold text-gray-800">$20K</p>
                <p className="text-green-500">بازگشت</p>
              </div>
              <div className="text-center flex-1">
                <p className="font-semibold text-gray-800">$20K</p>
                <p className="text-green-500">امروز</p>
              </div>
            </div>
          </div>
        </div>
        <div className='grid'>          
          <div className=''>
            <ChartLine serial={serial} />
          </div>
        </div>        
        <div className='flex p-3 mx-auto'>
          <div className='p-2'>
            <Operator name='فن' situ='on' />
          </div>
          <div className='p-2'>
            <Operator name='روشنایی' situ='on' />
          </div>
          <div className='p-2'>
            <Operator name='مه پاش' situ='on' />
          </div>
          <div className='p-2'>
            <Operator name='کولر' situ='off'/>
          </div>
          <div className='p-2'>
            <Operator name='هیتر' situ='on'/>
          </div>    
          <div className='p-2'>
            <Operator name='شیر' situ='on'/>
          </div>     
        </div>
      </div>
    </div>
  );
}