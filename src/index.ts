//Import Declaration
import express from 'express'
import UserRouter from './routes/User.router'
//End Of import Declaration

//Variables
 const app = express()
 const port = process.env.PORT || 5000
 //End of Variables


 app.use(express.json());
 app.use(express.urlencoded({ extended: true}));

 //Router Declaration
 app.get("/test",(req,res) =>
 res.json({message:"God is wonderfull"}).status(200))

             ///Request for Users
             app.use('/users',UserRouter)
            ///End Of request for users

 //Router Declaration

 
 app.listen(port,() =>{
    console.log(`Server running at port :${port}`)
 })