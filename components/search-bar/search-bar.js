export function createSearchBar(onSubmit) {
  const searchBarContainer = document.createElement("div");
  searchBarContainer.classList.add("search-bar-container");
  searchBarContainer.setAttribute("data-js", "search-bar-container");

  searchBarContainer.innerHTML += `
        <form action="" class="search-bar" data-js="search-bar">
          <input
            name="query"
            class="search-bar__input"
            type="text"
            placeholder="search characters"
            aria-label="character name"
          />
          <button class="search-bar__button" aria-label="search for character">
            <img
              class="search-bar__icon"
              src="assets/search.png"
              alt=""
            />
          </button>
        </form>`;

  if (onSubmit) {
    searchBarContainer.addEventListener("submit", onSubmit);
  }

  return searchBarContainer;
}
