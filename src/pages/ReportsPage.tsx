import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../components/Card';
import { ArrowLeft, FileText, Download, Calendar, BarChart3, TrendingUp, Sparkles } from 'lucide-react';
import { mockReports } from '../lib/mockData';

export function ReportsPage() {
  const navigate = useNavigate();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReportIcon = (type: string) => {
    switch (type) {
      case 'weekly':
        return <Calendar size={24} className="text-blue-600" />;
      case 'project':
        return <BarChart3 size={24} className="text-purple-600" />;
      case 'mbti':
        return <Sparkles size={24} className="text-orange-600" />;
      default:
        return <FileText size={24} className="text-gray-600" />;
    }
  };

  const getReportColor = (type: string) => {
    switch (type) {
      case 'weekly':
        return 'bg-blue-100';
      case 'project':
        return 'bg-purple-100';
      case 'mbti':
        return 'bg-orange-100';
      default:
        return 'bg-gray-100';
    }
  };

  const getReportTypeLabel = (type: string) => {
    switch (type) {
      case 'weekly':
        return '周报';
      case 'project':
        return '项目报告';
      case 'mbti':
        return 'MBTI分析';
      default:
        return '报告';
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
          <h1 className="text-2xl font-bold text-gray-900">报告中心</h1>
          <p className="text-gray-500 mt-1">健康度报告生成与管理</p>
        </div>
      </div>

      <Card>
        <CardHeader title="生成新报告" subtitle="快速创建新的团队健康报告" />
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Calendar size={24} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">生成周报</span>
              <span className="text-xs text-gray-500 mt-1">每周团队健康报告</span>
            </button>
            
            <button className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <BarChart3 size={24} className="text-purple-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">项目报告</span>
              <span className="text-xs text-gray-500 mt-1">项目进度分析报告</span>
            </button>
            
            <button className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <Sparkles size={24} className="text-orange-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">MBTI分析</span>
              <span className="text-xs text-gray-500 mt-1">团队人格分析报告</span>
            </button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="历史报告" subtitle="已生成的报告列表" />
        <CardContent>
          <div className="space-y-4">
            {mockReports.map((report) => (
              <div key={report.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getReportColor(report.type)}`}>
                      {getReportIcon(report.type)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-800">{report.title}</h4>
                        <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                          {getReportTypeLabel(report.type)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{formatDate(report.date)}</p>
                      <p className="text-sm text-gray-700 mt-2">{report.summary}</p>
                      
                      <div className="flex items-center mt-3 space-x-4">
                        <div className="flex items-center space-x-2">
                          <TrendingUp size={14} className="text-gray-500" />
                          <span className="text-sm" style={{
                            color: report.overallScore >= 80 ? '#4db6ac' : 
                                   report.overallScore >= 60 ? '#ff9800' : '#f44336'
                          }}>
                            健康度: {report.overallScore}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Download size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
