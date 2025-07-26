//import Declarations
import { Router } from "express";
import { CreateNewTask } from "../controllers/Task.controller";
import { GetTask } from "../controllers/Task.controller";
import { DeletTask } from "../controllers/Task.controller";
import { updateTask } from "../controllers/Task.controller";
import { RestoretTask } from "../controllers/Task.controller";
import { GetDeletedTask } from "../controllers/Task.controller";
import { GetAllTask } from "../controllers/Task.controller";
//End of Import Declarations

//Variables Declaraions
const TaskRouter = Router();
//End of Variables Declaraions

//Routers
TaskRouter.post("/", CreateNewTask);
TaskRouter.get("/:Mytasks", GetTask);

TaskRouter.get("/all", GetAllTask);
TaskRouter.delete("/:Delete", DeletTask);
TaskRouter.delete("/re/:restore", RestoretTask);
TaskRouter.patch("/:update", updateTask);
TaskRouter.get("/Trash/:Mytrash", GetDeletedTask);
//End of Router
export default TaskRouter;
