//Fonction constructeur Voiture
function Voiture(model,marque,anne,type,carburant){
    this.model=model;
    this.marque=marque;
    this.annee=annee;
    this.type=type;
    this.carburant=carburant;

}

//tableau des voitures

let arrvoitures =[
     new Voiture("Model1","Clio",2022,"sedan","gasoline"),
     new Voiture("Model2","Audi",2025,"SUV","electric"),
     new Voiture("Model3","Ford",2012,"sedan","diesel"),
     new Voiture("Model4","Tesla",2021,"Coupe","gasoline")
]

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
//la classe Ford qui hérite de la classe Voiture
function Ford (model,marque,annee,type,carburant,options){
    Voiture.call(this,model,marque,annee,type,carburant);
    this.options=options;
}

//Tri des voitures selon l'année (ordre croissant)

arrvoitures.sort((V1,V2)=>{
    return V1.annee-V2.annee
});

//instanciation
let myFord= new Ford("Model3","Ford",2012,"sedan","diesel",["freinage","GPS"]);

console.log(myFord);

let myhyndai= new Hyndai("Model8","Hyndai",2023,"sedan","gasoline", "premium","true");

console.log(myhyndai);

myhyndai.alarmer();

console.log("le tableau des voitures triés", arrvoitures);