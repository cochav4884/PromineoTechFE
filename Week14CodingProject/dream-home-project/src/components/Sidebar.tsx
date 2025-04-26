import React from 'react';
import '../styles/Sidebar.css';

interface SidebarProps {
  onSelectCategory: (category: 'house' | 'land') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectCategory }) => {
  return (
    <div className="sidebar open">
      <nav>
        <ul>
          <li>
            <button onClick={() => onSelectCategory('house')} className="sidebar-link">
              🏠 House Accessories
            </button>
          </li>
          <li>
            <button onClick={() => onSelectCategory('land')} className="sidebar-link">
              🌿 Land Accessories
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
