// reusable function to create buttons
export function createButton(className, buttonText, onClick) {
  const newButton = document.createElement("button");

  newButton.classList.add("button", `${className}`);
  newButton.setAttribute("data-js", `${className}`);
  newButton.textContent = buttonText;

  if (onClick) {
    newButton.addEventListener("click", onClick);
  }

  return newButton;
}
