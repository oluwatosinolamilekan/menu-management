// import React from 'react';
// import { FolderIcon } from '@heroicons/react/24/solid';
// import MainLayout from './components/MainLayout';
// import HierarchicalMenu from './components/HierarchicalMenu';
// import Button from './components/atoms/Button';
// import Input from './components/atoms/Input';
// import Label from './components/atoms/Label';
// import CustomMenuIcon from './components/icons/CustomMenuIcon'

// const Main: React.FC = () => {
//     const [menuId, setMenuId] = React.useState('');
//     const [depth, setDepth] = React.useState('');
//     const [parentData, setParentData] = React.useState('');
//     const [name, setName] = React.useState('');

//     const handleSave = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Handle the save action here
//     };

//     return (
//         <MainLayout>
//             <div className="flex items-center space-x-2 mb-4">
//                 <FolderIcon className="h-8 w-8 text-gray-700" />
//                 <h1 className="text-xl">Menus</h1>
//             </div>

//             <div className="mt-8 rounded-lg p-6">
//                 <div className="flex items-center space-x-2 mb-4">
//                     <div className="p-2 rounded-full">
//                         <CustomMenuIcon className="h-8 w-8" />
//                     </div>
//                     <Label htmlFor="menu" className="text-lg font-medium">Menus</Label>
//                 </div>
//                 <div className="flex justify-between items-center">
//                     <select className="h-full rounded border-gray-300 ml-4 p-2 py-0 pl-2 pr-7">
//                         <option>System Management</option>
//                     </select>
//                 </div>
//             </div>

        
//             <div className="flex space-x-8">
//                 <div className="w-1/2">
//                     <HierarchicalMenu />
//                 </div>

//                 <div className="w-1/2">
//                     <form className="space-y-4" onSubmit={handleSave}>
//                         <div>
//                             <Label htmlFor="menuId">Menu ID</Label>
//                             <Input
//                                 id="menuId"
//                                 name="menuId"
//                                 type="text"
//                                 value={menuId}
//                                 onChange={(e) => setMenuId(e.target.value)}
//                                 placeholder="56320ee9-6af6-11ed-a7ba-f220afe5e4a9"
//                                 className="w-1/2"
//                             />
//                         </div>
//                         <div>
//                             <Label htmlFor="depth">Depth</Label>
//                             <Input
//                                 id="depth"
//                                 name="depth"
//                                 type="text"
//                                 value={depth}
//                                 onChange={(e) => setDepth(e.target.value)}
//                                 placeholder="3"
//                             />
//                         </div>
//                         <div>
//                             <Label htmlFor="parentData">Parent Data</Label>
//                             <Input
//                                 id="parentData"
//                                 name="parentData"
//                                 type="text"
//                                 value={parentData}
//                                 onChange={(e) => setParentData(e.target.value)}
//                                 placeholder="Systems"
//                             />
//                         </div>
//                         <div>
//                             <Label htmlFor="name">Name</Label>
//                             <Input
//                                 id="name"
//                                 name="name"
//                                 type="text"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 placeholder="System Code"
//                             />
//                         </div>
//                         <div className="flex space-x-4">
//                             <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
//                                 Save
//                             </Button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </MainLayout>
//     );
// };

// export default Main;

import React from 'react';
import { FolderIcon } from '@heroicons/react/24/solid';
import MainLayout from './components/MainLayout';
import HierarchicalMenu from './components/HierarchicalMenu';
import Button from './components/atoms/Button';
import Input from './components/atoms/Input';
import Label from './components/atoms/Label';
import CustomMenuIcon from './components/icons/CustomMenuIcon';

const Main: React.FC = () => {
    const [menuId, setMenuId] = React.useState('');
    const [depth, setDepth] = React.useState('');
    const [parentData, setParentData] = React.useState('');
    const [name, setName] = React.useState('');

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the save action here
    };

    return (
        <MainLayout>
            <div className="flex items-center space-x-2 mb-4">
                <FolderIcon className="h-8 w-8 text-gray-700" />
                <h1 className="text-xl">Menus</h1>
            </div>

            <div className="mt-8 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                    <div className="p-2 rounded-full">
                        <CustomMenuIcon className="h-8 w-8" />
                    </div>
                    <Label htmlFor="menu" className="text-lg font-medium">Menus</Label>
                </div>
                <div className="flex justify-between items-center">
                    <select className="h-full rounded border-gray-300 ml-4 p-2 py-0 pl-2 pr-7">
                        <option>System Management</option>
                    </select>
                </div>
            </div>

            {/* Responsive Layout */}
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
                {/* Left Side - Hierarchical Menu */}
                <div className="lg:w-1/2">
                    <HierarchicalMenu />
                </div>

                {/* Right Side - CRUD Input Fields */}
                <div className="lg:w-1/2">
                    <form className="space-y-4" onSubmit={handleSave}>
                        <div>
                            <Label htmlFor="menuId">Menu ID</Label>
                            <Input
                                id="menuId"
                                name="menuId"
                                type="text"
                                value={menuId}
                                onChange={(e) => setMenuId(e.target.value)}
                                placeholder="56320ee9-6af6-11ed-a7ba-f220afe5e4a9"
                                className="w-full lg:w-1/2"
                            />
                        </div>
                        <div>
                            <Label htmlFor="depth">Depth</Label>
                            <Input
                                id="depth"
                                name="depth"
                                type="text"
                                value={depth}
                                onChange={(e) => setDepth(e.target.value)}
                                placeholder="3"
                                className="w-full lg:w-1/2"
                            />
                        </div>
                        <div>
                            <Label htmlFor="parentData">Parent Data</Label>
                            <Input
                                id="parentData"
                                name="parentData"
                                type="text"
                                value={parentData}
                                onChange={(e) => setParentData(e.target.value)}
                                placeholder="Systems"
                                className="w-full lg:w-1/2"
                            />
                        </div>
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="System Code"
                                className="w-full lg:w-1/2"
                            />
                        </div>
                        <div className="flex space-x-4">
                            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default Main;
