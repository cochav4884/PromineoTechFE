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


    
