'use strict'

const { validate, generateRandomString, generateError, sendEmail } = require("../helpers");
const { registrationSchema } = require("../schemas");

const newUser = async (req, res)=>{
    //let connection;
    try {

        let body = ''
        req.on('data', (chunk)=>{
            body += chunk.toString()
        })
        req.on('end', ()=>{
            const { email, password } = JSON.parse(body);

            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(email , password))
        })
        

        //Campo email obligatorio
        if (!email) {
            generateError("The field 'email' is required", 400)
        }

        //Campo password obligatorio
        if (!password) {
            generateError("The field 'password' is required", 400)
        }

        //Se valida el forma del email y la password
       //await validate(registrationSchema, req.body);



        //Se genera un código de registro
        const registration_code = generateRandomString(40);

        //Se envia el email de verificación al usuario
        const verificationLink = `${process.env.HOST_PUBLIC}/users/validate/${registration_code}`

        

    

        await sendEmail({
            to: email,
            from: process.env.EMAIL_VERIFICATION,
            subject: "Verification code",
            text: "e-mail send",
            html: compiledTemplate.render({
                verificationLink: verificationLink
            })
        });

       
        res.status(201).send({
            status: "ok",
            message: "Please check your e-mail and click on the code that has been sent",
            email:email,
            code:registration_code
           
        });

    } catch (error) {
        console.log(error);

    } finally {
   
        

    }

}
module.exports = {newUser};

