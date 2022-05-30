import React, { useEffect, useState } from 'react'
import axios from 'axios'

function SimpleFetch() {
  const [ movies, setMovies ] = useState([]);

  const getMovies =  async () => {
    const response = await axios.get('https://swapi.dev/api/films/1/');
    console.log(response)
    const data = response.data;
    const title = data.title;
    const director = data.director;
    setMovies([title, director]);
  }

  useEffect(() => {
   getMovies();
    
  },[])
  
  return (
    <div>
    <div className='title'>
      <h1>Title: {movies[0]}</h1>
    </div>
    <div className='director'>
      <h2>Director {movies[1]}</h2>
    </div>
    </div>
  )
}

export default SimpleFetch