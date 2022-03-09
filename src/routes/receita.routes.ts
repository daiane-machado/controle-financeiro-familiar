import { Router } from "express";
import { CreateReceitaController } from "../modules/receitas_despesas/useCases/createReceita/CreateReceitaController";


const receitaRoutes = Router();

const createReceitaController = new CreateReceitaController();

receitaRoutes.post("/", createReceitaController.handle);

export { receitaRoutes }