'use client';

import React from 'react';
import { Question } from '@/lib/types';
import { CheckCircle2, XCircle, Lightbulb } from 'lucide-react';

interface QuestionDisplayProps {
    question: Question;
    selectedOption: string | undefined;
    onSelectOption: (optionId: string) => void;
    mode: 'study' | 'exam';
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
    question,
    selectedOption,
    onSelectOption,
    mode
}) => {
    const isSelected = (label: string) => selectedOption === label;
    const showResult = mode === 'study' && selectedOption;
    const isCorrect = selectedOption === question.correctAnswer;

    return (
        <div className="animate-fade-in max-w-3xl mx-auto md:py-4">
            {/* Question Text */}
            <div className="space-y-6 mb-8 md:mb-10">
                <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-6 px-3 text-[10px] font-extrabold tracking-widest text-emerald-600 bg-emerald-50 rounded-md border border-emerald-100 uppercase">
                        {question.category}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {question.type === 'single' ? 'Single Choice' : 'True / False'}
                    </span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug tracking-tight">
                    {question.text}
                </h3>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {question.options.map((option) => {
                    const active = isSelected(option.label);

                    // Style Calculation
                    let baseClass = "relative w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col gap-3 group outline-none";
                    let stateClass = "bg-white border-slate-100 shadow-sm hover:border-emerald-200 hover:bg-emerald-50/30"; // Default

                    // Badge Style
                    let badgeBase = "w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold border transition-colors";
                    let badgeState = "bg-slate-50 border-slate-200 text-slate-400 group-hover:text-emerald-500 group-hover:border-emerald-200";

                    if (mode === 'study' && showResult) {
                        if (option.label === question.correctAnswer) {
                            stateClass = "bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500";
                            badgeState = "bg-emerald-500 border-emerald-500 text-white";
                        } else if (active) {
                            stateClass = "bg-rose-50 border-rose-500 ring-1 ring-rose-500";
                            badgeState = "bg-rose-500 border-rose-500 text-white";
                        } else {
                            stateClass = "bg-slate-50 border-transparent opacity-50";
                        }
                    } else if (active) {
                        stateClass = "bg-emerald-600 border-emerald-600 shadow-xl shadow-emerald-200 transform scale-[1.02] z-10";
                        badgeState = "bg-white/20 border-transparent text-white";
                    }

                    return (
                        <button
                            key={option.id}
                            onClick={() => !showResult && onSelectOption(option.label)}
                            disabled={!!showResult}
                            className={`${baseClass} ${stateClass}`}
                        >
                            <div className="flex items-center justify-between w-full">
                                <span className={`${badgeBase} ${badgeState}`}>
                                    {option.label}
                                </span>
                                {mode === 'study' && showResult && option.label === question.correctAnswer && (
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                )}
                                {mode === 'study' && showResult && active && option.label !== question.correctAnswer && (
                                    <XCircle className="w-5 h-5 text-rose-600" />
                                )}
                            </div>
                            <span className={`text-sm md:text-base font-medium leading-relaxed ${active && !showResult ? 'text-white' : 'text-slate-700'}`}>
                                {option.text}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Explanation (Study Mode Only) */}
            {mode === 'study' && showResult && (
                <div className={`
          relative overflow-hidden rounded-2xl border animate-slide-up
          ${isCorrect ? 'bg-emerald-50/50 border-emerald-200' : 'bg-teal-50/50 border-teal-200'}
        `}>
                    <div className="p-6 md:p-8">
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className={`p-1.5 rounded-lg ${isCorrect ? 'bg-emerald-100' : 'bg-teal-100'}`}>
                                <Lightbulb className={`w-4 h-4 ${isCorrect ? 'text-emerald-600' : 'text-teal-600'}`} />
                            </div>
                            <h4 className={`text-sm font-bold uppercase tracking-wider ${isCorrect ? 'text-emerald-700' : 'text-teal-700'}`}>
                                解析 Analysis
                            </h4>
                        </div>
                        <p className={`text-sm md:text-base leading-relaxed ${isCorrect ? 'text-emerald-900' : 'text-teal-900'}`}>
                            {question.explanation || "暂无详细解析"}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
