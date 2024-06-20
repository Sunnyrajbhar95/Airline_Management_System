const express=require("express");
const { PORT }=require('./config/envconfig.js')

const setupAndStartServer=async()=>{
   const app=express()
   app.listen(PORT,()=>{
    console.log(PORT)
      console.log(`server Start at port ${PORT}`)
   })
   


}
setupAndStartServer()