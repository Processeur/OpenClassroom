// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

for (i = 0 ; i < questions.length ; i++) {
    var parElt=document.createElement("p");
    var questPres = document.createElement("span");
    questPres.textContent = "Question " + Number(i+1) + ": "
    questPres.style = "font-weight:bold"
    var questElt = document.createElement("a");
    questElt.textContent = questions[i].enonce;
    questElt.style = "font-style:italic";

    document.getElementById("contenu").appendChild(parElt);
    parElt.appendChild(questPres)
    parElt.appendChild(questElt);
};