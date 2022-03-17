const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const PORT = 3000;
const cookieParser = require('cookie-parser')
const router = require('./router.js')
const jobControllers = require('./controllers/job-controllers.js')
require('dotenv').config();
let access_token;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//OAuth

app.get('/oauth', (req,res) => {
        // axios post method that will redirect our user to the github authorization page
        // then respond with a access token back from github 
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:3000/oauth2`);
    
    })
app.get('/oauth2', async(req,res,next) =>{
    const url =`https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${req.query.code}`
    try{
        //sending the user to the github oauth page
        const response = await axios.post(url, {headers: {'Content-Type': 'application/json'}});
        //storing the token recieved in a variable
        const token = response.data
        //parsing token to be sent to username api
        /*splitting the token we got back from oauth to send to the user api */ 
        const parsedToken = token.split('=')[1].split('&')[0];
        //making request to username api asynchronesly
        const username = await axios.get(('https://api.github.com/user'),{
            headers: {
                'Authorization': `token ${parsedToken}`
            }
        })
        //redirecting the user from login to home
        res.cookie('username', username.data.login);
        res.redirect(`http://localhost:8080/?${token}?name=${username.data.login}`);
    } catch (err) {
        return next(err);
    }
});

//Put everything in router page and send all requests from client to the router
app.use('/api', router);

app.use('/signin', jobControllers.checkUser, (req, res) =>{
    console.log('went thru server to middleware')
    return res.status(200).json('' /* the res.locals info to show all the jobs for user */)
})

// accessing html file on root load
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
})


//Invalid Route
app.use((req, res) =>{
    return res.send('Not a valid path') 
})

//Middleware Error Handling
app.use((err,req,res,next)=>{
    const defaultErr = {
        log: 'Express Error handler caught unknown middleware error',
        status: 400,
        message: {err: 'An error has occured!'}
    };
    const errObj = Object.assign({},defaultErr,err);
    console.log(errObj);
    return res.status(errObj.status).json(errObj.message);
})

// start server
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})

