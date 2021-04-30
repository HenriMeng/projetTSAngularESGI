import { FileUtils } from "../FileUtils";


// SETUP ---------------------------------------------------------------------------------------------------------------

const pikachu = FileUtils.myPokemons("Pikachu");

// TESTS ---------------------------------------------------------------------------------------------------------------

describe('test_introduces_himself', () => {
    it('should return my name is Pikachu when a Pikachu introduces himself', () => {
        const result = pikachu.introducesHimself();
        expect(result).toBe("[SAY] my name is Pikachu");
    });
});

describe('test_count_number_pp', () => {
    it('should return 160 which represent the total pp of all moves of Pikachu', () => {
        const result = pikachu.countNumberPP();
        expect(result).toBe(160);
    });

    it('should return 140 which represent the total pp of all moves of Pikachu with COUP DE BOULE at 0', () => {
        pikachu.moves[0].pp = 0;
        const result = pikachu.countNumberPP();
        expect(result).toBe(140);
    });
});

describe('test_is_alive', () => {
    it('should return true because pikachu is full life', () => {
        const result = pikachu.isAlive();
        expect(result).toBe(true);
    });

    it('should return false because pikachu has 0 HP', () => {
        pikachu.hp = 0;
        const result = pikachu.isAlive();
        expect(result).toBe(false);
    });
});