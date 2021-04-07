interface IMoveProps {
    name: string;
    power: number;
    pp: number;
    type?: Element;
}

export class Move {

    name: string;
    power: number;
    pp: number;
    type?: Element;

    constructor(props: IMoveProps) {
        this.name = props.name;
        this.power = props.power;
        this.pp = props.pp;
        this.type = props.type;
    }

    toString(): string {
        return `${this.name} (${this.power} POWER, ${this.pp} PP)`;
    }

}