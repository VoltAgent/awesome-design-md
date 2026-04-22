import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, BarChart3, FileText, Settings, Calendar, Brain } from 'lucide-react';

export function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/', label: '仪表盘', icon: Home },
    { path: '/project/1', label: '项目分析', icon: BarChart3 },
    { path: '/team', label: '团队协作', icon: Users },
    { path: '/mbti', label: 'MBTI分析', icon: Brain },
    { path: '/reports', label: '报告中心', icon: FileText },
    { path: '/daily', label: '日报系统', icon: Calendar },
    { path: '/settings', label: '设置', icon: Settings },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold" style={{ color: '#1a237e' }}>
                团队健康
              </span>
            </div>
            <div className="ml-10 hidden md:block">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  );
}
