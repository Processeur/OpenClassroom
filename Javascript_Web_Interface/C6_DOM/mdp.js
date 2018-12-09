var form = document.querySelector("form");
form.addEventListener("submit", function(e){
	var mdpElt="";
	var regex1 = /[0-9][a-zA-Z]/;
	var regex2 = /[a-zA-Z][0-9]/;
	var mdpElt = form.elements.mdp1.value;
	var mdpConfElt = form.elements.mdp2.value;
	if (mdpElt === mdpConfElt) {
		if (Number(mdpElt.length) < 6) {
			messageElt = "Le mot de passe fait moins de 6 caractères";
		}
		if (messageElt != "") {
			messageElt = messageElt + ",";
		}
		if ( regex1.test(mdpElt) === false && regex2.test(mdpElt) === false ) {
			messageElt = messageElt + " Votre mot de passe doit contenir au moins un chiffre et une lettre";
		}
		if (messageElt === "") {
			messageElt = "Les mots de passes sont corrects";
		}
	}else{
		messageElt="Les 2 mots de passe ne sont pas identiques"
	}
	document.getElementById("infoMdp").textContent = messageElt;
		e.preventDefault();
	});