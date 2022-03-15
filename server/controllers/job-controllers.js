const db = require('../model.js')

const jobControllers = {};

//get all the jobs from db and send to server 
jobControllers.getJobs = (req,res,next) =>{
//SELECT
if(err) return next(err);


return next();
}
//add job to db  
jobControllers.addJob = (req,res,next) =>{
//INSET INTO
if(err) return next(err);


return next();
}
//update specific job from db 
jobControllers.updateJob = (req,res,next) =>{
//UPDATE  
if(err) return next(err);


return next();
}
//delete specific job from db 
jobControllers.deleteJob = (req,res,next) =>{
//DELETE   
if(err) return next(err);



return next();
}

module.exports = jobControllers