//import Declarations
import { Router } from "express";
import { CreateNewTask } from "../controllers/Task.controller";
import { GetTask } from "../controllers/Task.controller";
//End of Import Declarations

//Variables Declaraions
const TaskRouter = Router();
//End of Variables Declaraions

//Routers
TaskRouter.post("/", CreateNewTask);
TaskRouter.get("/:Mytasks", GetTask);

//End of Router
export default TaskRouter;
