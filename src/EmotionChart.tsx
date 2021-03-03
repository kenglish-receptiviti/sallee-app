import React from 'react';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { emotions } from './sallee';

interface Props {
  sallee: Map<string, number>;
}

interface DataPoint {
  emotion: string;
  score: number;
}

const EmotionChart: React.FC<Props> = (props: Props)  => {
  if (!props.sallee) {
    return <></>;
  }

  const data: DataPoint[] = Object.keys(emotions).map((emotion) => {
    return {
      emotion: emotion,
      score: parseFloat((props.sallee.get(emotion) || 0).toFixed(3))
    };
  });

  return (
    <ComposedChart
      layout="vertical"
      width={500}
      height={600}
      data={data}
      margin={{
        top: 20, right: 20, bottom: 20, left: 60,
      }}
    >
      <XAxis
        type="number"
        height={50}
      />
      <YAxis
        type="category"
        dataKey="emotion"
        scale="point"
      />
      <Tooltip />
      <CartesianGrid
        strokeDasharray="3 3"
      />
      <Bar
        dataKey="score"
        barSize={8}
        fill="#01949a"
        background={{ fill: '#eee' }}
      />
    </ComposedChart>
  );
}

export default EmotionChart;

