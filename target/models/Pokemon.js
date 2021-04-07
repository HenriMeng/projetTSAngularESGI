"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(props) {
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
    Pokemon.prototype.introducesHimself = function () {
        return "[SAY] my name is " + this.name;
    };
    Pokemon.prototype.fight = function (ennemy) {
        if (this.speed >= ennemy.speed)
            console.log("[COMBAT] " + this.name + " attaque en premier !");
        else if (this.speed < ennemy.speed)
            console.log("[COMBAT] " + ennemy.name + " attaque en premier !");
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
