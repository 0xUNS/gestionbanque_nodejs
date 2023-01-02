const loggingUrls=(req,res,next)=>{
    console.log("Url :"+req.url)
    next()
}
const loggingParams=(req,res,next)=>{
    console.log("Params"+req.params)
    next()
}

module.exports={
    loggingUrls,
    loggingParams
}