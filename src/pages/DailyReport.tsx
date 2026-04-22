import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../components/Card';
import { ArrowLeft, Send, Calendar, MessageSquare, Smile, Frown, Meh, Sparkles } from 'lucide-react';
import { mockDailyReports } from '../lib/mockData';

export function DailyReport() {
  const navigate = useNavigate();
  const [reportContent, setReportContent] = useState('');
  const [mood, setMood] = useState<'good' | 'neutral' | 'bad'>('neutral');
  const [submitted, setSubmitted] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getMoodIcon = (moodType: string) => {
    switch (moodType) {
      case 'good':
        return <Smile size={20} className="text-green-500" />;
      case 'neutral':
        return <Meh size={20} className="text-yellow-500" />;
      case 'bad':
        return <Frown size={20} className="text-red-500" />;
      default:
        return <Meh size={20} className="text-gray-500" />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reportContent.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setReportContent('');
      }, 2000);
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
          <h1 className="text-2xl font-bold text-gray-900">日报系统</h1>
          <p className="text-gray-500 mt-1">工作日报提交与管理</p>
        </div>
      </div>

      <Card>
        <CardHeader title="提交今日日报" subtitle="记录今天的工作内容" />
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">工作内容</label>
              <textarea
                value={reportContent}
                onChange={(e) => setReportContent(e.target.value)}
                placeholder="请描述今天的工作内容..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">今日心情</label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setMood('good')}
                  className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-colors ${
                    mood === 'good' 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <Smile size={24} className={mood === 'good' ? 'text-green-500' : 'text-gray-400'} />
                  <span className="text-sm font-medium">心情好</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMood('neutral')}
                  className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-colors ${
                    mood === 'neutral' 
                      ? 'border-yellow-500 bg-yellow-50' 
                      : 'border-gray-200 hover:border-yellow-300'
                  }`}
                >
                  <Meh size={24} className={mood === 'neutral' ? 'text-yellow-500' : 'text-gray-400'} />
                  <span className="text-sm font-medium">一般</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMood('bad')}
                  className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-colors ${
                    mood === 'bad' 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                >
                  <Frown size={24} className={mood === 'bad' ? 'text-red-500' : 'text-gray-400'} />
                  <span className="text-sm font-medium">心情不好</span>
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={!reportContent.trim() || submitted}
              className="w-full flex items-center justify-center space-x-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {submitted ? (
                <>
                  <Sparkles size={20} />
                  <span>提交成功!</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>提交日报</span>
                </>
              )}
            </button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="历史日报" subtitle="团队日报记录" />
        <CardContent>
          <div className="space-y-4">
            {mockDailyReports.map((report) => (
              <div key={report.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <MessageSquare size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{report.memberName}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar size={14} />
                        <span>{formatDate(report.date)}</span>
                      </div>
                    </div>
                  </div>
                  {getMoodIcon(report.mood)}
                </div>
                <p className="mt-3 text-gray-700">{report.content}</p>
                <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-yellow-800">
                    <Sparkles size={14} />
                    <span className="font-medium">AI摘要:</span>
                  </div>
                  <p className="text-sm text-yellow-700 mt-1">{report.aiSummary}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
