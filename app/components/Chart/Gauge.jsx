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
      maxValue={55}
      value={parseFloat(deg)}
      arc={{
        colorArray: ['#3b82f6', '#00FF15', '#ffff00', '#FF2121'],
        subArcs: [
          { limit: 15 },
          { limit: 36 },
          { limit: 45 },
          { limit: 55 }
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
            { value: -10, style: { fontSize: 12, fill: '#9ca3af' } },
            { value: 60, style: { fontSize: 12, fill: '#9ca3af' } }
          ],
        }
      }}
    />
  );
}
