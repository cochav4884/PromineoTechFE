import React from "react";

interface Accessory {
  id: number;
  name: string;
  style: string;
  size: string;
}

interface AccessoryListProps {
  accessories: Accessory[];
}

const AccessoryList: React.FC<AccessoryListProps> = ({ accessories }) => {
  console.log("AccessoryList received accessories:", accessories); // Check if data is received here

  if (!accessories || accessories.length === 0) {
    return <div>No accessories available</div>; // Handle case with no accessories
  }

  return (
    <div className="accessory-list" style={{ padding: "10px", backgroundColor: "lightgrey" }}>
      <h3>Accessory List</h3>
      <ul>
        {accessories.map((accessory) => (
          <li key={accessory.id}>
            <strong>{accessory.name}</strong> - {accessory.style} ({accessory.size})
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default AccessoryList;
