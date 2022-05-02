import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import axios from 'axios';

function Navbar() {
    const [movie, setMovie]=useState([]);
    const[movieName,setMovieName]=useState('');
    const[box,setBox]=useState(false)

    const searchMovie=()=>{
        axios.get(`https://www.omdbapi.com/?apikey=c6924372&s=${movieName}&page=2`).then((response) => {
            console.log(response.data.Search);
            setMovie(response.data.Search)
            setBox(true)
            
        })
    }

    return (
      <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" onClick={() => { setBox(false)}}  >Movie Details</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span onClick={() => { setBox(false) }}  className="navbar-toggler-icon"></span>
                </button>

                <div style={{justifyContent:"center"}} className="collapse navbar-collapse mt-4" id="navbarSupportedContent">
                    
                    <form style={{ justifyContent: "center" }} className="form-inline my-2 my-lg-0">
                        <input style={{borderRadius:"20px"}}  value={movieName} className="form-control mr-sm-2" type="search" 
                            onChange={(e) => { setMovieName(e.target.value) }}
                         placeholder="Search" aria-label="Search"/>

                       
                       
                        <a onClick={searchMovie} style={{ borderRadius: "20px" }} className="text-white mt-3 btn btn-primary my-2 my-sm-0"  >Search</a>
                        
                    </form>
                    
                </div>
          
            </nav>
            <div className={box ? 'container box-show' : "container box-hide"}>
                <div className='row'>
                    {
                        movie.map((movie) => {
                            return (
                                <div className='col-md-3'>
                                    <Card className='m-2' >
                                        <Card.Img style={{ height: '200px', objectFit: "cover" }} variant="top" src={movie.Poster} />
                                        <Card.Body>
                                            <Card.Title className='movie-name' style={{ fontSize: '15px', fontWeight: "700" }}>{movie.Title}</Card.Title>
                                            <Card.Text style={{ fontSize: "1em" }}>
                                                {movie.Year}
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <Card/>
            </div>
      </div>
    )
}

export default Navbar