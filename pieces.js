// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[0];

for (let i = 0; i < pieces.length; i++) {

    //Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    //Création d'une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    //On crée l'élément img.
    const imageELement = document.createElement("img");
    const nomElement = document.createElement("h2");
    const prixElement = document.createElement("p");
    const categorieElement = document.createElement("p");
    const descriptionElement = document.createElement("p");
    const stockElement = document.createElement("p");
    //On accède à l'indice i de la liste pieces pour configurer la source de l'image.
    imageELement.src = pieces[i].image;
    nomElement.innerText = pieces[i].nom;
    prixElement.innerText = pieces[i].prix;
    categorieElement.innerText = pieces[i].categorie;
    descriptionElement.innerText = pieces[i].description;
    stockElement.innerText = pieces[i].disponibilite;

    //On rattache la balise article à la section fiches
    sectionFiches.appendChild(pieceElement)

    //On rattache l'image à pieceElement (la balise article)
    pieceElement.appendChild(imageELement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
}
/*
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "(Pas de description pour le moment)";
const stockElement = document.createElement("p");
stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);*/