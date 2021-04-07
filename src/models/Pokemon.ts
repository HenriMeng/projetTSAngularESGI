import { Move } from "./Move";
import { FileUtils } from "../FileUtils";

interface IPokemonProps {
    name: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack: number;
    specialDefense: number;
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
        this.weight = props.weight;
        this.height = props.height;
        this.moves = props.moves;
    }

    introducesHimself(): string {
        return `[SAY] my name is ${this.name}`;
    }

    fight(ennemy: Pokemon): void {
        console.log(`[COMBAT] ${this.name} VERSUS ${ennemy.name}`);

        if (this.speed >= ennemy.speed) {
            console.log(`[COMBAT] ${this.name} attaque en premier !`);
            for (let i = 0; i < 6; i++) {
                this.makeMoveRandomly(ennemy);
            }
        }
        else if (this.speed < ennemy.speed) {
            console.log(`[COMBAT] ${ennemy.name} attaque en premier !`);
            ennemy.makeMoveRandomly(this);
        }
    }

    makeMoveRandomly(ennemy: Pokemon): void {
        const max = this.moves.length;
        const rand = Math.floor(Math.random() * max);
        const move = this.moves[rand];
        console.log(`[COMBAT] ${this.name} utilise ${move.toString()} sur ${ennemy.name}`);
        //return move;
    }

}