import "../../style/pages/_index.scss";

// Sélection de la div "App"
const app = document.querySelector("#app");

// Création du titre
const mainTitle = document.createElement("h1");
mainTitle.innerHTML =
  "Reliable, efficient delivery <br> <b>Powered by Technology</b>";
app.appendChild(mainTitle);

// Création de la baseline
const baseline = document.createElement("p");
baseline.className = "baseline";
baseline.textContent =
  "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful";
app.appendChild(baseline);

// Création de la div cards
const cards = document.createElement("main");
cards.className = "cards";
app.appendChild(cards);

// Création de la div gauche
const lmain = document.createElement("article");
lmain.className = "lmain";
cards.appendChild(lmain);

// Création de la div centrale
const cmain = document.createElement("article");
cmain.className = "cmain";
cards.appendChild(cmain);

// Création de la div droite
const rmain = document.createElement("article");
rmain.className = "rmain";
cards.appendChild(rmain);

// Création des cards
const cardcyan = document.createElement("div");
cardcyan.className = "cardcyan";
lmain.appendChild(cardcyan); // Attribution à la div gauche
const cardred = document.createElement("div");
cardred.className = "cardred";
cmain.appendChild(cardred); // Attribution à la div centrale
const cardorange = document.createElement("div");
cardorange.className = "cardorange";
cmain.appendChild(cardorange); // Attribution à la div centrale
const cardblue = document.createElement("div");
cardblue.className = "cardblue";
rmain.appendChild(cardblue); // Attribution à la div droite

// Création des titres de card
const titlecyan = document.createElement("div");
titlecyan.className = "titlecyan";
titlecyan.textContent = "Supervisor";
cardcyan.appendChild(titlecyan); // Attribution à la card cyan
const titlered = document.createElement("div");
titlered.className = "titlered";
titlered.textContent = "Team Builder";
cardred.appendChild(titlered); // Attribution à la card rouge
const titleorange = document.createElement("div");
titleorange.className = "titleorange";
titleorange.textContent = "Karma";
cardorange.appendChild(titleorange); // Attribution à la card orange
const titleblue = document.createElement("div");
titleblue.className = "titleblue";
titleblue.textContent = "Calculator";
cardblue.appendChild(titleblue); // Attribution à la card bleue

// Création des textes de card
const textcyan = document.createElement("div");
textcyan.className = "textcyan";
textcyan.textContent = "Supervisor";
cardcyan.appendChild(textcyan); // Attribution à la card cyan
const textred = document.createElement("div");
textred.className = "textred";
textred.textContent = "Team Builder";
cardred.appendChild(textred); // Attribution à la card rouge
const textorange = document.createElement("div");
textorange.className = "textorange";
textorange.textContent = "Karma";
cardorange.appendChild(textorange); // Attribution à la card orange
const textblue = document.createElement("div");
textblue.className = "textblue";
textblue.textContent = "Calculator";
cardblue.appendChild(textblue); // Attribution à la card bleue
