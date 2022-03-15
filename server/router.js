const express = require ('express');
const router = express.Router();
const jobController = require('../controllers/job-controllers.js');

//Getting all the jobs from DB
router.get('/',jobController.getjobs,(req,res) =>{

    return res.status(200).json(''/* info from db as res.locals json  */)
});
//Adding job to DB and rerender the jobs
router.post('/', jobController.addJob,(req,res) =>{

    return res.status(200)
});
//Updating current job from DB
router.patch('/', jobController.updateJob,(req,res)=>{
    
    return res.status(200) 
});
//Deleting job from DB and rerender the jobs
router.delete('/', jobController.deleteJob,(req,res) =>{
    
    return res.status(200)
});
