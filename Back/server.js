const http =require('http');
const SignUp = require('./controllers/newUser')

const server = http.createServer((req,res)=>{
    if(req.url === '/signup' && req.method === 'POST' ){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(SignUp))
    }else{
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Not Found'})) 
    }
    
})

const PORT = process.env.PORT || 3000

server.listen(PORT, ()=> console.log(`Heyyyy I'm here!!! Listening from the port ${PORT}`))