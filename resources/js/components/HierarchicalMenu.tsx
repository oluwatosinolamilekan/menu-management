import React, { useState } from 'react';

// Define the type for the menu items
interface MenuItem {
  id: number;
  title: string;
  children?: MenuItem[];
}

const HierarchicalMenu: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const items: MenuItem[] = [
    {
      id: 1,
      title: 'System Management',
      children: [
        {
          id: 2,
          title: 'Systems',
          children: [
            {
              id: 3,
              title: 'System Code',
              children: [
                { id: 4, title: 'Code Registration' },
                { id: 5, title: 'Code Registration - 2' },
              ],
            },
            { id: 6, title: 'Properties' },
            {
              id: 7,
              title: 'Menus',
              children: [
                { id: 8, title: 'Menu Registration' },
              ],
            },
            {
              id: 9,
              title: 'API List',
              children: [
                { id: 10, title: 'API Registration' },
                { id: 11, title: 'API Edit' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 12,
      title: 'Users & Groups',
      children: [
        {
          id: 13,
          title: 'Users',
          children: [
            { id: 14, title: 'User Account Registration' },
          ],
        },
        {
          id: 15,
          title: 'Groups',
          children: [
            { id: 16, title: 'User Group Registration' },
          ],
        },
        { id: 17, title: '사용자 승인' },
        { id: 18, title: '사용자 승인 상세' },
      ],
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    const allIds = getAllItemIds(items);
    setExpandedItems(allIds);
  };

  const handleCollapseAll = () => {
    setExpandedItems([]);
  };

  const getAllItemIds = (items: MenuItem[]): number[] => {
    let ids: number[] = [];
    items.forEach(item => {
      ids.push(item.id);
      if (item.children) {
        ids = ids.concat(getAllItemIds(item.children));
      }
    });
    return ids;
  };

  const renderItems = (items: MenuItem[], level: number = 0): JSX.Element => {
    return (
      <ul className={`pl-${level * 4} list-none`}>
        {items.map((item) => (
          <li key={item.id}>
            <div
              className="cursor-pointer flex items-center space-x-2"
              onClick={() => toggleExpand(item.id)}
            >
              {item.children && (
                <span className={`transition-transform ${expandedItems.includes(item.id) ? 'rotate-90' : ''}`}>
                  ▶
                </span>
              )}
              <span className="text-gray-700">{item.title}</span>
            </div>
            {item.children && expandedItems.includes(item.id) && renderItems(item.children, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="text-gray-800">
      <div className="mb-4">
        <button
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-black hover:text-white"
          onClick={handleExpandAll}
        >
          Expand All
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-2 ml-2 rounded hover:bg-black hover:text-white"
          onClick={handleCollapseAll}
        >
          Collapse All
        </button>
      </div>
      {renderItems(items)}
    </div>
  );
};

export default HierarchicalMenu;
