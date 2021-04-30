import { FileUtils } from "../FileUtils";
import { Game } from "../controllers/Game";
import { Move } from "../models/Move";
import { PokemonType } from "../types/PokemonType";

jest.useFakeTimers();

let game: Game;
let movePk1: Move;
let movePk2: Move;
let speedPk1: number;
let speedPk2: number;

describe('test_who_is_faster', () => {
    beforeEach(() => {
       game =  new Game(
            FileUtils.myPokemons("Pikachu"),
            FileUtils.myPokemons("Bulbizarre")
        );
    });

    it('should return 1 because Pikachu+eclair is faster than Bulbizarre+vive_attaque', () => {
        movePk1 = game.pokemon1.moves[2];
        movePk2 = game.pokemon2.moves[1];
        speedPk1 = game.pokemon1.speed * movePk1.speedCoef;
        speedPk2 = game.pokemon2.speed * movePk2.speedCoef;
        const result = game.whoIsFaster(speedPk1, speedPk2);
        expect(result).toBe(1);
    });

    it('should return 2 because Pikachu+lance_flamme is slower than Bulbizarre+vive_attaque', () => {
        movePk1 = game.pokemon1.moves[4];
        movePk2 = game.pokemon2.moves[1];
        speedPk1 = game.pokemon1.speed * movePk1.speedCoef;
        speedPk2 = game.pokemon2.speed * movePk2.speedCoef;
        const result = game.whoIsFaster(speedPk1, speedPk2);
        expect(result).toBe(2);
    });
});

describe('test_type_effect', () => {
    beforeEach(() => {
        game =  new Game(
            FileUtils.myPokemons("Pikachu"),
            FileUtils.myPokemons("Bulbizarre")
        );
    });

    it('should return 0 because an normal attack doesnt impact a ghost type Pokemon', () => {
        const result = game.typeEffect(PokemonType.Normal, PokemonType.Ghost);
        expect(result).toBe(0);
    });

    it('should return 2 because an poison attack is super efficient to a fairy type Pokemon', () => {
        const result = game.typeEffect(PokemonType.Poison, PokemonType.Fairy);
        expect(result).toBe(2);
    });
});


describe('test_make_effect', () => {
    beforeEach(() => {
        game =  new Game(
            FileUtils.myPokemons("Pikachu"),
            FileUtils.myPokemons("Bulbizarre")
        );
    });

    it('should return -35 because lance flamme is super efficient on Burbizarre', () => {
        game.makeEffect(game.pokemon1, game.pokemon1.moves[4] ,game.pokemon2)
        const result = game.pokemon2.hp;
        expect(result).toBe(-35);
    });

    it("should return 45 because GROZ'YEUX do 0 damage", () => {
        game.makeEffect(game.pokemon1, game.pokemon1.moves[3] ,game.pokemon2)
        const result = game.pokemon2.hp;
        expect(result).toBe(45);
    });
});