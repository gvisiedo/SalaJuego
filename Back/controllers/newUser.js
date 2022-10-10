'use strict'


const {crearSala} = require('../models/salaModel')

const newUser = async (req, res)=>{
   
    try {

        let body = ''
        req.on('data', (chunk)=>{
            body += chunk.toString()
        })
        req.on('end', async ()=>{
            const { sala, email, password } = JSON.parse(body);

            const user ={
                sala,
                email,
                password
            }
            const newUser = await crearSala.create(user)

            res.writeHead(201, {'Content-Type': 'application/json'})
            return res.end(JSON.stringify(newUser))
        })
        

       
        

    } catch (error) {
        console.log(error);

    } 

}
module.exports = {newUser};

