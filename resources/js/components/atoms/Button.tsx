import React from 'react';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type = 'button',
    onClick,
    children,
    className = '',
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
