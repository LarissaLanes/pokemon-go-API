import { Pokemons } from './../model/Pokemons';
import { BaseDatabase, table_name } from './BaseDataBase';


export class PokemonsDatabase extends BaseDatabase{

    private toModel(dbModel?: any): Pokemons | undefined{
        return(
            dbModel && new Pokemons(
                dbModel.id,
                dbModel.name,
                dbModel.pokedex_number,
                dbModel.generation,
                dbModel.evolution_stage,
                dbModel.evolved,
                dbModel.family_id,
                dbModel.type_1 ,
                dbModel.type_2 ,
                dbModel.weather_1,
                dbModel.weather_2,
                dbModel.stat_total,
                dbModel.atk,
                dbModel.def,
                dbModel.sta,
                dbModel.legendary,
                dbModel.aquireable,
                dbModel.spawns,
                dbModel.shiny,
            )
        )
    }

    async getAllPokemons(): Promise<Pokemons[] | undefined>{
        try{
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM ${table_name};
           
            `) 
            return result[0]

        }catch(error){
            if(error instanceof Error){
                throw new Error(error.message)
            }          
        }
    }

    async pages(page: number | any, offset: number| any): Promise<void| any>{
        try{
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM ${table_name} LIMIT ${page - 1}, ${offset};
           
            `) 
            return result[0]

        }catch(error){
            if(error instanceof Error){
                throw new Error(error.message)
            }          
        }
    }

    async getPokemonsById(id: number): Promise<Pokemons |any>{
        try{
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM ${table_name} WHERE id = '${id}'
            `)
            return this.toModel(result[0][0]);

        }catch(error){
            if(error instanceof Error){
                throw new Error(error.message)
            }
        }
    }

    async getPokemonsByFamilyId(family_id: number): Promise<Pokemons[] | undefined>{
        try{
            const result = await BaseDatabase.connection.raw(`
                SELECT id, name, pokedex_number, generation, family_id, evolution_stage  FROM ${table_name} WHERE family_id = '${family_id}'
            `)
            return result[0];

        }catch(error){
            if(error instanceof Error){
                throw new Error(error.message)
            }
        }
    }

    async getPokemonsByGeneration(generation: number): Promise<Pokemons[] | any>{
        try{
            const result = await BaseDatabase.connection.raw(`
             SELECT id, name, generation, family_id FROM ${table_name} WHERE generation = '${generation}'
            `)
            
            return result[0];

        }catch(error){
            if(error instanceof Error){
                throw new Error(error.message)
            }
        }
    }

    async getInfoPokemons(id: number): Promise<Pokemons | any>{
        try{
            const result = await BaseDatabase.connection.raw(`
             SELECT id, name, generation, evolution_stage, evolved, type_1, type_2,weather_1,  weather_2, stat_total,
             atk, def, sta, legendary, aquireable, spawns, shiny 
             FROM ${table_name} WHERE id = '${id}'
             `)

             return result[0]

        }catch(error){
            if(error instanceof Error){
                throw new Error(error.message)
            }
        }
    }

    async getPokemonsByName(name: string): Promise<Pokemons[] | any>{
        try{
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM ${table_name} WHERE name = '${name}'
            `)

            return this.toModel(result[0][0]);

        }catch(error){
            if(error instanceof Error){
                throw new Error(error.message)
            }
        }
    }

}