import React from 'react';
import './App.css';
import movieList from "./components/movieList";
import Movie from "./components/movie";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className='App container-fluid'>
      <div className='row'>
      {movieList.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
      </div>
    </div>
  );
} 