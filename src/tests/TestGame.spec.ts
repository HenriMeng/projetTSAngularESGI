import { FileUtils } from "../FileUtils";
import { Game } from "../controllers/Game";


// SETUP ---------------------------------------------------------------------------------------------------------------

const game = new Game(FileUtils.myPokemons("Pikachu"), FileUtils.myPokemons("Bulbizarre"));

// TESTS ---------------------------------------------------------------------------------------------------------------

describe('testWhoIsFastest', () => {
    it('should return Pikachu because he is more faster than a Bulbizarre', () => {
        const result = game.whoIsFastest();
        expect(result).toBe(game.pk1);
    });
});

describe('testTypeEffect', () => {
    it('should return 0 because an normal attack doesnt impact a ghost type Pokemon', () => {
        const result = game.typeEffect(0, 13);
        expect(result).toBe(0);
    });
});