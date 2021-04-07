export class Pokemon {

    name: string;

    constructor(name) {
        this.name = name;
    }

    introducesHimself(): string {
        return `my name is ${this.name}`;
    }

}