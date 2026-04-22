import {
  TeamMember,
  HealthHistory,
  Alert,
  Project,
  Activity,
  TeamOverview,
  Suggestion,
  WorkPattern
} from '../types';

export const mockTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: '张伟',
    avatar: 'https://i.pravatar.cc/150?img=1',
    position: '高级前端工程师',
    healthScore: 65,
    mentalHealthScores: {
      overall: 65,
      depressionRisk: 65,
      anxietyRisk: 55,
      burnoutRisk: 70,
      stressLevel: 60,
      wellBeingScore: 45,
      trend: 'declining',
      baselineDeviation: 25
    },
    scores: {
      timePattern: 55,
      communication: 60,
      interaction: 65,
      task: 70,
      socialNetwork: 55,
      emotional: 50,
      spatial: 60
    },
    lastCommit: new Date(Date.now() - 3600000 * 8),
    hasAlert: true,
    alertType: 'orange'
  },
  {
    id: 2,
    name: '李娜',
    avatar: 'https://i.pravatar.cc/150?img=2',
    position: '产品经理',
    healthScore: 88,
    mentalHealthScores: {
      overall: 88,
      depressionRisk: 20,
      anxietyRisk: 25,
      burnoutRisk: 15,
      stressLevel: 30,
      wellBeingScore: 85,
      trend: 'stable',
      baselineDeviation: 10
    },
    scores: {
      timePattern: 90,
      communication: 92,
      interaction: 85,
      task: 88,
      socialNetwork: 90,
      emotional: 85,
      spatial: 90
    },
    lastCommit: new Date(Date.now() - 3600000 * 2),
    hasAlert: false
  },
  {
    id: 3,
    name: '王强',
    avatar: 'https://i.pravatar.cc/150?img=3',
    position: '后端架构师',
    healthScore: 55,
    mentalHealthScores: {
      overall: 55,
      depressionRisk: 80,
      anxietyRisk: 75,
      burnoutRisk: 85,
      stressLevel: 90,
      wellBeingScore: 30,
      trend: 'declining',
      baselineDeviation: 40
    },
    scores: {
      timePattern: 40,
      communication: 35,
      interaction: 45,
      task: 50,
      socialNetwork: 30,
      emotional: 25,
      spatial: 40
    },
    lastCommit: new Date(Date.now() - 3600000 * 36),
    hasAlert: true,
    alertType: 'red'
  },
  {
    id: 4,
    name: '刘芳',
    avatar: 'https://i.pravatar.cc/150?img=4',
    position: 'UI设计师',
    healthScore: 92,
    mentalHealthScores: {
      overall: 92,
      depressionRisk: 15,
      anxietyRisk: 10,
      burnoutRisk: 12,
      stressLevel: 20,
      wellBeingScore: 90,
      trend: 'improving',
      baselineDeviation: 5
    },
    scores: {
      timePattern: 95,
      communication: 90,
      interaction: 92,
      task: 88,
      socialNetwork: 95,
      emotional: 90,
      spatial: 95
    },
    lastCommit: new Date(Date.now() - 3600000 * 1),
    hasAlert: false
  },
  {
    id: 5,
    name: '陈明',
    avatar: 'https://i.pravatar.cc/150?img=5',
    position: '全栈开发工程师',
    healthScore: 78,
    mentalHealthScores: {
      overall: 78,
      depressionRisk: 35,
      anxietyRisk: 30,
      burnoutRisk: 40,
      stressLevel: 45,
      wellBeingScore: 70,
      trend: 'stable',
      baselineDeviation: 15
    },
    scores: {
      timePattern: 80,
      communication: 75,
      interaction: 85,
      task: 78,
      socialNetwork: 70,
      emotional: 65,
      spatial: 75
    },
    lastCommit: new Date(Date.now() - 3600000 * 6),
    hasAlert: false
  },
  {
    id: 6,
    name: '赵静',
    avatar: 'https://i.pravatar.cc/150?img=6',
    position: '测试工程师',
    healthScore: 85,
    mentalHealthScores: {
      overall: 85,
      depressionRisk: 25,
      anxietyRisk: 20,
      burnoutRisk: 22,
      stressLevel: 30,
      wellBeingScore: 80,
      trend: 'stable',
      baselineDeviation: 8
    },
    scores: {
      timePattern: 85,
      communication: 80,
      interaction: 82,
      task: 90,
      socialNetwork: 85,
      emotional: 75,
      spatial: 85
    },
    lastCommit: new Date(Date.now() - 3600000 * 3),
    hasAlert: false
  }
];

export const mockTeamOverview: TeamOverview = {
  overallHealthScore: 77,
  totalMembers: 6,
  atRiskMembers: 2,
  totalAlerts: 4
};

