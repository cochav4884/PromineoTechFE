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
  return (
    <div className="accessory-list">
      {accessories.length === 0 ? (
        <p>No accessories available.</p>
      ) : (
        <ul>
          {accessories.map((accessory) => (
            <li key={accessory.id}>
              <strong>{accessory.name}</strong> - {accessory.style} ({accessory.size})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AccessoryList;
