import { houseAccessories } from "./houseAccessories"; // Importing house accessories
import { landAccessories } from "./landAccessories"; // Importing land accessories
import Header from "./Header";
import Sidebar from "./Sidebar";
import AccessoryList from "./AccessoryList";
import "./App.css";

function App() {
  console.log("House Accessories:", houseAccessories); // Check if data is there
  console.log("Land Accessories:", landAccessories); // Check if data is there


  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <h2>🏠 House Accessories</h2>
          <AccessoryList accessories={houseAccessories} />

          <h2>🌿 Land Accessories</h2>
          <AccessoryList accessories={landAccessories} />
        </main>
      </div>
    </div>
  );
}

export default App;
