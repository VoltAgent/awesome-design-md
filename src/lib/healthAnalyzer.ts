// 基于非侵入式员工心理健康检测研究报告的算法实现

// 核心数据指标定义
interface TimePatternMetrics {
  workHours: number;           // 工作时长
  nightWorkPercentage: number;  // 夜间工作占比
  weekendWorkDays: number;     // 周末工作天数
  workHoursVariance: number;    // 工作时长波动
  workRhythmRegularity: number; // 工作节律规律性
  breakFrequency: number;       // 休息频率
  breakDuration: number;        // 休息时长
  commutingTime: number;        // 通勤时间
  sleepPattern: number;         // 睡眠模式规律性
}

interface CommunicationMetrics {
  messageFrequency: number;     // 消息发送频率
  responseTime: number;         // 回复延迟
  communicationDiversity: number; // 沟通对象多样性
  activePassiveRatio: number;   // 主动/被动沟通比例
  meetingParticipation: number;  // 会议参与度
  meetingContribution: number;  // 会议贡献度
  messageLength: number;        // 消息长度
  communicationInitiation: number; // 主动发起沟通频率
}

interface InteractionMetrics {
  keystrokeFrequency: number;   // 键盘击键频率
  mouseSpeed: number;           // 鼠标移动速度
  clickFrequency: number;       // 点击频率
  errorRate: number;            // 错误率
  screenSwitchFrequency: number; // 屏幕切换频率
  applicationUsagePattern: number; // 应用使用模式多样性
  keystrokePressure: number;    // 键盘击键力度
  mouseAccuracy: number;        // 鼠标点击精确度
  responseTime: number;         // 反应时间
}

interface TaskMetrics {
  completionRate: number;       // 任务完成率
  onTimeDeliveryRate: number;   // 按时交付率
  approvalTime: number;         // 审批停留时间
  deadlineDeviation: number;    // 截止日期偏差
  errorModificationCount: number; // 错误修改次数
  taskSwitchFrequency: number;  // 任务切换频率
  taskDensity: number;          // 任务密度
  procrastinationLevel: number; // 拖延程度
  workQuality: number;          // 工作质量
}

interface SocialNetworkMetrics {
  centrality: number;           // 中心性
  clusteringCoefficient: number; // 聚类系数
  communicationBandwidth: number; // 沟通带宽
  isolationDegree: number;      // 孤立度
  socialCircleChanges: number;  // 社交圈层变化
  reciprocity: number;          // 互动互惠性
  bridgingCapital: number;      // 桥接资本
}

interface EmotionalMetrics {
  positiveEmotionRatio: number; // 积极情感比例
  negativeEmotionRatio: number; // 消极情感比例
  emotionStability: number;     // 情感稳定性
  emotionDiversity: number;     // 情感表达多样性
  emotionalVocabulary: number;  // 情感词汇丰富度
  emotionalTrend: number;       // 情感趋势变化
}

interface SpatialMetrics {
  workstationStayTime: number;  // 工位停留时间
  meetingRoomFrequency: number; // 会议室使用频率
  breakAreaFrequency: number;   // 休息区访问频率
  movementDistance: number;     // 移动距离
  socialAreaVisits: number;     // 社交区域访问次数
}

// 个人历史基线
interface PersonalBaseline {
  timePattern: number;
  communication: number;
  interaction: number;
  task: number;
  socialNetwork: number;
  emotional: number;
  spatial: number;
}

// 心理健康状态评分
interface MentalHealthScores {
  overall: number;              // 整体健康度
  depressionRisk: number;       // 抑郁风险
  anxietyRisk: number;          // 焦虑风险
  burnoutRisk: number;          // 倦怠风险
  stressLevel: number;          // 压力水平
  wellBeingScore: number;       // 幸福感评分
  // 维度评分
  timePattern: number;          // 时间模式
  communication: number;        // 沟通模式
  interaction: number;          // 交互行为
  task: number;                 // 任务效率
  socialNetwork: number;        // 社交网络
  emotional: number;            // 情感状态
  spatial: number;              // 空间行为
  // 趋势分析
  trend: 'improving' | 'declining' | 'stable';
  baselineDeviation: number;    // 与个人基线的偏差
}

