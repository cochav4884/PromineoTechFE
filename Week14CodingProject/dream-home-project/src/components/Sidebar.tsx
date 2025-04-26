import React from 'react';
import '../styles/Sidebar.css'; // Ensure the styling is correct for Sidebar


interface SidebarProps {
  onSelectCategory: (category: 'house' | 'land') => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectCategory, isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="toggle-sidebar-button">
        {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
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