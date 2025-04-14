/**
 * // OrderMenu.tsx
import React from 'react';

export default function OrderMenu() {
    return (
        <div>
            <button>Tacos</button>
            <button>Burritos</button>
        </div>
    )
}

// App.tsx
import OrderMenu from "./OrderMenu";
import OrderView from "./OrderView";

export default function App() {
    return (
        <div>
            <OrderMenu/>
            <OrderView/>
        </div>
    )
}
//OrderView.tsx
export default function OrderView() {
    return (
        <div>Your order is: </div>
    )
}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/**
 * 
 * 
 * 
 * // Example code for using react-bootstrap

import { Card, Badge } from 'react-bootstrap'

function ChairCard({ chair, label }) {
    return (
        <Card>
            variant="top"
            src={ chair.img }
        </Card>
        <Card.Body>
            <Card.Title>
                { chair.title }
                <Badge bg="info">
                    { label }
                </Badge>
            </Card.Title>
            <Card.Text>
                { chair.description }
            </Card.Text>
        </Card.Body>
    )
}
    

 * 
 * 
 * 
 * 
 * 
 */

/**
 *
 * // Plain BootStrap
 *
 *function ChairCard({ chair, label }) {
  return (
    <div className="card">
      <img className="card-img-top" src={chair.img} alt={chair} />
      <div className="card-body">
        <h5 className="card-title">
          {chair.title}
          <span className="badge bg-info">{label}</span>
        </h5>
        <p className="card-text">{chair.description}</p>
      </div>
    </div>
  );
}

 *
 */