// 权重配置（基于研究报告的优先级）
const WEIGHTS = {
  timePattern: 0.20,      // P0-核心
  communication: 0.20,     // P0-核心
  interaction: 0.15,       // P0-核心
  task: 0.15,              // P1-重要
  socialNetwork: 0.15,     // P1-重要
  emotional: 0.10,         // P1-重要
  spatial: 0.05            // P2-辅助
};

// 心理健康状态权重
const MENTAL_HEALTH_WEIGHTS = {
  depressionRisk: 0.25,
  anxietyRisk: 0.20,
  burnoutRisk: 0.25,
  stressLevel: 0.20,
  wellBeingScore: 0.10
};

function normalizeScore(value: number, min: number, max: number, invert = false): number {
  let score = ((value - min) / (max - min)) * 100;
  if (invert) score = 100 - score;
  return Math.max(0, Math.min(100, score));
}

// 时间模式评分
export function calculateTimePatternScore(metrics: TimePatternMetrics): number {
  // 工作时长（7-9小时最佳）
  const workHoursScore = metrics.workHours >= 7 && metrics.workHours <= 9 
    ? 100 
    : metrics.workHours < 7 
    ? normalizeScore(metrics.workHours, 4, 7)
    : normalizeScore(metrics.workHours, 9, 12, true);
  
  // 夜间工作占比（越低越好）
  const nightWorkScore = normalizeScore(metrics.nightWorkPercentage, 0, 40, true);
  
  // 周末工作天数（越少越好）
  const weekendWorkScore = normalizeScore(metrics.weekendWorkDays, 0, 3, true);
  
  // 工作节律规律性（越高越好）
  const regularityScore = normalizeScore(metrics.workRhythmRegularity, 0, 100);
  
  // 休息频率和时长（适中最佳）
  const breakScore = metrics.breakFrequency >= 3 && metrics.breakFrequency <= 6
    ? 100
    : metrics.breakFrequency < 3
    ? normalizeScore(metrics.breakFrequency, 0, 3)
    : normalizeScore(metrics.breakFrequency, 6, 10, true);
  
  // 通勤时间（适中最佳）
  const commutingScore = metrics.commutingTime >= 15 && metrics.commutingTime <= 45
    ? 100
    : metrics.commutingTime < 15
    ? normalizeScore(metrics.commutingTime, 0, 15)
    : normalizeScore(metrics.commutingTime, 45, 90, true);
  
  // 睡眠模式规律性（越高越好）
  const sleepScore = normalizeScore(metrics.sleepPattern, 0, 100);
  
  return Math.round(
    workHoursScore * 0.20 +
    nightWorkScore * 0.15 +
    weekendWorkScore * 0.15 +
    regularityScore * 0.15 +
    breakScore * 0.15 +
    commutingScore * 0.10 +
    sleepScore * 0.10
  );
}

// 沟通模式评分
export function calculateCommunicationScore(metrics: CommunicationMetrics): number {
  // 消息频率（适中最佳）
  const frequencyScore = metrics.messageFrequency >= 5 && metrics.messageFrequency <= 15
    ? 100
    : metrics.messageFrequency < 5
    ? normalizeScore(metrics.messageFrequency, 0, 5)
    : normalizeScore(metrics.messageFrequency, 15, 30, true);
  
  // 回复延迟（越低越好）
  const responseScore = normalizeScore(metrics.responseTime, 0, 24, true);
  
  // 沟通对象多样性（越高越好）
  const diversityScore = normalizeScore(metrics.communicationDiversity, 0, 20);
  
  // 主动/被动比例（适中最佳）
  const activePassiveScore = metrics.activePassiveRatio >= 0.4 && metrics.activePassiveRatio <= 0.6
    ? 100
    : metrics.activePassiveRatio < 0.4
    ? normalizeScore(metrics.activePassiveRatio, 0, 0.4)
    : normalizeScore(metrics.activePassiveRatio, 0.6, 1, true);
  
  // 会议参与度（适中最佳）
  const meetingScore = normalizeScore(metrics.meetingParticipation, 0, 100);
  
  // 消息长度（适中最佳）
  const messageLengthScore = metrics.messageLength >= 20 && metrics.messageLength <= 100
    ? 100
    : metrics.messageLength < 20
    ? normalizeScore(metrics.messageLength, 0, 20)
    : normalizeScore(metrics.messageLength, 100, 200, true);
  
  // 主动发起沟通频率（适中最佳）
  const initiationScore = normalizeScore(metrics.communicationInitiation, 0, 10);
  
  return Math.round(
    frequencyScore * 0.15 +
    responseScore * 0.15 +
    diversityScore * 0.15 +
    activePassiveScore * 0.15 +
    meetingScore * 0.15 +
    messageLengthScore * 0.10 +
    initiationScore * 0.15
  );
}

