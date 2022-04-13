import { Request, Response } from "express"
import PokemonBusiness from "../business/PokemonBusiness"
import { CustomError } from "../error/CustomError"

export class PokemonsController {

    async getAllPokemons(req: Request, res: Response){
        try{

            const page = Number(req.params.page)
            const offset = Number(req.params.offset)
         

            const result = await PokemonBusiness.getAllPokemons(page, offset)

            res.status(200).send(result)

        }catch(error){
            if(error instanceof Error){
                throw new CustomError(500, error.message)
            }else {
                throw new CustomError(422, "Error ao encontrar o pokemons")
            }

        }
    }

    async getPokemonsById(req: Request, res: Response){
        try{
            const id = Number (req.params.id)

            const result = await PokemonBusiness.getPokemonsById(id)
            res.status(200).send(result)

        }catch(error){
            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.send({ message: "Algo deu errado ao encontrar pokemon" })
            }
        }
    }

    async getPokemonsByFamilyId(req: Request, res: Response){
        try{
            const family_id  = Number(req.params.family_id)

            const result = await PokemonBusiness.getPokemonsByFamilyId(family_id)
            res.status(200).send(result)

        }catch(error){
            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.send({ message: "Algo deu errado ao encontrar pokemon" })
            }
        }
    }

    async getPokemonsByGeneration(req: Request, res: Response){
        try{
            const generation = Number(req.params.generation)

            const result = await PokemonBusiness.getPokemonsByGeneration(generation)

            res.status(200).send(result)

        }catch(error){
            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.send({ message: "Algo deu errado ao buscar geração" })
            }
        }
    }

    async getInfoPokemons(req: Request, res: Response){
        try{
            const id = Number(req.params.id)

            const result = await PokemonBusiness.getInfoPokemons(id)
            res.status(200).send(result)

        }catch(error){
            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.send({ message: "Algo deu errado ao buscar informações de pokemons" })
            }
        }
    }
    
    async getPokemonByName(req: Request, res: Response){
        try{
            const {name} = req.body

            const result = await PokemonBusiness.getPokemonByName(name)
            
            res.status(200).send(result)

        }catch(error){
            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.send({ message: "Algo deu errado ao buscar pokemon pelo nome" })
            }
        }
    }

    
}

export default new PokemonsController()