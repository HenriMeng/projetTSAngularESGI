import { Pokemon } from "../models/Pokemon";

describe('testIntroducesHimself', () => {
    const pikachu = new Pokemon("Pikachu");

    it('should return 2 when multiply 1 by 2', () => {
        const result = pikachu.introducesHimself();
        expect(result).toBe(2);
    });
});