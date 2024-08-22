import React from 'react';

interface InputProps {
    id: string;
    name: string;
    type?: string;
    value?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    id,
    name,
    type = 'text',
    value,
    placeholder,
    onChange,
    className = '',
    disabled = false,
}) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
            disabled={disabled}
        />
    );
};

export default Input;
