//Import Declaration
import { PrismaClient } from "@prisma/client";
// End Import Declaration

// Variable Decraration
const UserClient = new PrismaClient().tasktable;
//End OF Variable Decraration 


//End point getting Task by UserName
export const SpesificUserTasks = async(req:any,res:any) =>{
  try{
    
    const Tasks = await UserClient.findMany(
    )
   
    res.status(201).json({ Tasks });
  }catch (e) {
    res.status(201).json({ message: "Failed to Fetch Spesific Users Task", e });
  }
}