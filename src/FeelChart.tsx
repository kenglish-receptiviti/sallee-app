import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend,
} from 'recharts';
import { summary } from './sallee';

interface Props {
  sallee: Map<string, number>;
}

interface DataPoint {
  name: string;
  score: number;
  color: string;
}

const FeelChart: React.FC<Props> = (props: Props) => {
  if (!props.sallee) {
    return <></>;
  }

  const data: DataPoint[] = [
    {
      name: 'Goodfeel',
      score: parseFloat((props.sallee.get(summary.goodfeel) || 0).toFixed(3)),
      color: '#004369'
    },
    {
      name: 'Badfeel',
      score: parseFloat((props.sallee.get(summary.badfeel) || 0).toFixed(3)),
      color: '#db1f48'
    },
    {
      name: 'Ambifeel',
      score: parseFloat((props.sallee.get(summary.ambifeel) || 0).toFixed(3)),
      color: '#e5ddc8'
    }
  ];
  return (
    <PieChart width={400} height={280}>
      <Pie
        data={data}
        cx={200}
        cy={120}
        outerRadius={100}
        dataKey="score"
      >
        {
          data.map((entry, index) => <Cell key={`cell-${entry.name}`} fill={entry.color} />)
        }
      </Pie>
      <Legend/>
      <Tooltip/>
    </PieChart>
  );
}

export default FeelChart;
