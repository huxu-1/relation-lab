// 关系研究所 - 核心类型定义

/** 测评元信息 */
export interface AssessmentMeta {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  category: string;
  questionCount: number;
  estimatedMinutes: number;
  popularity: number;
}

/** 测评维度 */
export interface Dimension {
  id: string;
  name: string;
  description: string;
  color: string;
}

/** 题目选项 */
export interface QuestionOption {
  id: string;
  text: string;
  scores: Record<string, number>;
}

/** 单道题目 */
export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

/** 结果画像 */
export interface ResultProfile {
  id: string;
  name: string;
  dimensionId: string;
  brief: string;
  description: string;
  traits: string[];
  suggestions: string[];
  compatibilityNotes?: CompatibilityNote[];
}

/** 兼容性说明 */
export interface CompatibilityNote {
  withProfileId?: string;
  withDimensionId?: string;
  level?: 'high' | 'medium' | 'low';
  description?: string;
  note?: string;
}

/** 详细报告章节 */
export interface DetailedSection {
  title: string;
  content: string;
}

/** 测评数据 */
export interface Assessment {
  meta: AssessmentMeta;
  dimensions: Dimension[];
  questions: Question[];
  profiles: ResultProfile[];
  detailedSections: DetailedSection[];
}

/** 维度分数 */
export interface DimensionScore {
  dimensionId: string;
  name: string;
  color: string;
  score: number;
  maxScore: number;
  percentage: number;
}

/** 免费结果 */
export interface FreeResult {
  profileName: string;
  profileBrief: string;
  dimensionBreakdown: DimensionScore[];
}

/** 付费结果 */
export interface PaidResult {
  profileDescription: string;
  traits: string[];
  suggestions: string[];
  compatibilityNotes: CompatibilityNote[];
  detailedSections: DetailedSection[];
}

/** 测评结果 */
export interface AssessmentResult {
  assessmentId: string;
  primaryDimensionId: string;
  freeResult: FreeResult;
  paidResult: PaidResult;
}

/** 订单 */
export interface Order {
  resultKey: string;
  assessmentId: string;
  nickname: string;
  createdAt: number;
  status: 'pending' | 'confirmed';
  unlockCode?: string;
}