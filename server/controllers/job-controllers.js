const db = require('../model.js')
const jobControllers = {};

jobControllers.getJobs = (req,res,next) =>{
    if (res.locals.invalidCookie){
        res.locals.data = "Invalid authentication";
        return next();
    }
    const { username } = req.body;
    const queryString = `SELECT *, cards._id AS card_id FROM cards INNER JOIN users ON user_id=users._id WHERE users.username=($1);` 
    db.query(queryString, [username])
        .then((result) => {
            res.locals.data = result.rows;
            return next();
        })
        .catch((err)=>{
            return next(err);
        })
}

jobControllers.addJob = (req, res, next) =>{
    if (res.locals.invalidCookie){
        res.locals.data = "Invalid authentication";
        return next();
    }
    const {user_id, title, company, date, notes, contact_email, contact_phone, url, status } = req.body;
    const values = [user_id, title, company, date, notes, contact_email, contact_phone, url, status];
    const queryString = `INSERT INTO cards (user_id, title, company, date, notes, contact_email, contact_phone, url, status) 
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`
    db.query(queryString, values)
        .then((result) => {
            res.locals.data = result.rows;
            return next();
        })
        .catch((err) => {
            return next(err);
        })
}
jobControllers.updateJob = (req,res,next) =>{
    if (res.locals.invalidCookie){
        res.locals.data = "Invalid authentication";
        return next();
    }
    const {card_id, user_id, title, company, date, notes, contact_email, contact_phone, url, status } = req.body;
    console.log(req.body)
    const values = [card_id, user_id, title, company, date, notes, contact_email, contact_phone, url, status];
    const queryString = `UPDATE cards SET
                         user_id=$2, title=$3, company=$4, date=$5, notes=$6, contact_email=$7, contact_phone=$8, url=$9, status=$10
                         WHERE _id=$1 RETURNING *;`
    db.query(queryString, values)
        .then((result) => {
            res.locals.data = result.rows;
            return next();
        })
        .catch((err) => {
            return next(err);
        })
}

jobControllers.deleteJob = (req,res,next) =>{
    if (res.locals.invalidCookie){
        res.locals.data = "Invalid authentication";
        return next();
    }
    const { card_id } = req.body;
    const queryString = `DELETE FROM cards WHERE _id=$1 RETURNING *;`
    db.query(queryString, [card_id])
        .then((result) => {
            res.locals.data = result.rows;
            console.log('deleted', result.rows)
            return next();
        })
        .catch((err) => {
            return next(err);
        })

}

jobControllers.checkUser = (req, res, next) =>{
    if (res.locals.invalidCookie){
        res.locals.data = "Invalid authentication";
        return next();
    }
    const { username } = req.body;
    const queryString = `SELECT * FROM users WHERE username=($1);`
    function addUser(username){
        const queryString = `INSERT INTO users (username) VALUES ($1) RETURNING *;`
        db.query(queryString, [username])
            .then((result)=>{
                res.locals.username = username;
                res.locals.id = result.rows[0]._id
                return next();
            })
            .catch((err)=>{
                return next(err)
            })
    }
    db.query(queryString, [username])
        .then((result)=>{
            if(result.rows[0] === undefined){
                addUser(username);
                return next();
            } else {
                res.locals.username = result.rows[0].username;
                res.locals.id = result.rows[0]._id;
                return next()
            }
        })
        .catch((err)=>{
            return next(err)
        })
}

module.exports = jobControllers;