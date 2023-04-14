// import {details} from './pages/details'
// import {home} from './pages/home'
import {search} from './pages/search'
import { api_key } from "./apikey";

// Fonction qui récupère 
search();

// Récuperer film + populaire

async function mostpopular_banner() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=fr-FR&page=1`);
    const data = await response.json();
    const firstMovie = data.results[0]; 
    const netflix_banner = document.querySelector('.netflix_banner')
console.log(firstMovie);

    const poster = document.createElement('img');
    poster.setAttribute('src', 'https://image.tmdb.org/t/p/w780' + firstMovie.backdrop_path); 
    netflix_banner?.appendChild(poster);
  } catch (err) {
    console.log(err);
  }
}

mostpopular_banner();


async function mostpopular() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=fr-FR&page=1`);
    const data = await response.json();
    const scrollDiv = document.querySelector('.scroll');

    const popularMovies = data.results;
    popularMovies.forEach(movie => {

      const domImg = document.createElement('img');
      domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
      scrollDiv?.appendChild(domImg);

    });

  } catch (err) {
    console.log(err);
  }
}

mostpopular();

// Récuperer film Mieux classée

async function toprated() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=fr-FR&page=1`);
    const data = await response.json();
    const scrollDiv = document.getElementById('toprated');

    const popularMovies = data.results;
    popularMovies.forEach(movie => {

      const domImg = document.createElement('img');
      domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
      scrollDiv?.appendChild(domImg);

    });

  } catch (err) {
    console.log(err);
  }
}

toprated();

// Récuperer film prochainement

async function upcoming() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`);
    const data = await response.json();
    const scrollDiv = document.getElementById('latest');

    const popularMovies = data.results;
    popularMovies.forEach(movie => {

      const domImg = document.createElement('img');
      domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
      scrollDiv?.appendChild(domImg);

    });

  } catch (err) {
    console.log(err);
  }
}

upcoming();

  
  
