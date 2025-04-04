import { houseAccessories } from "./houseAccessories";
import { landAccessories } from "./landAccessories";
import Header from "./Header"; // Adjusted the import path to the correct location
// Removed unnecessary React import
import "./App.css"; // Ensure you have a CSS file for styling
import Sidebar from "./Sidebar"; // Adjusted the path to match the correct location
import AccessoryList from "./AccessoryList"; // Adjusted the path to match the correct location

function App() {
  console.log(houseAccessories);
  console.log(landAccessories);

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
