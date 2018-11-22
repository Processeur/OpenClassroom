var couleurText = prompt("Veuillez saisir la couleur du texte : ");
var couleurFond = prompt("Veuillez saisir la couleur du fond :");

var parElt = document.querySelectorAll("div");

for (i = 0 ; i < parElt.length ; i++) {
	parElt[i].style.color = couleurText;
	parElt[i].style.backgroundColor = couleurFond;
	console.log(couleurText);
}