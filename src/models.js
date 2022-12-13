const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    taskName:String,
    description:String,
    isCompleted:Boolean
})

const Todos=mongoose.model("Todos",todoSchema)
module.exports={Todos}