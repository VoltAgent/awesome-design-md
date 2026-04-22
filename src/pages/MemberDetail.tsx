import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../components/Card';
import { ProgressCircle } from '../components/ProgressCircle';
import { 
  HealthTrendChart, 
  WorkPatternChart, 
  RadarScoreChart 
} from '../components/HealthChart';
import { 
  mockTeamMembers, 
  generateHealthHistory, 
  generateWorkPattern, 
  generateSuggestions 
} from '../lib/mockData';
import { Suggestion } from '../types';
import { ArrowLeft, AlertTriangle, Activity, Heart, Brain, AlertCircle, Smile } from 'lucide-react';

export function MemberDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const memberId = parseInt(id || '1');
  const member = mockTeamMembers.find(m => m.id === memberId);
  
  if (!member) return <div>成员未找到</div>;
  
  const healthHistory = generateHealthHistory(memberId);
  const workPattern = generateWorkPattern(memberId);
  const suggestions = generateSuggestions(memberId);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-800 bg-red-100';
      case 'medium': return 'text-orange-800 bg-orange-100';
      case 'low': return 'text-blue-800 bg-blue-100';
      default: return 'text-gray-800 bg-gray-100';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return '高优先级';
      case 'medium': return '中优先级';
      case 'low': return '低优先级';
      default: return '';
    }
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
          <h1 className="text-2xl font-bold text-gray-900">{member.name}</h1>
          <p className="text-gray-500 mt-1">{member.position}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h2>
            <p className="text-gray-500 mb-6">{member.position}</p>
            <ProgressCircle score={member.healthScore} size={160} />
            <p className="text-gray-500 mt-4">整体健康度</p>
            
            <div className="grid grid-cols-2 gap-4 mt-8 w-full">
              <div className="text-center">
                <div className="text-lg font-semibold" style={{ color: member.scores.timePattern >= 80 ? '#4db6ac' : member.scores.timePattern >= 60 ? '#ff9800' : '#f44336' }}>
                  {member.scores.timePattern}
                </div>
                <div className="text-xs text-gray-500">时间模式</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold" style={{ color: member.scores.communication >= 80 ? '#4db6ac' : member.scores.communication >= 60 ? '#ff9800' : '#f44336' }}>
                  {member.scores.communication}
                </div>
                <div className="text-xs text-gray-500">沟通模式</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold" style={{ color: member.scores.interaction >= 80 ? '#4db6ac' : member.scores.interaction >= 60 ? '#ff9800' : '#f44336' }}>
                  {member.scores.interaction}
                </div>
                <div className="text-xs text-gray-500">交互行为</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold" style={{ color: member.scores.task >= 80 ? '#4db6ac' : member.scores.task >= 60 ? '#ff9800' : '#f44336' }}>
                  {member.scores.task}
                </div>
                <div className="text-xs text-gray-500">任务效率</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 w-full">
              <div className="text-center">
                <div className="text-lg font-semibold" style={{ color: member.scores.socialNetwork >= 80 ? '#4db6ac' : member.scores.socialNetwork >= 60 ? '#ff9800' : '#f44336' }}>
                  {member.scores.socialNetwork}
                </div>
                <div className="text-xs text-gray-500">社交网络</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold" style={{ color: member.scores.emotional >= 80 ? '#4db6ac' : member.scores.emotional >= 60 ? '#ff9800' : '#f44336' }}>
                  {member.scores.emotional}
                </div>
                <div className="text-xs text-gray-500">情感状态</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold" style={{ color: member.scores.spatial >= 80 ? '#4db6ac' : member.scores.spatial >= 60 ? '#ff9800' : '#f44336' }}>
                  {member.scores.spatial}
                </div>
                <div className="text-xs text-gray-500">空间行为</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader title="健康度历史趋势" subtitle="过去15天健康度变化" />
          <CardContent>
            <HealthTrendChart data={healthHistory} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader title="心理健康状态" subtitle="基于行为数据的心理健康评估" />
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart size={20} className="text-blue-600" />
              </div>
              <div className="text-2xl font-bold" style={{ color: member.mentalHealthScores.depressionRisk >= 70 ? '#f44336' : member.mentalHealthScores.depressionRisk >= 50 ? '#ff9800' : '#4db6ac' }}>
                {member.mentalHealthScores.depressionRisk}
              </div>
              <div className="text-xs text-gray-500">抑郁风险</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Brain size={20} className="text-purple-600" />
              </div>
              <div className="text-2xl font-bold" style={{ color: member.mentalHealthScores.anxietyRisk >= 70 ? '#f44336' : member.mentalHealthScores.anxietyRisk >= 50 ? '#ff9800' : '#4db6ac' }}>
                {member.mentalHealthScores.anxietyRisk}
              </div>
              <div className="text-xs text-gray-500">焦虑风险</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <AlertCircle size={20} className="text-orange-600" />
              </div>
              <div className="text-2xl font-bold" style={{ color: member.mentalHealthScores.burnoutRisk >= 70 ? '#f44336' : member.mentalHealthScores.burnoutRisk >= 50 ? '#ff9800' : '#4db6ac' }}>
                {member.mentalHealthScores.burnoutRisk}
              </div>
              <div className="text-xs text-gray-500">倦怠风险</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Activity size={20} className="text-red-600" />
              </div>
              <div className="text-2xl font-bold" style={{ color: member.mentalHealthScores.stressLevel >= 70 ? '#f44336' : member.mentalHealthScores.stressLevel >= 50 ? '#ff9800' : '#4db6ac' }}>
                {member.mentalHealthScores.stressLevel}
              </div>
              <div className="text-xs text-gray-500">压力水平</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Smile size={20} className="text-green-600" />
              </div>
              <div className="text-2xl font-bold" style={{ color: member.mentalHealthScores.wellBeingScore >= 70 ? '#4db6ac' : member.mentalHealthScores.wellBeingScore >= 50 ? '#ff9800' : '#f44336' }}>
                {member.mentalHealthScores.wellBeingScore}
              </div>
              <div className="text-xs text-gray-500">幸福感</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="多维度评分" subtitle="各维度能力分析" />
          <CardContent>
            <RadarScoreChart scores={member.scores} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="工作模式分析" subtitle="工作时间分布" />
          <CardContent>
            <WorkPatternChart data={workPattern} />
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{workPattern.avgWorkHours}h</div>
                <div className="text-sm text-gray-500">日均工作时长</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{workPattern.meetingPercentage}%</div>
                <div className="text-sm text-gray-500">会议占比</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{workPattern.commitFrequency}/天</div>
                <div className="text-sm text-gray-500">提交频率</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader title="智能建议" subtitle="基于数据的个性化建议" />
        <CardContent>
          <div className="space-y-4">
            {suggestions.map((suggestion: Suggestion) => (
              <div 
                key={suggestion.id} 
                className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full ${getPriorityColor(suggestion.priority)}`}>
                    <AlertTriangle size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-800">{suggestion.title}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getPriorityColor(suggestion.priority)}`}>
                        {getPriorityLabel(suggestion.priority)}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{suggestion.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
