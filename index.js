import { createCharacterCard } from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const navigation = document.querySelector('[data-js="navigation"]');
const main = document.querySelector("main");

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

function handleNextButtonClick() {
  if (page < maxPage) {
    page++;
    fetchCharacters(page);
  }
}

function handlePreviousButtonClick() {
  if (page > 1) {
    page--;
    fetchCharacters(page);
  }
}

function handleSearchbarSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  searchQuery = formData.get("query");
  page = 1;

  fetchCharacters(page);
}

main.insertBefore(createSearchBar(handleSearchbarSubmit), main.firstChild);
navigation.append(
  createButton("button--previous", "previous", handlePreviousButtonClick)
);
navigation.append(createPagination());
navigation.append(createButton("button--next", "next", handleNextButtonClick));

export async function fetchCharacters(page) {
  cardContainer.innerHTML = "";
  const pagination = document.querySelector('[data-js="pagination"]');

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}` // task SEARCH BAR: angepasst, damit die url searchQuery nutzt
    );
    if (response.ok) {
      const data = await response.json();

      maxPage = data.info.pages; // task PAGINATION: aktualisiert max. Seitenanzahl
      pagination.textContent = `${page} / ${maxPage}`; // task PAGINATION: aktualisiert Anzeige

      data.results.forEach((character) => {
        const newCharacterCard = createCharacterCard(
          character.name,
          character.image,
          character.status,
          character.type,
          character.episode.length
        );

        cardContainer.innerHTML += newCharacterCard;
      });
    } else {
      console.log("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred", error);
  }
}
fetchCharacters(page);
