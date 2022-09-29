const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:saadalaM998@database-hw3.ccmvxn2czewf.us-east-2.rds.amazonaws.com:5432/postgres'
const pool = new Pool({
  connectionString,
})

const client = new Client({
  connectionString,
})

client.query('SELECT VERSION();' , (err,res) => {
  client.end();
  version = res.rows;
});


module.exports = pool;
