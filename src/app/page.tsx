'use client';

import React, { useState, useEffect } from 'react';
import { QUESTIONS } from '@/lib/data';
import { QuizState, Question } from '@/lib/types';
import { Dashboard } from './components/Dashboard';
import { QuestionDisplay } from './components/QuestionDisplay';
import { ResultScreen } from './components/ResultScreen';
import { Button } from './components/Button';
import { LoginModal } from './components/LoginModal';
import { ArrowLeft, ArrowRight, Clock, Flame, X } from 'lucide-react';

const INITIAL_STATE: QuizState = {
  answers: {},
  currentQuestionIndex: 0,
  isComplete: false,
  score: 0,
  timeRemaining: 0,
  mode: null,
  selectedCategory: 'All'
};

export default function Home() {
  const [username, setUsername] = useState<string | null>(null);
  const [gameState, setGameState] = useState<QuizState>(INITIAL_STATE);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [globalAnswers, setGlobalAnswers] = useState<Record<string, string>>({}); // Persisted answers for the user

  // Load User and Answers on Mount
  useEffect(() => {
    const savedUser = localStorage.getItem('wic_username');
    if (savedUser) {
      setUsername(savedUser);
      loadUserProgress(savedUser);
    }
  }, []);

  const loadUserProgress = (user: string) => {
    const saved = localStorage.getItem(`wic_answers_${user}`);
    if (saved) {
      try {
        setGlobalAnswers(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    } else {
      setGlobalAnswers({});
    }
  };

  const handleLogin = (user: string) => {
    localStorage.setItem('wic_username', user);
    setUsername(user);
    loadUserProgress(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('wic_username');
    setUsername(null);
    setGlobalAnswers({});
    setGameState(INITIAL_STATE);
  }

  // Timer Effect
  useEffect(() => {
    let timer: number;
    if (gameState.mode === 'exam' && !gameState.isComplete && gameState.timeRemaining > 0) {
      timer = window.setInterval(() => {
        setGameState(prev => {
          if (prev.timeRemaining <= 1) {
            return { ...prev, isComplete: true, timeRemaining: 0 };
          }
          return { ...prev, timeRemaining: prev.timeRemaining - 1 };
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState.mode, gameState.isComplete, gameState.timeRemaining]);

  const handleStart = (mode: 'study' | 'exam', category: string) => {
    const questions = category === 'All'
      ? QUESTIONS
      : QUESTIONS.filter(q => q.category === category);

    const shuffled = [...questions].sort(() => Math.random() - 0.5);

    setFilteredQuestions(shuffled);
    setGameState({
      ...INITIAL_STATE,
      mode,
      selectedCategory: category,
      timeRemaining: mode === 'exam' ? shuffled.length * 60 : 0
    });
  };

  const handleAnswer = (optionLabel: string) => {
    const currentQ = filteredQuestions[gameState.currentQuestionIndex];

    // Update Session State
    setGameState(prev => ({
      ...prev,
      answers: { ...prev.answers, [currentQ.id]: optionLabel }
    }));

    // Update Global Persistence
    if (username) {
      const newGlobal = { ...globalAnswers, [currentQ.id]: optionLabel };
      setGlobalAnswers(newGlobal);
      localStorage.setItem(`wic_answers_${username}`, JSON.stringify(newGlobal));

      // Increment Server Stats
      fetch('/api/stats', { method: 'POST' }).catch(err => console.error('Failed to update stats', err));
    }
  };

  const handleNext = () => {
    if (gameState.currentQuestionIndex < filteredQuestions.length - 1) {
      setGameState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 }));
    } else {
      setGameState(prev => ({ ...prev, isComplete: true }));
    }
  };

  const handlePrev = () => {
    if (gameState.currentQuestionIndex > 0) {
      setGameState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex - 1 }));
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // --- CONTENT RENDERING ---

  const renderContent = () => {
    if (!username) {
      return <LoginModal onLogin={handleLogin} />;
    }

    // 1. Dashboard View
    if (!gameState.mode) {
      return (
        <Dashboard
          username={username}
          answers={globalAnswers}
          onStart={handleStart}
          onLogout={handleLogout}
        />
      );
    }

    // 2. Result View
    if (gameState.isComplete) {
      return (
        <ResultScreen
          state={gameState}
          questions={filteredQuestions}
          onRetry={() => handleStart(gameState.mode!, gameState.selectedCategory)}
          onHome={() => setGameState(INITIAL_STATE)}
        />
      );
    }

    // 3. Quiz View
    const currentQuestion = filteredQuestions[gameState.currentQuestionIndex];
    const progress = ((gameState.currentQuestionIndex + 1) / filteredQuestions.length) * 100;

    return (
      <div className="flex flex-col h-full">
        {/* Quiz Header */}
        <header className="flex items-center justify-between py-4 px-1 md:py-0 md:h-20 shrink-0">
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => setGameState(INITIAL_STATE)}
              className="p-2 md:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
                {gameState.mode === 'study' ? '练习模式' : '考试模式'}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg md:text-xl font-black text-slate-800 font-mono">
                  {gameState.currentQuestionIndex + 1}
                </span>
                <span className="text-xs text-slate-400 font-bold font-mono">
                  /{filteredQuestions.length}
                </span>
              </div>
            </div>
          </div>

          {gameState.mode === 'exam' ? (
            <div className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-mono font-bold text-sm border ${gameState.timeRemaining < 60 ? 'bg-red-50 text-red-600 border-red-200' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
              <Clock className="w-4 h-4" />
              {formatTime(gameState.timeRemaining)}
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-orange-50 text-orange-600 rounded-lg text-sm font-bold border border-orange-100">
              <Flame className="w-4 h-4" />
              <span>背题中</span>
            </div>
          )}
        </header>

        {/* Progress Bar (Mobile only visible here, Desktop integrated elsewhere) */}
        <div className="h-1 bg-slate-100 w-full mb-6 md:mb-8 rounded-full overflow-hidden shrink-0">
          <div
            className="h-full bg-emerald-600 transition-all duration-300 ease-out rounded-full shadow-[0_0_10px_rgba(5,150,105,0.4)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question Area */}
        <div className="flex-grow overflow-y-auto no-scrollbar pb-24 md:pb-0">
          <QuestionDisplay
            question={currentQuestion}
            selectedOption={gameState.answers[currentQuestion.id]}
            onSelectOption={handleAnswer}
            mode={gameState.mode}
          />
        </div>

        {/* Footer Actions */}
        <div className="fixed md:static bottom-0 left-0 right-0 p-4 md:p-0 bg-white/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-t md:border-t-0 border-slate-100 md:mt-8 z-30">
          <div className="flex gap-4">
            <Button
              variant="secondary"
              onClick={handlePrev}
              disabled={gameState.currentQuestionIndex === 0}
              className="flex-1 md:flex-none md:w-32"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> 上一题
            </Button>

            {gameState.currentQuestionIndex === filteredQuestions.length - 1 ? (
              <Button
                variant="primary"
                onClick={handleNext}
                className="flex-[2] md:flex-1 shadow-emerald-200"
              >
                提交试卷
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={handleNext}
                className="flex-[2] md:flex-1 shadow-emerald-200"
              >
                下一题 <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // --- MAIN LAYOUT STRUCTURE ---

  return (
    <div className="min-h-[100dvh] md:min-h-screen flex items-center justify-center p-0 md:p-6 lg:p-12">

      {/* Mobile: Full Screen, White Background */}
      <div className="md:hidden w-full h-[100dvh] bg-white flex flex-col overflow-hidden">
        <main className="flex-grow overflow-y-auto px-5 py-6 no-scrollbar">
          {renderContent()}
        </main>
      </div>

      {/* Desktop: Floating Glass Card */}
      <div className="hidden md:block w-full max-w-5xl bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/50 overflow-hidden relative min-h-[500px] lg:min-h-[600px] flex flex-col transition-all duration-500">

        {/* Decorative elements for desktop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col flex-grow">
          {renderContent()}
        </div>
      </div>

      {/* Copyright Footer (Desktop) */}
      <div className="hidden md:block fixed bottom-4 text-emerald-800/40 text-xs font-medium tracking-widest uppercase">
        武汉城市学院 © 2024
      </div>
    </div>
  );
}
