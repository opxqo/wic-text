'use client';

import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import { BookOpen, Clock, BarChart3, Layers, Database, Code2, Server, Check, Zap, GraduationCap, Trophy, LogOut } from 'lucide-react';
import { CATEGORIES, QUESTIONS } from '@/lib/data';

interface DashboardProps {
    username: string;
    answers: Record<number, string>;
    onStart: (mode: 'study' | 'exam', category: string) => void;
    onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ username, answers, onStart, onLogout }) => {
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [timeLeft, setTimeLeft] = useState('');

    // Stats Calculation
    const totalAnswered = Object.keys(answers).length;
    const totalQuestions = QUESTIONS.length; // 372
    const progressPercent = Math.round((totalAnswered / totalQuestions) * 100) || 0;

    // Real School Stats
    const [schoolTotal, setSchoolTotal] = useState(0);

    // Fetch Stats
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/stats');
                const data = await res.json();
                if (data.count !== undefined) {
                    setSchoolTotal(data.count);
                }
            } catch (error) {
                console.error('Failed to fetch stats:', error);
            }
        };

        fetchStats();
        // Poll every 30 seconds for updates
        const interval = setInterval(fetchStats, 30000);
        return () => clearInterval(interval);
    }, []);

    // Countdown Logic
    useEffect(() => {
        const targetDate = new Date('2025-12-17T12:00:00');

        const updateTimer = () => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            if (diff <= 0) {
                setTimeLeft('考试进行中');
                return;
            }

            const totalSeconds = Math.floor(diff / 1000);
            setTimeLeft(`${totalSeconds.toLocaleString()} 秒`);
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000); // Update every second
        return () => clearInterval(interval);
    }, []);

    const getIconForCategory = (cat: string) => {
        switch (cat) {
            case 'Spring': return <Layers className="w-5 h-5" />;
            case 'SpringMVC': return <Server className="w-5 h-5" />;
            case 'MyBatis': return <Database className="w-5 h-5" />;
            case 'SpringBoot': return <Code2 className="w-5 h-5" />;
            default: return <BookOpen className="w-5 h-5" />;
        }
    };

    return (
        <div className="h-full flex flex-col md:flex-row gap-8 lg:gap-12 animate-fade-in">

            {/* Left Column (Desktop): Info & Branding */}
            <div className="md:w-5/12 lg:w-1/3 flex flex-col justify-center space-y-6 md:space-y-8">
                <div className="space-y-4">
                    <img
                        src="https://r2.wic.edu.kg/images/logo2.svg"
                        alt="Wuhan City College Logo"
                        className="h-10 md:h-12 w-auto object-contain mb-2 origin-left"
                    />
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
                        <span className="block text-xl text-slate-400 font-bold tracking-widest uppercase mb-1">
                            Hi, {username}
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 animate-pulse-subtle">
                            Web企业级开发
                        </span>
                    </h1>
                    <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-sm">
                        考试选判题练习系统。涵盖 Spring、MVC、MyBatis 等核心技术栈，助力课程考核通关。
                    </p>
                    <button
                        onClick={onLogout}
                        className="text-xs font-bold text-slate-400 hover:text-rose-500 flex items-center gap-1 transition-colors"
                    >
                        <LogOut className="w-3 h-3" /> 退出登录
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <Zap className="w-6 h-6 text-emerald-600 mb-2" />
                        <div className="text-2xl font-bold text-emerald-900">{schoolTotal.toLocaleString()}</div>
                        <div className="text-xs text-emerald-600/70 font-bold uppercase">全校刷题数</div>
                    </div>
                    <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100">
                        <Clock className="w-6 h-6 text-teal-600 mb-2" />
                        <div className="text-2xl font-bold text-teal-900">{timeLeft}</div>
                        <div className="text-xs text-teal-600/70 font-bold uppercase">考试倒计时</div>
                    </div>
                </div>
            </div>

            {/* Right Column (Desktop): Interaction Area */}
            <div className="md:w-7/12 lg:w-2/3 flex flex-col gap-6 md:bg-slate-50/50 md:p-6 md:rounded-3xl md:border md:border-slate-100 justify-between">

                <div className="space-y-6">
                    {/* Category Selector */}
                    <section className="space-y-3">
                        <div className="flex items-center justify-between px-1">
                            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <BarChart3 className="w-4 h-4" />
                                选择知识点
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`
                    relative flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 outline-none
                    ${selectedCategory === cat
                                            ? 'border-emerald-600 bg-white shadow-md ring-1 ring-emerald-600 z-10'
                                            : 'border-slate-200 bg-white text-slate-500 hover:border-emerald-300 hover:bg-emerald-50'}
                  `}
                                >
                                    <div className={`
                      p-2 rounded-lg transition-colors
                      ${selectedCategory === cat ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'}
                    `}>
                                        {getIconForCategory(cat)}
                                    </div>
                                    <span className={`text-xs md:text-sm font-bold ${selectedCategory === cat ? 'text-slate-800' : 'text-slate-500'}`}>
                                        {cat === 'All' ? '综合复习' : cat}
                                    </span>
                                    {selectedCategory === cat && (
                                        <div className="absolute top-2 right-2">
                                            <Check className="w-3 h-3 text-emerald-600" />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Mode Selector */}
                    <section className="space-y-3">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                            <Clock className="w-4 h-4" />
                            开始练习
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Card
                                className="p-6 relative group border-0 bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex flex-col justify-between min-h-[140px]"
                                onClick={() => onStart('study', selectedCategory)}
                                hoverEffect={true}
                            >
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-md">推荐</span>
                                    </div>
                                    <h3 className="text-2xl font-black mb-1">背题模式</h3>
                                    <p className="text-emerald-50 text-xs opacity-80 leading-relaxed">
                                        即时反馈 · 详细解析 · 碎片学习
                                    </p>
                                </div>
                                <div className="self-end p-2 bg-white/20 rounded-xl backdrop-blur-md group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                            </Card>

                            <Card
                                className="p-6 relative group border border-slate-200 bg-white text-slate-800 flex flex-col justify-between min-h-[140px]"
                                onClick={() => onStart('exam', selectedCategory)}
                                hoverEffect={true}
                            >
                                <div>
                                    <div className="mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded">SIMULATION</span>
                                    </div>
                                    <h3 className="text-2xl font-black mb-1 text-slate-900">考题模式</h3>
                                    <p className="text-slate-500 text-xs leading-relaxed">
                                        限时答题 · 统一计分 · 模拟考试
                                    </p>
                                </div>
                                <div className="self-end p-2 bg-slate-100 rounded-xl group-hover:bg-slate-200 transition-colors group-hover:scale-110 transition-transform">
                                    <Clock className="w-6 h-6 text-slate-600" />
                                </div>
                            </Card>
                        </div>
                    </section>
                </div>

                {/* Footer / Stats Section */}
                <section className="pt-5 border-t border-slate-200/60 mt-4 md:mt-0">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <Trophy className="w-3 h-3 text-amber-500" />
                            个人进度 Personal Progress (已刷 {totalAnswered} 题)
                        </span>
                        <span className="text-xs font-bold text-emerald-600 font-mono">{progressPercent}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all duration-1000 ease-out"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                    <div className="flex gap-6 mt-3">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>已掌握: {totalAnswered}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                            <span>未学习: {totalQuestions - totalAnswered}</span>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};
