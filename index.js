// const superhero = {
//   name: "Spider-Man",
//   secretIdentity: "Peter Parker",
//   powers: ["wall-crawling", "super strength", "spider-sense"],
//   weakness: "Ethyl Chloride Pesticide",
//   usePower: function (powerName) {
//     if (this.powers.includes(powerName)) {
//       console.log(`${this.name} is using ${powerName}!`);
//     } else {
//       console.log(`${this.name} doesn't have the power: ${powerName}`);
//     }
//   },
//   revealIdentity: function () {
//     console.log(
//       `The secret identity of ${this.name} is ${this.secretIdentity}`
//     );
//   },
// };

// superhero.usePower("super strength");
// superhero.revealIdentity();


// step 3
function Superhero(name, secretIdentity, powers, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weakness = weakness;
}

const batman = new Superhero("Batman", "Bruce Wayne", ["martial arts", "gadgets"], "None");
console.log(batman);



Superhero.prototype.usePower = function(powerName) {
    if (this.powers.includes(powerName)) {
        console.log(`${this.name} is using ${powerName}!`);
    } else {
        console.log(`${this.name} doesn't have the power: ${powerName}`);
    }
};

Superhero.prototype.revealIdentity = function() {
    console.log(`The secret identity of ${this.name} is ${this.secretIdentity}`);
};

batman.usePower("gadgets");
batman.revealIdentity();
