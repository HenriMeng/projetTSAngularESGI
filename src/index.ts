import { Pokemon } from "./models/Pokemon";
import { Move } from "./models/Move";
import { Game } from "./controllers/Game";
import { PokemonType } from "./models/PokemonType";

const move1 = new Move({
    name: "COUP DE BOULE",
    power: 5,
    pp: 20,
    type: PokemonType.Fighting
});

const move2 = new Move({
    name: "VIVE ATTAQUE",
    power: 2,
    pp: 50,
    type: PokemonType.Normal
});

const move3 = new Move({
    name: "ECLAIR",
    power: 4,
    pp: 10,
    type: PokemonType.Electric
});

const move4 = new Move({
    name: "GROZ'YEUX",
    power: 0,
    pp: 40,
    type: PokemonType.Psychic
});

const listMoves: Move[] = [move1, move2, move3, move4];

const pikachu = new Pokemon({
    name: "Pikachu",
    hp: 35,
    speed: 90,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    type: PokemonType.Electric,
    moves: listMoves
});

const bulbizarre = new Pokemon({
    name: "Bulbizarre",
    hp: 45,
    speed: 45,
    attack: 49,
    defense: 49,
    specialAttack: 65,
    specialDefense: 65,
    type: PokemonType.Grass,
    moves: listMoves
});

console.log(pikachu.introducesHimself());
console.log(bulbizarre.introducesHimself());

const game = new Game(pikachu, bulbizarre);
game.fight();