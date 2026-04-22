export interface TeamMember {
  id: number;
  name: string;
  avatar: string;
  position: string;
  healthScore: number;
  mentalHealthScores: {
    overall: number;
    depressionRisk: number;
    anxietyRisk: number;
    burnoutRisk: number;
    stressLevel: number;
    wellBeingScore: number;
    trend: 'improving' | 'declining' | 'stable';
    baselineDeviation: number;
  };
  scores: {
    timePattern: number;
    communication: number;
    interaction: number;
    task: number;
    socialNetwork: number;
    emotional: number;
    spatial: number;
  };
  lastCommit: Date;
  hasAlert: boolean;
  alertType?: 'red' | 'orange' | 'yellow';
}

export interface HealthHistory {
  id: number;
  memberId: number;
  overallScore: number;
  workHoursScore: number;
  codeQualityScore: number;
  taskProgressScore: number;
  meetingEfficiencyScore: number;
  collaborationScore: number;
  timestamp: Date;
}

export interface Alert {
  id: number;
  type: string;
  severity: 'red' | 'orange' | 'yellow';
  message: string;
  memberId?: number;
  projectId?: number;
  isResolved: boolean;
  createdAt: Date;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  progress: number;
  createdAt: Date;
}

export interface Milestone {
  id: number;
  projectId: number;
  name: string;
  description: string;
  dueDate: Date;
  actualDate?: Date;
  status: string;
}

export interface Activity {
  id: number;
  type: string;
  description: string;
  timestamp: Date;
  author: string;
}

export interface TeamOverview {
  overallHealthScore: number;
  totalMembers: number;
  atRiskMembers: number;
  totalAlerts: number;
}

export interface Suggestion {
  id: number;
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
}

export interface WorkPattern {
  timeDistribution: {
    morning: number;
    afternoon: number;
    evening: number;
    night: number;
  };
  avgWorkHours: number;
  meetingPercentage: number;
  commitFrequency: number;
}
