"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name) {
        this.name = name;
    }
    Pokemon.prototype.introducesHimself = function () {
        return "my name is " + this.name;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
