import { Pokemon } from "./models/Pokemon";
import { Move } from "./models/Move";

const move1 = new Move({
    name: "COUP DE BOULE",
    power: 1,
    pp: 20,
});

const move2 = new Move({
    name: "VIVE ATTAQUE",
    power: 1,
    pp: 20,
});

const move3 = new Move({
    name: "ECLAIR",
    power: 1,
    pp: 20,
});

const move4 = new Move({
    name: "GROS YEUX",
    power: 0,
    pp: 20,
});

const listMoves: Move[] = [move1, move2, move3, move4];

const pikachu = new Pokemon({
    name: "Pikachu",
    hp: 1,
    speed: 1,
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1,
    moves: listMoves
});

const bulbizarre = new Pokemon({
    name: "Bulbizarre",
    hp: 1,
    speed: 1,
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1,
    moves: listMoves
});

console.log(pikachu.introducesHimself());
console.log(bulbizarre.introducesHimself());

console.log(pikachu.fight(bulbizarre));