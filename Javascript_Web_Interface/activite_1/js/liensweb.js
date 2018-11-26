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

for (i = 0 ; i < listeLiens.length ; i++ ) {

    //Création du paragraphe
    var parElt = document.createElement("p");
    parElt.id = "Par"+i;
    parElt.style.backgroundColor = "white";
    parElt.style.padding = "10px";

    //Création du Titre
    //Contenu
    var titleElt = document.createElement("a");
    titleElt.textContent = listeLiens[i].titre;
    titleElt.href = listeLiens[i].url;
    //Style
    titleElt.style.color = "#428bca";
    titleElt.style.fontWeight = "bold";
    titleElt.style.textDecoration = "none";
    titleElt.style.lineHeight = "24px";

    //Création de l'url
    //Contenu
    var urlElt = document.createElement("a");
    urlElt.textContent = " " + listeLiens[i].url;
    
    //Création de l'auteur
    //Contenu
    var auteurElt = document.createElement("a");
    auteurElt.textContent = "Ajouté par " +listeLiens[i].auteur;
    //Style
    auteurElt.style.lineHeight = "24px";

    //Affichage des éléments
    document.body.appendChild(parElt);
    document.getElementById(parElt.id).appendChild(titleElt);
    document.getElementById(parElt.id).appendChild(urlElt);
    document.getElementById(parElt.id).appendChild(document.createElement("br"));
    document.getElementById(parElt.id).appendChild(auteurElt);
};
var test = document.getElementsByTagName("p")[0];
    console.log(test);
    var test2 = titleElt.style.color;
    console.log(test2);