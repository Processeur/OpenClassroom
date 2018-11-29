var menuElt = document.getElementById("desserts");



function addDessert(e){
	var saisieElt = prompt("Veuillez entrer un de vos desserts préférés:");
	var dessertElt = document.createElement("li");

	var linkElt = document.createElement("a");
	linkElt.textContent = saisieElt;
	linkElt.href = "#"
	linkElt.id = saisieElt;

	menuElt.appendChild(dessertElt);
	dessertElt.appendChild(linkElt);
};

var buttonElt = document.querySelector("button");
buttonElt.addEventListener("click", addDessert);



 document.getElementsByTagName("li").addEventListener("click", function (e) {
     console.log("Continuez plutôt à lire le cours ;)");
     e.preventDefault(); // Annulation de la navigation vers la cible du lien
 });