// 交互行为评分
export function calculateInteractionScore(metrics: InteractionMetrics): number {
  // 键盘击键频率（适中最佳）
  const keystrokeScore = metrics.keystrokeFrequency >= 50 && metrics.keystrokeFrequency <= 100
    ? 100
    : metrics.keystrokeFrequency < 50
    ? normalizeScore(metrics.keystrokeFrequency, 0, 50)
    : normalizeScore(metrics.keystrokeFrequency, 100, 200, true);
  
  // 鼠标移动速度（适中最佳）
  const mouseScore = metrics.mouseSpeed >= 500 && metrics.mouseSpeed <= 1000
    ? 100
    : metrics.mouseSpeed < 500
    ? normalizeScore(metrics.mouseSpeed, 0, 500)
    : normalizeScore(metrics.mouseSpeed, 1000, 2000, true);
  
  // 错误率（越低越好）
  const errorScore = normalizeScore(metrics.errorRate, 0, 20, true);
  
  // 屏幕切换频率（适中最佳）
  const screenSwitchScore = metrics.screenSwitchFrequency >= 5 && metrics.screenSwitchFrequency <= 15
    ? 100
    : metrics.screenSwitchFrequency < 5
    ? normalizeScore(metrics.screenSwitchFrequency, 0, 5)
    : normalizeScore(metrics.screenSwitchFrequency, 15, 30, true);
  
  // 应用使用模式多样性（越高越好）
  const appUsageScore = normalizeScore(metrics.applicationUsagePattern, 0, 10);
  
  // 键盘击键力度（适中最佳）
  const pressureScore = metrics.keystrokePressure >= 3 && metrics.keystrokePressure <= 7
    ? 100
    : metrics.keystrokePressure < 3
    ? normalizeScore(metrics.keystrokePressure, 0, 3)
    : normalizeScore(metrics.keystrokePressure, 7, 10, true);
  
  // 鼠标点击精确度（越高越好）
  const accuracyScore = normalizeScore(metrics.mouseAccuracy, 0, 100);
  
  // 反应时间（适中最佳）
  const responseScore = metrics.responseTime >= 0.5 && metrics.responseTime <= 1.5
    ? 100
    : metrics.responseTime < 0.5
    ? normalizeScore(metrics.responseTime, 0, 0.5)
    : normalizeScore(metrics.responseTime, 1.5, 3, true);
  
  return Math.round(
    keystrokeScore * 0.15 +
    mouseScore * 0.15 +
    errorScore * 0.15 +
    screenSwitchScore * 0.15 +
    appUsageScore * 0.10 +
    pressureScore * 0.10 +
    accuracyScore * 0.10 +
    responseScore * 0.10
  );
}

