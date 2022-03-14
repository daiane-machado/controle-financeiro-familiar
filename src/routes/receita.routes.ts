import { Router } from "express";
import { CreateReceitaController } from "../modules/receitas_despesas/useCases/createReceita/CreateReceitaController";
import { DeleteReceitaController } from "../modules/receitas_despesas/useCases/DeleteReceita/DeleteReceita";
import { ListReceitaController } from "../modules/receitas_despesas/useCases/listReceita/ListReceitaController";
import { ListReceitaMesController } from "../modules/receitas_despesas/useCases/listReceitaMes/ListReceitaMesController";
import { SearchReceitaController } from "../modules/receitas_despesas/useCases/searchReceita/SearchReceitaController";


const receitaRoutes = Router();

const createReceitaController = new CreateReceitaController();
const deleteReceitaController = new DeleteReceitaController();
const listReceitaController = new ListReceitaController();
const searchReceitaController = new SearchReceitaController();
const listReceitaMesController = new ListReceitaMesController();

receitaRoutes.post("/", createReceitaController.handle);

receitaRoutes.delete("/:id",deleteReceitaController.handle );

receitaRoutes.get("/", listReceitaController.handle);

receitaRoutes.get("/:param", searchReceitaController.handle);

receitaRoutes.get("/:ano/:mes", listReceitaMesController.handle)


export { receitaRoutes }