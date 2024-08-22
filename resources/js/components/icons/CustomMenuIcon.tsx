import React from 'react';

const CustomMenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="26" cy="26" r="26" fill="#253BFF" />
        <rect x="17.6562" y="17.6699" width="6.69214" height="6.69336" rx="1" fill="white" />
        <rect x="17.6562" y="27.6523" width="6.69214" height="6.69336" rx="1" fill="white" />
        <rect x="27.6539" y="27.6523" width="6.69214" height="6.69336" rx="1" fill="white" />
        <circle cx="30.9871" cy="21.041" r="3.69067" fill="white" />
    </svg>
);

export default CustomMenuIcon;
