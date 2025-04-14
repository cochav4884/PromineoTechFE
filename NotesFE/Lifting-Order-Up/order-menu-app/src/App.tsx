import OrderMenu from "./OrderMenu";
import OrderView from "./OrderView";
import { useState } from "react"; 


export default function App() {
  const [order, setOrder] = useState("tacos")
    return (
        <div>
            <OrderMenu setOrder={setOrder}/>
            <OrderView order={order}/>
        </div>
    )
}