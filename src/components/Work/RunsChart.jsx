import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const formatSecondsToPace = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  
const RunsChart = ({ runs }) => {

    const runsWithPaceInSeconds = runs.map(run => {
        const [minutes, seconds] = run.pace.split(':').map(Number);
        return { ...run, paceInSeconds: minutes * 60 + seconds };
      });

    const paceBracket = 30

    // Calculate min and max paceInSeconds
    const minPaceInSeconds = Math.min(...runsWithPaceInSeconds.map(run => run.paceInSeconds)) - paceBracket;
    const maxPaceInSeconds = Math.max(...runsWithPaceInSeconds.map(run => run.paceInSeconds)) + paceBracket;

  return (
    <BarChart
      width={800}
      height={300}
      data={runsWithPaceInSeconds}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <XAxis dataKey="date" />
      <YAxis yAxisId="left" dataKey="distance" />
      <YAxis yAxisId="right" dataKey="paceInSeconds" orientation="right" tickFormatter={formatSecondsToPace} domain={[minPaceInSeconds, maxPaceInSeconds]} />
      <Tooltip cursor={{fill: '#222222'}}/>
      <Legend />
      <Bar yAxisId="left" dataKey="distance" fill='#5ef663' />
      <Bar yAxisId="right" dataKey="paceInSeconds" fill='#426B69' />
    </BarChart>
  );
}

export default RunsChart;
