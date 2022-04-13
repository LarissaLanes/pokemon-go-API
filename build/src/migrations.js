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
const BaseDataBase_1 = require("./data/BaseDataBase");
class Migrations extends BaseDataBase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.tables = () => __awaiter(this, void 0, void 0, function* () {
            yield BaseDataBase_1.BaseDatabase.connection.raw(`

        CREATE TABLE IF NOT EXISTS ${BaseDataBase_1.table_name}(
            id INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            pokedex_number INT NOT NULL,
            generation INT NOT NULL,
            evolution_stage INT NOT NULL,
            evolved INT NOT NULL,
            family_id INT NOT NULL,
            type_1 VARCHAR(255),
            type_2 VARCHAR(255),
            weather_1 VARCHAR(255),
            weather_2 VARCHAR(255),
            stat_total INT NOT NULL,
            atk INT NOT NULL,
            def INT NOT NULL,
            sta INT NOT NULL,
            legendary INT NOT NULL,
            aquireable INT NOT NULL,
            spawns INT NOT NULL,
            shiny INT NULL
       );

            
       
        `).then(() => console.log("Tabelas criadas com sucesso")).catch(error => console.log("Algo deu errado ao criar as tabelas", error.message)).finally(() => {
                Migrations.connection.destroy();
            });
        });
    }
}
const migrations = new Migrations();
migrations.tables();
