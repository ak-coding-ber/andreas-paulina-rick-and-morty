export function createPagination() {
  const paginationElement = document.createElement("span");

  paginationElement.classList.add("navigation__pagination");
  paginationElement.setAttribute("data-js", "pagination");
  paginationElement.textContent = "1 / 1";

  return paginationElement;
}
