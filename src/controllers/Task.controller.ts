//Import Declaration
import { PrismaClient } from "@prisma/client";
// End Import Declaration

// Variable Decraration
const UserClient = new PrismaClient().tasktable;
//End OF Variable Decraration 


//End point getting Task by UserName
export const SpesificUserTasks = async(req:any,res:any) =>{
  try{
    const UserName = req.params.UserName;
    console.log(JSON.stringify(UserName))
    const Tasks = await UserClient.findMany({
where:{
  AND:[
    {UserName:UserName},
    {isDeleted:false}
  ]
}
    })
   
    res.status(201).json({ Tasks });
  }catch (e) {
    res.status(201).json({ message: "Failed to Fetch Spesific Users Task", e });
  }
}


//End point getting Task by UserName
export const SpesificUserTasksDeleted = async(req:any,res:any) =>{
  try{
    const UserName = req.params.UserName;
    console.log(JSON.stringify(UserName))
    const DeletedTasks = await UserClient.findMany({
where:{
  AND:[
    {UserName:UserName},
    {isDeleted:true}
  ]
}
    })
   
    res.status(201).json({ DeletedTasks });
  }catch (e) {
    res.status(201).json({ message: "Failed to Fetch Spesific Users Task", e });
  }
}


//End point getting Task by UserName
export const getallTask = async(req:any,res:any) =>{
  try{
    
    
    const AllTasks = await UserClient.findMany()
   
    res.status(201).json({ AllTasks });
  }catch (e) {
    res.status(201).json({ message: "Failed to Fetch Spesific Users Task", e });
  }
}