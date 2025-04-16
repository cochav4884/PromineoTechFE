import React from 'react';
import { Nav } from 'react-bootstrap'; // React-Bootstrap component for navigation

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <Nav defaultActiveKey="#home" className="flex-column">
        <Nav.Link href="#">🏠 House Accessories</Nav.Link>
        <Nav.Link href="#">🌿 Land Accessories</Nav.Link>
      </Nav>
    </aside>
  );
};

export default Sidebar;
