//Import Declaration
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
// End Import Declaration

// Variable Decraration
const LoginDetails: any = [];
const UserClient = new PrismaClient().usertable;
const secretKey = "maxwell";
//End OF Variable Decraration

//Register New user  /api/auth/register
export const CreateUser = async (req: any, res: any) => {
  try {
    const NewUserData = req.body;
    console.log(NewUserData);
    const NewUser = await UserClient.create({
      data: {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        UserName: req.body.UserName,
        Password: req.body.Password,
      },
    });
    res.status(201).json({ data: NewUser });
  } catch (e) {
    res.status(201).json({ message: "Failed to create new user", e });
  }
};

//End of Register New User

//Getting All users
export const GetAllUsers = async (req: any, res: any) => {
  try {
    const AllUser = await UserClient.findMany();
    console.log(AllUser);
    res.status(201).json({ data: AllUser });
  } catch (e) {
    res.status(201).json({ message: "Failed to get users", e });
  }
};

//End of Getting All users



//Login  user  /api/auth/Login
export const LoginUser = async (req: any, res: any) => {
  try {
    const params = req.params.Login;
    LoginDetails.push(params);
    const LoginUser = await UserClient.findUnique({
      where: {
        UserName: LoginDetails[0],
        Password: LoginDetails[1],
      },
    });
    const token = jwt.sign(
      {
        LoginUser,
      },
      secretKey,
      { expiresIn: "1h" }
    );
    const responseDetails: any = [];
    responseDetails.push(token);
    responseDetails.push(LoginUser);
    res.status(201).json({ responseDetails });
  } catch (e) {
    res.status(201).json({ message: "Failed to login ", e });
  }
  if (Boolean(LoginDetails[1]) == true) {
    LoginDetails.length = 0;
    erraseDetails();
  }
};

function erraseDetails() {
  LoginDetails.length = 0;
}
erraseDetails();

//End of Login user  /api/auth/Login