'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Assessment } from '@/lib/types';
import { computeResult } from '@/lib/scoring';

export default function QuizClient({ assessment }: { assessment: Assessment }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalQuestions = assessment.questions.length;
  const currentQuestion = assessment.questions[currentIndex];
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswers = { ...answers, [currentQuestion.id]: selectedOption };
    setAnswers(newAnswers);
    setSelectedOption(null);
    setIsTransitioning(true);

    if (currentIndex + 1 < totalQuestions) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsTransitioning(false);
      }, 200);
    } else {
      const result = computeResult(assessment, newAnswers);
      const resultKey = `result-${assessment.meta.id}-${Date.now()}`;
      localStorage.setItem(resultKey, JSON.stringify(result));
      router.push(`/result/${assessment.meta.id}?key=${resultKey}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-text-muted mb-2">
          <span>{assessment.meta.title}</span>
          <span>{currentIndex + 1} / {totalQuestions}</span>
        </div>
        <div className="w-full h-2 bg-bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div className="bg-white rounded-xl border border-border p-6 mb-6">
          <p className="text-lg font-medium text-primary leading-relaxed">
            {currentQuestion.text}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map(option => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full text-left px-5 py-4 rounded-lg border transition-all duration-200 ${
                selectedOption === option.id
                  ? 'border-accent bg-accent/10 text-accent font-medium shadow-sm'
                  : 'border-border bg-white text-text-secondary hover:border-accent/50 hover:bg-bg-secondary'
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>

        {/* Next button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`px-8 py-3 rounded-lg font-bold text-base transition-all duration-200 ${
              selectedOption
                ? 'bg-primary text-white hover:bg-primary-light shadow-md'
                : 'bg-bg-secondary text-text-muted cursor-not-allowed'
            }`}
          >
            {currentIndex + 1 < totalQuestions ? '下一题' : '查看结果'}
          </button>
        </div>
      </div>
    </div>
  );
}