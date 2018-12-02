var menuElt = document.getElementById("desserts");



function addDessert(dessertElt){
	var testElt =  document.getElementById(dessertElt);
	var saisieElt = prompt("Veuillez entrer un de vos desserts préférés:");

	if (testElt === null){
		var dessertElt = document.createElement("li");

		var linkElt = document.createElement("a");
		linkElt.textContent = saisieElt;
		linkElt.href = "#"
		linkElt.id = saisieElt;
		linkElt.addEventListener("click", function (e) {
			var replaceElt = document.getElementsByTagName("a");
			addDessert(saisieElt)
			e.preventDefault();
		});

		menuElt.appendChild(dessertElt);
		dessertElt.appendChild(linkElt);
	} else {
		var linkElt = document.getElementById(dessertElt);
		linkElt.textContent = saisieElt;
		linkElt.id = saisieElt
	};
};
var buttonElt = document.querySelector("button");
buttonElt.addEventListener("click", addDessert);