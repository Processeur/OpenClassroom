var menuElt = document.getElementById("desserts");
function addDessert(e){
	var saisieElt = prompt("Veuillez entrer un de vos desserts préférés:");
	var dessertElt = document.createElement("li");
	dessertElt.textContent = saisieElt;
	menuElt.appendChild(dessertElt);
};

var buttonElt = document.querySelector("button");
buttonElt.addEventListener("click", addDessert);
