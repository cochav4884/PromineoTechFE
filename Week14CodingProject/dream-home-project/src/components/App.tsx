import React, { useState } from 'react';
import { houseAccessories } from '../data/houseAccessories';
import { landAccessories } from '../data/landAccessories';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AccessoryList from '../components/AccessoryList';
import { Button } from 'react-bootstrap';
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
  const [selectedItem, setSelectedItem] = useState<Accessory | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formType, setFormType] = useState<'house' | 'land' | null>(null);
  const [activeList, setActiveList] = useState<'house' | 'land'>('house');

  const handleSelectCategory = (category: 'house' | 'land') => {
    setActiveList(category);
  };

  const addNewItem = () => {
    // Initialize an empty new item for adding
    setSelectedItem({ id: Date.now(), name: '', style: '', size: '' });
    setFormType(activeList);
    setIsFormVisible(true);
  };

  const editItem = (id: number) => {
    const list = activeList === 'house' ? houseList : landList;
    const item = list.find((item) => item.id === id) || null;
    setSelectedItem(item);
    setFormType(activeList);
    setIsFormVisible(true);
  };

  const deleteItem = (id: number) => {
    if (activeList === 'house') {
      setHouseList((prev) => prev.filter((item) => item.id !== id));
    } else {
      setLandList((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const toggleStyle = (id: number) => {
    if (activeList === 'house') {
      setHouseList((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, style: item.style === 'modern' ? 'classic' : 'modern' } : item
        )
      );
    } else {
      setLandList((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, style: item.style === 'modern' ? 'classic' : 'modern' } : item
        )
      );
    }
  };

  const saveAccessory = (newItem: Accessory) => {
    if (formType === 'house') {
      if (selectedItem) {
        // Update existing item in the house list
        setHouseList((prevList) =>
          prevList.map((item) => (item.id === selectedItem.id ? newItem : item))
        );
      } else {
        // Add new item to the house list
        setHouseList((prevList) => [...prevList, newItem]);
      }
    } else if (formType === 'land') {
      if (selectedItem) {
        // Update existing item in the land list
        setLandList((prevList) =>
          prevList.map((item) => (item.id === selectedItem.id ? newItem : item))
        );
      } else {
        // Add new item to the land list
        setLandList((prevList) => [...prevList, newItem]);
      }
    }
    setIsFormVisible(false); // Close the form after saving
  };

  const cancelForm = () => {
    setIsFormVisible(false); // Close the form without saving
  };

  const accessories = activeList === 'house' ? houseList : landList;

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newItem: Accessory = {
      id: selectedItem ? selectedItem.id : Date.now(), // New item or edited item
      name: formData.get('name') as string,
      style: formData.get('style') as string,
      size: formData.get('size') as string,
    };
      saveAccessory(newItem);
    }

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar onSelectCategory={handleSelectCategory} />
        <main className="content">
          <h2>{activeList === 'house' ? '🏠 House Accessories' : '🌿 Land Accessories'}</h2>
          <Button variant="primary" onClick={addNewItem}>
            Add New {activeList === 'house' ? 'House' : 'Land'} Item
          </Button>
          <AccessoryList
            accessories={accessories}
            deleteItem={deleteItem}
            editItem={editItem}
            toggleStyle={toggleStyle}
          />
        </main>
      </div>

      {/* Form for creating/editing accessories */}
      {isFormVisible && (
        <div className="form-overlay">
          <form onSubmit={handleFormSubmit}>
            <h3>{selectedItem ? 'Edit Item' : 'Create New Item'}</h3>

            {/* Name Input */}
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={selectedItem?.name || ''}
                onChange={(e) =>
                  setSelectedItem((prev) => (prev ? { ...prev, name: e.target.value } : prev))
                }
                required
              />
            </div>

            {/* Style Input */}
            <div>
              <label htmlFor="style">Style</label>
              <input
                type="text"
                id="style"
                name="style"
                value={selectedItem?.style || ''}
                onChange={(e) =>
                  setSelectedItem((prev) => (prev ? { ...prev, style: e.target.value } : prev))
                }
                required
              />
            </div>

            {/* Size Input */}
            <div>
              <label htmlFor="size">Size</label>
              <input
                type="text"
                id="size"
                name="size"
                value={selectedItem?.size || ''}
                onChange={(e) =>
                  setSelectedItem((prev) => (prev ? { ...prev, size: e.target.value } : prev))
                }
                required
              />
            </div>

            {/* Buttons */}
            <div className="form-buttons">
              <button type="button" onClick={cancelForm}>
                Cancel
              </button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
