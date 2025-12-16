export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Option {
    id: string;
    text: string;
    label: string; // A, B, C, D
}

export interface Question {
    id: string; // Changed from number to string to match data like "372-A"
    category: string;
    text: string;
    options: Option[];
    correctAnswer: string; // The label (A, B, C, D) or 'T'/'F' for True/False
    type: 'single' | 'boolean';
    explanation?: string;
}

export interface QuizState {
    answers: Record<string, string>; // questionId -> selectedOptionLabel
    currentQuestionIndex: number;
    isComplete: boolean;
    score: number;
    timeRemaining: number; // in seconds
    mode: 'study' | 'exam' | null;
    selectedCategory: string | 'All';
}

export interface CategoryStats {
    category: string;
    total: number;
    mastered: number;
}
