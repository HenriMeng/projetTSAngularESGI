"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon_1 = require("../models/Pokemon");
describe('testIntroducesHimself', function () {
    var pikachu = new Pokemon_1.Pokemon("Pikachu");
    it('should return 2 when multiply 1 by 2', function () {
        var result = pikachu.introducesHimself();
        expect(result).toBe(2);
    });
});
