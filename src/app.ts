import cors from "cors";
import express from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3005, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${address.port}`)
    }else{
        console.error(`falha ao rodar o servidor`)
    }
})

export default app;