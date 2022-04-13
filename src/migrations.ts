import { BaseDatabase, table_name } from './data/BaseDataBase';

class Migrations extends BaseDatabase{

    tables = async () => {

        await BaseDatabase.connection.raw(`

        CREATE TABLE IF NOT EXISTS ${table_name}(
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

            
       
        `).then(() => console.log(
            "Tabelas criadas com sucesso"
        )).catch(error => 
            console.log("Algo deu errado ao criar as tabelas", error.message)
            ).finally(() => {
                Migrations.connection.destroy()
            })
    }
}

const migrations = new Migrations()
migrations.tables()