// 任务效率评分
export function calculateTaskScore(metrics: TaskMetrics): number {
  // 任务完成率（越高越好）
  const completionScore = normalizeScore(metrics.completionRate, 0, 100);
  
  // 按时交付率（越高越好）
  const onTimeScore = normalizeScore(metrics.onTimeDeliveryRate, 0, 100);
  
  // 审批停留时间（适中最佳）
  const approvalScore = metrics.approvalTime >= 1 && metrics.approvalTime <= 3
    ? 100
    : metrics.approvalTime < 1
    ? normalizeScore(metrics.approvalTime, 0, 1)
    : normalizeScore(metrics.approvalTime, 3, 8, true);
  
  // 截止日期偏差（越低越好）
  const deadlineScore = normalizeScore(metrics.deadlineDeviation, 0, 5, true);
  
  // 错误修改次数（越低越好）
  const errorModScore = normalizeScore(metrics.errorModificationCount, 0, 10, true);
  
  // 任务切换频率（适中最佳）
  const taskSwitchScore = metrics.taskSwitchFrequency >= 3 && metrics.taskSwitchFrequency <= 8
    ? 100
    : metrics.taskSwitchFrequency < 3
    ? normalizeScore(metrics.taskSwitchFrequency, 0, 3)
    : normalizeScore(metrics.taskSwitchFrequency, 8, 15, true);
  
  // 任务密度（适中最佳）
  const densityScore = metrics.taskDensity >= 5 && metrics.taskDensity <= 10
    ? 100
    : metrics.taskDensity < 5
    ? normalizeScore(metrics.taskDensity, 0, 5)
    : normalizeScore(metrics.taskDensity, 10, 20, true);
  
  // 拖延程度（越低越好）
  const procrastinationScore = normalizeScore(metrics.procrastinationLevel, 0, 10, true);
  
  // 工作质量（越高越好）
  const qualityScore = normalizeScore(metrics.workQuality, 0, 100);
  
  return Math.round(
    completionScore * 0.15 +
    onTimeScore * 0.15 +
    approvalScore * 0.10 +
    deadlineScore * 0.10 +
    errorModScore * 0.10 +
    taskSwitchScore * 0.10 +
    densityScore * 0.10 +
    procrastinationScore * 0.10 +
    qualityScore * 0.10
  );
}

// 社交网络评分
export function calculateSocialNetworkScore(metrics: SocialNetworkMetrics): number {
  // 中心性（适中最佳）
  const centralityScore = metrics.centrality >= 0.3 && metrics.centrality <= 0.7
    ? 100
    : metrics.centrality < 0.3
    ? normalizeScore(metrics.centrality, 0, 0.3)
    : normalizeScore(metrics.centrality, 0.7, 1, true);
  
  // 聚类系数（适中最佳）
  const clusteringScore = metrics.clusteringCoefficient >= 0.4 && metrics.clusteringCoefficient <= 0.6
    ? 100
    : metrics.clusteringCoefficient < 0.4
    ? normalizeScore(metrics.clusteringCoefficient, 0, 0.4)
    : normalizeScore(metrics.clusteringCoefficient, 0.6, 1, true);
  
  // 沟通带宽（适中最佳）
  const bandwidthScore = metrics.communicationBandwidth >= 10 && metrics.communicationBandwidth <= 30
    ? 100
    : metrics.communicationBandwidth < 10
    ? normalizeScore(metrics.communicationBandwidth, 0, 10)
    : normalizeScore(metrics.communicationBandwidth, 30, 50, true);
  
  // 孤立度（越低越好）
  const isolationScore = normalizeScore(metrics.isolationDegree, 0, 1, true);
  
  // 社交圈层变化（适中最佳）
  const socialCircleScore = metrics.socialCircleChanges >= 0 && metrics.socialCircleChanges <= 2
    ? 100
    : normalizeScore(metrics.socialCircleChanges, 2, 5, true);
  
  // 互动互惠性（越高越好）
  const reciprocityScore = normalizeScore(metrics.reciprocity, 0, 100);
  
  // 桥接资本（适中最佳）
  const bridgingScore = metrics.bridgingCapital >= 0.3 && metrics.bridgingCapital <= 0.7
    ? 100
    : metrics.bridgingCapital < 0.3
    ? normalizeScore(metrics.bridgingCapital, 0, 0.3)
    : normalizeScore(metrics.bridgingCapital, 0.7, 1, true);
  
  return Math.round(
    centralityScore * 0.20 +
    clusteringScore * 0.15 +
    bandwidthScore * 0.15 +
    isolationScore * 0.20 +
    socialCircleScore * 0.10 +
    reciprocityScore * 0.10 +
    bridgingScore * 0.10
  );
}

