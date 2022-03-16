const express = require ('express');
const router = express.Router();
const cookieController = require('./controllers/cookie-controller.js');
const jobController = require('./controllers/job-controllers.js');

//Getting all the jobs from DB
router.get('/', cookieController.checkCookie, jobController.checkUser, jobController.getJobs, (req,res) =>{
    return res.status(200).json(res.locals)
});
//Adding job to DB and rerender the jobs
router.post('/', jobController.addJob,(req,res) =>{
    return res.status(200).json(res.locals)
});
//Updating current job from DB
router.patch('/', jobController.updateJob,(req,res)=>{
    return res.status(200).json(res.locals)
});
//Deleting job from DB and rerender the jobs
router.delete('/', jobController.deleteJob,(req,res) =>{
    return res.status(200).json(res.locals)
});

module.exports = router;