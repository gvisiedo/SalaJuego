const {login} = require('../models/salaModel')

const loginUser = async (req, res)=>{
   
    try {

        let body = ''
        req.on('data', (chunk)=>{
            body += chunk.toString()
        })
        req.on('end', async ()=>{
            const { email, password } = JSON.parse(body);

            const user ={
                email,
                password
            }
            const login = await user.loginUser()
            if(!email){
                res.writeHead(400, {'Content-Type': 'application/json'})
                return res.end(JSON.stringify({message:'email or password not correct'}))

            }else{
                res.writeHead(201, {'Content-Type': 'application/json'})
                return res.end(JSON.stringify(login))

        }

           
        })
        

       
        

    } catch (error) {
        console.log(error);

    } 

}
module.exports = {loginUser};