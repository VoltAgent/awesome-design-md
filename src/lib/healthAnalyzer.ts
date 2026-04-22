interface WorkHoursMetrics {
  nightWorkPercentage: number;
  weekendWorkDays: number;
  avgWorkHours: number;
  workHoursVariance: number;
}

interface CodeQualityMetrics {
  commitFrequency: number;
  codeReviewParticipation: number;
  issueFixRate: number;
}

interface TaskProgressMetrics {
  completionRate: number;
  onTimeDeliveryRate: number;
  avgBlockedHours: number;
}

interface MeetingEfficiencyMetrics {
  meetingPercentage: number;
  meetingFrequency: number;
  participationRate: number;
  followupTaskRate: number;
}

interface CollaborationMetrics {
  communicationFrequency: number;
  crossTeamCollaboration: number;
  knowledgeSharing: number;
  problemSolvingParticipation: number;
}

const WEIGHTS = {
  workHours: 0.25,
  codeQuality: 0.20,
  taskProgress: 0.25,
  meetingEfficiency: 0.15,
  collaboration: 0.15
};

function normalizeScore(value: number, min: number, max: number, invert = false): number {
  let score = ((value - min) / (max - min)) * 100;
  if (invert) score = 100 - score;
  return Math.max(0, Math.min(100, score));
}

export function calculateWorkHoursScore(metrics: WorkHoursMetrics): number {
  const nightScore = normalizeScore(metrics.nightWorkPercentage, 0, 40, true);
  const weekendScore = normalizeScore(metrics.weekendWorkDays, 0, 3, true);
  const avgHoursScore = metrics.avgWorkHours >= 7 && metrics.avgWorkHours <= 9 
    ? 100 
    : metrics.avgWorkHours < 7 
    ? normalizeScore(metrics.avgWorkHours, 4, 7)
    : normalizeScore(metrics.avgWorkHours, 9, 12, true);
  const varianceScore = normalizeScore(100 - metrics.workHoursVariance, 0, 100);
  
  return Math.round(
    nightScore * 0.35 +
    weekendScore * 0.25 +
    avgHoursScore * 0.25 +
    varianceScore * 0.15
  );
}

export function calculateCodeQualityScore(metrics: CodeQualityMetrics): number {
  const freqScore = metrics.commitFrequency >= 1 && metrics.commitFrequency <= 5 
    ? 100 
    : metrics.commitFrequency < 1
    ? normalizeScore(metrics.commitFrequency, 0, 1)
    : normalizeScore(metrics.commitFrequency, 5, 10, true);
  const reviewScore = normalizeScore(metrics.codeReviewParticipation, 0, 100);
  const fixRateScore = normalizeScore(metrics.issueFixRate, 0, 100);
  
  return Math.round(
    freqScore * 0.35 +
    reviewScore * 0.35 +
    fixRateScore * 0.30
  );
}

export function calculateTaskProgressScore(metrics: TaskProgressMetrics): number {
  const completionScore = normalizeScore(metrics.completionRate, 0, 100);
  const onTimeScore = normalizeScore(metrics.onTimeDeliveryRate, 0, 100);
  const blockedScore = normalizeScore(metrics.avgBlockedHours, 0, 48, true);
  
  return Math.round(
    completionScore * 0.40 +
    onTimeScore * 0.40 +
    blockedScore * 0.20
  );
}

export function calculateMeetingEfficiencyScore(metrics: MeetingEfficiencyMetrics): number {
  const percentageScore = metrics.meetingPercentage >= 20 && metrics.meetingPercentage <= 30
    ? 100
    : metrics.meetingPercentage < 20
    ? normalizeScore(metrics.meetingPercentage, 0, 20)
    : normalizeScore(metrics.meetingPercentage, 30, 60, true);
  const freqScore = metrics.meetingFrequency >= 2 && metrics.meetingFrequency <= 5
    ? 100
    : metrics.meetingFrequency < 2
    ? normalizeScore(metrics.meetingFrequency, 0, 2)
    : normalizeScore(metrics.meetingFrequency, 5, 10, true);
  const participationScore = normalizeScore(metrics.participationRate, 0, 100);
  const followupScore = normalizeScore(metrics.followupTaskRate, 0, 100);
  
  return Math.round(
    percentageScore * 0.35 +
    freqScore * 0.20 +
    participationScore * 0.25 +
    followupScore * 0.20
  );
}

