import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../components/Card';
import { mockProjects } from '../lib/mockData';
import { ArrowLeft, TrendingUp, Target, Users, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const taskData = [
  { name: '需求设计', done: 8, total: 10 },
  { name: '功能开发', done: 15, total: 25 },
  { name: '测试', done: 5, total: 15 },
  { name: '文档', done: 3, total: 5 },
];

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id || '1');
  const project = mockProjects.find(p => p.id === projectId);
  
  if (!project) return <div>项目未找到</div>;

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return '#4db6ac';
    if (progress >= 60) return '#ff9800';
    return '#f44336';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
          <p className="text-gray-500 mt-1">{project.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="text-center py-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp size={24} className="text-green-600" />
            </div>
            <div className="text-3xl font-bold" style={{ color: getProgressColor(project.progress) }}>
              {project.progress}%
            </div>
            <div className="text-sm text-gray-500">项目进度</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="text-center py-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target size={24} className="text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800">4</div>
            <div className="text-sm text-gray-500">里程碑数</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="text-center py-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users size={24} className="text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800">6</div>
            <div className="text-sm text-gray-500">团队成员</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="text-center py-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <BarChart3 size={24} className="text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800">2</div>
            <div className="text-sm text-gray-500">风险预警</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="任务完成情况" subtitle="各阶段任务统计" />
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={taskData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                  <XAxis type="number" stroke="#6b7280" fontSize={12} />
                  <YAxis dataKey="name" type="category" stroke="#6b7280" fontSize={12} width={80} />
                  <Tooltip />
                  <Bar dataKey="done" stackId="a" fill="#4db6ac" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="total" stackId="a" fill="#e5e7eb" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="项目里程碑" subtitle="关键节点进度" />
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-2 border-green-500 pl-4 pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">项目启动</span>
                  <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">已完成</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">2024年1月15日</p>
              </div>
              
              <div className="border-l-2 border-green-500 pl-4 pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">需求评审</span>
                  <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">已完成</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">2024年2月1日</p>
              </div>
              
              <div className="border-l-2 border-orange-500 pl-4 pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Alpha版本</span>
                  <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded-full">进行中</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">预计 2024年3月15日</p>
              </div>
              
              <div className="border-l-2 border-gray-300 pl-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-400">正式发布</span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">待开始</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">预计 2024年4月30日</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader title="项目风险" subtitle="潜在风险识别与评估" />
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
              <h4 className="font-semibold text-orange-800 mb-1">进度延迟风险</h4>
              <p className="text-sm text-orange-700">核心功能开发进度滞后约20%，需要调配资源</p>
            </div>
            
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <h4 className="font-semibold text-yellow-800 mb-1">人员过劳风险</h4>
              <p className="text-sm text-yellow-700">核心开发人员连续熬夜工作，需要关注健康状态</p>
            </div>
            
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <h4 className="font-semibold text-blue-800 mb-1">质量风险</h4>
              <p className="text-sm text-blue-700">代码提交频率降低，需要关注代码质量</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
