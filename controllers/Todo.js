const Todos = require('../models/Todos')
const asyncWrapper = require('../middleware/asycwait')

const getTodos =asyncWrapper (async(req,res)=>{
    todos = await Todos.find({})
    res.status(200).json({todos})
})

const createTodo =asyncWrapper (async(req,res)=>{
    const todos =await Todos.create(req.body)
    res.status(200).json({todos})
})

const getTodoid =asyncWrapper(async(req,res)=>{
    const {id: todosID} = req.params
    const todos = await Todos.findOne({_id: todosID})
    if(!todos){
        return res.status(400).json({msg: "no todo with such id"})
    }
    res.status(200).json({todos})
})

const updateTodo =asyncWrapper (async (req,res)=>{
    const {id: todosID} = req.params
    const todos = await Todos.findOneAndUpdate({_id: todosID},req.body,{
        new:true,runValidators:true
    })
    if(!todos){
        return res.status(400).json({msg: "no todo with such id"})
    }
    res.status(200).json({todos})
})

const deleteTodo =asyncWrapper (async (req,res)=>{
    const {id: todosID} = req.params
    const todos = await Todos.findOneAndDelete({_id: todosID})
    if(!todos){
        return res.status(400).json({msg: "no todo with such id"})
    }
    res.status(200).json({todos})
})

module.exports= {
    getTodos,
    getTodoid,
    createTodo,
    updateTodo,
    deleteTodo
}