var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";
pElt.style.backgroundColor = "grey";

var paragraphesElts = document.getElementsByTagName("p");

for (i = 0 ; i < paragraphesElts.length ; i++) {
	console.log(paragraphesElts[i].style.color);
};

var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB

var paragraphesElts2 = document.getElementsByTagName("p");

for (i = 0 ; i < paragraphesElts2.length ; i++) {
	console.log(getComputedStyle(paragraphesElts2[i]).color);
};
