import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import ThemeContext from "./components/ThemeContext";
import axios from "axios";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className={`App ${theme}`}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <Routes>
            <Route path="/" element={<CountryList countries={countries} />} />
            <Route path="/:countryName" element={<CountryDetails/>}/>
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
