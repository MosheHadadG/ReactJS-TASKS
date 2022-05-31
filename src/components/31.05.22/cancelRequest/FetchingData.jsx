import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FetchingData() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();


    const getCountries = async () => {
      const response = await axios.get('https://restcountries.com/v3.1/all', {
        signal: controller.signal,
      }
      );
      const countries = response.data;
      setFetchedData(countries);
    }

    getCountries();

    return (() => {
      controller.abort()

    })
  }, [])

  const renderedCountries = fetchedData.map((country) => <div key={country.name.common} className='country-name'>{country.name.common}</div>)

  return (
    <>
      {renderedCountries}
    </>
  )
}

export default FetchingData