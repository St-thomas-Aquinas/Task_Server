//import Declarations
import { Router } from "express";
import { CreateUser } from "../controllers/User.controller";
import { GetAllUsers } from "../controllers/User.controller";
import { LoginUser } from "../controllers/User.controller";
import { updateUser } from "../controllers/User.controller";
import { GetSpecificUser1 } from "../controllers/User.controller";
//End of Import Declarations

//Variables Declaraions
const UserRouter = Router();
//End of Variables Declaraions

//Routers
UserRouter.post("/api/auth/register/", CreateUser);
UserRouter.get("/", GetAllUsers);
UserRouter.get("/api/auth/login/:Login", LoginUser);
UserRouter.get("/specific/:username", GetSpecificUser1);
UserRouter.patch("/api/auth/update/:username", updateUser);

//End of Router
export default UserRouter;
