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

var etudiant2 = {
    nom: 'Sakini',
    prenom: 'Smail',
    age: 20,
    cne: 'A17349797',
    etudier: function() {
        return `${this.prenom} ${this.nom} est en train d'étudier .`;
    }
};

var etudiant3 = {
    nom: 'Baha',
    prenom: 'Soukaina',
    age: 21,
    cne: 'A1197787',
    etudier: function() {
        return `${this.prenom} ${this.nom} est en train d'étudier .`;
    }
};

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
        
// Liste des étudiants
var etudiants = [etudiant1, etudiant2, etudiant3];
      

//Tri des étudiants par ordre alphabétique (nom puis prénom)
etudiants.sort((Etudiant1, Etudiant2) => {
    if (Etudiant1.nom === Etudiant2.nom) {
        return Etudiant1.prenom.localeCompare(Etudiant2.prenom); // Trie par prénom si le nom est identique
    }
    return Etudiant1.nom.localeCompare(Etudiant2.nom); // Trie par nom
});



//Affichage des résultats
console.log(" Liste des étudiants triés par ordre alphabétique :");
etudiants.forEach(etudiant => console.log(`${etudiant.nom} ${etudiant.prenom} - Age: ${etudiant.age} - CNE: ${etudiant.cne}`));

console.log(etudiants[0].etudier()); // Un étudiant étudie
Professeur.enseigner(); // Le professeur enseigne