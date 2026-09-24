import express from "express";
import dotenv from "dotenv";
import pacienteRoutes from "../routes/pacienteRoutes.js";

dotenv.config();

const app = express();
app.use(express.json()); //indica que irá trabalhar com JSON nas req e res HTTP

const PORT: number = process.env.PORT || 3000;

app.use(pacienteRoutes);

app.listen(PORT, () => {
    console.log(`API subiu na porta ${PORT}`);
});