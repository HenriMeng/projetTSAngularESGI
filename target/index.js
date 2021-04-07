"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon_1 = require("./models/Pokemon");
var pikachu = new Pokemon_1.Pokemon({
    name: "Pikachu",
    hp: 1,
    speed: 1,
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1
});
var bulbizarre = new Pokemon_1.Pokemon({
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
pikachu.fight(bulbizarre);
