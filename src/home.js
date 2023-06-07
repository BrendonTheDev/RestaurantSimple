// import images here

const home = function () {
  const content = document.getElementById("content");

  const backgroundHome = document.createElement("div");
  backgroundHome.id = "background-home";
  content.appendChild(backgroundHome);

  const pageLoad = document.createElement("div");
  pageLoad.className = "pageLoad";

  content.appendChild(pageLoad);
};

export default home;
