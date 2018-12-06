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
    var parElt = document.createElement("p");
    parElt.id = "par" +  Number(i+1);

    var questPres = document.createElement("span");
    questPres.textContent = "Question " + Number(i+1) + ": "
    questPres.style = "font-weight:bold"

    var questElt = document.createElement("a");
    questElt.textContent = questions[i].enonce;
    questElt.style = "font-style:italic";

    var buttonElt = document.createElement("button");
    buttonElt.textContent = "Afficher la réponse";
    buttonElt.id = i;
    buttonElt.addEventListener("click", function (e){
        var btnId = document.getElementById(e.target.id);
        var ansElt = document.createElement("a");
        ansElt.textContent = questions[btnId.id].reponse;
        
        btnId.parentNode.appendChild(ansElt);
        btnId.parentNode.removeChild(btnId);

    });


    document.getElementById("contenu").appendChild(parElt);
    parElt.appendChild(questPres);
    parElt.appendChild(questElt);
    parElt.appendChild(document.createElement("br"));
    parElt.appendChild(buttonElt);
};


// Solution avec un forEach

var i = 1; // Permet de numéroter les questions

questions.forEach(function (question) {
    // Titre de la question
    var titreElt = document.createElement("strong");
    titreElt.textContent = "Question " + i + " : ";

    // Enoncé de la question (dans une balise <i>)
    var texteEnonceElt = document.createElement("i");
    texteEnonceElt.textContent = question.enonce;

    // Enoncé de lq question
    var enonceElt = document.createElement("div");
    enonceElt.appendChild(titreElt);
    enonceElt.appendChild(texteEnonceElt);

    // La zone de réponse contient initialement un bouton
    var zoneReponseElt = document.createElement("div");
    var boutonElt = document.createElement("button");
    boutonElt.textContent = "Afficher la réponse";
    zoneReponseElt.appendChild(boutonElt);

    boutonElt.addEventListener("click", function () {
        // Remplacement du bouton par la réponse à la question
        var reponseElt = document.createElement("div");
        reponseElt.textContent = question.reponse;
        zoneReponseElt.innerHTML = "";
        zoneReponseElt.appendChild(reponseElt);
    });

    // La question regroupe l'énoncé et la zone de réponse
    var questionElt = document.createElement("p");
    questionElt.appendChild(enonceElt);
    questionElt.appendChild(zoneReponseElt);
    document.getElementById("contenu").appendChild(questionElt);

    i++;
});