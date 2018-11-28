function couleurs (e){
	keyElt = String.fromCharCode(e.charCode);
	console.log (keyElt);
	parElt = document.getElementsByTagName("div");
	if (keyElt === "r") {
		for ( i = 0; i < parElt.length ; i++) {
			parElt[i].style.backgroundColor = "red";
		}
	} else if (keyElt === "j") {
		for ( i = 0; i < parElt.length ; i++) {
			parElt[i].style.backgroundColor = "yellow";
		}
	} else if (keyElt === "v") {
		for ( i = 0; i < parElt.length ; i++) {
			parElt[i].style.backgroundColor = "green";
		}
	} else if (keyElt === "b") {
		for ( i = 0; i < parElt.length ; i++) {
			parElt[i].style.backgroundColor = "white";
		}
	};

};

document.addEventListener("keypress", couleurs);