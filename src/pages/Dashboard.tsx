import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../components/Card';
import { ProgressCircle } from '../components/ProgressCircle';
import { 
  mockTeamOverview, 
  mockTeamMembers, 
  mockAlerts, 
  mockActivities 
} from '../lib/mockData';
import { Activity, Alert, TeamMember } from '../types';
import { Users, AlertTriangle, Clock, Code, UsersRound } from 'lucide-react';

export function Dashboard() {
  const navigate = useNavigate();

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'red': return 'bg-red-100 text-red-800';
      case 'orange': return 'bg-orange-100 text-orange-800';
      case 'yellow': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'red': return '严重';
      case 'orange': return '警告';
      case 'yellow': return '关注';
      default: return '';
    }
  };

  const formatTime = (date: Date) => {
    const hours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
    if (hours < 1) return '刚刚';
    if (hours < 24) return `${Math.floor(hours)}小时前`;
    const days = Math.floor(hours / 24);
    return `${days}天前`;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">团队健康仪表盘</h1>
        <p className="text-gray-500 mt-1">实时监控团队成员状态和项目风险</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <div className="mb-4">
              <ProgressCircle score={mockTeamOverview.overallHealthScore} size={180} />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">团队整体健康度</h2>
            <div className="grid grid-cols-3 gap-4 mt-6 w-full">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{mockTeamOverview.totalMembers}</div>
                <div className="text-sm text-gray-500">团队成员</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">{mockTeamOverview.atRiskMembers}</div>
                <div className="text-sm text-gray-500">风险成员</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">{mockTeamOverview.totalAlerts}</div>
                <div className="text-sm text-gray-500">预警事项</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader title="风险预警" subtitle="系统检测到的潜在风险" />
          <CardContent>
            <div className="space-y-3">
              {mockAlerts.map((alert: Alert) => (
              <div 
                key={alert.id} 
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className={`p-2 rounded-full ${getAlertColor(alert.severity)}`}>
                  <AlertTriangle size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getAlertColor(alert.severity)}`}>
                      {getSeverityLabel(alert.severity)}
                    </span>
                  </div>
                  <p className="text-gray-700 mt-1">{alert.message}</p>
                  <p className="text-sm text-gray-400 mt-1">{formatTime(alert.createdAt)}</p>
                </div>
              </div>
            ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader title="团队成员" subtitle="各成员健康度概览" />
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockTeamMembers.map((member: TeamMember) => (
              <div 
                key={member.id} 
                className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-all cursor-pointer"
                onClick={() => navigate(`/member/${member.id}`)}
              >
                <div className="flex items-center space-x-4">
                  <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-800">{member.name}</h3>
                    {member.hasAlert && (
                      <div className={`w-2 h-2 rounded-full ${
                        member.alertType === 'red' ? 'bg-red-500' : 
                        member.alertType === 'orange' ? 'bg-orange-500' : 'bg-yellow-500'}`} 
                      />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{member.position}</p>
                  </div>
                  <ProgressCircle score={member.healthScore} size={50} strokeWidth={6} />
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-400">
                    最后活动: {formatTime(member.lastCommit)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="实时活动" subtitle="最近团队活动" />
          <CardContent>
            <div className="space-y-4">
              {mockActivities.map((activity: Activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="p-2 bg-gray-100 rounded-full">
                    {activity.type === 'commit' && <Code size={16} />}
                    {activity.type === 'task' && <Clock size={16} />}
                    {activity.type === 'meeting' && <UsersRound size={16} />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">{activity.author}</span>
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-400">{formatTime(activity.timestamp)}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="快捷操作" subtitle="常用功能入口" />
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => navigate('/reports')}
                className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                  <Users size={24} className="text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">生成报告</span>
              </button>
              <button 
                onClick={() => navigate('/settings')}
                className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-2">
                  <Clock size={24} className="text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">系统设置</span>
              </button>
              <button 
                onClick={() => navigate('/project/1')}
                className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-2">
                  <AlertTriangle size={24} className="text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">项目分析</span>
              </button>
              <button 
                onClick={() => navigate('/team')}
                className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-2">
                  <Users size={24} className="text-orange-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">团队协作</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
