import { Router } from "express";
import { receitaRoutes } from "./receita.routes";

const router = Router();

router.use("/receita", receitaRoutes);

export { router }