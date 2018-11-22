var titleElt = document.body.appendChild(document.createElement("ul"));
titleElt.textContent = "Information sur l'élément :";
titleElt.id = "liste";
var listeElt = document.getElementById("liste");

var chanson = getComputedStyle(document.getElementById("contenu"));
console.log(chanson);
var heightElt = chanson.height;
var widthElt = chanson.width;

var lineElt1 = listeElt.appendChild(document.createElement("li"));
lineElt1.textContent = "Hauteur : " + heightElt;
var lineElt2 = listeElt.appendChild(document.createElement("li"));
lineElt2.textContent = "Largeur : " + widthElt;

// Correction

var styleElement = getComputedStyle(document.getElementById("contenu"));
var listeElt = document.createElement("ul");
var longueurElt = document.createElement("li");
longueurElt.textContent = "Longueur : " + styleElement.width;
var hauteurElt = document.createElement("li");
hauteurElt.textContent = "Hauteur : " + styleElement.height;
listeElt.appendChild(hauteurElt);
listeElt.appendChild(longueurElt);
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(listeElt);
