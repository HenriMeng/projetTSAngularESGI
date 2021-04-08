import { Pokemon } from "../models/Pokemon";
import { FileUtils } from "../FileUtils";
import { PokemonType } from "../models/PokemonType";
import { Move } from "../models/Move";

export class Game {

    pk1: Pokemon;
    pk2: Pokemon;

    constructor(pk1: Pokemon, pk2: Pokemon) {
        this.pk1 = pk1;
        this.pk2 = pk2;
    }

    fight(): void {
        FileUtils.linebreak();
        console.log(`[DÉBUT - COMBAT] ${this.pk1.name} VERSUS ${this.pk2.name}`);

        //let first = this.whoIsFastest();
        //console.log(`[COMBAT] ${first.name} attaque en premier !`);

        for (let i = 0; this.pk1.hp > 0 && this.pk2.hp > 0; i++) {
            FileUtils.linebreakfight();
            let attack;
            if ((i % 2) == 0) {
                attack = this.pk1.makeMoveRandomly();
                this.makeEffect(this.pk1, attack, this.pk2);
            } else {
                attack = this.pk2.makeMoveRandomly();
                this.makeEffect(this.pk2, attack, this.pk1);
            }

        }

        FileUtils.linebreakfight();
        let winner;
        let loser;
        if (this.pk1.hp < 0) {
            loser = this.pk1.name;
            winner = this.pk2.name;
        } else {
            loser = this.pk2.name;
            winner = this.pk1.name;
        }
        console.log(`[FIN - COMBAT] ${winner} est K.O, ${loser} remporte le combat !`);

        FileUtils.linebreak();
    }

    whoIsFastest(): Pokemon {
        if (this.pk1.speed > this.pk2.speed) {  // pk1 has more AS
            return this.pk1;
        } else if (this.pk2.speed > this.pk1.speed) {  // pk2 has more AS
            return this.pk2;
        } else {  // pk1, pk2 have the same AS, we will do it randomly
            const rand = Math.floor(Math.random() * 100);
            if ((rand % 2) == 0) {
                return this.pk1;
            } else {
                return this.pk2;
            }
        }
    }

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

    makeEffect(pokemon: Pokemon, moveNumber: number, target: Pokemon): void {
        const attack = pokemon.moves[moveNumber];
        console.log(`[COMBAT] ${pokemon.name} utilise ${attack.name}!`);

        let damage = attack.power * this.typeEffect(attack.type, target.type);
        attack.pp--;
        target.hp -= damage;

        console.log(`[COMBAT] ${target.name} perd ${damage} HP (HP restant : ${target.hp})`);
    }

}