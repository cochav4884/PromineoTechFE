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
  toggleStyle: (id: number) => void;
}

const AccessoryList: React.FC<AccessoryListProps> = ({ accessories, deleteItem, toggleStyle }) => {
  return (
    <ListGroup>
      {accessories.map((accessory) => (
        <ListGroup.Item key={accessory.id}>
          <strong>{accessory.name}</strong> - {accessory.style} ({accessory.size})
          <Button variant="danger" onClick={() => deleteItem(accessory.id)} style={{ marginLeft: '10px' }}>Delete</Button>
          <Button variant="warning" onClick={() => toggleStyle(accessory.id)} style={{ marginLeft: '10px' }}>
            Toggle Style
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default AccessoryList;
