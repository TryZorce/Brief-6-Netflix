
// import {home} from './pages/home'
import { search } from './pages/search'
import { api_key } from "./apikey";

// Barre de Recherche
search();
// Récuperer film + populaire


async function mostpopular_banner() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=fr-FR&page=1`);
    const data = await response.json();
    const firstMovie = data.results[0];
    const netflix_banner = document.querySelector('.netflix_banner');
    console.log(firstMovie);

    const poster = document.createElement('img');
    poster.setAttribute('src', 'https://image.tmdb.org/t/p/w780' + firstMovie.backdrop_path);
    poster.setAttribute('id', firstMovie.id);
    poster.addEventListener('click', async () => {
      const popup = window.open("", "popup", "width=500,height=500");
      const popupContent = document.createElement("div");
      
      popupContent.classList.add("popup_content")
      // Mettre code pour donner une classe a la div
      const popupPoster = document.createElement('img');
      popupPoster.setAttribute('src', 'https://image.tmdb.org/t/p/w780' + firstMovie.backdrop_path);
      popupPoster.style.width = '100%';
      popupContent.appendChild(popupPoster);

      const popupTitle = document.createElement('h2');
      popupTitle.textContent = firstMovie.title;
      popupContent.appendChild(popupTitle);

      const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${firstMovie.id}/credits?api_key=${api_key}&language=fr-FR`);
      const creditsData = await creditsResponse.json();
      const director = creditsData.crew.find(person => person.job === "Director");

      const popupDirector = document.createElement('div');
      popupDirector.textContent = `Créateur: ${director.name}`;
      popupContent.appendChild(popupDirector);

      const popupRating = document.createElement('div');
      popupRating.textContent = `Note: ${firstMovie.vote_average}`;
      popupContent.appendChild(popupRating);

      const popupOverview = document.createElement('p');
      popupOverview.textContent = firstMovie.overview;
      popupContent.appendChild(popupOverview);

      const popupReleaseDate = document.createElement('div');
      popupReleaseDate.textContent = `Date de sortie: ${firstMovie.release_date}`;
      popupContent.appendChild(popupReleaseDate);

      popup?.document.body.appendChild(popupContent);
    });
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
    const scrollDiv = document.getElementById('mostpopular');

    const popularMovies = data.results;
    popularMovies.forEach(movie => {
      const domImg = document.createElement('img');
      domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
      domImg.setAttribute('id', movie.id); // ajouter un ID unique
      domImg.addEventListener('click', async () => {
        const popup = window.open("", "popup", "width=500,height=500");
        const popupContent = document.createElement("div");

        const popupPoster = document.createElement('img');
        popupPoster.setAttribute('src', 'https://image.tmdb.org/t/p/w780' + movie.backdrop_path);
        popupPoster.style.width = '100%';
        popupContent.appendChild(popupPoster);

        const popupTitle = document.createElement('h2');
        popupTitle.textContent = movie.title;
        popupContent.appendChild(popupTitle);

        // Récupérer les informations sur le film via l'API en utilisant l'ID unique du film
        const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${api_key}&language=fr-FR`);
        const creditsData = await creditsResponse.json();
        const director = creditsData.crew.find(person => person.job === "Director");

        const popupDirector = document.createElement('div');
        popupDirector.textContent = `Créateur: ${director.name}`;
        popupContent.appendChild(popupDirector);

        const popupRating = document.createElement('div');
        popupRating.textContent = `Note: ${movie.vote_average}`;
        popupContent.appendChild(popupRating);

        const popupOverview = document.createElement('p');
        popupOverview.textContent = movie.overview;
        popupContent.appendChild(popupOverview);

        const popupReleaseDate = document.createElement('div');
        popupReleaseDate.textContent = `Date de sortie: ${movie.release_date}`;
        popupContent.appendChild(popupReleaseDate);

        popup?.document.body.appendChild(popupContent);
      });
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
      domImg.setAttribute('id', movie.id); // ajouter un ID unique
      domImg.addEventListener('click', async () => {
        const popup = window.open("", "popup", "width=500,height=500");
        const popupContent = document.createElement("div");

        const popupPoster = document.createElement('img');
        popupPoster.setAttribute('src', 'https://image.tmdb.org/t/p/w780' + movie.backdrop_path);
        popupPoster.style.width = '100%';
        popupContent.appendChild(popupPoster);

        const popupTitle = document.createElement('h2');
        popupTitle.textContent = movie.title;
        popupContent.appendChild(popupTitle);

        // Récupérer les informations sur le film via l'API en utilisant l'ID unique du film
        const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${api_key}&language=fr-FR`);
        const creditsData = await creditsResponse.json();
        const director = creditsData.crew.find(person => person.job === "Director");

        const popupDirector = document.createElement('div');
        popupDirector.textContent = `Créateur: ${director.name}`;
        popupContent.appendChild(popupDirector);

        const popupRating = document.createElement('div');
        popupRating.textContent = `Note: ${movie.vote_average}`;
        popupContent.appendChild(popupRating);

        const popupOverview = document.createElement('p');
        popupOverview.textContent = movie.overview;
        popupContent.appendChild(popupOverview);

        const popupReleaseDate = document.createElement('div');
        popupReleaseDate.textContent = `Date de sortie: ${movie.release_date}`;
        popupContent.appendChild(popupReleaseDate);

        popup?.document.body.appendChild(popupContent);
      });
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
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=fr-FR&page=1`);
    const data = await response.json();
    const scrollDiv = document.getElementById('latest');

    const popularMovies = data.results;
    popularMovies.forEach(movie => {
      const domImg = document.createElement('img');
      domImg.setAttribute('src', 'https://image.tmdb.org/t/p/w185' + movie.poster_path);
      domImg.setAttribute('id', movie.id); // ajouter un ID unique
      domImg.addEventListener('click', async () => {
        const popup = window.open("", "popup", "width=500,height=500");
        const popupContent = document.createElement("div");

        const popupPoster = document.createElement('img');
        popupPoster.setAttribute('src', 'https://image.tmdb.org/t/p/w780' + movie.backdrop_path);
        popupPoster.style.width = '100%';
        popupContent.appendChild(popupPoster);

        const popupTitle = document.createElement('h2');
        popupTitle.textContent = movie.title;
        popupContent.appendChild(popupTitle);

        // Récupérer les informations sur le film via l'API en utilisant l'ID unique du film
        const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${api_key}&language=fr-FR`);
        const creditsData = await creditsResponse.json();
        const director = creditsData.crew.find(person => person.job === "Director");

        const popupDirector = document.createElement('div');
        popupDirector.textContent = `Créateur: ${director.name}`;
        popupContent.appendChild(popupDirector);

        const popupRating = document.createElement('div');
        popupRating.textContent = `Note: ${movie.vote_average}`;
        popupContent.appendChild(popupRating);

        const popupOverview = document.createElement('p');
        popupOverview.textContent = movie.overview;
        popupContent.appendChild(popupOverview);

        const popupReleaseDate = document.createElement('div');
        popupReleaseDate.textContent = `Date de sortie: ${movie.release_date}`;
        popupContent.appendChild(popupReleaseDate);

        popup?.document.body.appendChild(popupContent);
      });
      scrollDiv?.appendChild(domImg);
    });

  } catch (err) {
    console.log(err);
  }
}



upcoming();


