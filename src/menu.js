// import images FOR MENU ITEMS here

const menu = function () {
  const content = document.getElementById("content");

  const backgroundMenu = document.createElement("div");
  backgroundMenu.id = "background-menu";
  content.appendChild(backgroundMenu);

  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";

  //   example menu item ADD 5 MORE
  const ramen1 = document.createElement("img");
  ramen1.src = ramen1Image;
  ramen1.id = "ramen1";
  menuContainer.appendChild(ramen1);

  content.appendChild(menuContainer);

  const pageLoad = document.createElement("div");
  pageLoad.className = "pageLoad";

  content.appendChild(pageLoad);
};

export default home;
