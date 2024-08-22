// import React from 'react';
// import SidebarItem from './SidebarItem';
// import {  HomeIcon, CogIcon, UserGroupIcon, FolderIcon, MinusIcon } from '@heroicons/react/24/solid'


// const Sidebar: React.FC = () => {
//     const menuItems = [
//         { title: 'Systems', icon: <HomeIcon className="h-5 w-5" />, active: false },
//         { title: 'System Code', icon: <CogIcon className="h-5 w-5" />, active: false },
//         { title: 'Properties', icon: <CogIcon className="h-5 w-5" />, active: false },
//         { title: 'Menus', icon: <CogIcon className="h-5 w-5" />, active: true },
//         { title: 'API List', icon: <UserGroupIcon className="h-5 w-5" />, active: false },
//         { title: 'Users & Group', icon: <FolderIcon className="h-5 w-5" />, active: false },
//         { title: 'Competition', icon: <FolderIcon className="h-5 w-5" />, active: false },
//     ];

//     return (
//         <div className="relative w-64 bg-gray-900 text-white h-full">
//             <div className="p-4 font-bold text-xl flex justify-between items-center">
//                 <span>CLOIT</span>
//                 <MinusIcon className="w-6 h-6 cursor-pointer" />
//             </div>
//             <aside className="w-64" aria-label="Sidebar">
//                 <div className="px-3 py-4 overflow-y-auto rounded">
//                     <ul className='space-y-2'>
//                         {menuItems.map((item, index) => (
//                             <SidebarItem
//                                 key={index}
//                                 icon={item.icon}
//                                 title={item.title}
//                                 active={item.active}
//                             />
//                         ))}
//                     </ul>
//                 </div>
//             </aside>
//         </div>
//     );
// };

// export default Sidebar;

import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import { HomeIcon, CogIcon, UserGroupIcon, FolderIcon, MinusIcon } from '@heroicons/react/24/solid';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: 'Systems', icon: <HomeIcon className="h-5 w-5" />, active: false },
        { title: 'System Code', icon: <CogIcon className="h-5 w-5" />, active: false },
        { title: 'Properties', icon: <CogIcon className="h-5 w-5" />, active: false },
        { title: 'Menus', icon: <CogIcon className="h-5 w-5" />, active: true },
        { title: 'API List', icon: <UserGroupIcon className="h-5 w-5" />, active: false },
        { title: 'Users & Group', icon: <FolderIcon className="h-5 w-5" />, active: false },
        { title: 'Competition', icon: <FolderIcon className="h-5 w-5" />, active: false },
    ];

    return (
        <>
            {/* Toggle Button for Mobile */}
            <button
                className="lg:hidden p-4 text-gray-900"
                onClick={() => setIsOpen(!isOpen)}
            >
                <MinusIcon className="h-6 w-6" />
            </button>

            {/* Sidebar */}
            <div
                className={`fixed inset-0 z-30 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                            lg:relative lg:translate-x-0 w-64 bg-gray-900 text-white h-full transition-transform duration-300 ease-in-out`}
            >
                <div className="p-4 font-bold text-xl flex justify-between items-center">
                    <span>CLOIT</span>
                    <button onClick={() => setIsOpen(false)} className="lg:hidden">
                        <MinusIcon className="w-6 h-6 cursor-pointer" />
                    </button>
                </div>
                <aside className="w-64" aria-label="Sidebar">
                    <div className="px-3 py-4 overflow-y-auto rounded">
                        <ul className='space-y-2'>
                            {menuItems.map((item, index) => (
                                <SidebarItem
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    active={item.active}
                                />
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>

            {/* Overlay to close sidebar when clicking outside on mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Sidebar;
