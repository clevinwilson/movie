import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {baseUrl,imageUrl,API_KEY} from '../../constants/constants';
import './MovieList.css'

import Card from "react-bootstrap/Card";
import { fontWeight } from '@mui/system';
function MovieList() {
    const [movies,setMovie]=useState([]);
    useEffect(()=>{
        axios.get(`${baseUrl}/trending/all/day?api_key=${API_KEY}`).then((response)=>{
            console.log(response.data.results);
            setMovie(response.data.results)
        })
    },[])
    const getMovieByCategory=()=>{

    }
    return (
        <div>
            <div className='container'>
                <div className='title-box m-3'>
                    <div className='row'>
                        <div className='col-6'>
                            <h3 >Trending</h3>
                        </div>
                        <div className='col-6'>
                            <div class="dropdown text-center">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select Category
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" onClick={() => { 
                                        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=00a55f69b6879e4f888721dcec3ad3c7&with_genres=28").then((response) => {
                                            console.log(response.data.results);
                                            setMovie(response.data.results)
                                        })
                                    }}>Action</a>
                                    <a class="dropdown-item" 
                                        onClick={() => {
                                            axios.get("https://api.themoviedb.org/3/discover/movie?api_key=00a55f69b6879e4f888721dcec3ad3c7&with_genres=12").then((response) => {
                                                console.log(response.data.results);
                                                setMovie(response.data.results)
                                            })
                                        }}>Adventure</a>
                                    <a class="dropdown-item" 
                                        onClick={() => {
                                            axios.get("https://api.themoviedb.org/3/discover/movie?api_key=00a55f69b6879e4f888721dcec3ad3c7&with_genres=35").then((response) => {
                                                console.log(response.data.results);
                                                setMovie(response.data.results)
                                            })
                                        }}>Comedy</a>
                                    <a class="dropdown-item" 
                                        onClick={() => {
                                            axios.get("https://api.themoviedb.org/3/discover/movie?api_key=00a55f69b6879e4f888721dcec3ad3c7&with_genres=80").then((response) => {
                                                console.log(response.data.results);
                                                setMovie(response.data.results)
                                            })
                                        }}>Crime</a>
                                    <a class="dropdown-item" 
                                        onClick={() => {
                                            axios.get("https://api.themoviedb.org/3/discover/movie?api_key=00a55f69b6879e4f888721dcec3ad3c7&with_genres=10751").then((response) => {
                                                console.log(response.data.results);
                                                setMovie(response.data.results)
                                            })
                                        }}>Family</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        movies.map((movie)=>{
                            return(
                                <div className='col-md-3'>
                                    <Card className='m-2' >
                                        <Card.Img style={{ height: '200px', objectFit: "cover" }} variant="top" src={`${imageUrl + movie.poster_path}`} />
                                        <Card.Body>
                                            <Card.Title className='movie-name' style={{ fontSize: '15px' ,fontWeight:"700" }}>{movie.original_title}</Card.Title>
                                            <Card.Text   style={{ fontSize: "1em" }}>
                                                {movie.release_date}
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                    
               
                    
                    
                </div>
            </div>
        </div>
    )
}

export default MovieList