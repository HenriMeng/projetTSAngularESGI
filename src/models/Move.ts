import { PokemonType } from "../types/PokemonType";

interface IMoveProps {
    name: string;
    power: number;
    pp: number;
    speedCoef: number;
    type: PokemonType;
}

export class Move implements IMoveProps {

    name: string;
    power: number;
    pp: number;
    speedCoef: number;
    type: PokemonType;

    constructor(props: IMoveProps) {
        this.name = props.name;
        this.power = props.power;
        this.pp = props.pp;
        this.speedCoef = props.speedCoef
        this.type = props.type;
    }

    toString(): string {
        return `${this.name} (${this.power} POWER, ${this.pp} PP)`;
    }

}