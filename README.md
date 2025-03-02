# Atelier2: les conceptes POO de langage javascript.

## Exercice 1: Système de Gestion de Voitures
Cet exercice implémente un système simple de gestion de voitures en JavaScript utilisant un modèle orienté objet basé sur les prototypes.
### Fonctionnalités
=> Création de voitures avec différentes caractéristiques (modèle, marque, année, type, carburant)

=> Gestion de différentes marques de voitures avec héritage (Hyundai, Ford)

=> Tri des voitures par année

=>Fonctionnalité spécifique alarmer() pour la  marque Hyundai

### Structure du Code
#### Classe de Base Voiture:

```js
//Fonction constructeur Voiture
function Voiture(model,marque,anne,type,carburant){
    this.model=model;
    this.marque=marque;
    this.annee=annee;
    this.type=type;
    this.carburant=carburant;

}
```
#### Classes Dérivées:
**Hyundai** - Étend la classe Voiture avec des propriétés supplémentaires (série, hybride) et ajoute une fonction d'alarmer. 
```js
//la classe Hyndai qui hérite de la classe Voiture
function Hyndai(model,marque,annee,type,carburant,serie,hybride){
    Voiture.call(this,model,marque,année,type,carburant);
    this.serie=serie;
    this.hybride=hybride;
}
//la fonction alarmer pour la classe Hyndai
Hyndai.prototype.alarmer=function(){
    console.log(`La Hyundai ${this.model} (${this.serie}) déclenche l'alarme !`);


}
```
**Ford** - Étend la classe Voiture avec une liste d'options.
```js
//la classe Ford qui hérite de la classe Voiture
function Ford (model,marque,annee,type,carburant,options){
    Voiture.call(this,model,marque,annee,type,carburant);
    this.options=options;
}
```
### Utilisation
#### Création d'un tableau de voitures:
```js
//tableau des voitures

let arrvoitures =[
     new Voiture("Model1","Clio",2022,"sedan","gasoline"),
     new Voiture("Model2","Audi",2025,"SUV","electric"),
     new Voiture("Model3","Ford",2012,"sedan","diesel"),
     new Voiture("Model4","Tesla",2021,"Coupe","gasoline")
]

```
#### Tri du tableau:
```js
//Tri des voitures selon l'année (ordre croissant)

arrvoitures.sort((V1,V2)=>{
    return V1.annee-V2.annee
});
```
#### Création d'instances spécifiques:
```js
//instanciation
let myFord= new Ford("Model3","Ford",2012,"sedan","diesel",["freinage","GPS"]);

console.log(myFord);

let myhyndai= new Hyndai("Model8","Hyndai",2023,"sedan","gasoline", "premium","true");

console.log(myhyndai);

myhyndai.alarmer();

console.log("le tableau des voitures triés", arrvoitures);
```
## Ecercice 2: Système de Gestion d'Étudiants et Professeur
Cee exercice implémente un système simple de gestion d'étudiants et d'un professeur en JavaScript en utilisant des objets natifs.
### Fonctionnalités
=> Création d'étudiants avec leurs informations personnelles (nom, prénom, âge, CNE)

=> Création d'un professeur avec ses informations et méthodes

=> Tri des étudiants par ordre alphabétique (d'abord par nom, puis par prénom)

=> Méthodes pour les actions des étudiants et du professeur
### Structure du Code
#### Objets Étudiant:
Des objets littéraux représentant chaque étudiant avec les propriétés suivantes :

=>nom : Nom de l'étudiant

=>prenom : Prénom de l'étudiant

=> age : Âge de l'étudiant

=> cne : Code National de l'Étudiant (identifiant unique)

=> etudier() : Méthode qui retourne une chaîne décrivant l'action d'étudier
```js
// objet native Etudiant

var etudiant1 = {
    nom: 'Essalhi',
    prenom: 'Salma',
    age: 22,
    cne: 'M11349797',
    etudier: function() {
        return `${this.prenom} ${this.nom} est en train d'étudier .`;
    }
};
```
#### Objets Professeur:
Un objet littéral représentant le professeur avec les propriétés :

=> nom : Nom du professeur

=> age : Âge du professeur

=> cne : Code National de l'Enseignant

=> enseigner() : Méthode qui affiche un message d'enseignement
```js
// objet native Professeur
    var  Professeur  = {
        nom: 'Errahmani',
        age: 45,
        cne: 'VA117896',
        //la méthode Enseigne() du Professeur
        enseigner: function() {
            console.log(`Je suis ${this.nom}, j'enseigne .`);

        }
    }

```
### Manipulation des Données
#### Liste d'Étudiants:
```js
// Liste des étudiants
var etudiants = [etudiant1, etudiant2, etudiant3];
      
