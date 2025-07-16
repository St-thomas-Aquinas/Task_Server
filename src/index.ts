import express from 'express'
//Variables
 const app = express()
 const port = process.env.PORT || 5000
 //End of Variables

 //Request
 app.get("/test",(req,res) =>
 res.json({message:"God is wonderfull"}).status(200))
 //End of Request

 app.use(express.json())
 app.listen(port,() =>{
    console.log(`Server running at port :${port}`)
 })