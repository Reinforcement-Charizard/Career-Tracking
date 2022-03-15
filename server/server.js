const express = require('express');
const app = express();
const PORT = 3000;

//OAuth


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
