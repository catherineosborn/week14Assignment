import React from 'react';
import './App.css';
import MovieList, { movies } from "./components/movieList";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className='App container-fluid'>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
