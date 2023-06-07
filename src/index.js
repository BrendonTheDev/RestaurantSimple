import "./home.css";
import "./home.js";

const homeButton = document.getElementById("homeImage");
const menuButton = document.getElementById("menuImage");
const aboutButton = document.getElementById("aboutImage");

homeButton.addEventListener("click", function () {
  render();
  home();
  pageLoad();
});

menuButton.addEventListener("click", function () {
  render();
  menu();
  pageLoad();
});

aboutButton.addEventListener("click", function () {
  render();
  about();
  pageLoad();
});
