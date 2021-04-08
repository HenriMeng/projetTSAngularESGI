import { FileUtils } from "../FileUtils";


// SETUP ---------------------------------------------------------------------------------------------------------------

const pikachu = FileUtils.myPokemons("Pikachu");

// TESTS ---------------------------------------------------------------------------------------------------------------

describe('testIntroducesHimself', () => {
    it('should return my name is Pikachu when a Pikachu introduces himself', () => {
        const result = pikachu.introducesHimself();
        expect(result).toBe("[SAY] my name is Pikachu");
    });
});

describe('testCountNumberPP', () => {
    it('should return 120 which represent the total pp of all moves of Pikachu', () => {
        const result = pikachu.countNumberPP();
        expect(result).toBe(120);
    });
});