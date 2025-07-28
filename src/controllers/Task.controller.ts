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
    let Name = req.params.Mytasks;
    const UsersPost = await UserClient.findMany({
      where:{
        UserName: Name,
         isDeleted:false
     
      }
      
    });
    res.status(201).json({ data: UsersPost });
    console.log(UsersPost)
    
  } catch (e) {
    res.status(201).json({ message: "Failed to get Task", e });
  }
  
};
//End of GET /api/tasks: get all tasks belonging to a specific user.





  //GET  /api/tasks: get all tasks  Deleted belonging to a specific user.
  export const GetDeletedTask = async (req: any, res: any) => {
    
    try {
      let UserName = req.params.Mytasks;
      const UsersPost = await UserClient.findMany({
        where:{
       AND:[ { UserName:JSON.stringify(UserName)},
           {isDeleted:true}
       ]
        }
      });
      res.status(201).json({ data: UsersPost });
    } catch (e) {
      res.status(201).json({ message: "Failed to get Deleted post", e });
    }
  };
  //End of GET /api/tasks: get all Deleted tasks belonging to a specific user.
  



//Deleting Task/seeting isDelect to true /api/auth/register
export const DeletTask = async (req: any, res: any) => {
  try {
    const TaskId = req.params.Delete;
    console.log(TaskId)
    const DeleteTask = await UserClient.update({
      where: {
        id:JSON.stringify(TaskId)
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
// End of Deleting Task/seeting isDelect to true /api/auth/register




//Updating Task 
export const updateTask = async (req: any, res: any) => {
  try {
    const TaskId = req.params.update;
    const updateData= req.body
    console.log(TaskId)
    const UpdateTask = await UserClient.updateMany({
      where: {
        id:JSON.stringify(TaskId)
      },
      data: updateData
    });
    res.status(201).json({ data: updateData });
  } catch (e) {
    res.status(201).json({ message: "Failed to update Task", e });
  }
};
//End //Updating Task 





//restore Task/seeting isDelect to true /api/auth/register
export const RestoretTask = async (req: any, res: any) => {
  try {
    const TaskId = req.params.restore;
    console.log(TaskId)
    const RestoretTask = await UserClient.update({
      where: {
        id:JSON.stringify(TaskId)
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
//End of restore Task/seeting isDelect to true /api/auth/register



//Getting All Task
export const GetAllTask = async (req: any, res: any) => {
  try {
    const AllUser = await UserClient.findMany();
    console.log("Results",AllUser);
    res.status(201).json({ data: AllUser });
  } catch (e) {
    res.status(201).json({ message: "Failed to get users", e });
  }
};





//Getting specific Task
export const GetSpecificTask = async (req: any, res: any) => {
  try {
    const TaskId = req.params.Taskid;
    console.log(TaskId)
    const Task = await UserClient.findUnique({
      where: {
        id:JSON.stringify(TaskId)
      }
    });
    res.status(201).json({ data: Task });
  } catch (e) {
    res.status(201).json({ message: "Failed to create New Post", e });
  }
};
//End of //Getting specific Task




//Complete task Api
export const CompleteTask = async (req: any, res: any) => {
  try {
    const TaskId = req.params.Taskid;
    console.log(TaskId)
    const CompleteTask = await UserClient.update({
      where: {
        id:JSON.stringify(TaskId)
      },
      data: {
        isCompleted:true
      }
    });
    res.status(201).json({ data: CompleteTask });
  } catch (e) {
    res.status(201).json({ message: "Failed to create New Post", e });
  }
};
// End of complete task Api
