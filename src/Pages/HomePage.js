import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import MovieList from '../Components/MovieList/MovieList';
function HomePage() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <MovieList/>
        
    </div>
  )
}

export default HomePage