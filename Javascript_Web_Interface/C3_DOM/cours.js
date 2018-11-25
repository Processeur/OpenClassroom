// Modification du contenu HTML de la liste : ajout d'un langage

document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// Suppression du contenu HTML de la liste

//document.getElementById("langages").innerHTML = "";

// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

// Définition de l'attribut "id" du premier titre

document.querySelector("h1").setAttribute("id", "titre");

document.querySelector("h1").id = "titre";


var titreElt = document.querySelector("h1"); // Accès au premier titre h1

titreElt.classList.remove("debut"); // Suppression de la classe "debut"

titreElt.classList.add("titre"); // Ajout de la classe "titre"

console.log(titreElt);

var pythonElt = document.createElement("li"); // Création d'un élément li
pythonElt.id = "python"; // Définition de son identifiant
pythonElt.textContent = "Python"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément


var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément


var linkElt = document.createElement("a");
document.body.insertAdjacentHTML("beforeEnd", "Et voici une <a href=\"https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation\">liste</a> plus complète");

//document.querySelector("p").insertAdjacentHTML("afterEnd", " plus complète !"