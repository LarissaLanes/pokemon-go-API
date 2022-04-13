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
    getAllPokemons(page, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pagination = ((page, offset) => __awaiter(this, void 0, void 0, function* () {
                    if (page === 0) {
                        throw new CustomError_1.CustomError(400, "Página 0 não existe");
                    }
                    else if (!page && !offset) {
                        throw new CustomError_1.CustomError(400, "Preencha corretamente todos os dados da paginação");
                    }
                    else if (page && offset) {
                        const result = yield this.pokemonsDatabase.pages(page, offset);
                        return result;
                    }
                    else {
                        const result = yield this.pokemonsDatabase.getAllPokemons();
                        return result;
                    }
                }));
                return pagination(page, offset);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new CustomError_1.CustomError(500, error.message);
                }
                else {
                    throw new CustomError_1.CustomError(422, "Error ao encontrar o pokemons");
                }
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
    getPokemonsByFamilyId(family_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!family_id) {
                    throw new CustomError_1.CustomError(422, "Passe um id da familia");
                }
                const pokeFamily = (() => __awaiter(this, void 0, void 0, function* () {
                    const data = yield this.pokemonsDatabase.getPokemonsByFamilyId(family_id);
                    return data;
                }));
                const dataFamily = yield pokeFamily();
                if (!dataFamily) {
                    throw new CustomError_1.CustomError(422, "Familia do pokemon não encontrado");
                }
                return dataFamily;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new CustomError_1.CustomError(500, error.message);
                }
                else {
                    throw new CustomError_1.CustomError(422, "Error ao encontrar o pokemon pelo id da familia");
                }
            }
        });
    }
    getPokemonsByGeneration(generation) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!generation) {
                    throw new CustomError_1.CustomError(422, "geração invalida ");
                }
                const result = yield this.pokemonsDatabase.getPokemonsByGeneration(generation);
                return result;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new CustomError_1.CustomError(500, error.message);
                }
                else {
                    throw new CustomError_1.CustomError(422, "Error ao encontrar geração de pokemons");
                }
            }
        });
    }
    getInfoPokemons(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    throw new CustomError_1.CustomError(403, "Passe o id do pokemon");
                }
                const pokeInfo = (() => __awaiter(this, void 0, void 0, function* () {
                    const data = yield this.pokemonsDatabase.getInfoPokemons(id);
                    return data;
                }));
                const dataPokeInfo = yield pokeInfo();
                if (!dataPokeInfo) {
                    throw new CustomError_1.CustomError(422, "Pokemon não encontrado");
                }
                return dataPokeInfo;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new CustomError_1.CustomError(500, error.message);
                }
                else {
                    throw new CustomError_1.CustomError(422, "Error ao encontrar info de pokemons");
                }
            }
        });
    }
    getPokemonByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!name) {
                    throw new CustomError_1.CustomError(403, "Passe o nome do pokemon");
                }
                const pokeName = (() => __awaiter(this, void 0, void 0, function* () {
                    const data = yield this.pokemonsDatabase.getPokemonsByName(name);
                    return data;
                }));
                const dataPokeName = yield pokeName();
                if (!dataPokeName) {
                    throw new CustomError_1.CustomError(422, "Pokemon não encontrado");
                }
                return dataPokeName;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new CustomError_1.CustomError(500, error.message);
                }
                else {
                    throw new CustomError_1.CustomError(422, "Error ao encontrar pokemons pelo nome");
                }
            }
        });
    }
}
exports.default = new PokemonsBusiness(new PokemonDatabase_1.PokemonsDatabase());
