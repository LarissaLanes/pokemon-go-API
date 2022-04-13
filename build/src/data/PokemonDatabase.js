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
exports.PokemonsDatabase = void 0;
const Pokemons_1 = require("./../model/Pokemons");
const BaseDataBase_1 = require("./BaseDataBase");
class PokemonsDatabase extends BaseDataBase_1.BaseDatabase {
    toModel(dbModel) {
        return (dbModel && new Pokemons_1.Pokemons(dbModel.id, dbModel.name, dbModel.pokedex_number, dbModel.generation, dbModel.evolution_stage, dbModel.evolved, dbModel.family_id, dbModel.type_1, dbModel.type_2, dbModel.weather_1, dbModel.weather_2, dbModel.stat_total, dbModel.atk, dbModel.def, dbModel.sta, dbModel.legendary, dbModel.aquireable, dbModel.spawns, dbModel.shiny));
    }
    getAllPokemons() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDataBase_1.BaseDatabase.connection.raw(`
                SELECT * FROM ${BaseDataBase_1.table_name};
           
            `);
                return result[0];
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        });
    }
    pages(page, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDataBase_1.BaseDatabase.connection.raw(`
                SELECT * FROM ${BaseDataBase_1.table_name} LIMIT ${page - 1}, ${offset};
           
            `);
                return result[0];
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        });
    }
    getPokemonsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDataBase_1.BaseDatabase.connection.raw(`
                SELECT * FROM ${BaseDataBase_1.table_name} WHERE id = '${id}'
            `);
                return this.toModel(result[0][0]);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        });
    }
    getPokemonsByFamilyId(family_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDataBase_1.BaseDatabase.connection.raw(`
                SELECT id, name, pokedex_number, generation, family_id, evolution_stage  FROM ${BaseDataBase_1.table_name} WHERE family_id = '${family_id}'
            `);
                return result[0];
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        });
    }
    getPokemonsByGeneration(generation) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDataBase_1.BaseDatabase.connection.raw(`
             SELECT id, name, generation, family_id FROM ${BaseDataBase_1.table_name} WHERE generation = '${generation}'
            `);
                return result[0];
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        });
    }
    getInfoPokemons(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDataBase_1.BaseDatabase.connection.raw(`
             SELECT id, name, generation, evolution_stage, evolved, type_1, type_2,weather_1,  weather_2, stat_total,
             atk, def, sta, legendary, aquireable, spawns, shiny 
             FROM ${BaseDataBase_1.table_name} WHERE id = '${id}'
             `);
                return result[0];
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        });
    }
    getPokemonsByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDataBase_1.BaseDatabase.connection.raw(`
                SELECT * FROM ${BaseDataBase_1.table_name} WHERE name = '${name}'
            `);
                return this.toModel(result[0][0]);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        });
    }
}
exports.PokemonsDatabase = PokemonsDatabase;
