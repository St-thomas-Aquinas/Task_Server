//import Declarations
import { Router } from "express";
import { SpesificUserTasks } from "../controllers/Task.controller";

//End of Import Declarations

//Variables Declaraions
const TaskRouter = Router();
//End of Variables Declaraions

//Routers
TaskRouter.get("/MyTasks", SpesificUserTasks);

export default TaskRouter;
