	var lien = document.querySelectorAll("a");
	var lienQTY = Number(lien.length);
	var lienFirst = lien[0].href;
	var lienLast = lien[lienQTY-1].href;


	function infoLiens() {

			description = lienQTY + '\n' + lienFirst + '\n' + lienLast;
			return description;
}
function possede(instrument, type) {
	var checkInst = document.getElementById(instrument);
	if (checkInst != null) {
		var checkType = document.getElementById(instrument).getAttribute("class").includes(type);
		console.log (checkType);
	} else {
		console.log("Cet instrument n'existe pas dans la liste!!!")
	}	
}

console.log(infoLiens());

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur