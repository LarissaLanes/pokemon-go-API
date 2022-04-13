import { PokemonsController } from './../controller/PokemonController';
import express from 'express';


export const pokemonRouter = express.Router()

const pokemonController = new PokemonsController()

pokemonRouter.get("/all/:page/:offset", pokemonController.getAllPokemons)
pokemonRouter.get("/by/:id", pokemonController.getPokemonsById)
pokemonRouter.get("/family/:family_id", pokemonController.getPokemonsByFamilyId)
pokemonRouter.get("/generation/:generation", pokemonController.getPokemonsByGeneration)
pokemonRouter.get("/info/:id", pokemonController.getInfoPokemons)
pokemonRouter.get("/name", pokemonController.getPokemonByName)