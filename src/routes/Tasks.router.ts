//import Declarations
import { Router } from "express";
import { SpesificUserTasks } from "../controllers/Task.controller";
import { SpesificUserTasksDeleted } from "../controllers/Task.controller";

//End of Import Declarations

//Variables Declaraions
const TaskRouter = Router();
//End of Variables Declaraions

//Routers
TaskRouter.get("/MyTasks/:UserName", SpesificUserTasks);
TaskRouter.get("/MyTrash/:UserName", SpesificUserTasksDeleted);
export default TaskRouter;
