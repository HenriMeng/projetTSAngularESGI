import { Game } from "./controllers/Game";
import { FileUtils } from "./FileUtils";


const pikachu = FileUtils.myPokemons("Pikachu");
const bulbizarre = FileUtils.myPokemons("Bulbizarre");

console.log(pikachu.introducesHimself());
console.log(bulbizarre.introducesHimself());

const game = new Game(pikachu, bulbizarre);
game.startFight();