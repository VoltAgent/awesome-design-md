import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../components/Card';
import { ArrowLeft, Users, TrendingUp, MessageSquare, Calendar, BarChart3 } from 'lucide-react';
import { mockTeamMembers, generateInteractionData, generateTeamStats } from '../lib/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function TeamPage() {
  const navigate = useNavigate();
  const stats = generateTeamStats();
  const interactions = generateInteractionData();
  
  const chartData = mockTeamMembers.map(member => ({
    name: member.name,
    score: member.healthScore,
    communication: member.scores.communication,
    collaboration: member.scores.socialNetwork
  }));
  
  const COLORS = ['#4db6ac', '#26a69a', '#00897b', '#00695c', '#004d40', '#00332e'];

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
          <h1 className="text-2xl font-bold text-gray-900">团队协作</h1>
          <p className="text-gray-500 mt-1">团队成员协作分析</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="text-center py-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users size={24} className="text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800">{stats.avgHealthScore}</div>
            <div className="text-sm text-gray-500">团队平均健康度</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="text-center py-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar size={24} className="text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800">{stats.avgMeetingHours}h</div>
            <div className="text-sm text-gray-500">人均会议时长</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="text-center py-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <BarChart3 size={24} className="text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800">{stats.avgCommitCount}</div>
            <div className="text-sm text-gray-500">周提交次数</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="text-center py-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp size={24} className="text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800">{stats.taskCompletionRate}%</div>
            <div className="text-sm text-gray-500">任务完成率</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="成员健康度" subtitle="各成员健康度对比" />
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                  <XAxis type="number" stroke="#6b7280" fontSize={12} />
                  <YAxis dataKey="name" type="category" stroke="#6b7280" fontSize={12} width={60} />
                  <Tooltip />
                  <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader title="协作网络图" subtitle="团队成员互动关系" />
          <CardContent>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {mockTeamMembers.map((member, index) => (
                  <div key={member.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                    <div className="flex items-center space-x-3">
                      <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">{member.name}</h4>
                        <p className="text-xs text-gray-500">{member.position}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">协作度</span>
                        <span className="font-medium" style={{
                          color: member.scores.socialNetwork >= 80 ? '#4db6ac' : 
                                 member.scores.socialNetwork >= 60 ? '#ff9800' : '#f44336'
                        }}>
                          {member.scores.socialNetwork}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div 
                          className="bg-blue-500 h-1.5 rounded-full transition-all"
                          style={{ width: `${member.scores.socialNetwork}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader title="沟通效率分析" subtitle="团队成员互动数据" />
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">成员</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">沟通得分</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">协作得分</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">状态</th>
                </tr>
              </thead>
              <tbody>
                {mockTeamMembers.map((member) => (
                  <tr key={member.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full" />
                        <span className="font-medium text-gray-800">{member.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-gray-700">{member.scores.communication}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-gray-700">{member.scores.socialNetwork}</span>
                    </td>
                    <td className="py-3 px-4">
                      {member.hasAlert ? (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          member.alertType === 'red' ? 'bg-red-100 text-red-800' :
                          member.alertType === 'orange' ? 'bg-orange-100 text-orange-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {member.alertType === 'red' ? '需关注' :
                           member.alertType === 'orange' ? '警告' : '留意'}
                        </span>
                      ) : (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          正常
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
