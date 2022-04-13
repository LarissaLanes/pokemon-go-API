"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PokemonRouter_1 = require("./router/PokemonRouter");
const app_1 = __importDefault(require("./app"));
app_1.default.use("/pokemon", PokemonRouter_1.pokemonRouter);
