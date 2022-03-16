const { Pool } = require('pg');

/* Postgres URI */
const PG_URI= 'postgres://olmrwomf:iD2GGZ8fzHXjy-uLyX1zE-MEmhYjwjAt@kashin.db.elephantsql.com/olmrwomf' 

const pool = new Pool ({
    connectionString: PG_URI
});

module.exports = {
   
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
}