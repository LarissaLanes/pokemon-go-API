"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemonRouter = void 0;
const PokemonController_1 = require("./../controller/PokemonController");
const express_1 = __importDefault(require("express"));
exports.pokemonRouter = express_1.default.Router();
const pokemonController = new PokemonController_1.PokemonsController();
exports.pokemonRouter.get("/all/:page/:offset", pokemonController.getAllPokemons);
exports.pokemonRouter.get("/by/:id", pokemonController.getPokemonsById);
exports.pokemonRouter.get("/family/:family_id", pokemonController.getPokemonsByFamilyId);
exports.pokemonRouter.get("/generation/:generation", pokemonController.getPokemonsByGeneration);
exports.pokemonRouter.get("/info/:id", pokemonController.getInfoPokemons);
exports.pokemonRouter.get("/name", pokemonController.getPokemonByName);