// 情感状态评分
export function calculateEmotionalScore(metrics: EmotionalMetrics): number {
  // 积极情感比例（越高越好）
  const positiveScore = normalizeScore(metrics.positiveEmotionRatio, 0, 100);
  
  // 消极情感比例（越低越好）
  const negativeScore = normalizeScore(metrics.negativeEmotionRatio, 0, 100, true);
  
  // 情感稳定性（越高越好）
  const stabilityScore = normalizeScore(metrics.emotionStability, 0, 100);
  
  // 情感表达多样性（越高越好）
  const diversityScore = normalizeScore(metrics.emotionDiversity, 0, 100);
  
  // 情感词汇丰富度（越高越好）
  const vocabularyScore = normalizeScore(metrics.emotionalVocabulary, 0, 100);
  
  // 情感趋势变化（正数表示积极趋势，负数表示消极趋势）
  const trendScore = metrics.emotionalTrend >= 0
    ? normalizeScore(metrics.emotionalTrend, 0, 50)
    : normalizeScore(Math.abs(metrics.emotionalTrend), 0, 50, true);
  
  return Math.round(
    positiveScore * 0.25 +
    negativeScore * 0.25 +
    stabilityScore * 0.15 +
    diversityScore * 0.15 +
    vocabularyScore * 0.10 +
    trendScore * 0.10
  );
}

// 空间行为评分
export function calculateSpatialScore(metrics: SpatialMetrics): number {
  // 工位停留时间（适中最佳）
  const workstationScore = metrics.workstationStayTime >= 4 && metrics.workstationStayTime <= 6
    ? 100
    : metrics.workstationStayTime < 4
    ? normalizeScore(metrics.workstationStayTime, 0, 4)
    : normalizeScore(metrics.workstationStayTime, 6, 8, true);
  
  // 会议室使用频率（适中最佳）
  const meetingRoomScore = metrics.meetingRoomFrequency >= 1 && metrics.meetingRoomFrequency <= 3
    ? 100
    : metrics.meetingRoomFrequency < 1
    ? normalizeScore(metrics.meetingRoomFrequency, 0, 1)
    : normalizeScore(metrics.meetingRoomFrequency, 3, 6, true);
  
  // 休息区访问频率（适中最佳）
  const breakAreaScore = metrics.breakAreaFrequency >= 2 && metrics.breakAreaFrequency <= 4
    ? 100
    : metrics.breakAreaFrequency < 2
    ? normalizeScore(metrics.breakAreaFrequency, 0, 2)
    : normalizeScore(metrics.breakAreaFrequency, 4, 8, true);
  
  // 移动距离（适中最佳）
  const movementScore = metrics.movementDistance >= 50 && metrics.movementDistance <= 200
    ? 100
    : metrics.movementDistance < 50
    ? normalizeScore(metrics.movementDistance, 0, 50)
    : normalizeScore(metrics.movementDistance, 200, 400, true);
  
  // 社交区域访问次数（适中最佳）
  const socialAreaScore = metrics.socialAreaVisits >= 1 && metrics.socialAreaVisits <= 3
    ? 100
    : metrics.socialAreaVisits < 1
    ? normalizeScore(metrics.socialAreaVisits, 0, 1)
    : normalizeScore(metrics.socialAreaVisits, 3, 6, true);
  
  return Math.round(
    workstationScore * 0.30 +
    meetingRoomScore * 0.20 +
    breakAreaScore * 0.20 +
    movementScore * 0.15 +
    socialAreaScore * 0.15
  );
}

// 计算与个人基线的偏差
export function calculateBaselineDeviation(currentScores: Partial<MentalHealthScores>, baseline: PersonalBaseline): number {
  const dimensions = ['timePattern', 'communication', 'interaction', 'task', 'socialNetwork', 'emotional', 'spatial'] as const;
  let totalDeviation = 0;
  
  for (const dimension of dimensions) {
    const current = currentScores[dimension] || 0;
    const base = baseline[dimension];
    const deviation = Math.abs(current - base);
    totalDeviation += deviation;
  }
  
  return Math.round((totalDeviation / dimensions.length) / 100 * 100); // 归一化到0-100
}

