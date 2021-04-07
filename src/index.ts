import { Pokemon } from "./models/Pokemon";


let pikachu = new Pokemon({
    name: "Pikachu",
    hp: 1,
    speed: 1,
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1
});

let bulbizarre = new Pokemon({
    name: "Bulbizarre",
    hp: 1,
    speed: 1,
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1
});

console.log(pikachu.introducesHimself());
console.log(bulbizarre.introducesHimself());

console.log(pikachu.fight(bulbizarre));