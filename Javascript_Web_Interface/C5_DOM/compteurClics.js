function clic () {var compteurElt = document.getElementById("compteurClics");
	compteurElt.textContent = Number(compteurElt.textContent) + 1 ;
}

var boutonElt = document.getElementById("clic");
boutonElt.addEventListener("click",clic);

var stopbtnElt = document.getElementById("desactiver");
stopbtnElt.addEventListener("click",function(){
	boutonElt.removeEventListener("click",clic);
});
