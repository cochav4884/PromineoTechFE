import React, { useState } from 'react';
import { houseAccessories } from '../data/houseAccessories';
import { landAccessories } from '../data/landAccessories';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AccessoryList from '../components/AccessoryList';
import { Button } from 'react-bootstrap'; // Using React-Bootstrap for buttons
import '../styles/App.css';

// Define the Accessory type
type Accessory = {
  id: number;
  name: string;
  style: string;
  size: string;
};

const App: React.FC = () => {
  // State initialization with test data
  const [houseList, setHouseList] = useState(houseAccessories);
  const [landList, setLandList] = useState(landAccessories);

  // Sidebar visibility state
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar is open by default

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle the sidebar
  };

  // Task 2: Add a new item for House Accessories
  const addNewHouseItem = () => {
    const newItem = { id: Date.now(), name: "New House Accessory", style: "Modern", size: "Medium" };
    setHouseList((prevList: Accessory[]) => [...prevList, newItem]);
  };

  // Task 2: Add a new item for Land Accessories
  const addNewLandItem = () => {
    const newItem = { id: Date.now(), name: "New Land Accessory", style: "Modern", size: "Medium" };
    setLandList((prevList: Accessory[]) => [...prevList, newItem]);
  };

  // Task 3: Delete an item from House Accessories
  const deleteHouseItem = (id: number) => {
    setHouseList((prevList: Accessory[]) => prevList.filter((item: Accessory) => item.id !== id));
  };

  // Task 3: Delete an item from Land Accessories
  const deleteLandItem = (id: number) => {
    setLandList((prevList: Accessory[]) => prevList.filter((item: Accessory) => item.id !== id));
  };

  // Task 4: Update an item (toggle style between "Modern" and "Classic") for House Accessories
  const toggleHouseStyle = (id: number) => {
    setHouseList((prevList: Accessory[]) =>
      prevList.map((item: Accessory) =>
        item.id === id ? { ...item, style: item.style === "Modern" ? "Classic" : "Modern" } : item
      )
    );
  };

  // Task 4: Update an item (toggle style between "Modern" and "Classic") for Land Accessories
  const toggleLandStyle = (id: number) => {
    setLandList((prevList: Accessory[]) =>
      prevList.map((item: Accessory) =>
        item.id === id ? { ...item, style: item.style === "Modern" ? "Classic" : "Modern" } : item
      )
    );
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main content */}
        <main className={`content ${isSidebarOpen ? 'content-shift' : ''}`}>
          <button className="hamburger" onClick={toggleSidebar}>
            ☰
          </button>

          <h2>🏠 House Accessories</h2>
          <Button variant="primary" onClick={addNewHouseItem}>Add New House Item</Button>
          <AccessoryList 
            accessories={houseList} 
            deleteItem={deleteHouseItem} 
            toggleStyle={toggleHouseStyle} 
          />

          <h2>🌿 Land Accessories</h2>
          <Button variant="primary" onClick={addNewLandItem}>Add New Land Item</Button>
          <AccessoryList 
            accessories={landList} 
            deleteItem={deleteLandItem} 
            toggleStyle={toggleLandStyle} 
          />
        </main>
      </div>
    </div>
  );
};

export default App;
