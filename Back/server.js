'use strict';
require('dotenv').config();


const http =require('http');

const {PORT} = process.env;
const {newUser} =require('./controllers/newUser');
const server = http.createServer((req,res)=>{
    if(req.url === '/api/signup' && req.method === 'POST' ){
     newUser(req, res)
    }else{
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Not Found'})) 
    }
    
})




server.listen(PORT, ()=> console.log(`Heyyyy I'm here!!! Listening from the port ${PORT}`))