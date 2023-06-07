import homeImg from "../assets/src/";
import menuImg from "../assets/src/";
import aboutImg from "../assets/src/";

const headerDiv = function () {
  const header = document.createElement("div");
  header.id = "header";

  const homeImage = document.createElement("img");
  homeImage.src = homeImg;
  homeImage.id = "homeImage";

  header.appendChild(homeImage);

  const menuImage = document.createElement("img");
  menuImage.src = menuImg;
  menuImage.id = "menuimage";

  header.appendChild(menuImage);

  const aboutImage = document.createElement("img");
  aboutImage.src = aboutImg;
  aboutImage.id = "aboutimage";

  header.appendChild(aboutImage);

  return header;
};

export default headerDiv;
