// Liste des journaux

var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];


// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

journaux.forEach(function(element){
	var lienElt = document.createElement("a");
	lienElt.href = element;
	lienElt.textContent = element;
	document.getElementById("contenu").appendChild(lienElt);
	document.getElementById("contenu").appendChild(document.createElement("br"));

});