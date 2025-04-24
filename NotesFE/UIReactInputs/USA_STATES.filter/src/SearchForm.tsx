import { ChangeEvent, useState } from "react";

type Props = {
  onSubmit: React.Dispatch<React.SetStateAction<{
    term: string;
    includeTerritories: boolean;
    populationRange: string;
    region: "West" | "Midwest" | "Northeast" | "South" | "all";
  }>>; // Correct type for setSearchFilters
};

export default function SearchForm({ onSubmit }: Props) {
  const [formValues, setFormValues] = useState<{
    term: string;
    includeTerritories: boolean;
    populationRange: string;
    region: "West" | "Midwest" | "Northeast" | "South" | "all";
  }>({
    term: "",
    includeTerritories: false,
    populationRange: "all",
    region: "all",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form>
      <label htmlFor="stateSearch">Search States:</label>
      <input
        id="stateSearch"
        type="text"
        name="term"
        placeholder="Enter state name"
        onChange={handleChange}
        value={formValues.term}
      />
      <button onClick={() => setFormValues({ ...formValues, term: "" })}>
        Clear
      </button>

      <div>
        <label>
          <input
            type="checkbox"
            name="includeTerritories"
            onChange={handleChange}
            checked={formValues.includeTerritories}
          />{" "}
          Include Territories
        </label>

        {/* ✅ Region Selector - right after territories */}
        <label htmlFor="region">Region:</label>
        <select
          id="region"
          name="region"
          value={formValues.region}
          onChange={(e) =>
            setFormValues({ ...formValues, region: e.target.value as "West" | "Midwest" | "Northeast" | "South" | "all" })
          }
        >
          <option value="all">All</option>
          <option value="West">West</option>
          <option value="Midwest">Midwest</option>
          <option value="Northeast">Northeast</option>
          <option value="South">South</option>
        </select>

        <label>
          <input
            type="radio"
            name="populationRange"
            value="all"
            checked={formValues.populationRange === "all"}
            onChange={handleChange}
          />
          All
        </label>

        <label>
          <input
            type="radio"
            name="populationRange"
            value="0-5"
            checked={formValues.populationRange === "0-5"}
            onChange={handleChange}
          />
          0–5m
        </label>

        <label>
          <input
            type="radio"
            name="populationRange"
            value="5-10"
            checked={formValues.populationRange === "5-10"}
            onChange={handleChange}
          />
          5–10m
        </label>

        <label>
          <input
            type="radio"
            name="populationRange"
            value="10+"
            checked={formValues.populationRange === "10+"}
            onChange={handleChange}
          />
          10m+
        </label>
      </div>

      <button onClick={handleSubmit}>Search</button>
    </form>
  );
}
