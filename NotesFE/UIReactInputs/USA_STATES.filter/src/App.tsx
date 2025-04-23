import { useState } from "react";
import { USA_STATES } from "./data";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [includeTerritories, setIncludeTerritories] = useState(false);
  const [populationRange, setPopulationRange] = useState("all");

  console.log("current population filter:", populationRange);
  const searchResults = USA_STATES.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (includeTerritories || !s.territory) &&
      (populationRange === "all" ||
        (populationRange === "10+" && s.population.count >= 10000000) ||
        (populationRange === "5-10" &&
          s.population.count >= 5000000 &&
          s.population.count < 10000000) ||
        (populationRange === "0-5" && s.population.count < 5000000))
  );

  return (
    <div>
      <label htmlFor="stateSearch">Search States:</label>
      <input
        id="stateSearch"
        type="text"
        placeholder="Enter state name"
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
      />
      <button onClick={() => setSearchTerm("")}>Clear</button>

      <div>
        <label>
          <input
            type="checkbox"
            onChange={(event) => setIncludeTerritories(event.target.checked)}
            checked={includeTerritories}
          />{" "}
          Include Territories
        </label>

        <label>
          <input
            type="radio"
            name="population"
            value="all"
            checked={populationRange === "all"}
            onChange={(e) => setPopulationRange(e.target.value)}
          />
          All
        </label>

        <label>
          <input
            type="radio"
            name="population"
            value="0-5"
            checked={populationRange === "0-5"}
            onChange={(e) => setPopulationRange(e.target.value)}
          />
          0–5m
        </label>

        <label>
          <input
            type="radio"
            name="population"
            value="5-10"
            checked={populationRange === "5-10"}
            onChange={(e) => setPopulationRange(e.target.value)}
          />
          5–10m
        </label>

        <label>
          <input
            type="radio"
            name="population"
            value="10+"
            checked={populationRange === "10+"}
            onChange={(e) => setPopulationRange(e.target.value)}
          />
          10m+
        </label>
      </div>

      <ul>
        {searchResults.map((state) => (
          <li key={state.name}>
            {state.name} – {state.territory ? "Territory" : "State"} –{" "}
            {state.population.count.toLocaleString()} people
          </li>
        ))}
      </ul>
    </div>
  );
}
