'use strict';
const http =require('http');
const { login } = require('./controllers/login');


const PORT = process.env.PORT || 3000;
const {newUser} =require('./controllers/newUser');


const server = http.createServer((req,res)=>{
    if(req.url === '/api/signup' && req.method === 'POST' ){
     newUser(req, res)
    }else if(req.url === '/api/login' && req.method === 'POST' ){
     login(req, res)
    }else{
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Not Found'})) 
    }
    
})




server.listen(PORT, ()=> console.log(`Heyyyy I'm here!!! Listening from the port ${PORT}`))