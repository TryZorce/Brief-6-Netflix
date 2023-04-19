import { api_key } from "../apikey";

export function search() {
  const openPopupButton = document.getElementById('open-popup') as HTMLElement;
  const closePopupButton = document.getElementById('close-popup') as HTMLElement;
  const popup = document.querySelector('.popup') as HTMLElement;
  const searchInput = document.getElementById('site-search') as HTMLInputElement;
  const popupTitle = document.getElementById('popup-title') as HTMLElement;
  const searchResultsElement = document.getElementById('search-results') as HTMLElement;
  const btn_site_search = document.getElementById('btn_site_search') as HTMLElement;
  var page = 1


  openPopupButton?.addEventListener('click', function () {
    if (popup) {
      popup.style.display = "flex";
    }
  });

  closePopupButton?.addEventListener('click', function () {
    if (popup) {
      location.reload()
    }
  });

  

  const previousButton = document.createElement('button');
  previousButton.classList.add('previous-button');
  previousButton.innerText = 'Précédent';
  previousButton.addEventListener('click', () => {
      // Code pour afficher les résultats de recherche précédents
  });
  
  const nextButton = document.createElement('button');
  nextButton.classList.add('next-button');
  nextButton.innerText = 'Suivant';
  nextButton.addEventListener('click', () => {
      // Code pour afficher les résultats de recherche suivants
  });
  
  const popupContent = document.querySelector('.popup-content');
  popupContent?.appendChild(previousButton);
  popupContent?.appendChild(nextButton);
  
  

  searchInput?.addEventListener('input', function (event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    if (popupTitle) {
      popupTitle.innerText = searchTerm;
    }
  });
  previousButton.addEventListener('click', async function() {
    if (page > 1) {
      page--;
      await searchMovies();
    }
  });
  
  nextButton.addEventListener('click', async function() {
    page++;
    await searchMovies();
  });
  
  async function searchMovies() {
    const searchTerm = searchInput.value.trim();
  
    if (searchTerm.length > 0) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerm}&language=fr-FR&page=${page}`);
        const data = await response.json();
        const searchResults = data.results;
  
        resetSearchResults();
  
        const popupTitleElement = document.createElement('h2');
        popupTitleElement.innerText = searchTerm;
        searchResultsElement?.appendChild(popupTitleElement);
  
        searchResults.forEach((result) => {
          const title = result.title;
          const posterPath = result.poster_path;
          const listItem = document.createElement('li');
  
          if (posterPath) {
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w300/${posterPath}`;
            listItem.appendChild(img);
          } else {
            const img = document.createElement('img');
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';
            listItem.appendChild(img);
          }
  
          const titleElement = document.createElement('h3');
          titleElement.innerText = title;
          listItem.appendChild(titleElement);
  
          searchResultsElement?.appendChild(listItem);
        });
  
        // Met à jour l'état des boutons "Précédent" et "Suivant"
        previousButton.disabled = page === 1; 
        nextButton.disabled = page === data.total_pages;
  
        if (popup) {
          popup.style.display = "flex";
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  
  // Appelle la fonction de recherche au chargement de la page
  searchMovies();
  
  searchInput.addEventListener('keydown', async function (event) {
    if (event.key === 'Enter') {
      const searchTerm = searchInput.value.trim(); // retire les espaces en début et en fin de la chaîne

      if (searchTerm.length > 0) {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerm}&language=fr-FR&page=${page}`);
          const data = await response.json();
          const searchResults = data.results;

          // Supprime tous les résultats de recherche précédents
          resetSearchResults();

          // Ajoute le titre de recherche en haut de la popup
          const popupTitleElement = document.createElement('h2');
          popupTitleElement.innerText = searchTerm;
          searchResultsElement?.appendChild(popupTitleElement);

          // Crée un élément HTML pour chaque résultat de recherche et l'ajoute à la liste de résultats
          searchResults.forEach((result) => {
            const title = result.title;
            const posterPath = result.poster_path;
            const listItem = document.createElement('li');

            if (posterPath) {
              const img = document.createElement('img');
              img.src = `https://image.tmdb.org/t/p/w300/${posterPath}`;
              listItem.appendChild(img);
            } else {
              const img = document.createElement('img');
              img.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';
              listItem.appendChild(img);
            }

            const titleElement = document.createElement('h3');
            titleElement.innerText = title;
            listItem.appendChild(titleElement);

            searchResultsElement?.appendChild(listItem);
          });


          if (popup) {
            popup.style.display = "flex";
          }

        } catch (err) {
          console.log(err);
        }
      }
    }
  });

  btn_site_search.addEventListener('click', async function (event) {
    if (MouseEvent) {
      const searchTerm = searchInput.value.trim(); // retire les espaces en début et en fin de la chaîne

      if (searchTerm.length > 0) {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerm}&language=fr-FR&page=${page}`);
          const data = await response.json();
          const searchResults = data.results;

          // Supprime tous les résultats de recherche précédents
          resetSearchResults();

          // Ajoute le titre de recherche en haut de la popup
          const popupTitleElement = document.createElement('h2');
          popupTitleElement.innerText = searchTerm;
          searchResultsElement?.appendChild(popupTitleElement);

          // Crée un élément HTML pour chaque résultat de recherche et l'ajoute à la liste de résultats
          searchResults.forEach((result) => {
            const title = result.title;
            const posterPath = result.poster_path;
            const listItem = document.createElement('li');

            if (posterPath) {
              const img = document.createElement('img');
              img.src = `https://image.tmdb.org/t/p/w300/${posterPath}`;
              listItem.appendChild(img);
            } else {
              const img = document.createElement('img');
              img.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';
              listItem.appendChild(img);
            }

            const titleElement = document.createElement('h3');
            titleElement.innerText = title;
            listItem.appendChild(titleElement);

            searchResultsElement?.appendChild(listItem);
          });


          if (popup) {
            popup.style.display = "flex";
          }

        } catch (err) {
          console.log(err);
        }
      }
    }
  });

  function resetSearchResults() {
    while (searchResultsElement.firstChild) {
      searchResultsElement.removeChild(searchResultsElement.firstChild);
    }
  }

  

}
