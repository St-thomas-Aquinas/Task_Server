import { PrismaClient } from "@prisma/client";


const UserClient = new PrismaClient().usertable;
//End OF Variable Decraration

//Register New user  /api/auth/register

export const CreateUser = async (req:any, res:any) => {
    try{
        const NewUserData = req.body;
        console.log(NewUserData)
        const NewUser = await UserClient.create({
            data:{
                FirstName:req.body.FirstName,
                LastName:req.body.LastName,
                Email:req.body.Email,
                UserName:req.body.UserName,
                Password:req.body.Password
            }
        });
        res.status(201).json({data:NewUser})
    }catch(e){
        res.status(201).json({message:"Failed to create new user",e})
    }
}

//End of Register New User


//Register New user  /api/auth/register

export const GetAllUsers = async (req:any, res:any) => {
    try{
        const AllUser = await UserClient.findMany();
        console.log(AllUser)
        res.status(201).json({data:AllUser})
    }catch(e){
        res.status(201).json({message:"Failed to get users",e})
    }
}

//End of Register New User