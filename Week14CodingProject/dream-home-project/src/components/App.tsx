import React, { useState } from "react";
import { houseAccessories } from "../data/houseAccessories"; // assumed predefined
import { landAccessories } from "../data/landAccessories"; // assumed predefined
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AccessoryList from "../components/AccessoryList";
import { Button } from "react-bootstrap";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const [formData, setFormData] = useState({ name: "", style: "", size: "" });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formType, setFormType] = useState<"house" | "land" | null>(null);
  const [activeList, setActiveList] = useState<"house" | "land">("house");

  const handleSelectCategory = (category: "house" | "land") => {
    setActiveList(category);
  };

  const addNewItem = () => {
    const newItem = { id: Date.now(), name: "", style: "", size: "" };
    setSelectedItem(newItem);
    setFormData({ name: "", style: "", size: "" });
    setFormType(activeList);
    setIsFormVisible(true);
  };

  const editItem = (id: number) => {
    const list = activeList === "house" ? houseList : landList;
    const item = list.find((item) => item.id === id);
    if (item) {
      setSelectedItem(item);
      setFormData({ name: item.name, style: item.style, size: item.size });
      setFormType(activeList);
      setIsFormVisible(true);
    }
  };

  const deleteItem = (id: number) => {
    if (activeList === "house") {
      setHouseList((prevList) => prevList.filter((item) => item.id !== id));
    } else {
      setLandList((prevList) => prevList.filter((item) => item.id !== id));
    }
  };

  const styles = [
    "Rustic",
    "Luxury",
    "Contemporary",
    "Industrial",
    "Traditional",
    "Abstract",
    "Bohemian",
    "Vintage",
    "Modern",
    "Decorative",
    "Functional",
    "Recreational",
    "Colorful",
    "Natural",
    "Serene",
    "Playful",
    "Minimalist",
    "Victorian",
    "Eclectic",
    "Art Deco",
    "Scandinavian",
    "Mediterranean",
    "Farmhouse",
    "Cottage",
    "Mid-Century Modern",
    "Coastal",
    "Japanese Zen",
    "Tropical",
    "Southwestern",
    "Gothic",
  ];

  const sizes: string[] = [
    "Small",
    "Medium",
    "Large",
    "Extra Large",
    "Compact",
    "Oversized",
    "Standard",
    "Mini",
    "Maxi",
    "Petite",
    "Tall",
    "Short",
    "Wide",
    "Narrow",
    "Slim",
    "Spacious",
    "Cozy",
    "Roomy",
    "Generous",
    "Ample",
    "Vast",
    "Expansive",
    "Breezy",
    "Open",
  ];

  const getNextStyle = (currentStyle: string) => {
    const currentIndex = styles.indexOf(currentStyle);
    return styles[(currentIndex + 1) % styles.length]; // Wraps around to the beginning
  };

  const toggleStyle = (id: number) => {
    if (activeList === "house") {
      setHouseList((prevList) =>
        prevList.map((item) =>
          item.id === id ? { ...item, style: getNextStyle(item.style) } : item
        )
      );
    } else {
      setLandList((prevList) =>
        prevList.map((item) =>
          item.id === id ? { ...item, style: getNextStyle(item.style) } : item
        )
      );
    }
  };

  const saveAccessory = (newItem: Accessory) => {
    if (formType === "house") {
      setHouseList((prevList) =>
        prevList.some((item) => item.id === newItem.id)
          ? prevList.map((item) => (item.id === newItem.id ? newItem : item))
          : [...prevList, newItem]
      );
    } else if (formType === "land") {
      setLandList((prevList) =>
        prevList.some((item) => item.id === newItem.id)
          ? prevList.map((item) => (item.id === newItem.id ? newItem : item))
          : [...prevList, newItem]
      );
    }
    setIsFormVisible(false);
  };

  const cancelForm = () => {
    setIsFormVisible(false);
  };

  const accessories = activeList === "house" ? houseList : landList;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedItem) return;

    const newItem: Accessory = {
      id: selectedItem.id,
      name: formData.name,
      style: formData.style,
      size: formData.size,
    };
    saveAccessory(newItem);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar onSelectCategory={handleSelectCategory} />
        <main className="content">
          <h2>
            {activeList === "house"
              ? "🏠 House Accessories"
              : "🌿 Land Accessories"}
          </h2>
          <Button variant="primary" onClick={addNewItem}>
            Add New {activeList === "house" ? "House" : "Land"} Item
          </Button>
          <AccessoryList
            accessories={accessories}
            deleteItem={deleteItem}
            editItem={editItem}
            toggleStyle={toggleStyle}
          />
        </main>
      </div>

      {isFormVisible && (
        <div className="form-overlay">
          <form onSubmit={handleFormSubmit}>
            <h3>{selectedItem ? "Edit Item" : "Create New Item"}</h3>
            {/* Name */}
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter new item name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </div>
            {/* Style */}
            <div>
              <label htmlFor="style">Style</label>
              <select
                id="style"
                name="style"
                value={formData.style}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, style: e.target.value }))
                }
                required
              >
                <option value="">-- Select a style --</option>
                {styles.map((styleOption) => (
                  <option key={styleOption} value={styleOption}>
                    {styleOption}
                  </option>
                ))}
              </select>
            </div>

            {/* Size */}
            <div>
              <label htmlFor="size">Size</label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, size: e.target.value }))
                }
                required
              >
                <option value="">-- Select a size --</option>
                {sizes.map((sizeOption) => (
                  <option key={sizeOption} value={sizeOption}>
                    {sizeOption}
                  </option>
                ))}
              </select>
            </div>
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
