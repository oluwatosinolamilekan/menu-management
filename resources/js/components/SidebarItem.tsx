// import React from 'react';

// interface SidebarItemProps {
//     icon: React.ReactNode;
//     title: string;
//     active: boolean;
// }

// const SidebarItem: React.FC<SidebarItemProps> = ({ icon, title, active }) => {
//     return (
//         <li className={`flex items-center px-4 py-2 text-sm rounded-lg cursor-pointer ${active ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-gray-300'}`}>
//             <span className="mr-3">{icon}</span>
//             <span>{title}</span>
//         </li>
//     );
// };

// export default SidebarItem;

import React from 'react';

interface SidebarItemProps {
    icon: React.ReactNode;
    title: string;
    active: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, title, active }) => {
    return (
        <li>
            <a
                href="#"
                className={`flex items-center p-2 text-base font-normal rounded-lg ${active ? 'bg-lime-400 text-black' : 'text-gray-400'} hover:bg-lime-300`}
            >
                {icon}
                <span className="ml-3">{title}</span>
            </a>
        </li>
    );
};

export default SidebarItem;
