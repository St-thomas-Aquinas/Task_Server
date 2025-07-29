//import Declarations
import { Router } from "express";
import { SpesificUserTasks } from "../controllers/Task.controller";

//End of Import Declarations

//Variables Declaraions
const TaskRouter = Router();
//End of Variables Declaraions

//Routers
TaskRouter.post("/MyTasks/:UserName", SpesificUserTasks);

export default TaskRouter;
