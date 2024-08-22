// import React, { ReactNode } from 'react';
// import Sidebar from './Sidebar';

// interface MainLayoutProps {
//     children: ReactNode;
// }

// const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
//     return (
//         <div className="flex h-screen bg-gray-100">
//             <Sidebar />
//             <div className="flex-1 p-6">
//                 {children}
//             </div>
//         </div>
//     );
// };

// export default MainLayout;

import React from 'react';
import Sidebar from './Sidebar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 p-6">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
