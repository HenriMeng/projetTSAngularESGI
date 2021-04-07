import { Pokemon } from "../models/Pokemon";

let pikachu = new Pokemon({
    name: "Pikachu",
    hp: 1,
    speed: 1,
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1
});

let bulbizarre = new Pokemon({
    name: "Bulbizarre",
    hp: 1,
    speed: 1,
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1
});

describe('testIntroducesHimself', () => {
    it('should return my name is Pikachu when a Pikachu introduces himself', () => {
        const result = pikachu.introducesHimself();
        expect(result).toBe("[SAY] my name is Pikachu");
    });
});

describe('testFight', () => {
    it('should return that a Pikachu attacks first if he is fighting with a Bulbizarre', () => {
        const result = pikachu.fight(bulbizarre);
        expect(result).toBe("[COMBAT] Pikachu attaque en premier !");
    });
});