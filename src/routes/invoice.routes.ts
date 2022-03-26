import { Router } from "express";
import { CreateInvoiceContoller } from "../modules/invoice-expense/useCases/CreateInvoice/CreateInvoiceController"; 
import { DeleteInvoiceController } from "../modules/invoice-expense/useCases/DeleteInvoice/DeleteInvoice"; 
import { DetailInvoiceController } from "../modules/invoice-expense/useCases/detailInvoice/detailInvoiceController"; 
import { ListInvoiceController } from "../modules/invoice-expense/useCases/listInvoice/ListInvoiceController";
import { SearchInvoiceController } from "../modules/invoice-expense/useCases/searchInvoice/SearchReceitaController";
import { ListInvoiceMonthController } from "../modules/invoice-expense/useCases/listInvoiceMonth/ListInvoiceMonthController";
import { UpdateInvoiceController } from "../modules/invoice-expense/useCases/updateInvoice/UpdateInvoiceController";


const invoiceRoutes = Router();

const createInvoiceController = new CreateInvoiceContoller();
const deleteInvoiceController = new DeleteInvoiceController();
const listInvoiceController = new ListInvoiceController();
const searchInvoiceController = new SearchInvoiceController();
const listInvoiceMesController = new ListInvoiceMonthController();
const detailInvoiceController = new DetailInvoiceController();
const updateInvoiceContoller = new UpdateInvoiceController();

invoiceRoutes.post("/", createInvoiceController.handle);

invoiceRoutes.delete("/:id",deleteInvoiceController.handle );

invoiceRoutes.get("/", listInvoiceController.handle);

invoiceRoutes.get("/descricao/:param", searchInvoiceController.handle);

invoiceRoutes.get("/:ano/:mes", listInvoiceMesController.handle)

invoiceRoutes.get("/:id", detailInvoiceController.handle);

invoiceRoutes.put("/:id", updateInvoiceContoller.handle);


export { invoiceRoutes }