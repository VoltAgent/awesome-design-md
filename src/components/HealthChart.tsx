import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { HealthHistory, WorkPattern } from '../types';

interface HealthTrendChartProps {
  data: HealthHistory[];
}

export function HealthTrendChart({ data }: HealthTrendChartProps) {
  const chartData = data.map(item => ({
    date: new Date(item.timestamp).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' }),
    score: item.overallScore
  }));

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
            stroke="#6b7280" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
          />
          <YAxis 
            stroke="#6b7280" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
            domain={[0, 100]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }} 
          />
          <Line 
            type="monotone" 
            dataKey="score" 
            stroke="#4db6ac" 
            strokeWidth={3} 
            dot={{ fill: '#4db6ac', strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

interface WorkPatternChartProps {
  data: WorkPattern;
}

export function WorkPatternChart({ data }: WorkPatternChartProps) {
  const colors = ['#4db6ac', '#2196f3', '#ff9800', '#f44336'];
  const chartData = [
    { name: '上午', value: data.timeDistribution.morning, color: colors[0] },
    { name: '下午', value: data.timeDistribution.afternoon, color: colors[1] },
    { name: '晚上', value: data.timeDistribution.evening, color: colors[2] },
    { name: '凌晨', value: data.timeDistribution.night, color: colors[3] }
  ];

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis 
            dataKey="name" 
            stroke="#6b7280" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
          />
          <YAxis 
            stroke="#6b7280" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
            domain={[0, 50]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }} 
          />
          <Bar 
            dataKey="value" 
            radius={[8, 8, 0, 0]} 
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

interface RadarScoreChartProps {
  scores: {
    workHours: number;
    codeQuality: number;
    taskProgress: number;
    meetingEfficiency: number;
    collaboration: number;
  };
}

export function RadarScoreChart({ scores }: RadarScoreChartProps) {
  const chartData = [
    { subject: '工作时长', A: scores.workHours, fullMark: 100 },
    { subject: '代码质量', A: scores.codeQuality, fullMark: 100 },
    { subject: '任务进度', A: scores.taskProgress, fullMark: 100 },
    { subject: '会议效率', A: scores.meetingEfficiency, fullMark: 100 },
    { subject: '协作程度', A: scores.collaboration, fullMark: 100 }
  ];

  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={chartData}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis 
            dataKey="subject" 
            stroke="#6b7280" 
            fontSize={12} 
          />
          <PolarRadiusAxis 
            stroke="#6b7280" 
            fontSize={10} 
            angle={90} 
            domain={[0, 100]} 
            tick={false} 
          />
          <Radar 
            name="健康度" 
            dataKey="A" 
            stroke="#4db6ac" 
            fill="#4db6ac" 
            fillOpacity={0.3} 
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }} 
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
