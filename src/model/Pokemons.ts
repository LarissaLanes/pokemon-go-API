export class Pokemons {
    constructor(
        private id: number,
        private name: string,
        private pokedex_number : number,
        private generation: number,
        private evolution_stage: number,
        private evolved : number,
        private family_id : number,
        private type_1 : string,
        private type_2 : string,
        private weather_1: string,
        private weather_2: string,
        private stat_total: number,
        private atk : number,
        private def: number,
        private sta : number,
        private legendary: number,
        private aquireable : number,
        private spawns : number,
        private shiny: number

    ){}
        
    public getId(): number{
        return this.id;
    }

    public getName(): string{
        return this.name;
    }

    public getPokedexNumber(): number{
        return this.pokedex_number;
    }

    public getGeneration(): number{
        return this.generation;
    }

    public getEvolutionStage(): number{
        return this.evolution_stage;
    }

    public getEvolved(): number{
        return this.evolved;
    }

    public getFamilyId(): number{
        return this.family_id;
    }

    public getType1(): string{
        return this.type_1;
    }

    public getType2(): string{
        return this.type_2;
    }

    public getWeather1(): string{
        return this.weather_1;
    }

    public getWeather2(): string{
        return this.weather_2;
    }

    public getStatTotal(): number{
        return this.stat_total;
    }

    public getAtk(): number{
        return this.atk;
    }

    public getDef(): number{
        return this.def;
    }

    public getSta(): number{
        return this.sta;
    }

    public getLegendary(): number{
        return this.legendary;
    }

    public getArquireable(): number{
        return this.aquireable;
    }

    public getSpaws(): number{
        return this.spawns;
    }

    public getShiny(): number{
        return this.shiny;
    }


} 

export type PokemonsGeneration = {
    name: string,
    generation: number,
    type_1 : string,
    type_2 : string,
    weather_1: string,
    weather_2: string,
}
