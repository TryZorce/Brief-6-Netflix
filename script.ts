// import {details} from './pages/details'
// import {home} from './pages/home'
// import {search} from './pages/search'
import { api_key } from "./apikey";

async function mostpopular() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=fr-FR&page=1`);
    const data = await response.json();
    console.log(data.results);
const scrollDiv = document.querySelector('.scroll');

    const popularMovies = data.results;
    popularMovies.forEach(movie => {
      console.log(movie.poster_path);

      const domImg = document.createElement('img');
      domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
      scrollDiv?.appendChild(domImg);

    });

  } catch (err) {
    console.log(err);
  }
}

mostpopular();

async function toprated() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b7bdd2da6dc32e236c3e6fd84277c32b&language=fr-FR&page=1`);
    const data = await response.json();
    console.log(data.results);
const scrollDiv = document.getElementById('toprated');

    const popularMovies = data.results;
    popularMovies.forEach(movie => {
      console.log(movie.poster_path);

      const domImg = document.createElement('img');
      domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
      scrollDiv?.appendChild(domImg);

    });

  } catch (err) {
    console.log(err);
  }
}

toprated();

async function upcoming() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=b7bdd2da6dc32e236c3e6fd84277c32b&language=en-US&page=1`);
    const data = await response.json();
    console.log(data.results);
const scrollDiv = document.getElementById('latest');

    const popularMovies = data.results;
    popularMovies.forEach(movie => {
      console.log(movie.poster_path);

      const domImg = document.createElement('img');
      domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
      scrollDiv?.appendChild(domImg);

    });

  } catch (err) {
    console.log(err);
  }
}

upcoming();