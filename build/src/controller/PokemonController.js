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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonsController = void 0;
const PokemonBusiness_1 = __importDefault(require("../business/PokemonBusiness"));
const CustomError_1 = require("../error/CustomError");
class PokemonsController {
    getAllPokemons(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = Number(req.params.page);
                const offset = Number(req.params.offset);
                const result = yield PokemonBusiness_1.default.getAllPokemons(page, offset);
                res.status(200).send(result);
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
    getPokemonsById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const result = yield PokemonBusiness_1.default.getPokemonsById(id);
                res.status(200).send(result);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).send(error.message);
                }
                else {
                    res.send({ message: "Algo deu errado ao encontrar pokemon" });
                }
            }
        });
    }
    getPokemonsByFamilyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const family_id = Number(req.params.family_id);
                const result = yield PokemonBusiness_1.default.getPokemonsByFamilyId(family_id);
                res.status(200).send(result);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).send(error.message);
                }
                else {
                    res.send({ message: "Algo deu errado ao encontrar pokemon" });
                }
            }
        });
    }
    getPokemonsByGeneration(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const generation = Number(req.params.generation);
                const result = yield PokemonBusiness_1.default.getPokemonsByGeneration(generation);
                res.status(200).send(result);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).send(error.message);
                }
                else {
                    res.send({ message: "Algo deu errado ao buscar geração" });
                }
            }
        });
    }
    getInfoPokemons(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const result = yield PokemonBusiness_1.default.getInfoPokemons(id);
                res.status(200).send(result);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).send(error.message);
                }
                else {
                    res.send({ message: "Algo deu errado ao buscar informações de pokemons" });
                }
            }
        });
    }
    getPokemonByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const result = yield PokemonBusiness_1.default.getPokemonByName(name);
                res.status(200).send(result);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).send(error.message);
                }
                else {
                    res.send({ message: "Algo deu errado ao buscar pokemon pelo nome" });
                }
            }
        });
    }
}
exports.PokemonsController = PokemonsController;
exports.default = new PokemonsController();
