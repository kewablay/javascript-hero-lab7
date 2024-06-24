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

const batman = new Superhero(
  "Batman",
  "Bruce Wayne",
  ["martial arts", "gadgets"],
  "None"
);
console.log(batman);

// Step 4
Superhero.prototype.usePower = function (powerName) {
  if (this.powers.includes(powerName)) {
    console.log(`${this.name} is using ${powerName}!`);
  } else {
    console.log(`${this.name} doesn't have the power: ${powerName}`);
  }
};

Superhero.prototype.revealIdentity = function () {
  console.log(`The secret identity of ${this.name} is ${this.secretIdentity}`);
};

batman.usePower("gadgets");
batman.revealIdentity();

// Step 5
const superheroes = [
  new Superhero(
    "Spider-Man",
    "Peter Parker",
    ["wall-crawling", "super strength", "spider-sense"],
    "Ethyl Chloride Pesticide"
  ),
  new Superhero("Batman", "Bruce Wayne", ["martial arts", "gadgets"], "None"),
  new Superhero(
    "Superman",
    "Clark Kent",
    ["super strength", "flight", "x-ray vision"],
    "Kryptonite"
  ),
];

const supervillains = [
  { name: "Joker", nemesis: "Batman" },
  { name: "Green Goblin", nemesis: "Spider-Man" },
  { name: "Lex Luthor", nemesis: "Superman" },
];

// forEach
superheroes.forEach((hero) => {
  console.log(`${hero.name} fights crime as ${hero.secretIdentity}`);
});

// map
const superheroNames = superheroes.map((hero) => hero.name);
console.log(superheroNames);

// filter
const strongHeroes = superheroes.filter((hero) =>
  hero.powers.includes("super strength")
);
console.log(strongHeroes);
