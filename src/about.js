// import img for background here

const about = function () {
  const content = document.getElementById("content");

  const backgroundAbout = document.createElement("div");
  backgroundAbout.id = "background-about";
  content.appendChild(backgroundAbout);

  const pageLoad = document.createElement("div");
  pageLoad.className = "pageLoad";
  content.appendChild(pageLoad);
};

export default about;