// 心理健康状态评估
export function assessMentalHealth(
  timePatternScore: number,
  communicationScore: number,
  interactionScore: number,
  taskScore: number,
  socialNetworkScore: number,
  emotionalScore: number,
  spatialScore: number,
  personalBaseline?: PersonalBaseline,
  previousScores?: MentalHealthScores
): MentalHealthScores {
  // 抑郁风险评估（基于研究报告的指标）
  const depressionRisk = Math.round(
    (100 - communicationScore) * 0.3 +      // 社交互动减少
    (100 - socialNetworkScore) * 0.25 +     // 社交退缩
    (100 - emotionalScore) * 0.25 +         // 消极情感增加
    (100 - interactionScore) * 0.1 +        // 交互行为变化
    (100 - taskScore) * 0.1                 // 生产力下降
  );
  
  // 焦虑风险评估（基于研究报告的指标）
  const anxietyRisk = Math.round(
    (100 - interactionScore) * 0.3 +        // 交互行为变化
    (100 - taskScore) * 0.25 +              // 工作节奏紊乱
    (100 - emotionalScore) * 0.25 +         // 情感波动
    (100 - timePatternScore) * 0.1 +        // 睡眠质量下降
    (100 - communicationScore) * 0.1        // 过度检查行为
  );
  
  // 倦怠风险评估（基于研究报告的指标）
  const burnoutRisk = Math.round(
    (100 - timePatternScore) * 0.35 +       // 工作时间异常
    (100 - taskScore) * 0.25 +              // 工作质量波动
    (100 - communicationScore) * 0.2 +      // 团队协作退缩
    (100 - socialNetworkScore) * 0.1 +      // 社交退缩
    (100 - emotionalScore) * 0.1            // 消极情感
  );
  
  // 压力状态评估（基于研究报告的指标）
  const stressLevel = Math.round(
    (100 - timePatternScore) * 0.25 +       // 休息行为改变
    (100 - taskScore) * 0.25 +              // 工作强度增加
    (100 - interactionScore) * 0.25 +       // 交互行为变化
    (100 - emotionalScore) * 0.25           // 情感波动
  );
  
  // 幸福感评分（基于研究报告的指标）
  const wellBeingScore = Math.round(
    timePatternScore * 0.2 +                // 规律的作息节律
    communicationScore * 0.2 +              // 积极的团队互动
    socialNetworkScore * 0.2 +              // 社交网络中心性
    emotionalScore * 0.2 +                  // 积极情感表达
    taskScore * 0.15 +                      // 高效的任务完成
    spatialScore * 0.05                     // 健康的空间行为
  );
  
  // 整体健康度
  const overall = Math.round(
    timePatternScore * WEIGHTS.timePattern +
    communicationScore * WEIGHTS.communication +
    interactionScore * WEIGHTS.interaction +
    taskScore * WEIGHTS.task +
    socialNetworkScore * WEIGHTS.socialNetwork +
    emotionalScore * WEIGHTS.emotional +
    spatialScore * WEIGHTS.spatial
  );
  
  // 计算趋势
  let trend: 'improving' | 'declining' | 'stable' = 'stable';
  if (previousScores) {
    const change = overall - previousScores.overall;
    if (change > 5) trend = 'improving';
    else if (change < -5) trend = 'declining';
  }
  
  // 计算与个人基线的偏差
  let baselineDeviation = 0;
  if (personalBaseline) {
    baselineDeviation = calculateBaselineDeviation(
      {
        timePattern: timePatternScore,
        communication: communicationScore,
        interaction: interactionScore,
        task: taskScore,
        socialNetwork: socialNetworkScore,
        emotional: emotionalScore,
        spatial: spatialScore
      },
      personalBaseline
    );
  }
  
  return {
    overall,
    depressionRisk,
    anxietyRisk,
    burnoutRisk,
    stressLevel,
    wellBeingScore,
    timePattern: timePatternScore,
    communication: communicationScore,
    interaction: interactionScore,
    task: taskScore,
    socialNetwork: socialNetworkScore,
    emotional: emotionalScore,
    spatial: spatialScore,
    trend,
    baselineDeviation
  };
}

// 预警规则
export interface AlertRule {
  id: string;
  type: string;
  severity: 'red' | 'orange' | 'yellow';
  check: (scores: MentalHealthScores, metrics: any) => boolean;
  message: string;
  riskFactors: string[];
}