export const mockAlerts: Alert[] = [
  {
    id: 1,
    type: 'work_hours',
    severity: 'red',
    message: '王强连续5天在凌晨2点后提交代码，有明显过劳迹象',
    memberId: 3,
    isResolved: false,
    createdAt: new Date(Date.now() - 3600000 * 2)
  },
  {
    id: 2,
    type: 'task_progress',
    severity: 'orange',
    message: '张伟负责的核心模块开发进度滞后超过20%',
    memberId: 1,
    isResolved: false,
    createdAt: new Date(Date.now() - 3600000 * 5)
  },
  {
    id: 3,
    type: 'meeting_efficiency',
    severity: 'yellow',
    message: '本周团队会议时长占比达到45%，建议精简会议',
    isResolved: false,
    createdAt: new Date(Date.now() - 3600000 * 8)
  },
  {
    id: 4,
    type: 'task_progress',
    severity: 'orange',
    message: '项目Alpha版本里程碑有延期风险',
    projectId: 1,
    isResolved: false,
    createdAt: new Date(Date.now() - 3600000 * 12)
  }
];

export const mockProjects: Project[] = [
  {
    id: 1,
    name: '健康管理平台',
    description: '企业级健康管理系统开发',
    status: 'active',
    progress: 65,
    createdAt: new Date(Date.now() - 86400000 * 60)
  },
  {
    id: 2,
    name: '数据分析系统',
    description: '数据可视化和分析平台',
    status: 'planning',
    progress: 15,
    createdAt: new Date(Date.now() - 86400000 * 30)
  }
];

export const mockActivities: Activity[] = [
  {
    id: 1,
    type: 'commit',
    description: '提交了登录模块的重构代码',
    timestamp: new Date(Date.now() - 3600000 * 1),
    author: '李娜'
  },
  {
    id: 2,
    type: 'task',
    description: '完成了UI设计稿评审',
    timestamp: new Date(Date.now() - 3600000 * 2),
    author: '刘芳'
  },
  {
    id: 3,
    type: 'commit',
    description: '修复了数据缓存的性能问题',
    timestamp: new Date(Date.now() - 3600000 * 3),
    author: '张伟'
  },
  {
    id: 4,
    type: 'meeting',
    description: '主持了项目进度周会',
    timestamp: new Date(Date.now() - 3600000 * 5),
    author: '李娜'
  },
  {
    id: 5,
    type: 'task',
    description: '更新了API文档',
    timestamp: new Date(Date.now() - 3600000 * 6),
    author: '赵静'
  }
];

export const generateHealthHistory = (memberId: number): HealthHistory[] => {
  const history: HealthHistory[] = [];
  const now = new Date();
  
  for (let i = 14; i >= 0; i--) {
    const baseScore = 70 + Math.random() * 20 - (i > 7 ? 5 : 0);
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    history.push({
      id: i,
      memberId,
      overallScore: Math.round(baseScore),
      workHoursScore: Math.round(60 + Math.random() * 30),
      codeQualityScore: Math.round(70 + Math.random() * 25),
      taskProgressScore: Math.round(65 + Math.random() * 30),
      meetingEfficiencyScore: Math.round(70 + Math.random() * 25),
      collaborationScore: Math.round(65 + Math.random() * 30),
      timestamp: date
    });
  }
  
  return history;
};

export const generateSuggestions = (memberId: number): Suggestion[] => {
  if (memberId === 3) {
    return [
      {
        id: 1,
        priority: 'high',
        title: '调整工作时间',
        description: '建议将工作时间调整到正常时段，避免长期熬夜工作'
      },
      {
        id: 2,
        priority: 'medium',
        title: '任务分解',
        description: '将当前大任务拆分为更小的子任务，降低工作压力'
      }
    ];
  }
  
  if (memberId === 1) {
    return [
      {
        id: 1,
        priority: 'medium',
        title: '提高任务交付频率',
        description: '建议采用小步快跑的开发模式，提高任务交付频率'
      }
    ];
  }
  
  return [
    {
      id: 1,
      priority: 'low',
      title: '保持良好状态',
      description: '当前状态良好，请继续保持'
    }
  ];
};

export const generateWorkPattern = (memberId: number): WorkPattern => {
  if (memberId === 3) {
    return {
      timeDistribution: {
        morning: 10,
        afternoon: 25,
        evening: 30,
        night: 35
      },
      avgWorkHours: 10.5,
      meetingPercentage: 15,
      commitFrequency: 2.5
    };
  }
  
  return {
    timeDistribution: {
      morning: 35,
      afternoon: 40,
      evening: 15,
      night: 10
    },
    avgWorkHours: 8,
    meetingPercentage: 25,
    commitFrequency: 3
  };
};
