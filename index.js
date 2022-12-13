const express=require("express");
const server=express()
const cors=require("cors");
const parser=require("body-parser")
const {getAllTodos,addTodo,deleteTodo,updateTodo}=require("./src/controllers")
const mongoose=require("mongoose")


mongoose.connect("mongodb://localhost:27017/TODO")
mongoose.connection.on("connected",()=>{
    console.log("DB connected")
})




server.use(cors());
server.use(parser.json())

server.get("/getTodos",getAllTodos)
server.post("/addTodo",addTodo)
server.delete("/deleteTodo",deleteTodo)
server.get("/updateTodo",updateTodo)

server.listen(4000,()=>{
    console.log("Your To-do-Manager's server started at port 4000")
})