import UiKit from "uikit";
import { moviesUrls } from '../ajax';

const userInput = document.getElementById("input");
const cards = document.getElementById("cards");


const getSearchMovies = async(query) => {
    try {
        const res = await fetch(`${moviesUrls.search}&s=${query}`);
        const parsedRes = await res.json();
        /*UiKit.notification({
            message: "Data loaded successfuly",
            status: "success",
        });
        console.log(parsedRes);*/
        return parsedRes;
    } catch (error) {
        UiKit.notification({ message: error, status: "danger" });
    }
};

const links = () => {
    [].forEach.call(document.querySelectorAll('.details-btn'), function(el) {
        el.addEventListener('click', async function(e) {
            e.preventDefault();
            const targetElement = e.target || e.srcElement;
            const movieId = targetElement.getAttribute('data-movie-id');
            const data = await getMovieById(movieId);
            renderMovieCard(data);
            scrollTo(cardMovie);
        })
    });
};

const renderCards = (data = [], allItems = false) => {
    if (data.length) {
        cards.innerHTML = data
            .map(({ Title, Poster, Year }) => {
                return `
                <li>
                <div class="uk-card uk-card-default uk-card-body section__movie-card">
                <h2 class="section__movie-title">${Title}</h2>
                    <img class="section__movie-poster" data-src="${Poster}" width="200" height="200" alt="photo" uk-img>
                    <span class="section__movie-year">${Year}</span>
                </div>
            </li>
      `;
            })
            .join("");
        data.totalResults = +data.totalResults;
        if (!allItems && data.totalResults > 10) {
            buidPagination({
                items: data.totalResults,
                itemsOnPage: 10,
                displayedPages: 3,
                currentPage: params.page
            });
        }
        links();
    } else {
        cards.innerHTML = `
              <div class="uk-alert-danger uk-width-1-1" uk-alert>
                <a class="uk-alert-close" uk-close></a>
                <p>${data.Error}</p>
              </div>`;

    }
};

document.addEventListener("DOMContentLoaded", async() => {
    const randomMovie = await getSearchMovies();

    userInput.addEventListener('input', async(e) => {
        const res = await getSearchMovies(e.target.value);
        renderCards(res.Search);
    });
});