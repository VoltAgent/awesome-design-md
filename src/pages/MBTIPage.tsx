import React from 'react';
import { Card, CardHeader, CardContent } from '../components/Card';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { generateMockTeamMBTIAnalysis } from '../lib/mbtiAnalyzer';
import { Users, Brain, BarChart2, Lightbulb, AlertCircle, CheckCircle2 } from 'lucide-react';

export function MBTIPage() {
  // 生成模拟团队MBTI分析数据
  const teamMBTIData = generateMockTeamMBTIAnalysis();
  
  // 准备饼图数据
  const pieData = Object.entries(teamMBTIData.distribution).map(([name, value]) => ({
    name,
    value
  }));
  
  // 准备雷达图数据（团队倾向）
  const radarData = [
    { subject: '外向', A: 65, fullMark: 100 },
    { subject: '直觉', A: 70, fullMark: 100 },
    { subject: '情感', A: 60, fullMark: 100 },
    { subject: '感知', A: 50, fullMark: 100 }
  ];
  
  // 颜色配置
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#ff8042'];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">MBTI团队分析</h1>
        <p className="text-gray-500 mt-1">基于行为数据的团队人格分析</p>
      </div>

      <Card>
        <CardHeader title="团队MBTI分布" subtitle="团队成员人格类型分布" />
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">团队概况</h3>
              <p className="text-gray-700 mb-6">{teamMBTIData.teamProfile}</p>
              <h4 className="font-medium text-gray-800 mb-2">团队平衡度</h4>
              <div className="flex items-center mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ 
                      width: teamMBTIData.teamBalance.includes('高度平衡') ? '90%' : 
                             teamMBTIData.teamBalance.includes('相对平衡') ? '70%' : '40%' 
                    }}
                  ></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">
                  {teamMBTIData.teamBalance}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CheckCircle2 className="text-blue-600 mr-2" size={18} />
                    <h4 className="font-medium">优势</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {teamMBTIData.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <AlertCircle className="text-amber-600 mr-2" size={18} />
                    <h4 className="font-medium">改进空间</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {teamMBTIData.areasForImprovement.map((area, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="团队人格倾向" subtitle="MBTI四个维度的团队倾向" />
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" stroke="#6b7280" fontSize={12} />
                <PolarRadiusAxis stroke="#6b7280" fontSize={10} angle={90} domain={[0, 100]} tick={false} />
                <Radar name="团队倾向" dataKey="A" stroke="#4db6ac" fill="#4db6ac" fillOpacity={0.3} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="协作建议" subtitle="基于MBTI分布的团队协作优化建议" />
        <CardContent>
          <div className="space-y-4">
            {teamMBTIData.collaborationSuggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">建议 {index + 1}</h4>
                  <p className="text-gray-700">{suggestion}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="MBTI类型说明" subtitle="了解不同人格类型的特点" />
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h4 className="font-semibold mb-2">ISTJ</h4>
              <p className="text-sm text-gray-600">安静、严肃，通过专注和有条理的方式处理任务。重视传统和规则，做事可靠，有责任感。</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h4 className="font-semibold mb-2">ENFP</h4>
              <p className="text-sm text-gray-600">外向、创意，充满热情和好奇心。善于理解他人，有感染力和创造力。</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h4 className="font-semibold mb-2">INTJ</h4>
              <p className="text-sm text-gray-600">独立、分析性强，善于战略思维和问题解决。重视逻辑和效率，追求卓越。</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h4 className="font-semibold mb-2">ESFJ</h4>
              <p className="text-sm text-gray-600">外向、友好，善于社交和照顾他人。重视和谐和传统，有责任感。</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
