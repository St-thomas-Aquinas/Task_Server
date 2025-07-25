//Import Declaration
import { PrismaClient } from "@prisma/client";
// End Import Declaration

// Variable Decraration
const UserClient = new PrismaClient().tasktable;
//End OF Variable Decraration 


//POST /api/tasks: create a new task.
export const CreateNewTask = async (req: any, res: any) => {
    try {
      const NewPostData = req.body;
      console.log(NewPostData);
      const NewPost = await UserClient.create({
        
          data:NewPostData
        
      });
      res.status(201).json({ data: NewPost });
    } catch (e) {
      res.status(201).json({ message: "Failed to create New Task", e });
    }
  };
  
  //End of  POST /api/tasks: create a new task.




  //GET  /api/tasks: get all tasks belonging to a specific user.

export const GetTask = async (req: any, res: any) => {
  let  bol:boolean
  try {
    let UserName = req.params.Mytasks;
    
    
    const UsersPost = await UserClient.findMany({
      where:{
     AND:[ { UserName:UserName},
         {isDeleted:false}
     ]
      }
      
    });
    res.status(201).json({ data: UsersPost });
    console.log(UsersPost)
    
  } catch (e) {
    res.status(201).json({ message: "Failed to get post", e });
  }
  
};

//End of GET /api/tasks: get all tasks belonging to a specific user.



  //GET  /api/tasks: get all tasks belonging to a specific user.

  export const GetDeletedTask = async (req: any, res: any) => {
    
    try {
      let UserName = req.params.Mytasks;
      
      
      const UsersPost = await UserClient.findMany({
        where:{
       AND:[ { UserName:UserName},
           {isDeleted:true}
       ]
        }
        
      });
      res.status(201).json({ data: UsersPost });
      console.log(UsersPost)
      
    } catch (e) {
      res.status(201).json({ message: "Failed to get post", e });
    }
    
  };
  
  //End of GET /api/tasks: get all tasks belonging to a specific user.
  



//Deleting Task/seeting isDelect to true /api/auth/register
export const DeletTask = async (req: any, res: any) => {
  try {
    const TaskId = req.params.Delete;
    console.log(TaskId)
    const DeleteTask = await UserClient.update({
      where: {
        id:TaskId
      },
      data: {
        isDeleted:true
      }
    });
    res.status(201).json({ data: DeletTask });
  } catch (e) {
    res.status(201).json({ message: "Failed to create New Post", e });
  }
};


//Deleting Task/seeting isDelect to true /api/auth/register
export const updateTask = async (req: any, res: any) => {
  try {
    const TaskId = req.params.update;
    const updateData= req.body
    console.log(TaskId)
    const UpdateTask = await UserClient.updateMany({
      where: {
        id:TaskId
      },
      data: updateData
    });
    res.status(201).json({ data: updateData });
  } catch (e) {
    res.status(201).json({ message: "Failed to create New Post", e });
  }
};


//restore Task/seeting isDelect to true /api/auth/register
export const RestoretTask = async (req: any, res: any) => {
  try {
    const TaskId = req.params.restore;
    console.log(TaskId)
    const RestoretTask = await UserClient.update({
      where: {
        id:TaskId
      },
      data: {
        isDeleted:false
      }
    });
    res.status(201).json({message: "i have been hit" });
  } catch (e) {
    res.status(201).json({ message: "Failed to create New Post", e });
  }
};


//Getting All users
export const GetAllTask = async (req: any, res: any) => {
  try {
    const AllUser = await UserClient.findMany();
    console.log("Results",AllUser);
    res.status(201).json({ data: AllUser });
  } catch (e) {
    res.status(201).json({ message: "Failed to get users", e });
  }
};

function elseif() {
  throw new Error("Function not implemented.");
}
