//active on nav links
import { data } from "./index.js";
import { loadingPage } from "./index.js";
let navLinks = Array.from(document.querySelectorAll(".nav-item .nav-link"));
export let category = "mmorpg";
navLinks.forEach((e) => {
  e.addEventListener("click", () => {
    loadingPage.style.display = "flex"
    navLinks.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    category = e.getAttribute("data-game")
    loadingPage.style.display = `flex`
    data.data()
  });
});