'use client';

import React from 'react';
import { QuizState, Question } from '@/lib/types';
import { Button } from './Button';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { RotateCcw, Home, Check, X, Trophy } from 'lucide-react';

interface ResultScreenProps {
    state: QuizState;
    questions: Question[];
    onRetry: () => void;
    onHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
    state,
    questions,
    onRetry,
    onHome
}) => {
    const correctCount = questions.reduce((acc, q) => {
        return acc + (state.answers[q.id] === q.correctAnswer ? 1 : 0);
    }, 0);

    const total = questions.length;
    const percentage = Math.round((correctCount / total) * 100);
    const wrongCount = total - correctCount;

    // Data for the Donut Chart
    const data = [
        { name: 'Correct', value: correctCount, color: '#059669' }, // emerald-600
        { name: 'Wrong', value: wrongCount, color: '#e2e8f0' },     // slate-200
    ];
    const chartData = total > 0 ? data : [{ name: 'Empty', value: 1, color: '#f1f5f9' }];

    return (
        <div className="h-full flex flex-col md:flex-row gap-6 md:gap-12 animate-fade-in overflow-hidden">

            {/* Left Column: Visual Summary */}
            <div className="md:w-5/12 lg:w-1/3 flex flex-col justify-center">
                <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-100 relative overflow-hidden text-center">

                    <h2 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">Performance</h2>

                    <div className="relative w-56 h-56 mx-auto mb-6">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={90}
                                    startAngle={90}
                                    endAngle={-270}
                                    paddingAngle={5}
                                    cornerRadius={8}
                                    dataKey="value"
                                    stroke="none"
                                    isAnimationActive={true}
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-6xl font-black text-slate-900 tracking-tight">{percentage}</span>
                            <span className="text-sm font-bold text-slate-400">% SCORE</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-emerald-50 rounded-2xl p-3">
                            <span className="block text-xl font-bold text-emerald-600">{correctCount}</span>
                            <span className="text-[10px] font-bold text-emerald-500 uppercase">Correct</span>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-3">
                            <span className="block text-xl font-bold text-slate-600">{wrongCount}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Incorrect</span>
                        </div>
                    </div>

                    {/* Desktop Actions (Hidden on Mobile) */}
                    <div className="hidden md:flex flex-col gap-3">
                        <Button variant="primary" fullWidth onClick={onRetry} className="py-4 shadow-emerald-200">
                            <RotateCcw className="w-4 h-4 mr-2" /> Try Again
                        </Button>
                        <Button variant="secondary" fullWidth onClick={onHome} className="py-4 bg-slate-50 border-slate-100 text-slate-500 hover:bg-slate-100">
                            <Home className="w-4 h-4 mr-2" /> Dashboard
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right Column: Detailed Review List */}
            <div className="md:w-7/12 lg:w-2/3 flex flex-col h-full overflow-hidden">
                <div className="flex items-center justify-between mb-4 px-2">
                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-orange-500" />
                        Review Answers
                    </h3>
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                        {questions.length} Items
                    </span>
                </div>

                <div className="flex-grow overflow-y-auto pr-2 space-y-3 no-scrollbar pb-24 md:pb-0">
                    {questions.map((q, idx) => {
                        const userAnswer = state.answers[q.id];
                        const isCorrect = userAnswer === q.correctAnswer;

                        return (
                            <div key={q.id} className="bg-white rounded-xl p-4 border border-slate-100 hover:border-emerald-100 transition-colors flex gap-4 group">
                                <div className={`
                  flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold mt-0.5 border
                  ${isCorrect
                                        ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                                        : 'bg-rose-50 border-rose-100 text-rose-500'}
                `}>
                                    {isCorrect ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="flex justify-between items-start">
                                        <p className="text-sm font-bold text-slate-700 mb-2 leading-relaxed line-clamp-2">
                                            {q.text}
                                        </p>
                                        <span className="text-[10px] font-bold text-slate-300 ml-2">Q{idx + 1}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs">
                                        <div className={`px-2 py-1 rounded-md font-medium border ${isCorrect ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-rose-50 border-rose-100 text-rose-700'}`}>
                                            You: {userAnswer || '-'}
                                        </div>
                                        {!isCorrect && (
                                            <div className="px-2 py-1 rounded-md font-medium bg-slate-50 border border-slate-200 text-slate-500">
                                                Ans: {q.correctAnswer}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Sticky Actions */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-200 p-4 pb-6 z-30">
                <div className="flex gap-3">
                    <Button variant="secondary" fullWidth onClick={onHome} className="py-3.5 text-slate-500 bg-slate-100 border-transparent">
                        <Home className="w-4 h-4" />
                    </Button>
                    <Button variant="primary" fullWidth onClick={onRetry} className="flex-[3] py-3.5 shadow-emerald-200">
                        Try Again
                    </Button>
                </div>
            </div>

        </div>
    );
};
