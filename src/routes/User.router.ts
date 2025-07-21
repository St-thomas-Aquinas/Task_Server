//import Declarations
import { Router } from "express";
import { CreateUser } from "../controllers/User.controller";
import { GetAllUsers } from "../controllers/User.controller";
import { LoginUser } from "../controllers/User.controller";
//End of Import Declarations

//Variables Declaraions
const UserRouter = Router();
//End of Variables Declaraions

//Routers
UserRouter.post("/", CreateUser);
UserRouter.get("/", GetAllUsers);
UserRouter.get("/:Login", LoginUser);
//End of Router
export default UserRouter;
