import { Pokemon } from "../models/Pokemon";
import { FileUtils } from "../FileUtils";
import { PokemonType } from "../types/PokemonType";
import { Move } from "../models/Move";

export class Game {

    pokemon1: Pokemon;
    pokemon2: Pokemon;

    constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    startFight(): void {
        FileUtils.linebreak();
        console.log(`[DÉBUT - COMBAT] ${this.pokemon1.name} VERSUS ${this.pokemon2.name}`);
        setTimeout(() => this.fight(this.pokemon1, this.pokemon2), 1200);
    }

    /**
     * 2 pokemons are fighting
     * check if a pokemon is dead
     * find the faster
     * update their HP
     * @param pk1
     * @param pk2
     */
    fight(pk1: Pokemon, pk2: Pokemon): void {
        if (pk1.isAlive() && pk2.isAlive()) {
            FileUtils.linebreakfight();
            const movePk1 = pk1.makeMoveRandomly();
            const movePk2 = pk2.makeMoveRandomly();
            const speedPk1 = pk1.speed * movePk1.speedCoef;
            const speedPk2 = pk2.speed * movePk2.speedCoef;
            const first = this.whoIsFaster(speedPk1, speedPk2);

            if (first == 1) {
                this.makeEffect(pk1, movePk1, pk2);
                this.makeEffect(pk2, movePk2, pk1);
            } else {
                this.makeEffect(pk2, movePk2, pk1);
                this.makeEffect(pk1, movePk1, pk2);
            }

            setTimeout(() => this.fight(pk1, pk2), 1200);
        } else {
            this.whoIsWinner(this.pokemon1, this.pokemon2);
        }
    }

    /**
     * return 1 if the pk1 is faster
     * return 2 if the pk2 is faster
     * speed = pk.speed * move.speedCoef
     * @param speedPk1
     * @param speedPk2
     */
    whoIsFaster(speedPk1: number, speedPk2: number): number {
        // pk1 has more AS
        if (speedPk1 > speedPk2) return 1;

        // pk2 has more AS
        else if (speedPk2 > speedPk1) return 2;

        // pk1, pk2 have the same AS, we will do it randomly
        else {
            const rand = Math.floor(Math.random() * 100);
            return (rand % 2) == 0 ? 1 : 2;
        }
    }

    /**
     * find the winner
     * @param pk1
     * @param pk2
     */
    whoIsWinner(pk1: Pokemon, pk2: Pokemon): void {
        // determine the winner and the loser
        FileUtils.linebreakfight();
        let winner;
        let loser;
        if (pk1.isAlive()) {
            loser = pk2.name;
            winner = pk1.name;
        } else {
            loser = pk1.name;
            winner = pk2.name;
        }
        console.log(`[FIN - COMBAT] ${winner} est K.O, ${loser} remporte le combat !`);
        FileUtils.linebreak();
    }

    /**
     * generate a coef DAMAGE
     * @param moveType
     * @param pokemonType
     */
    typeEffect(moveType: PokemonType, pokemonType: PokemonType): number {

        const typeEffect: number[][] = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1/2, 0, 1, 1, 1/2, 1],  // Normal
            [1, 1/2, 1/2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1/2, 1, 1/2, 2, 1],  // Fire
            [1, 2, 1/2, 1/2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1/2, 1, 1, 1],  // Water
            [1, 1/2, 2, 1/2, 1, 1, 1, 1/2, 2, 1/2, 1, 1/2, 2, 1, 1/2, 1, 1/2, 1],  // Grass
            [1, 1, 2, 1/2, 1/2, 1, 1, 1, 0, 2, 1, 1, 1, 1, 1/2, 1, 1, 1],  // Electric
            [1, 1/2, 1/2, 2, 1, 1/2, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 1/2, 1],  // Ice
            [2, 1, 1, 1, 1, 2, 1, 1/2, 1, 1/2, 1/2, 1/2, 2, 0, 1, 2, 2, 1/2],  // Fighting
            [1, 1, 1, 2, 1, 1, 1, 1/2, 1/2, 1, 1, 1, 1/2, 1/2, 1, 1, 0, 2],  // Poison
            [1, 2, 1, 1/2, 2, 1, 1, 2, 1, 0, 1, 1/2, 2, 1, 1, 1, 2, 1],  // Ground
            [1, 1, 1, 2, 1/2, 1, 1, 2, 1, 0, 1, 1/2, 2, 1, 1, 1, 2, 1],  // Flying
            [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1/2, 1, 1, 1, 1, 0, 1/2, 1],  // Psychic
            [1, 1/2, 1, 2, 1, 1, 1/2, 1/2, 1, 1/2, 2, 1, 1, 1/2, 1, 2, 1/2, 1/2],  // Bug
            [1, 2, 1, 1, 1, 2, 1/2, 1, 1/2, 2, 1, 2, 1, 1, 1, 1, 1/2, 1],  // Rock
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1/2, 1, 1],  // Ghost
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1/2, 0],  // Dragon
            [1, 1, 1, 1, 1, 1, 1/2, 1, 1, 1, 2, 1, 1, 2, 1, 1/2, 1, 1/2],  // Dark
            [1, 1/2, 1/2, 1, 1/2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1/2, 2],  // Steel
            [1, 1/2, 1, 1, 1, 1, 2, 1/2, 1, 1, 1, 1, 1, 1, 2, 2, 1/2, 1],  // Fairy
        ];

        const score = typeEffect[moveType][pokemonType];
        switch (score) {
            case 0:
                console.log("Ça n'a aucun effet ...");
                break;
            case 1: break;
            case 1/2:
                console.log("Ce n'est pas très efficace ..");
                break;
            case 2:
                console.log("C'est super efficace !");
                break;
        }

        return score;
    }

    /**
     * update HP of the pokemon targeted by a move
     * @param pokemon
     * @param move
     * @param target
     */
    makeEffect(pokemon: Pokemon, move: Move, target: Pokemon): void {
        console.log(`[COMBAT] ${pokemon.name} utilise ${move.name}!`);

        let damage = move.power * this.typeEffect(move.type, target.type);
        move.pp--;
        target.hp -= damage;

        console.log(`[COMBAT] ${target.name} perd ${damage} HP (HP restant : ${target.hp})`);
    }

}