'use client';

import GaugeComponent from 'react-gauge-component';

export default function Gauge({ deg }) {

  const isValid = deg !== null && deg !== undefined && !isNaN(parseFloat(deg));

  if (!isValid) {
    return (
      <div className="text-red-500 text-lg font-bold">
        سنسور خاموش
      </div>
    );
  }

  return (    
    <GaugeComponent
      type="semicircle"
      minValue={0}
      maxValue={100}
      value={parseFloat(deg)}
      arc={{
        colorArray: ['#FF2121','#FFA500','#ffff00','#00FF15','#3b82f6' ],
        subArcs: [
          { limit: 30 },
          { limit: 50 },
          { limit: 70 },
          { limit: 90 },
          { limit: 100 }
        ],
        padding: 0.02,
        width: 0.25,
      }}
      pointer={{
        type: 'blob',
        animationDelay: 1,
        color: '#111827',
      }}
      labels={{
        valueLabel: {
          formatTextValue: (value) => `${value.toFixed(1)}`,
          style: {
            fontSize: 32,
            fontWeight: '400',
            fill: '#111827',
          },
        },
        tickLabels: {
          type: 'outer',
          ticks: [
            { value: 0, style: { fontSize: 12, fill: '#9ca3af' } },
            { value: 100, style: { fontSize: 12, fill: '#9ca3af' } }
          ],
        }
      }}
    />
  );
}
