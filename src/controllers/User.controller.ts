//Import Declaration
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
// End Import Declaration



// Variable Decraration

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

//End point for login
export const login = async(req:any,res:any) =>{
  try{
    const LoginDetails = req.body;
    console.log(LoginDetails)
    const logedIn = await UserClient.findMany({
where:{
  AND:[{
    UserName:LoginDetails.UserName
  },{Password:LoginDetails.Password}]
}
    })
    const token = jwt.sign(
      {
        logedIn
      },
      secretKey,
      { expiresIn: "1h" }
    );
    const responseDetails: any = [];
    responseDetails.push(token);
    responseDetails.push(logedIn);
    res.status(201).json({ responseDetails });
  }catch (e) {
    res.status(201).json({ message: "Failed to Login", e });
  }
}





//End point getting Task by UserName
export const UserDetails = async(req:any,res:any) =>{
  try{
    const UserName = req.params.UserName;
    
    const User = await UserClient.findUnique({
      where: {
        UserName:UserName
      },

    })
   
    res.status(201).json({ User });
  }catch (e) {
    res.status(201).json({ message: "Failed to Fetch Spesific Users Task", e });
  }
}





//End point getting Task by UserName
export const UserUpdate = async(req:any,res:any) =>{
  try{
    const UserName = req.params.UserName;
    const update = req.body
    console.log(update)
    
    const updateTask = await UserClient.update({
      where: {
        UserName:UserName,
      },
      data: update
    })
   
    res.status(201).json({ updateTask });
  }catch (e) {
    res.status(201).json({ message: "Failed to Fetch Spesific Users Task", e });
  }
}