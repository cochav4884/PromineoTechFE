import { useState } from "react";
import { USA_STATES } from "./data";
import SearchForm from "./SearchForm";
import "./App.css";

export default function App() {
  const [searchFilters, setSearchFilters] = useState<{
    term: string;
    includeTerritories: boolean;
    populationRange: string;
    region: "West" | "Midwest" | "Northeast" | "South" | "all"; // 👈 Add this
  }>({
    term: "",
    includeTerritories: false,
    populationRange: "all",
    region: "all",
  }); 

  const searchResults = USA_STATES.filter(
    (s) =>
      s.name.toLowerCase().includes(searchFilters.term.toLowerCase()) &&
      (searchFilters.includeTerritories || s.territory === false) &&
      (searchFilters.populationRange === "all" ||
        (searchFilters.populationRange === "10+" &&
          s.population.count >= 10000000) ||
        (searchFilters.populationRange === "5-10" &&
          s.population.count >= 5000000 &&
          s.population.count < 10000000) ||
        (searchFilters.populationRange === "0-5" &&
          s.population.count < 5000000)) &&
      (searchFilters.region === "all" || s.region === searchFilters.region)
  );

  return (
    <main>
      <SearchForm onSubmit={setSearchFilters}></SearchForm>
      <ul>
        {searchResults.map((state) => (
          <li key={state.name}>
            {state.name} – {state.territory ? "Territory" : "State"} –{" "}
            {state.population.count.toLocaleString()} people
          </li>
        ))}
      </ul>
    </main>
  );
}
