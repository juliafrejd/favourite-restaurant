let submitButton = document.querySelector(".submit-button");
let section = document.querySelector("section");

submitButton.addEventListener("onSubmit", () =>
  section.classList.add("active")
);
closeButton.addEventListener("onClick", () =>
  section.classList.remove("active")
);
