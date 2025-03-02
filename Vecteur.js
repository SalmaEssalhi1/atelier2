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
//instanciation des 2 vecteurs

let v1 = new Vecteur2D(); // Sans paramètres
let v2 = new Vecteur2D(7, 20); // Avec paramètres

v1.afficher(); // Affichage du vecteur 1
v2.afficher(); // Affichage du vecteur 2

let v3 = v1.ajouter(v2); // Addition des vecteurs
v3.afficher(); // Affichage du vecteur résultant

//classe Rectangle avec un constructeur donnant des valeurs (longueur et largeur) par
//défaut et un attribut nom = "rectangle"

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

class Carre extends Rectangle {
    constructor(cote = 2){
        super(cote,cote);
        this.nom = "Carre"; // Surcharge de l'attribut nom

    }
}

//instanciation de Rectangle et Carre

let rec = new Rectangle(5,15);
rec.afficher();
console.log(`surface de rectangle, ${rec.surface()}`);

let Car = new Carre(10);
Car.afficher();
console.log(`surface de rectangle, ${Car.surface()}`);

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

//class segment

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
let p1= new Point(2,3);
let p2= new Point(8, 9);
let seg= new segment(1, 2, 3, 4);
seg.afficher();