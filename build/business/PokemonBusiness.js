"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PokemonDatabase_1 = require("./../data/PokemonDatabase");
const CustomError_1 = require("./../error/CustomError");
class PokemonsBusiness {
    constructor(pokemonsDatabase) {
        this.pokemonsDatabase = pokemonsDatabase;
    }
    getAllPokemons() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
    getPokemonsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    throw new CustomError_1.CustomError(403, "Passe o id do pokemon");
                }
                const poke = (() => __awaiter(this, void 0, void 0, function* () {
                    const data = yield this.pokemonsDatabase.getPokemonsById(id);
                    return data;
                }));
                const dataPoke = yield poke();
                if (!dataPoke) {
                    throw new CustomError_1.CustomError(422, "Pokemon não encontrado");
                }
                return dataPoke;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new CustomError_1.CustomError(500, error.message);
                }
                else {
                    throw new CustomError_1.CustomError(422, "Error ao encontrar o pokemon pelo id");
                }
            }
        });
    }
    getPokemonsByFamilyId() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
    getPokemonsByGeneration() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
}
exports.default = new PokemonsBusiness(new PokemonDatabase_1.PokemonsDatabase());
