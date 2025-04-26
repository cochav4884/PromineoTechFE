import React, { useState } from 'react';
import { houseAccessories } from '../data/houseAccessories';
import { landAccessories } from '../data/landAccessories';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AccessoryList from '../components/AccessoryList';
import AccessoryForm from '../components/AccessoryForm';
import { Button } from 'react-bootstrap'; // Using React-Bootstrap for buttons
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Accessory {
  id: number;
  name: string;
  style: string;
  size: string;
}

const App: React.FC = () => {
  const [houseList, setHouseList] = useState(houseAccessories);
  const [landList, setLandList] = useState(landAccessories);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar is open by default
  const [selectedItem, setSelectedItem] = useState<Accessory | null>(null); // For updating items
  const [isFormVisible, setIsFormVisible] = useState(false); // Toggle the form visibility
  const [formType, setFormType] = useState<'house' | 'land' | null>(null); // Track form type
  const [activeCategory, setActiveCategory] = useState<'house' | 'land'>('house'); // Track selected category

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle the sidebar
  };

  const addNewHouseItem = () => {
    setSelectedItem(null); // Clear the form for new item
    setFormType('house'); // Set form type to 'house'
    setIsFormVisible(true); // Show the form
  };

  const addNewLandItem = () => {
    setSelectedItem(null); // Clear the form for new item
    setFormType('land'); // Set form type to 'land'
    setIsFormVisible(true); // Show the form
  };

  const editHouseItem = (id: number) => {
    const item = houseList.find((item) => item.id === id);
    setSelectedItem(item || null); // Set the item to edit
    setFormType('house'); // Set form type to 'house'
    setIsFormVisible(true); // Show the form
  };

  const editLandItem = (id: number) => {
    const item = landList.find((item) => item.id === id);
    setSelectedItem(item || null); // Set the item to edit
    setFormType('land'); // Set form type to 'land'
    setIsFormVisible(true); // Show the form
  };

  const deleteHouseItem = (id: number) => {
    setHouseList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const deleteLandItem = (id: number) => {
    setLandList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const saveAccessory = (newItem: Accessory) => {
    if (selectedItem) {
      // Update an existing item
      if (newItem.name && newItem.style && newItem.size) {
        if (formType === 'house') {
          setHouseList((prevList) =>
            prevList.map((item) =>
              item.id === selectedItem.id ? { ...item, ...newItem } : item
            )
          );
        } else if (formType === 'land') {
          setLandList((prevList) =>
            prevList.map((item) =>
              item.id === selectedItem.id ? { ...item, ...newItem } : item
            )
          );
        }
      }
    } else {
      // Add a new item
      if (newItem.name && newItem.style && newItem.size) {
        if (formType === 'house') {
          setHouseList((prevList) => [...prevList, newItem]);
        } else if (formType === 'land') {
          setLandList((prevList) => [...prevList, newItem]);
        }
      }
    }
    setIsFormVisible(false); // Hide form after save
  };

  const cancelForm = () => {
    setIsFormVisible(false); // Hide form
  };

  // Function to change active category (house or land)
  const handleCategorySelect = (category: 'house' | 'land') => {
    setActiveCategory(category); // Update the selected category
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar 
          onSelectCategory={handleCategorySelect} 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
        />
        <main className={`content ${isSidebarOpen ? 'content-shift' : ''}`}>
          <button className="hamburger" onClick={toggleSidebar}>
            ☰
          </button>
          
          {activeCategory === 'house' && (
            <>
              <h2>🏠 House Accessories</h2>
              <Button variant="primary" onClick={addNewHouseItem}>Add New House Item</Button>
              <AccessoryList
                accessories={houseList}
                deleteItem={deleteHouseItem}
                toggleStyle={() => {}}
                editItem={editHouseItem}
              />
            </>
          )}

          {activeCategory === 'land' && (
            <>
              <h2>🌿 Land Accessories</h2>
              <Button variant="primary" onClick={addNewLandItem}>Add New Land Item</Button>
              <AccessoryList
                accessories={landList}
                deleteItem={deleteLandItem}
                toggleStyle={() => {}}
                editItem={editLandItem}
              />
            </>
          )}
        </main>

        {isFormVisible && formType === 'house' && (
          <AccessoryForm accessory={selectedItem} onSave={saveAccessory} onCancel={cancelForm} />
        )}

        {isFormVisible && formType === 'land' && (
          <AccessoryForm accessory={selectedItem} onSave={saveAccessory} onCancel={cancelForm} />
        )}
      </div>
    </div>
  );
};

export default App;
