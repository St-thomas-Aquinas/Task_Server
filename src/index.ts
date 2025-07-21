//Import Declaration
import express from "express";
import UserRouter from "./routes/User.router";
import TaskRouter from "./routes/Tasks.router";
import cors from "cors";
//End Of import Declaration

//Variables
const app = express();
const port = process.env.PORT || 5000;
//End of Variables

//App.use Declaration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// End of App.use Declaration

//Router Declaration
app.get("/test", (req, res) =>
  res.json({ message: "God is wonderfull" }).status(200)
);

///Request for Users
app.use("/users", UserRouter);
///End Of request for users


///Request for task
app.use("/Tasks", TaskRouter);
///End Of request for task

//Router Declaration

app.listen(port, () => {
  console.log(`Server running at port :${port}`);
});
