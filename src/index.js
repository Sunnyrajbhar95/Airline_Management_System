const express=require("express");
const { PORT }=require('./config/envconfig.js')
const bodyParser=require("body-parser");

const setupAndStartServer=async()=>{
   const app=express()
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}))
   app.listen(PORT,()=>{
    console.log(PORT)
      console.log(`server Start at port ${PORT}`)
   })
   


}
setupAndStartServer()