import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../components/Card';
import { ArrowLeft, Bell, Database, Palette, Sparkles, Save } from 'lucide-react';
import { mockSettings } from '../lib/mockData';

export function SettingsPage() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState(mockSettings);
  const [saved, setSaved] = useState(false);

  const updateSetting = (key: string, value: any) => {
    setSettings(settings.map(setting => 
      setting.key === key ? { ...setting, value } : setting
    ));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'notifications':
        return <Bell size={20} className="text-blue-600" />;
      case 'ai':
        return <Sparkles size={20} className="text-purple-600" />;
      case 'display':
        return <Palette size={20} className="text-orange-600" />;
      case 'datasources':
        return <Database size={20} className="text-green-600" />;
      default:
        return <Bell size={20} className="text-gray-600" />;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'notifications':
        return '通知设置';
      case 'ai':
        return 'AI功能';
      case 'display':
        return '显示设置';
      case 'datasources':
        return '数据源';
      default:
        return '其他设置';
    }
  };

  const groupedSettings = settings.reduce((acc, setting) => {
    if (!acc[setting.category]) {
      acc[setting.category] = [];
    }
    acc[setting.category].push(setting);
    return acc;
  }, {} as Record<string, typeof mockSettings>);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/')}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">设置</h1>
            <p className="text-gray-500 mt-1">系统配置与管理</p>
          </div>
        </div>
        
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {saved ? (
            <>
              <Save size={20} />
              <span>已保存!</span>
            </>
          ) : (
            <>
              <Save size={20} />
              <span>保存设置</span>
            </>
          )}
        </button>
      </div>

      {Object.entries(groupedSettings).map(([category, categorySettings]) => (
        <Card key={category}>
          <CardHeader 
            title={getCategoryName(category)} 
            subtitle={`${categorySettings.length} 项设置`} 
          />
          <CardContent>
            <div className="space-y-4">
              {categorySettings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      {getCategoryIcon(category)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{setting.name}</h4>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>
                  </div>
                  
                  {typeof setting.value === 'boolean' ? (
                    <button
                      onClick={() => updateSetting(setting.key, !setting.value)}
                      className={`w-12 h-6 rounded-full transition-colors relative ${
                        setting.value ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`absolute w-4 h-4 bg-white rounded-full transition-transform ${
                          setting.value ? 'translate-x-7' : 'translate-x-1'
                        } top-1`}
                      ></div>
                    </button>
                  ) : (
                    <select
                      value={setting.value}
                      onChange={(e) => updateSetting(setting.key, e.target.value)}
                      className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="light">浅色主题</option>
                      <option value="dark">深色主题</option>
                      <option value="system">跟随系统</option>
                    </select>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
