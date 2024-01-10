import "../../style/pages/_index.scss";

// Sélection de la div "App"
const app = document.querySelector("#app");

const mainTitle = document.createElement("h1");
mainTitle.textContent = "Coucou";
app.appendChild(mainTitle);
