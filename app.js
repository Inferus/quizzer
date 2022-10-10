const { urlencoded } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
})
db.connect((err)=>{
if (err) throw err
console.log('DB connected')
})
app.use(cors())
app.get('/',(req,res)=>{
res.json({msg: 'hello'})
})
app.post('/register',(req,res)=>{
})

app.listen(5000,()=>{
    console.log('Server running...')
})