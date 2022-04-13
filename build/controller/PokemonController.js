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
class PokemonsController {
    getAllPokemons() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
    getPokemonsById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
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
exports.PokemonsController = PokemonsController;
exports.default = new PokemonsController();
