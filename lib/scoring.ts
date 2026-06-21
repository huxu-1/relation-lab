import { Assessment, AssessmentResult } from './types';

export function computeResult(
  assessment: Assessment,
  answers: Record<string, string>
): AssessmentResult {
  const dimensionScores: Record<string, number> = {};

  assessment.dimensions.forEach(d => {
    dimensionScores[d.id] = 0;
  });

  assessment.questions.forEach(question => {
    const selectedOptionId = answers[question.id];
    if (!selectedOptionId) return;
    const option = question.options.find(o => o.id === selectedOptionId);
    if (!option) return;

    Object.entries(option.scores).forEach(([dimId, score]) => {
      dimensionScores[dimId] = (dimensionScores[dimId] || 0) + score;
    });
  });

  const sortedDims = Object.entries(dimensionScores).sort(([, a], [, b]) => b - a);
  const primaryDimId = sortedDims[0]?.[0] || '';

  const primaryProfile = assessment.profiles.find(
    p => p.dimensionId === primaryDimId
  );

  // Calculate max possible score per dimension
  const maxScores: Record<string, number> = {};
  assessment.dimensions.forEach(d => { maxScores[d.id] = 0; });
  assessment.questions.forEach(question => {
    question.options.forEach(option => {
      Object.entries(option.scores).forEach(([dimId, score]) => {
        if (score > (maxScores[dimId] || 0)) {
          maxScores[dimId] = (maxScores[dimId] || 0) + score;
        }
      });
    });
  });

  // Actually compute max score: for each question, find the max score each dimension could get
  const trueMaxScores: Record<string, number> = {};
  assessment.dimensions.forEach(d => { trueMaxScores[d.id] = 0; });
  assessment.questions.forEach(question => {
    const dimMax: Record<string, number> = {};
    question.options.forEach(option => {
      Object.entries(option.scores).forEach(([dimId, score]) => {
        if (!dimMax[dimId] || score > dimMax[dimId]) {
          dimMax[dimId] = score;
        }
      });
    });
    Object.entries(dimMax).forEach(([dimId, max]) => {
      trueMaxScores[dimId] = (trueMaxScores[dimId] || 0) + max;
    });
  });

  return {
    assessmentId: assessment.meta.id,
    primaryDimensionId: primaryDimId,
    freeResult: {
      profileName: primaryProfile?.name || '未知类型',
      profileBrief: primaryProfile?.brief || '',
      dimensionBreakdown: assessment.dimensions.map(d => ({
        dimensionId: d.id,
        name: d.name,
        color: d.color,
        score: dimensionScores[d.id] || 0,
        maxScore: trueMaxScores[d.id] || 0,
        percentage: trueMaxScores[d.id] ? Math.round((dimensionScores[d.id] || 0) / trueMaxScores[d.id] * 100) : 0,
      })),
    },
    paidResult: {
      profileDescription: primaryProfile?.description || '',
      traits: primaryProfile?.traits || [],
      suggestions: primaryProfile?.suggestions || [],
      compatibilityNotes: primaryProfile?.compatibilityNotes || [],
      detailedSections: assessment.detailedSections || [],
    },
  };
}