```
#### Tri des Étudiants:
Le code trie les étudiants par ordre alphabétique en utilisant la fonction sort() :

D'abord par nom.
Si les noms sont identiques, par prénom
```js
//Tri des étudiants par ordre alphabétique (nom puis prénom)
etudiants.sort((Etudiant1, Etudiant2) => {
    if (Etudiant1.nom === Etudiant2.nom) {
        return Etudiant1.prenom.localeCompare(Etudiant2.prenom); // Trie par prénom si le nom est identique
    }
    return Etudiant1.nom.localeCompare(Etudiant2.nom); // Trie par nom
});
```
#### Affichage des Résultats:
Le code affiche :

=> La liste des étudiants triés

=> Un exemple d'un étudiant qui étudie

=> Un exemple du professeur qui enseigne
```js
//Affichage des résultats
console.log(" Liste des étudiants triés par ordre alphabétique :");
etudiants.forEach(etudiant => console.log(`${etudiant.nom} ${etudiant.prenom} - Age: ${etudiant.age} - CNE: ${etudiant.cne}`));

console.log(etudiants[0].etudier()); // Un étudiant étudie
Professeur.enseigner(); // Le professeur enseigne
```
## Exercice 3: Système de Classes Géométriques
Cee exercice implémente plusieurs classes géométriques en JavaScript utilisant la syntaxe EcmaScript 6, dont des vecteurs, des rectangles, des carrés, des points et des segments.
### Classes Implémentées
#### Vecteur2D:
Représente un vecteur dans un espace bidimensionnel avec des coordonnées x et y.
```js
//class verteur2D

class Vecteur2D{
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }


    // Méthode d'affichage
    afficher() {
        console.log(`Vecteur2D(x: ${this.x}, y: ${this.y})`);
    }

    // Méthode d'addition de deux vecteurs
    ajouter(vecteur) {
        return new Vecteur2D(this.x + vecteur.x, this.y + vecteur.y);
    }

}
```
#### Fonctionnalités :
=> Création avec des coordonnées par défaut (0,0) ou personnalisées

=> Affichage des coordonnées

=> Addition de deux vecteurs

#### Rectangle:
Représente un rectangle avec une longueur et une largeur.
```js
class Rectangle{
    constructor(longueur=2, largeur=2){
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle"; // Valeur par défaut

    }
    afficher(){
        console.log(`${this.nom} (longueur: ${this.longueur}, largeur: ${this.largeur})`);
    }

     // Méthode de calcul de la surface
     surface() {
        return this.longueur * this.largeur;
    }
}
```
#### Fonctionnalités :
=> Création avec des dimensions par défaut (2x2) ou personnalisées

=> Affichage des propriétés

=> Calcul de la surface
#### Carré
Étend la classe Rectangle pour représenter un carré (cas particulier d'un rectangle avec longueur = largeur).
```js
class Carre extends Rectangle {
    constructor(cote = 2){
        super(cote,cote);
        this.nom = "Carre"; // Surcharge de l'attribut nom

    }
}

```
#### Fonctionnalités :
=> Création avec côté par défaut (2) ou personnalisé

=> Héritage des méthodes du Rectangle (affichage, surface)

=> Surcharge de l'attribut nom
#### Point:
Représente un point dans un espace bidimensionnel.
```js
//class point 
class Point{
    constructor(x=0.0,y=0.0){
        this.x = x;
        this.y = y;
    }
    afficher() {
        console.log(`Point(x: ${this.x}, y: ${this.y})`);
    }
}
```
#### Fonctionnalités :
=> Création avec coordonnées par défaut (0,0) ou personnalisées

=> Affichage des coordonnées
#### Segment:
Représente un segment défini par deux points (origine et extrémité).
```js
class segment{
    constructor(x1, y1, x2, y2){
    
        this.orig=new Point(x1, y1); // Origine du segment
        this.extrem= new Point(x2, y2); // Extrémité du segment
    
    }
    afficher(){
        console.log("l'origine de segment:");
        this.orig.afficher();

        console.log("l'extremité de segment:");
        this.extrem.afficher();
    }
}
```
#### Fonctionnalités :
=> Création avec les coordonnées des deux extrémités

=> Affichage des deux points définissant le segment

#### instanciation des différents objets:
```js
           //pour Verteur
let v1 = new Vecteur2D(); // Sans paramètres
let v2 = new Vecteur2D(7, 20); // Avec paramètres

v1.afficher(); // Affichage du vecteur 1
v2.afficher(); // Affichage du vecteur 2

let v3 = v1.ajouter(v2); // Addition des vecteurs
v3.afficher(); // Affichage du vecteur résultant

        //pour Rectangle
let rec = new Rectangle(5,15);
rec.afficher();
console.log(`surface de rectangle, ${rec.surface()}`);
        // pour Carre
