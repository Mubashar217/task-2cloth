'use client';

import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, className, variant = 'primary', ...props }) => {
  return (
    <button
      className={clsx(
        'px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200',
        variant === 'primary' &&
          'bg-green-500 text-white hover:bg-green-600 shadow-md',
        variant === 'outline' &&
          'border border-gray-300 text-gray-700 hover:bg-gray-100',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
