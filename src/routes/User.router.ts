//import Declarations
import { Router } from "express";
import { CreateUser } from "../controllers/User.controller";
import { login } from "../controllers/User.controller";
import { UserDetails } from "../controllers/User.controller";
import { UserUpdate } from "../controllers/User.controller";

//End of Import Declarations

//Variables Declaraions
const UserRouter = Router();
//End of Variables Declaraions

//Routers
UserRouter.post("/api/auth/register/", CreateUser);
UserRouter.post("/api/auth/login/", login);
UserRouter.post("/update/:UserName", UserUpdate);
UserRouter.get("/MyProfile/:UserName", UserDetails);

//End of Router
export default UserRouter;
