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
//Création d'une div en bas des cards
const bottomcardcyan = document.createElement("div");
bottomcardcyan.className = "bottomcard";
const bottomcardred = document.createElement("div");
bottomcardred.className = "bottomcard";
const bottomcardorange = document.createElement("div");
bottomcardorange.className = "bottomcard";
const bottomcardblue = document.createElement("div");
bottomcardblue.className = "bottomcard";

// Création des titres de card
const titlecyan = document.createElement("h2");
titlecyan.className = "titlecyan";
titlecyan.textContent = "Supervisor";
cardcyan.appendChild(titlecyan); // Attribution à la card cyan
const titlered = document.createElement("h2");
titlered.className = "titlered";
titlered.textContent = "Team Builder";
cardred.appendChild(titlered); // Attribution à la card rouge
const titleorange = document.createElement("h2");
titleorange.className = "titleorange";
titleorange.textContent = "Karma";
cardorange.appendChild(titleorange); // Attribution à la card orange
const titleblue = document.createElement("h2");
titleblue.className = "titleblue";
titleblue.textContent = "Calculator";
cardblue.appendChild(titleblue); // Attribution à la card bleue

// Création des textes de card
const textcyan = document.createElement("p");
textcyan.className = "textcyan";
textcyan.textContent = "Monitors activity to identify project roadblocks";
cardcyan.appendChild(textcyan); // Attribution à la card cyan
const textred = document.createElement("p");
textred.className = "textred";
textred.textContent = "Scans our talent network to create the optimal team for your project";
cardred.appendChild(textred); // Attribution à la card rouge
const textorange = document.createElement("p");
textorange.className = "textorange";
textorange.textContent = "Regularly evaluates our talent to ensure quality";
cardorange.appendChild(textorange); // Attribution à la card orange
const textblue = document.createElement("p");
textblue.className = "textblue";
textblue.textContent = "Uses data from past projects to provide better delivery estimates";
cardblue.appendChild(textblue); // Attribution à la card bleue

// Attributions des bottomcards aux cards
cardcyan.appendChild(bottomcardcyan);
cardred.appendChild(bottomcardred);
cardorange.appendChild(bottomcardorange);
cardblue.appendChild(bottomcardblue);

// Création des images de card
const imgcyan = document.createElement("img");
imgcyan.src = "../img/icon-supervisor.svg";
bottomcardcyan.appendChild(imgcyan);
const imgred = document.createElement("img");
imgred.src = "../img/icon-team-builder.svg";
bottomcardred.appendChild(imgred);
const imgorange = document.createElement("img");
imgorange.src = "../img/icon-karma.svg";
bottomcardorange.appendChild(imgorange);
const imgblue = document.createElement("img");
imgblue.src = "../img/icon-calculator.svg";
bottomcardblue.appendChild(imgblue);