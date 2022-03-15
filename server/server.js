const express = require('express');
const app = express();
const PORT = 3000;
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//OAuth

app.use('/oauth', async(req,res,next) =>{
    const url = /*oauth url*/ '';
    try{
        const response = await axios.post(url, {headers: {'Content-Type': 'application/json'}});
        const token = response.data
        const parsedToken = /*splitting the token we got back from oauth to send to the user api */ '';
    } catch{

    }
});

//Getting all the jobs from DB
//Adding job to DB and rerender the jobs
//Updating current job from DB
//Deleting job from DB and rerender the jobs



// accessing html file on root load
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
})


//Invalid Route
app.use((req, res) =>{
    return res.send('Not a valid path') 
})


// Global Error Handler
app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error')
})

// start server
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
