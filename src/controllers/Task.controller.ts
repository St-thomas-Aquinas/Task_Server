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
    {isDeleted:false},
    {isCompleted:false},
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




//End point getting Task by UserName
export const DeleteTasks = async(req:any,res:any) =>{
  try{
    const TaskID = req.params.TaskID;
    console.log(TaskID)
    
    const DeleteTasks = await UserClient.update({
      where: {
        id: TaskID,
      },
      data: {
        isDeleted:true
      }
    })
   console.log(DeleteTasks)
    res.status(201).json({ DeleteTasks });
  }catch (e) {
    res.status(201).json({ message: "Failed to Fetch Spesific Users Task", e });
  }
}


//End point getting Task by UserName
export const RestoreTasks = async(req:any,res:any) =>{
  try{
    const TaskID = req.params.TaskID;
    
    const DeleteTasks = await UserClient.update({
      where: {
        id: TaskID,
      },
      data: {
        isDeleted:false
      }
    })
   
    res.status(201).json({ DeleteTasks });
  }catch (e) {
    res.status(201).json({ message: "Failed to Fetch Spesific Users Task", e });
  }
}




//End point getting Task by UserName
export const SpesificTasks = async(req:any,res:any) =>{
  try{
    const TaskID = req.params.TaskID;
    
    const Tasks = await UserClient.findUnique({
      where: {
        id: TaskID,
      },
      
    })
   
    res.status(201).json({ Tasks });
  }catch (e) {
    res.status(201).json({ message: "Failed to Fetch Spesific Users Task", e });
  }
}




//End point getting Task by UserName
export const taskUpdate = async(req:any,res:any) =>{
  try{
    const TaskID = req.params.TaskID;
    const update = req.body
    
    const updateTask = await UserClient.update({
      where: {
        id: TaskID,
      },
      data: update
    })
   
    res.status(201).json({ updateTask });
  }catch (e) {
    res.status(201).json({ message: "Failed to Fetch Spesific Users Task", e });
  }
}



//End point for completting task
export const taskComplete = async(req:any,res:any) =>{
  try{
    const TaskID = req.params.TaskID;
 
    
    const CompleteTask = await UserClient.update({
      where: {
        id: TaskID,
      },
      data: {
        isCompleted:true
      }
    })
   
    res.status(201).json({ CompleteTask });
  }catch (e) {
    res.status(201).json({ message: "Failed to Fetch Spesific Users Task", e });
  }
}




