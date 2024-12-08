import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CountryList = ({ countries }) => {
  const [sortedCountries, setSortedCountries] = useState([]);
  const [regionFilter, setRegionFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const regions = ["All", "Asia", "Europe", "Africa", "Americas", "Oceania"];

  useEffect(() => {
    setSortedCountries(countries);
  }, [countries]);

  const sortCountriesByPopulation = () => {
    const sorted = [...sortedCountries].sort(
      (a, b) => b.population - a.population
    );
    setSortedCountries(sorted);
  };

  const filterCountriesByRegion = (region) => {
    if (region == "All") {
      setSortedCountries(countries);
    } else {
      setSortedCountries(
        countries.filter((country) => country.region === region)
      );
    }
  };

  const filteredCountries = sortedCountries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="country-list">
      <div className="filters">
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Search Countries"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select onChange={(e) => filterCountriesByRegion(e.target.value)}>
          {regions.map((region, index) => {
            <option key={index} value={region}>
              {region}
            </option>;
          })}
        </select>
        <button onClick={sortCountriesByPopulation}>Sort by Population</button>
      </div>

      <div className="country-cards">
        {filteredCountries.map((country) => {
          <CountryCard key={country.cca3} country={country} />;
        })}
      </div>
    </div>
  );
};

export default CountryList;
