import { Move } from "./models/Move";
import { PokemonType } from "./types/PokemonType";
import { Pokemon } from "./models/Pokemon";

export class FileUtils {

    private constructor() {
    }

    static linebreak(): void {
        console.log(`\n-------------------------------------------------\n`);
    }

    static linebreakfight(): void {
        console.log(`----`);
    }

    static myPokemons(target: string): Pokemon {

        const listPokemons: Pokemon[] = [
            new Pokemon({
                name: "Pikachu",
                hp: 35,
                speed: 90,
                attack: 55,
                defense: 40,
                specialAttack: 50,
                specialDefense: 50,
                type: PokemonType.Electric,
                moves: [{
                    name: "COUP DE BOULE",
                    power: 5,
                    pp: 20,
                    speedCoef: 0.75,
                    type: PokemonType.Fighting
                }, {
                    name: "VIVE ATTAQUE",
                    power: 2,
                    pp: 50,
                    speedCoef: 1.5,
                    type: PokemonType.Normal
                }, {
                    name: "ECLAIR",
                    power: 4,
                    pp: 10,
                    speedCoef: 1,
                    type: PokemonType.Electric
                }, {
                    name: "GROZ'YEUX",
                    power: 0,
                    pp: 40,
                    speedCoef: 1.2,
                    type: PokemonType.Psychic
                }, {
                    name: "LANCE FLAMME",
                    power: 40,
                    pp: 40,
                    speedCoef: 0.5,
                    type: PokemonType.Fire
                }]
            }),
            new Pokemon({
                name: "Bulbizarre",
                hp: 45,
                speed: 45,
                attack: 49,
                defense: 49,
                specialAttack: 65,
                specialDefense: 65,
                type: PokemonType.Grass,
                moves: [{
                    name: "COUP DE BOULE",
                    power: 5,
                    pp: 20,
                    speedCoef: 0.75,
                    type: PokemonType.Fighting
                }, {
                    name: "VIVE ATTAQUE",
                    power: 2,
                    pp: 50,
                    speedCoef: 1.5,
                    type: PokemonType.Normal
                }, {
                    name: "ECLAIR",
                    power: 4,
                    pp: 10,
                    speedCoef: 1,
                    type: PokemonType.Electric
                }, {
                    name: "GROZ'YEUX",
                    power: 0,
                    pp: 40,
                    speedCoef: 1.2,
                    type: PokemonType.Psychic
                }]
            })
        ];

        // find the pokemon targeted
        for (let i = 0; i < listPokemons.length; i++) {
            if (listPokemons[i].name === target) {
                return listPokemons[i];
            }
        }

        // unfind
        console.log("Pokémon introuvable !");
        return undefined;
    }
}