export function calculateCollaborationScore(metrics: CollaborationMetrics): number {
  const commScore = metrics.communicationFrequency >= 5 && metrics.communicationFrequency <= 15
    ? 100
    : metrics.communicationFrequency < 5
    ? normalizeScore(metrics.communicationFrequency, 0, 5)
    : normalizeScore(metrics.communicationFrequency, 15, 30, true);
  const crossTeamScore = normalizeScore(metrics.crossTeamCollaboration, 0, 10);
  const sharingScore = normalizeScore(metrics.knowledgeSharing, 0, 100);
  const problemScore = normalizeScore(metrics.problemSolvingParticipation, 0, 100);
  
  return Math.round(
    commScore * 0.30 +
    crossTeamScore * 0.20 +
    sharingScore * 0.25 +
    problemScore * 0.25
  );
}

export interface HealthScores {
  overall: number;
  workHours: number;
  codeQuality: number;
  taskProgress: number;
  meetingEfficiency: number;
  collaboration: number;
}

export interface AlertRule {
  id: string;
  type: string;
  severity: 'red' | 'orange' | 'yellow';
  check: (scores: HealthScores, metrics: any) => boolean;
  message: string;
}

const ALERT_RULES: AlertRule[] = [
  {
    id: 'low_overall',
    type: 'overall_health',
    severity: 'red',
    check: (scores) => scores.overall < 60,
    message: '健康度评分低于60分，需要关注'
  },
  {
    id: 'medium_overall',
    type: 'overall_health',
    severity: 'orange',
    check: (scores) => scores.overall >= 60 && scores.overall < 75,
    message: '健康度评分在60-75分之间，建议关注'
  },
  {
    id: 'low_work_hours',
    type: 'work_hours',
    severity: 'orange',
    check: (scores) => scores.workHours < 60,
    message: '工作时长指标偏低，建议调整工作模式'
  },
  {
    id: 'low_task_progress',
    type: 'task_progress',
    severity: 'orange',
    check: (scores) => scores.taskProgress < 60,
    message: '任务进度指标偏低，建议检查任务分配'
  },
  {
    id: 'low_meeting_efficiency',
    type: 'meeting_efficiency',
    severity: 'yellow',
    check: (scores) => scores.meetingEfficiency < 65,
    message: '会议效率指标偏低，建议优化会议安排'
  }
];

export function calculateHealthScores(
  workHoursMetrics: WorkHoursMetrics,
  codeQualityMetrics: CodeQualityMetrics,
  taskProgressMetrics: TaskProgressMetrics,
  meetingEfficiencyMetrics: MeetingEfficiencyMetrics,
  collaborationMetrics: CollaborationMetrics
): HealthScores {
  const workHours = calculateWorkHoursScore(workHoursMetrics);
  const codeQuality = calculateCodeQualityScore(codeQualityMetrics);
  const taskProgress = calculateTaskProgressScore(taskProgressMetrics);
  const meetingEfficiency = calculateMeetingEfficiencyScore(meetingEfficiencyMetrics);
  const collaboration = calculateCollaborationScore(collaborationMetrics);
  
  const overall = Math.round(
    workHours * WEIGHTS.workHours +
    codeQuality * WEIGHTS.codeQuality +
    taskProgress * WEIGHTS.taskProgress +
    meetingEfficiency * WEIGHTS.meetingEfficiency +
    collaboration * WEIGHTS.collaboration
  );
  
  return {
    overall,
    workHours,
    codeQuality,
    taskProgress,
    meetingEfficiency,
    collaboration
  };
}

export function checkAlerts(scores: HealthScores, metrics: any): AlertRule[] {
  return ALERT_RULES.filter(rule => rule.check(scores, metrics));
}

export function getHealthColor(score: number): string {
  if (score >= 80) return '#4db6ac';
  if (score >= 60) return '#ff9800';
  return '#f44336';
}
