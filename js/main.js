
var user = {

    nom: "Genly",

    prenom: "Kenny",

    age: 30,

    année: 2017,

    pays: "France",

    paiement: "espèce, cb, chèque",


    // ceci est la méthode
    fullName:  function()
     {alert (this.nom + " " + this.prenom);},

     getAge: function()
     {alert(this.age);},

     getAge1: function()
     {alert(this.année - this.age);},

     getCountry: function()
     {alert(this.pays);},

     getDough: function()
     {alert(this.paiement);},



};

user.fullName();
user.getAge();
user.getAge1();
user.getCountry();
user.getDough();




var litéral={

  authorizedCountries: "France, Maroc, Usa",
  meansPayment:"cb, chèque, espèce",
  ageMin: 18;

  yourAge: function()
 {alert(this.ageMin)},



// si votre âge = 18 alors vous pouvez rentrez,

// sinon casse toi tu schlingue !





};

 


// // Vous avez maintenant un objet avec les valeurs de référence auxquelles
//  vous allez pouvoir comparer l'utilisateur.
//    Vous allez donc ajouter les méthodes suivantes à cet objet :

// //     Une méthode qui vérifie si notre utilisateur à l'âge minimum
//  requis et affiche un message en conséquence

// //     Une méthode qui vérifie que le pays de l'utilisateur est bien dans la liste
//  des pays autorisés et affiche un message en conséquence

// //     Une méthode qui vérifie quels moyens de paiement de l'utilisateur sont autorisés
//  sur le site et affiche un message avec les moyens de paiement utilisables
