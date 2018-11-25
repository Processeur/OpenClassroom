/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

console.log (listeLiens[0].titre);

for (i = 0 ; i < listeLiens.length ; i++ ) {
    var parElt = document.createElement("p");
    parElt.id = "Par"+i;
    parElt.style.backgroundColor = "white";
    parElt.style.padding = "10px";
    var titleElt = document.createElement("a");
    titleElt.style.color = "#428bca";
    titleElt.style.fontWeight = "bold";
    titleElt.textContent = listeLiens[i].titre;
    var urlElt = document.createElement("a");
    urlElt.textContent = " " + listeLiens[i].url;
    var auteurElt = document.createElement("a");
    auteurElt.textContent = listeLiens[i].auteur;
    
    document.body.appendChild(parElt);
    document.getElementById(parElt.id).appendChild(titleElt);
    document.getElementById(parElt.id).appendChild(urlElt);
    document.getElementById(parElt.id).appendChild(document.createElement("br"));
    document.getElementById(parElt.id).appendChild(auteurElt);


};