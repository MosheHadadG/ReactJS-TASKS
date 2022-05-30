import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar';
import './CountriesOfTheWorld.css';


function CountriesOfTheWorld() {
  const [countriesDB, setCountriesDB] = useState([]);
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState('');

  
  const getCountries = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data;
    setCountries(countries);
    setCountriesDB(countries);
  }

  useEffect(() => {
    getCountries();
  }, [])

  
  useEffect(() => {
    searchCountry();
  },[value])

  const searchCountry = () => {
    console.log(value)
    const filterdCountry = countriesDB.filter((country) => {
      return country.name.common.toLowerCase().startsWith(value);
    })
    setCountries(filterdCountry);
  }

  const handleInputChange = (event) => {
    let inputValue = event.target.value;
    setValue(inputValue);
  }

  const renderedCountries = () => {
    const countriesMap = countries.map((country) => {
      return <li key={country.name.common}>{country.name.common}</li>
    })
    return countriesMap;
  }

  return (
    <div className='main'>
      <div>
        <SearchBar handleChange={handleInputChange} inputValue={value} />
      </div>
      <div className='countries'>
        <ul>
          {renderedCountries()}
        </ul>

      </div>

    </div>
  )
}

export default CountriesOfTheWorld;