'use client';

import React, { useState } from 'react';
import { User } from 'lucide-react';

interface LoginModalProps {
    onLogin: (username: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username.trim()) {
            setError('请输入姓名');
            return;
        }
        onLogin(username.trim());
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-scale-in">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white text-center">
                    <h2 className="text-2xl font-black mb-1">欢迎回来</h2>
                    <p className="text-emerald-50 text-sm opacity-90">Web企业级开发练习系统</p>
                </div>

                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="username" className="text-sm font-bold text-slate-700 uppercase tracking-wider block">
                                您的姓名
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <User className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                        setError('');
                                    }}
                                    className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-slate-900 placeholder:text-slate-400 font-medium"
                                    placeholder="请输入您的姓名开始练习..."
                                    autoFocus
                                />
                            </div>
                            {error && <p className="text-red-500 text-xs font-bold animate-shake">{error}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            进入系统
                        </button>
                    </form>

                    <p className="mt-6 text-center text-xs text-slate-400">
                        您的练习进度将保存在本地
                    </p>
                </div>
            </div>
        </div>
    );
};
