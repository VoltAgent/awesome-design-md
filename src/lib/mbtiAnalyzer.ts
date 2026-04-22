// MBTI分析引擎

// 成员数据接口
interface MemberData {
  id: number;
  name: string;
  gitCommits: GitCommit[];
  jiraTasks: JiraTask[];
  calendarEvents: CalendarEvent[];
  collaborationData: CollaborationData[];
  workPattern: WorkPattern;
}

interface GitCommit {
  timestamp: Date;
  message: string;
  additions: number;
  deletions: number;
  isMerge: boolean;
}

interface JiraTask {
  status: string;
  priority: string;
  statusChangedAt: Date;
  resolutionTime?: number;
}

interface CalendarEvent {
  title: string;
  duration: number;
  attendees: string[];
  start_time: Date;
}

interface CollaborationData {
  type: string;
  content: string;
  from_member_id?: number;
  timestamp: Date;
}

interface WorkPattern {
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

// MBTI分析结果
interface MBTIAnalysis {
  mbtiType: string;
  extroversionScore: number;
  intuitionScore: number;
  feelingScore: number;
  perceivingScore: number;
  behavioralPatterns: {
    workHours: string;
    communication: string;
    taskHandling: string;
  };
  communicationStyle: {
    style: string;
    strengths: string[];
    areasForImprovement: string[];
  };
  workPreferences: {
    preferredEnvironment: string;
    collaborationStyle: string;
    decisionMaking: string;
  };
  description: string;
  careerAdvice: string[];
  teamContribution: string[];
}

// 团队MBTI分析结果
interface TeamMBTIAnalysis {
  distribution: Record<string, number>;
  teamProfile: string;
  collaborationSuggestions: string[];
  strengths: string[];
  areasForImprovement: string[];
  teamBalance: string;
}

// MBTI类型描述
const MBTI_DESCRIPTIONS = {
  ISTJ: {
    description: "安静、严肃，通过专注和有条理的方式处理任务。重视传统和规则，做事可靠，有责任感。",
    careerAdvice: ["适合需要细致和可靠性的角色", "重视稳定性和明确的工作流程", "善于处理结构化的任务"],
    teamContribution: ["提供稳定性和可靠性", "确保任务按时完成", "维护团队的组织性"]
  },
  ISFJ: {
    description: "友好、有责任感和同情心。注重细节，关心他人，善于提供支持和帮助。",
    careerAdvice: ["适合需要人际关系技能的角色", "重视和谐的工作环境", "善于照顾他人的需求"],
    teamContribution: ["提供情感支持", "确保团队成员的福祉", "维护团队和谐"]
  },
  INFJ: {
    description: "富有洞察力和创意，注重个人成长和价值观。善于理解他人，有强烈的责任感。",
    careerAdvice: ["适合需要创意和洞察力的角色", "重视有意义的工作", "善于解决复杂问题"],
    teamContribution: ["提供创新思路", "理解团队成员的需求", "促进团队的长期发展"]
  },
  INTJ: {
    description: "独立、分析性强，善于战略思维和问题解决。重视逻辑和效率，追求卓越。",
    careerAdvice: ["适合需要战略规划的角色", "重视自主性和挑战性", "善于解决复杂问题"],
    teamContribution: ["提供战略方向", "分析问题的根本原因", "推动创新和效率"]
  },
  ISTP: {
    description: "实用、灵活，善于解决实际问题。注重当下，喜欢动手操作和探索。",
    careerAdvice: ["适合需要动手能力的角色", "重视灵活性和自主性", "善于应对突发情况"],
    teamContribution: ["解决实际问题", "提供技术支持", "适应变化的环境"]
  },
  ISFP: {
    description: "温和、敏感，注重个人价值观和审美。善于表达，有艺术气质。",
    careerAdvice: ["适合需要创造力的角色", "重视个人表达和价值观", "善于与他人建立联系"],
    teamContribution: ["提供创意和审美视角", "促进团队的多样性", "建立和谐的人际关系"]
  },
  INFP: {
    description: "理想主义、富有同情心，注重个人价值观和意义。善于理解他人，有创造力。",
    careerAdvice: ["适合需要创造力和意义的角色", "重视个人成长和价值观", "善于与他人建立深度联系"],
    teamContribution: ["提供理想主义视角", "促进团队的价值观讨论", "支持团队成员的个人成长"]
  },
  INTP: {
    description: "好奇、分析性强，善于理论思考和问题解决。注重逻辑和创新，喜欢探索新思想。",
    careerAdvice: ["适合需要分析和创新的角色", "重视自主性和智力挑战", "善于解决复杂问题"],
    teamContribution: ["提供分析和创新思路", "挑战传统思维", "解决复杂的技术问题"]
  },
  ESTP: {
    description: "外向、实用，善于应对挑战和冒险。注重行动和结果，喜欢社交和竞争。",
    careerAdvice: ["适合需要行动和社交的角色", "重视挑战和多样性", "善于应对压力"],
    teamContribution: ["带来活力和行动力", "善于应对紧急情况", "促进团队的社交互动"]
  },
  ESFP: {
    description: "外向、友好，善于社交和娱乐。注重当下，喜欢与人互动和享受生活。",
    careerAdvice: ["适合需要社交和表达的角色", "重视和谐的工作环境", "善于与他人建立联系"],
    teamContribution: ["提升团队士气", "促进团队的社交互动", "带来活力和乐观"]
  },
  ENFP: {
    description: "外向、创意，充满热情和好奇心。善于理解他人，有感染力和创造力。",
    careerAdvice: ["适合需要创意和社交的角色", "重视个人成长和意义", "善于激发他人的潜力"],
    teamContribution: ["提供创意和热情", "激发团队的创造力", "促进团队的协作"]
  },
  ENTP: {
    description: "外向、好奇，善于辩论和创新。喜欢挑战传统，有创业精神。",
    careerAdvice: ["适合需要创新和战略的角色", "重视自主性和挑战", "善于解决复杂问题"],
    teamContribution: ["提供创新思路", "挑战团队的思维方式", "推动变革和进步"]
  },
  ESTJ: {
    description: "外向、实际，善于组织和管理。重视规则和效率，有领导能力。",
    careerAdvice: ["适合需要组织和领导的角色", "重视效率和结果", "善于管理和协调"],
    teamContribution: ["提供组织和结构", "确保团队的效率", "领导团队实现目标"]
  },
  ESFJ: {
    description: "外向、友好，善于社交和照顾他人。重视和谐和传统，有责任感。",
    careerAdvice: ["适合需要社交和服务的角色", "重视团队和谐", "善于照顾他人的需求"],
    teamContribution: ["促进团队和谐", "照顾团队成员的福祉", "组织团队活动"]
  },
  ENFJ: {
    description: "外向、富有同情心，善于领导和激励他人。重视和谐和个人成长，有感染力。",
    careerAdvice: ["适合需要领导和激励的角色", "重视团队的成长和发展", "善于与人建立深度联系"],
    teamContribution: ["激励团队成员", "促进团队的和谐", "领导团队实现共同目标"]
  },
  ENTJ: {
    description: "外向、果断，善于战略思维和领导。重视效率和结果，有远见和决心。",
    careerAdvice: ["适合需要战略和领导的角色", "重视挑战和成就", "善于制定和执行计划"],
    teamContribution: ["提供战略方向", "领导团队实现目标", "推动组织的变革"]
  }
};

// 计算外向/内向得分
function calculateExtroversionScore(data: MemberData): number {
  let score = 50;
  
  // 基于会议参与度
  const meetingPercentage = data.workPattern.meetingPercentage;
  score += (meetingPercentage - 25) * 0.4;
  
  // 基于协作数据频率
  const collaborationFrequency = data.collaborationData.length;
  score += (collaborationFrequency - 10) * 0.2;
  
  // 基于社交互动
  const socialInteractions = data.collaborationData.filter(item => item.type === 'message').length;
  score += (socialInteractions - 5) * 0.3;
  
  return Math.max(0, Math.min(100, score));
}

// 计算感觉/直觉得分
function calculateIntuitionScore(data: MemberData): number {
  let score = 50;
  
  // 基于代码提交风格
  const commitMessages = data.gitCommits.map(commit => commit.message);
  const creativeCommits = commitMessages.filter(msg => msg.includes('feat') || msg.includes('improve') || msg.includes('refactor')).length;
  score += (creativeCommits - 3) * 0.3;
  
  // 基于任务处理方式
  const complexTasks = data.jiraTasks.filter(task => task.priority === 'high').length;
  score += (complexTasks - 2) * 0.2;
  
  // 基于工作时间分布（晚上和深夜工作可能表示更具创造性）
  const nightWork = data.workPattern.timeDistribution.night;
  score += nightWork * 0.4;
  
  return Math.max(0, Math.min(100, score));
}

// 计算思考/情感得分
function calculateFeelingScore(data: MemberData): number {
  let score = 50;
  
  // 基于沟通风格
  const messages = data.collaborationData.filter(item => item.type === 'message').map(item => item.content);
  const emotionalWords = messages.filter(msg => 
    msg.includes('谢谢') || msg.includes('请') || msg.includes('辛苦') || msg.includes('很棒')
  ).length;
  score += emotionalWords * 2;
  
  // 基于协作模式
  const helpingInteractions = data.collaborationData.filter(item => 
    item.type === 'help' || item.type === 'support'
  ).length;
  score += helpingInteractions * 1.5;
  
  return Math.max(0, Math.min(100, score));
}

// 计算判断/感知得分
function calculatePerceivingScore(data: MemberData): number {
  let score = 50;
  
  // 基于工作时间规律性
  const timeDistribution = data.workPattern.timeDistribution;
  const regularity = Math.abs(timeDistribution.morning - 35) + 
                    Math.abs(timeDistribution.afternoon - 40) + 
                    Math.abs(timeDistribution.evening - 15) + 
                    Math.abs(timeDistribution.night - 10);
  score += (regularity - 20) * 0.2;
  
  // 基于任务状态变更频率
  const statusChanges = data.jiraTasks.length;
  score += (statusChanges - 5) * 0.3;
  
  // 基于提交频率的波动性
  const commitHours = data.gitCommits.map(commit => new Date(commit.timestamp).getHours());
  const commitHourVariance = calculateVariance(commitHours);
  score += commitHourVariance * 0.5;
  
  return Math.max(0, Math.min(100, score));
}

// 计算方差
function calculateVariance(values: number[]): number {
  const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
  return values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
}

// 确定MBTI类型
function determineMBTIType(e: number, n: number, f: number, p: number): string {
  const e_i = e > 50 ? 'E' : 'I';
  const s_n = n > 50 ? 'N' : 'S';
  const t_f = f > 50 ? 'F' : 'T';
  const j_p = p > 50 ? 'P' : 'J';
  return e_i + s_n + t_f + j_p;
}

// 分析行为模式
function analyzeBehavioralPatterns(data: MemberData): MBTIAnalysis['behavioralPatterns'] {
  const workHours = data.workPattern.avgWorkHours;
  const communication = data.collaborationData.length;
  const taskHandling = data.jiraTasks.length;
  
  return {
    workHours: workHours < 7 ? '短工作时间' : workHours > 9 ? '长工作时间' : '标准工作时间',
    communication: communication < 5 ? '低沟通频率' : communication > 15 ? '高沟通频率' : '中等沟通频率',
    taskHandling: taskHandling < 3 ? '低任务量' : taskHandling > 8 ? '高任务量' : '中等任务量'
  };
}

// 分析沟通风格
function analyzeCommunicationStyle(data: MemberData): MBTIAnalysis['communicationStyle'] {
  const messages = data.collaborationData.filter(item => item.type === 'message');
  const emotionalMessages = messages.filter(msg => 
    msg.content.includes('谢谢') || msg.content.includes('请') || msg.content.includes('辛苦')
  ).length;
  const directMessages = messages.filter(msg => 
    msg.content.includes('需要') || msg.content.includes('必须') || msg.content.includes('应该')
  ).length;
  
  if (emotionalMessages > directMessages) {
    return {
      style: '情感导向',
      strengths: ['善于表达关心', '建立和谐关系', '理解他人需求'],
      areasForImprovement: ['可能过于关注情感', '决策时可能犹豫']
    };
  } else {
    return {
      style: '任务导向',
      strengths: ['直接有效', '注重结果', '决策果断'],
      areasForImprovement: ['可能忽略情感需求', '沟通可能过于直接']
    };
  }
}

// 分析工作偏好
function analyzeWorkPreferences(data: MemberData): MBTIAnalysis['workPreferences'] {
  const meetingPercentage = data.workPattern.meetingPercentage;
  const commitFrequency = data.workPattern.commitFrequency;
  const nightWork = data.workPattern.timeDistribution.night;
  
  return {
    preferredEnvironment: meetingPercentage > 30 ? '团队协作' : '独立工作',
    collaborationStyle: commitFrequency > 4 ? '频繁协作' : '自主完成',
    decisionMaking: nightWork > 15 ? '灵活决策' : '结构化决策'
  };
}

// MBTI分析主函数
export function analyzeMBTI(data: MemberData): MBTIAnalysis {
  // 计算各维度得分
  const extroversionScore = calculateExtroversionScore(data);
  const intuitionScore = calculateIntuitionScore(data);
  const feelingScore = calculateFeelingScore(data);
  const perceivingScore = calculatePerceivingScore(data);
  
  // 确定MBTI类型
  const mbtiType = determineMBTIType(extroversionScore, intuitionScore, feelingScore, perceivingScore);
  
  // 获取MBTI类型描述
  const typeDescription = MBTI_DESCRIPTIONS[mbtiType as keyof typeof MBTI_DESCRIPTIONS] || {
    description: '未知类型',
    careerAdvice: [],
    teamContribution: []
  };
  
  return {
    mbtiType,
    extroversionScore: Math.round(extroversionScore),
    intuitionScore: Math.round(intuitionScore),
    feelingScore: Math.round(feelingScore),
    perceivingScore: Math.round(perceivingScore),
    behavioralPatterns: analyzeBehavioralPatterns(data),
    communicationStyle: analyzeCommunicationStyle(data),
    workPreferences: analyzeWorkPreferences(data),
    description: typeDescription.description,
    careerAdvice: typeDescription.careerAdvice || [],
    teamContribution: typeDescription.teamContribution || []
  };
}

// 团队MBTI分布分析
export function analyzeTeamMBTIDistribution(members: MemberData[]): TeamMBTIAnalysis {
  // 分析每个成员的MBTI类型
  const mbtiTypes = members.map(member => analyzeMBTI(member).mbtiType);
  
  // 计算分布
  const distribution: Record<string, number> = {};
  mbtiTypes.forEach(type => {
    distribution[type] = (distribution[type] || 0) + 1;
  });
  
  // 生成团队概况
  const teamProfile = generateTeamProfile(distribution);
  
  // 生成协作建议
  const collaborationSuggestions = generateCollaborationSuggestions(distribution);
  
  // 分析团队优势和改进空间
  const strengths = analyzeTeamStrengths(distribution);
  const areasForImprovement = analyzeAreasForImprovement(distribution);
  
  // 分析团队平衡
  const teamBalance = analyzeTeamBalance(distribution);
  
  return {
    distribution,
    teamProfile,
    collaborationSuggestions,
    strengths,
    areasForImprovement,
    teamBalance
  };
}

// 生成团队概况
function generateTeamProfile(distribution: Record<string, number>): string {
  const types = Object.keys(distribution);
  if (types.length === 0) return '暂无数据';
  
  const dominantType = types.reduce((a, b) => distribution[a] > distribution[b] ? a : b);
  const dominantCount = distribution[dominantType];
  const totalMembers = Object.values(distribution).reduce((sum, count) => sum + count, 0);
  const dominantPercentage = Math.round((dominantCount / totalMembers) * 100);
  
  return `团队以${dominantType}类型为主（${dominantPercentage}%），整体倾向于${getTeamTendency(distribution)}`;
}

// 获取团队倾向
function getTeamTendency(distribution: Record<string, number>): string {
  let eCount = 0, iCount = 0;
  let sCount = 0, nCount = 0;
  let tCount = 0, fCount = 0;
  let jCount = 0, pCount = 0;
  
  Object.keys(distribution).forEach(type => {
    const count = distribution[type];
    eCount += type.startsWith('E') ? count : 0;
    iCount += type.startsWith('I') ? count : 0;
    sCount += type[1] === 'S' ? count : 0;
    nCount += type[1] === 'N' ? count : 0;
    tCount += type[2] === 'T' ? count : 0;
    fCount += type[2] === 'F' ? count : 0;
    jCount += type[3] === 'J' ? count : 0;
    pCount += type[3] === 'P' ? count : 0;
  });
  
  const tendencies = [];
  if (eCount > iCount) tendencies.push('外向');
  if (iCount > eCount) tendencies.push('内向');
  if (nCount > sCount) tendencies.push('直觉');
  if (sCount > nCount) tendencies.push('感觉');
  if (fCount > tCount) tendencies.push('情感');
  if (tCount > fCount) tendencies.push('思考');
  if (pCount > jCount) tendencies.push('感知');
  if (jCount > pCount) tendencies.push('判断');
  
  return tendencies.length > 0 ? tendencies.join('、') : '平衡';
}

// 生成协作建议
function generateCollaborationSuggestions(distribution: Record<string, number>): string[] {
  const suggestions = [];
  const types = Object.keys(distribution);
  
  // 检查是否有足够的多样性
  if (types.length < 3) {
    suggestions.push('建议增加团队成员的多样性，以获得更全面的视角');
  }
  
  // 基于主导类型提供建议
  const dominantType = types.reduce((a, b) => distribution[a] > distribution[b] ? a : b);
  
  switch (dominantType) {
    case 'ISTJ':
    case 'ESTJ':
      suggestions.push('增加创意和灵活性，鼓励团队成员提出新想法');
      break;
    case 'INTP':
    case 'ENTP':
      suggestions.push('加强结构和执行力，确保创意能够转化为实际成果');
      break;
    case 'ISFJ':
    case 'ESFJ':
      suggestions.push('平衡情感需求和任务目标，确保团队效率');
      break;
    case 'INFJ':
    case 'ENFJ':
      suggestions.push('确保团队目标的清晰度，避免过于理想化');
      break;
  }
  
  return suggestions;
}

// 分析团队优势
function analyzeTeamStrengths(distribution: Record<string, number>): string[] {
  const strengths = [];
  
  // 检查是否有多种类型
  if (Object.keys(distribution).length >= 4) {
    strengths.push('团队类型多样，能够应对各种挑战');
  }
  
  // 检查是否有思考型和情感型的平衡
  const tTypes = Object.keys(distribution).filter(type => type[2] === 'T').length;
  const fTypes = Object.keys(distribution).filter(type => type[2] === 'F').length;
  if (tTypes > 0 && fTypes > 0) {
    strengths.push('思考和情感的平衡，既注重逻辑又关注团队氛围');
  }
  
  // 检查是否有判断型和感知型的平衡
  const jTypes = Object.keys(distribution).filter(type => type[3] === 'J').length;
  const pTypes = Object.keys(distribution).filter(type => type[3] === 'P').length;
  if (jTypes > 0 && pTypes > 0) {
    strengths.push('计划和灵活的平衡，既注重结构又能适应变化');
  }
  
  return strengths;
}

// 分析改进空间
function analyzeAreasForImprovement(distribution: Record<string, number>): string[] {
  const areas = [];
  
  // 检查是否过于偏向某一类型
  const maxCount = Math.max(...Object.values(distribution));
  const totalMembers = Object.values(distribution).reduce((sum, count) => sum + count, 0);
  if (maxCount / totalMembers > 0.6) {
    areas.push('团队类型过于单一，可能缺乏多样性视角');
  }
  
  // 检查是否缺乏某一维度的平衡
  const eTypes = Object.keys(distribution).filter(type => type.startsWith('E')).length;
  const iTypes = Object.keys(distribution).filter(type => type.startsWith('I')).length;
  if (eTypes === 0) areas.push('缺乏外向型成员，可能影响团队的社交和外部沟通');
  if (iTypes === 0) areas.push('缺乏内向型成员，可能影响团队的深度思考和专注工作');
  
  return areas;
}

// 分析团队平衡
function analyzeTeamBalance(distribution: Record<string, number>): string {
  const types = Object.keys(distribution);
  const totalMembers = Object.values(distribution).reduce((sum, count) => sum + count, 0);
  
  if (types.length >= 5) {
    return '高度平衡的团队，拥有多种不同的人格类型';
  } else if (types.length >= 3) {
    return '相对平衡的团队，具有一定的多样性';
  } else {
    return '类型较为集中的团队，可能需要增加多样性';
  }
}

// 生成模拟MBTI数据（用于演示）
export function generateMockMBTIAnalysis(memberId: number): MBTIAnalysis {
  const mbtiTypes = ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'];
  const randomType = mbtiTypes[memberId % mbtiTypes.length];
  
  return {
    mbtiType: randomType,
    extroversionScore: 50 + Math.random() * 40 - 20,
    intuitionScore: 50 + Math.random() * 40 - 20,
    feelingScore: 50 + Math.random() * 40 - 20,
    perceivingScore: 50 + Math.random() * 40 - 20,
    behavioralPatterns: {
      workHours: ['短工作时间', '标准工作时间', '长工作时间'][Math.floor(Math.random() * 3)],
      communication: ['低沟通频率', '中等沟通频率', '高沟通频率'][Math.floor(Math.random() * 3)],
      taskHandling: ['低任务量', '中等任务量', '高任务量'][Math.floor(Math.random() * 3)]
    },
    communicationStyle: {
      style: ['情感导向', '任务导向'][Math.floor(Math.random() * 2)],
      strengths: ['善于表达关心', '建立和谐关系', '理解他人需求', '直接有效', '注重结果', '决策果断'].slice(0, 3),
      areasForImprovement: ['可能过于关注情感', '决策时可能犹豫', '可能忽略情感需求', '沟通可能过于直接'].slice(0, 2)
    },
    workPreferences: {
      preferredEnvironment: ['团队协作', '独立工作'][Math.floor(Math.random() * 2)],
      collaborationStyle: ['频繁协作', '自主完成'][Math.floor(Math.random() * 2)],
      decisionMaking: ['灵活决策', '结构化决策'][Math.floor(Math.random() * 2)]
    },
    description: MBTI_DESCRIPTIONS[randomType as keyof typeof MBTI_DESCRIPTIONS]?.description || '未知类型',
    careerAdvice: MBTI_DESCRIPTIONS[randomType as keyof typeof MBTI_DESCRIPTIONS]?.careerAdvice || [],
    teamContribution: MBTI_DESCRIPTIONS[randomType as keyof typeof MBTI_DESCRIPTIONS]?.teamContribution || []
  };
}

// 生成模拟团队MBTI分析（用于演示）
export function generateMockTeamMBTIAnalysis(): TeamMBTIAnalysis {
  const distribution = {
    'ISTJ': 2,
    'ENFP': 2,
    'INTJ': 1,
    'ESFJ': 1
  };
  
  return {
    distribution,
    teamProfile: '团队以ISTJ和ENFP类型为主，整体倾向于外向、直觉、情感',
    collaborationSuggestions: [
      '利用ISTJ的组织能力和ENFP的创意，形成互补优势',
      '鼓励INTJ提供战略思考，ESFJ维护团队和谐'
    ],
    strengths: [
      '团队类型多样，能够应对各种挑战',
      '思考和情感的平衡，既注重逻辑又关注团队氛围'
    ],
    areasForImprovement: [
      '可以增加更多感觉型成员，以增强团队的实际执行能力'
    ],
    teamBalance: '相对平衡的团队，具有一定的多样性'
  };
}