const ALERT_RULES: AlertRule[] = [
  {
    id: 'high_depression_risk',
    type: 'depression',
    severity: 'red',
    check: (scores) => scores.depressionRisk >= 70,
    message: '高抑郁风险，需要立即关注',
    riskFactors: ['社交互动减少', '社交退缩', '消极情感增加', '交互行为变化', '生产力下降']
  },
  {
    id: 'high_anxiety_risk',
    type: 'anxiety',
    severity: 'red',
    check: (scores) => scores.anxietyRisk >= 70,
    message: '高焦虑风险，需要立即关注',
    riskFactors: ['交互行为变化', '工作节奏紊乱', '情感波动', '睡眠质量下降', '过度检查行为']
  },
  {
    id: 'high_burnout_risk',
    type: 'burnout',
    severity: 'red',
    check: (scores) => scores.burnoutRisk >= 70,
    message: '高倦怠风险，需要立即关注',
    riskFactors: ['工作时间异常', '工作质量波动', '团队协作退缩', '社交退缩', '消极情感']
  },
  {
    id: 'high_stress_level',
    type: 'stress',
    severity: 'orange',
    check: (scores) => scores.stressLevel >= 70,
    message: '高压力水平，建议关注',
    riskFactors: ['休息行为改变', '工作强度增加', '交互行为变化', '情感波动']
  },
  {
    id: 'low_wellbeing',
    type: 'wellbeing',
    severity: 'orange',
    check: (scores) => scores.wellBeingScore < 50,
    message: '幸福感评分偏低，建议关注',
    riskFactors: ['作息不规律', '团队互动减少', '社交网络孤立', '消极情感表达', '任务完成效率低']
  },
  {
    id: 'declining_trend',
    type: 'trend',
    severity: 'yellow',
    check: (scores) => scores.trend === 'declining' && scores.overall < 70,
    message: '健康度呈下降趋势，建议关注',
    riskFactors: ['整体健康度下降']
  },
  {
    id: 'baseline_deviation',
    type: 'baseline',
    severity: 'yellow',
    check: (scores) => scores.baselineDeviation > 30,
    message: '与个人基线偏差较大，建议关注',
    riskFactors: ['行为模式异常变化']
  },
  {
    id: 'multiple_risks',
    type: 'composite',
    severity: 'red',
    check: (scores) => {
      const highRisks = [
        scores.depressionRisk >= 60,
        scores.anxietyRisk >= 60,
        scores.burnoutRisk >= 60,
        scores.stressLevel >= 60
      ];
      return highRisks.filter(Boolean).length >= 2;
    },
    message: '多项风险指标偏高，需要立即关注',
    riskFactors: ['多项心理健康指标异常']
  }
];

export function checkAlerts(scores: MentalHealthScores, metrics: any): AlertRule[] {
  return ALERT_RULES.filter(rule => rule.check(scores, metrics));
}

export function getHealthColor(score: number): string {
  if (score >= 80) return '#4db6ac';
  if (score >= 60) return '#ff9800';
  return '#f44336';
}

// 获取心理健康状态标签
export function getMentalHealthLabel(score: number): string {
  if (score >= 80) return '健康';
  if (score >= 60) return '关注';
  return '风险';
}

// 计算趋势变化
export function calculateTrend(current: number, previous: number): 'improving' | 'declining' | 'stable' {
  const change = current - previous;
  if (change > 5) return 'improving';
  if (change < -5) return 'declining';
  return 'stable';
}

// 季节性调整
export function adjustForSeasonality(score: number, season: string): number {
  const seasonAdjustments = {
    'spring': 0,     // 春季正常
    'summer': -5,    // 夏季可能略低
    'autumn': 0,     // 秋季正常
    'winter': -10    // 冬季可能较低
  };
  
  const adjustment = seasonAdjustments[season as keyof typeof seasonAdjustments] || 0;
  return Math.max(0, Math.min(100, score + adjustment));
}

// 模型更新频率建议
export const MODEL_UPDATE_RECOMMENDATIONS = {
  baselineUpdate: 'weekly',     // 每周更新个人基线
  modelRetraining: 'monthly',   // 每月重新训练模型
  seasonalAdjustment: 'quarterly' // 每季度进行季节性调整
};
