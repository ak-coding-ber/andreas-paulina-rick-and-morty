import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  cardContainer.innerHTML = "";

  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (response.ok) {
      const data = await response.json();

      console.log(data.results);
      console.log(data.results[1].name);
      data.results.forEach((character) => {
        // const cardElement = createCharacterCard(character);
        // renderElement(cardElement);
        const newCharacterCard = createCharacterCard(
          character.name,
          character.image,
          character.status,
          character.type,
          character.episode.length
        );

        cardContainer.append(newCharacterCard);
        // console.log(
        //   character.name,
        //   character.image,
        //   character.status,
        //   character.type,
        //   character.episode.length
        // );
      });
    } else {
      console.log("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred", error);
  }
}

fetchCharacters();
