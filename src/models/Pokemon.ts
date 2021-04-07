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
    }

    introducesHimself(): string {
        return `[SAY] my name is ${this.name}`;
    }

    fight(ennemy: Pokemon): string {
        if (this.speed >= ennemy.speed)
            return `[COMBAT] ${this.name} attaque en premier !`;
        else if (this.speed < ennemy.speed)
            return `[COMBAT] ${ennemy.name} attaque en premier !`;
    }

}