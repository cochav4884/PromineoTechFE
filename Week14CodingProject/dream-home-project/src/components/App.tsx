import React, { useState } from 'react';
import { houseAccessories } from '../data/houseAccessories';
import { landAccessories } from '../data/landAccessories';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AccessoryList from '../components/AccessoryList';
import AccessoryForm from '../components/AccessoryForm';
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
    setSelectedItem(null);
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

  const toggleStyle = (id: number, listType: 'house' | 'land') => {
    if (listType === 'house') {
      setHouseList((prevList) =>
        prevList.map((item) =>
          item.id === id ? { ...item, style: item.style === 'Modern' ? 'Rustic' : 'Modern' } : item
        )
      );
    } else if (listType === 'land') {
      setLandList((prevList) =>
        prevList.map((item) =>
          item.id === id ? { ...item, style: item.style === 'Modern' ? 'Rustic' : 'Modern' } : item
        )
      );
    }
  };

  const saveAccessory = (newItem: Accessory) => {
    if (selectedItem) {
      if (formType === 'house') {
        setHouseList((prevList) =>
          prevList.map((item) => (item.id === selectedItem.id ? newItem : item))
        );
      } else if (formType === 'land') {
        setLandList((prevList) =>
          prevList.map((item) => (item.id === selectedItem.id ? newItem : item))
        );
      }
    } else {
      if (formType === 'house') {
        setHouseList((prevList) => [...prevList, newItem]);
      } else if (formType === 'land') {
        setLandList((prevList) => [...prevList, newItem]);
      }
    }
    setIsFormVisible(false);
  };

  const cancelForm = () => {
    setIsFormVisible(false);
  };

  const accessories = activeList === 'house' ? houseList : landList;

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
            toggleStyle={(id) => toggleStyle(id, activeList)}
            editItem={editItem}
          />
        </main>
      </div>
      {isFormVisible && (
        <AccessoryForm
          accessory={selectedItem}
          onSave={saveAccessory}
          onCancel={cancelForm}
        />
      )}
    </div>
  );
};

export default App;
