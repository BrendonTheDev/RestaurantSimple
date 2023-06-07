export function component() {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("headerDiv");

  let header = document.createElement("h1");
  header.textContent = "Load Header Here";
  header.classList.add("headingText");

  headerDiv.appendChild(header);

  return headerDiv;
}
