//Import Declaration
import { PrismaClient } from "@prisma/client";
// End Import Declaration

// Variable Decraration
const UserClient = new PrismaClient().tasktable;
//End OF Variable Decraration 

//Creating a New post  /api/auth/register
export const CreateNewTask = async (req: any, res: any) => {
    try {
      const NewPostData = req.body;
      console.log(NewPostData);
      const NewPost = await UserClient.create({
        data: {
          Title: req.body.Title,
          Description: req.body.Description,
          UserName:req.body.UserName
        },
      });
      res.status(201).json({ data: NewPost });
    } catch (e) {
      res.status(201).json({ message: "Failed to create New Post", e });
    }
  };
  
  //End of Register New User