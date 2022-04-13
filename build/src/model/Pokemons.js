"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemons = void 0;
class Pokemons {
    constructor(id, name, pokedex_number, generation, evolution_stage, evolved, family_id, type_1, type_2, weather_1, weather_2, stat_total, atk, def, sta, legendary, aquireable, spawns, shiny) {
        this.id = id;
        this.name = name;
        this.pokedex_number = pokedex_number;
        this.generation = generation;
        this.evolution_stage = evolution_stage;
        this.evolved = evolved;
        this.family_id = family_id;
        this.type_1 = type_1;
        this.type_2 = type_2;
        this.weather_1 = weather_1;
        this.weather_2 = weather_2;
        this.stat_total = stat_total;
        this.atk = atk;
        this.def = def;
        this.sta = sta;
        this.legendary = legendary;
        this.aquireable = aquireable;
        this.spawns = spawns;
        this.shiny = shiny;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPokedexNumber() {
        return this.pokedex_number;
    }
    getGeneration() {
        return this.generation;
    }
    getEvolutionStage() {
        return this.evolution_stage;
    }
    getEvolved() {
        return this.evolved;
    }
    getFamilyId() {
        return this.family_id;
    }
    getType1() {
        return this.type_1;
    }
    getType2() {
        return this.type_2;
    }
    getWeather1() {
        return this.weather_1;
    }
    getWeather2() {
        return this.weather_2;
    }
    getStatTotal() {
        return this.stat_total;
    }
    getAtk() {
        return this.atk;
    }
    getDef() {
        return this.def;
    }
    getSta() {
        return this.sta;
    }
    getLegendary() {
        return this.legendary;
    }
    getArquireable() {
        return this.aquireable;
    }
    getSpaws() {
        return this.spawns;
    }
    getShiny() {
        return this.shiny;
    }
}
exports.Pokemons = Pokemons;
