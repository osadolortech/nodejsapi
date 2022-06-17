
const errorHandlerMiddleware = (err,req,res,next)=>{

    return res.status(500).json({msg: "something when wrong try again"})

}

module.exports = errorHandlerMiddleware 