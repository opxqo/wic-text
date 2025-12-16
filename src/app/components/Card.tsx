'use client';

import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    onClick,
    hoverEffect = false
}) => {
    return (
        <div
            onClick={onClick}
            className={`
        bg-white rounded-2xl border border-slate-100 shadow-sm
        ${hoverEffect ? 'hover:shadow-md hover:border-indigo-100 cursor-pointer transition-all duration-300' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
};
