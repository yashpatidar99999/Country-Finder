import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <img src={country.flags[0]} alt={`${country.name.common} flag`} />
      <h2>{country.name.common}</h2>
      <p>
        <strong>Population:</strong> {country.population}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <Link to={`/${country.name.common}`}>More details</Link>
    </div>
  );
};

export default CountryCard;
