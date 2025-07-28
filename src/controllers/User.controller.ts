//Import Declaration
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
// End Import Declaration



// Variable Decraration
const LoginDetails: any = [];
const UserClient = new PrismaClient().usertable;
const secretKey = "maxwell";
//End OF Variable Decraration



//POST /api/auth/register: register a user
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
//End of POST /api/auth/register: register a user




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



//POST /api/auth/login: login a user.
export const LoginUser = async (req: any, res: any) => {
  try {
    const params = req.params.Login;
    LoginDetails.push(params);
    console.log(params)
    const LoginUser = await UserClient.findMany({
      where: {
        UserName: JSON.stringify(LoginDetails[0]),
       Password: JSON.stringify(LoginDetails[1]),
      
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
    console.log(LoginUser)
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
//End of POST /api/auth/login: login a user.



//End point for updating user
export const updateUser = async (req: any, res: any) => {
  try {
    const updateUserDetails = req.body
    const userid = req.params.username
    console.log(userid)
    console.log("This is req body")
    console.log(updateUserDetails)
    const User = await UserClient.update({
      where:{
               UserName:JSON.stringify(userid)
      },
      data:JSON.stringify(updateUserDetails)
    });

    res.status(201).json({ data: User });
    console.log(User)
  } catch (e) {
    res.status(201).json({ message: "Failed to Update user Details", e });
  }
};





//Getting specific Task
//Getting All users
export const GetSpecificUser1 = async (req: any, res: any) => {
  const name = req.params.username
  try {
    const AllUser = await UserClient.findMany(
      {where:{
        UserName: JSON.stringify(name),
      }}
    );
    console.log(AllUser);
    res.status(201).json({ data: AllUser });
  } catch (e) {
    res.status(201).json({ message: "Failed to get users", e });
  }
};
//End of //Getting specific Task

