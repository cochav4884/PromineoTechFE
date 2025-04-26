import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap'; // Import necessary components

interface Accessory {
  id: number;
  name: string;
  style: string;
  size: string;
}

interface AccessoryFormProps {
  accessory: Accessory | null; // If null, it's for creating a new item
  onSave: (accessory: Accessory) => void; // Callback for saving the accessory
  onCancel: () => void; // Callback for canceling the form
}

const AccessoryForm: React.FC<AccessoryFormProps> = ({ accessory, onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [style, setStyle] = useState('');
  const [size, setSize] = useState('');

  // If an accessory is passed (editing), populate the form fields
  useEffect(() => {
    if (accessory) {
      setName(accessory.name);
      setStyle(accessory.style);
      setSize(accessory.size);
    }
  }, [accessory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && style && size) {
      const newItem = { id: Date.now(), name, style, size }; // Creating a new item with a unique id
      onSave(newItem); // Save the item
    }
  };

  return (
    <div className="form-container">
      <h2>{accessory ? 'Edit Accessory' : 'Add New Accessory'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Accessory Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="style">
          <Form.Label>Style</Form.Label>
          <Form.Control
            type="text"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="size">
          <Form.Label>Size</Form.Label>
          <Form.Control
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {accessory ? 'Update' : 'Add'} Accessory
        </Button>
        <Button variant="secondary" onClick={onCancel} style={{ marginLeft: '10px' }}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default AccessoryForm;
