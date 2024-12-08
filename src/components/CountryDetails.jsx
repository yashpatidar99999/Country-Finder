import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => setCountry(response.data[0]));
  }, [countryName]);

  if (!country) return <p>Loading...</p>;

  return (
    <div className="country-details">
      <h1>{country.name.common}</h1>
      <img src={country.flags[0]} alt={`${country.name.common} flag`} />
      <p>
        <strong>Native Name:</strong>{" "}
        {country.name.nativeName
          ? country.name.nativeName[Object.keys(country.name.nativeName)[0]]
              .common
          : "N/A"}
      </p>
      <p>
        <strong>Subregion:</strong> {country.subregion}
      </p>
      <p>
        <strong>Currency:</strong>{" "}
        {country.currencies ? Object.values(country.currencies)[0].name : "N/A"}
      </p>
      <p>
        <strong>Languages:</strong>{" "}
        {Object.values(country.languages || {}).join(", ")}
      </p>
      <p>
        <strong>Border Countries:</strong>{" "}
        {country.borders ? country.borders.join(", ") : "None"}
      </p>
    </div>
  );
};

export default CountryDetails;
