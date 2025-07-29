//import Declarations
import { Router } from "express";
import { CreateUser } from "../controllers/User.controller";
import { login } from "../controllers/User.controller";

//End of Import Declarations

//Variables Declaraions
const UserRouter = Router();
//End of Variables Declaraions

//Routers
UserRouter.post("/api/auth/register/", CreateUser);
UserRouter.post("/api/auth/login/", login);

//End of Router
export default UserRouter;
