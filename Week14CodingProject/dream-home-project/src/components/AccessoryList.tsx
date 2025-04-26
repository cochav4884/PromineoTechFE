import React from 'react';
import { Button, ListGroup } from 'react-bootstrap'; // React-Bootstrap components

interface Accessory {
  id: number;
  name: string;
  style: string;
  size: string;
}

interface AccessoryListProps {
  accessories: Accessory[];
  deleteItem: (id: number) => void;
  toggleStyle: (id: number) => void;  // Make sure toggleStyle is passed as a prop
  editItem: (id: number) => void; // Ensure editItem is passed as a prop
}

const AccessoryList: React.FC<AccessoryListProps> = ({ accessories, deleteItem, toggleStyle, editItem }) => {
  return (
    <ListGroup>
      {accessories.map((accessory) => (
        <ListGroup.Item key={accessory.id}>
          <strong>{accessory.name}</strong> - {accessory.style} ({accessory.size})
          
          {/* Toggle Style Button (yellow) */}
          <Button 
            variant="secondary" 
            onClick={() => toggleStyle(accessory.id)} 
            style={{ marginLeft: '10px' }}
          >
            Toggle Style
          </Button>
          
          {/* Edit Button (blue) */}
          <Button 
            variant="primary" 
            onClick={() => editItem(accessory.id)} 
            style={{ marginLeft: '10px' }}
          >
            Edit
          </Button>
          
          {/* Delete Button (red) */}
          <Button 
            variant="danger" 
            onClick={() => deleteItem(accessory.id)} 
            style={{ marginLeft: '10px' }}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default AccessoryList;
