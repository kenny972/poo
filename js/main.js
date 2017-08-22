
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

