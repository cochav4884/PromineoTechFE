import { ChangeEvent, useState } from "react";

type Props = {
  onSubmit: (searchFilters: {
    term: string;
    includeTerritories: boolean;
    populationRange: string;
  }) => void;
};

export default function SearchForm({ onSubmit }: Props) {
  const [formValues, setFormValues] = useState({
    term: "",
    includeTerritories: false,
    populationRange: "all",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
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
