import { Move } from "./Move";
import { FileUtils } from "../FileUtils";
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
    weight?: number;
    height?: number;
    moves?: Move[]
}

export class Pokemon {

    name: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack: number;
    specialDefense: number;
    type: PokemonType;
    weight?: number;
    height?: number;
    moves?: Move[]

    constructor(props: IPokemonProps) {
        this.name = props.name;
        this.hp = props.hp;
        this.attack = props.attack;
        this.defense = props.defense;
        this.speed = props.speed;
        this.specialAttack = props.specialAttack;
        this.specialDefense = props.specialDefense;
        this.type = props.type;
        this.weight = props.weight;
        this.height = props.height;
        this.moves = props.moves;
    }

    introducesHimself(): string {
        return `[SAY] my name is ${this.name}`;
    }

    makeMoveRandomly(): number {
        const max = this.moves.length;
        const rand = Math.floor(Math.random() * max);
        return rand;

        /*if (move.pp > 0) {
            move.pp--;
            ennemy.hp -= move.power;
            console.log(`[COMBAT] ${this.name} utilise ${move.toString()} sur ${ennemy.name}`);
            console.log(`[COMBAT] ${ennemy.name} : ${ennemy.hp} HP`);
        } else {
            if (this.countNumberPP() != 0) {
                this.makeMoveRandomly(ennemy);
            } else {
                console.log(`${this.name} est hors jeu ...`);
                this.hp = 0;
            }
        }*/
    }

    countNumberPP(): number {
        let result = 0;
        this.moves.forEach(move => {
            result += move.pp;
        })
        return result;
    }

}