let Car = new Carre(10);
Car.afficher();
console.log(`surface de rectangle, ${Car.surface()}`);

         // pour Point et Segment
let p1= new Point(2,3);
let p2= new Point(8, 9);
let seg= new segment(1, 2, 3, 4);
seg.afficher();
```
## Exercice 4: Mini Blog Web Application
Cet exercice est une application web simple de type blog qui permet aux utilisateurs de créer et afficher des posts. L'application est construite avec HTML, CSS et JavaScript .
### Fonctionnalités
=> Interface utilisateur intuitive avec une barre de navigation

=> Système d'identification par nom d'utilisateur

=> Création de nouveaux posts de blog

=> Affichage des posts avec titre, description, auteur et date de création

=> Interface responsive adaptée aux différentes tailles d'écran
###Structure du Code
#### HTML:
La structure HTML comprend :

=> Une barre de navigation avec le logo et les liens

=> Un conteneur principal pour le contenu

=> Un formulaire pour ajouter de nouveaux posts

=> Une section pour afficher les posts existants
#### CSS:
Le style CSS inclut :

=> Un design moderne avec des couleurs attrayantes

=> Des animations et transitions pour une meilleure expérience utilisateur

=> Une mise en page responsive

=> Des styles pour les différents éléments (formulaires, boutons, posts)

<img src="https://github.com/user-attachments/assets/fb3b471a-c950-4e14-bd09-f4e96267afda" alt="Image" width="700" />

#### JavaScript:
Le code JavaScript implémente deux classes principales :
##### Class User
```js
class User {
    constructor(nom) {
        this.username = nom;
    }
    
    toJson() {
        return {
            username: this.username
        };
    }
    
fromJson(userJson) {
        return new User(userJson.username);
    }
}
```
##### Class Post
```js
class Post {
    constructor(T, D, U) {
        this.title = T;
        this.description = D;
        this.user = U;
        this.createdAt = new Date().toDateString();
    }
    
    toJson() {
        return {
            title: this.title,
            description: this.description,
            user: this.user,
            createdAt: this.createdAt
        };
    }
    
    fromJson(postJson) {
        return new Post(postJson.title, postJson.description, postJson.user);
    }
}
```
### Fonctionnement:
**Identification de l'utilisateur :**

=> L'application demande le nom d'utilisateur via une boîte de dialogue prompt.

=> Cette entrée est obligatoire pour continuer


**Ajout de posts :**

=> L'utilisateur peut cliquer sur "Add New Post" pour afficher le formulaire.

=> Le formulaire permet de saisir un titre et une description.

=> La soumission du formulaire crée un nouveau post avec le nom d'utilisateur et la date actuelle


**Affichage des posts :**

=> Les posts sont affichés dans la section "blogs".

=> Chaque post montre le titre, l'auteur, la date et la description.

=> Les posts s'empilent du plus récent au plus ancien.
### Notes techniques:
=> L'application utilise le stockage en mémoire uniquement (pas de persistance)

=> Les méthodes toJson() et fromJson() sont implémentées pour les deux classes, permettant une éventuelle intégration avec une API ou stockage local
```js
 toJson() {
                return {
                    title: this.title,
                    description: this.description,
                    user: this.user,
                    createdAt: this.createdAt
                };
            }
            fromJson(postJson) {
                return new Post(postJson.title, postJson.description, postJson.user);
            }
```

=> Le design est basé sur des classes CSS inspirées de frameworks comme Tailwind

=> L'application est entièrement construite avec des technologies web standards sans bibliothèques externes

## Conclusion:
Ces quatre exercices illustrent différentes approches de programmation orientée objet en JavaScript, chacune adaptée à des besoins spécifiques.
### Exercice 1 : Gestion de Voitures

=> Utilisation de fonctions constructeurs et de prototypes
### Exercice 2 : Gestion d'Étudiants (Objets Littéraux)

=> Utilisation d'objets littéraux JavaScript
### Exercice 3 : Classes Géométriques (Classes EcmaScript 6)

=> Utilisation de la syntaxe moderne des classes EcmaScript 6
### Exercice 4 : Mini Blog Web Application (Classes EcmaScript 6 + DOM)

=> Classes ES6 intégrées avec manipulation du DOM
### Évolution des Techniques
Ces exercices montrent l'évolution des techniques de programmation orientée objet en JavaScript :

De l'approche classique basée sur **les prototypes** (Exercice 1).
En passant par l'utilisation **d'objets littéraux** pour des cas simples (Exercice 2).
Jusqu'à l'adoption de la syntaxe moderne **des classes ES6** (Exercices 3 et 4).
Et finalement **l'intégration de la POO dans le développement web** (Exercice 4)
