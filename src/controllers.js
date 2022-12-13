const {Todos}=require("./models")
// const getAllTodos=(request,response)=>{
//     var Todos=["Eat","Sleep","Code","Repeat"];
//     var todoId=request.query.id;
//     return response.json(
//         todoId!==undefined?Todos[todoId]:Todos
//     )
// }

//Reading a todo
const getAllTodos= async(request,response)=>{
    var _id=request.query.id;
    if(_id){
        var todos=await Todos.findById(_id);
    }
    else{
        var todos=await Todos.find();
    }
    return response.json(todos);
}
//Creating a todo
const addTodo= async (request,response)=>{
    console.log(request.body)
    await Todos.create(request.body)
    return response.json({status:"Added this task"})
}
// Deleting a todo
const deleteTodo=async (request,response)=>{
    var _id=request.query.id;
    await Todos.findByIdAndDelete(_id);
    return response.json({status:"Task Deleted"})
}
// Updating a todo
const updateTodo=async(request,response)=>{
    var _id=request.query.id;
    var newData=request.body
    await Todos.findByIdAndUpdate(_id,newData);
    return response.json({status:"Todo Uppdated"})
}

// Toggling the isCompleted boolean

module.exports={getAllTodos,addTodo,deleteTodo,updateTodo}