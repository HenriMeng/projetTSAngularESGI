import { Move } from "./Move";
import { PokemonType } from "./PokemonType";

interface IPokemonProps {
    name: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack: number;
    specialDefense: number;
    type: PokemonType;
    moves: Move[]
}

export class Pokemon implements IPokemonProps {

    name: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack: number;
    specialDefense: number;
    type: PokemonType;
    moves: Move[];

    constructor(props: IPokemonProps) {
        this.name = props.name;
        this.hp = props.hp;
        this.attack = props.attack;
        this.defense = props.defense;
        this.speed = props.speed;
        this.specialAttack = props.specialAttack;
        this.specialDefense = props.specialDefense;
        this.type = props.type;
        this.moves = props.moves;
    }

    // METHODS ---------------------------------------------------------------------------------------------------------

    introducesHimself(): string {
        return `[SAY] my name is ${this.name}`;
    }

    makeMoveRandomly(): number {
        const max = this.moves.length;
        const rand = Math.floor(Math.random() * max);

        // verify the PP of moves
        if (this.moves[rand].pp < 0) {
            if (this.countNumberPP() != 0) {
                this.makeMoveRandomly();
            } else {
                console.log(`${this.name} est hors jeu ...`);
                this.hp = 0;
            }
        }

        return rand;
    }

    countNumberPP(): number {
        let result = 0;

        if (this.moves != null) {
            this.moves.forEach(move => {
                result += move.pp;
            })
            return result;
        }

        return result;
    }

}