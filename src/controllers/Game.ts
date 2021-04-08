import { Pokemon } from "../models/Pokemon";
import { FileUtils } from "../FileUtils";

export class Game {

    pk1: Pokemon;
    pk2: Pokemon;

    constructor(pk1: Pokemon, pk2: Pokemon) {
        this.pk1 = pk1;
        this.pk2 = pk2;
    }

    fight(): void {
        FileUtils.linebreak();
        console.log(`[DÉBUT - COMBAT] ${this.pk1.name} VERSUS ${this.pk2.name}`);

        //let first = this.whoIsFastest();
        //console.log(`[COMBAT] ${first.name} attaque en premier !`);

        for (let i = 0; this.pk1.hp > 0 && this.pk2.hp > 0; i++) {
            FileUtils.linebreakfight();
            if ((i % 2) == 0) {
                this.pk1.makeMoveRandomly(this.pk2);
            } else {
                this.pk2.makeMoveRandomly(this.pk1);
            }
        }

        FileUtils.linebreakfight();
        if (this.pk1.hp < 0) {
            console.log(`[FIN - COMBAT] ${this.pk1.name} n'a plus de HP, le gagnat est ${this.pk2.name} !`);
        } else {
            console.log(`[FIN - COMBAT] ${this.pk2.name} n'a plus de HP, le gagnant est ${this.pk1.name} !`);
        }
        FileUtils.linebreak();
    }

    whoIsFastest(): Pokemon {
        if (this.pk1.speed > this.pk2.speed) {  // pk1 has more AS
            return this.pk1;
        } else if (this.pk2.speed > this.pk1.speed) {  // pk2 has more AS
            return this.pk2;
        } else {  // pk1, pk2 have the same AS, we will do it randomly
            const rand = Math.floor(Math.random() * 100);
            if ((rand % 2) == 0) {
                return this.pk1;
            } else {
                return this.pk2;
            }
        }
    }
}