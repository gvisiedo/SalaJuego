const user = require('../data/jugador.json')

const {writeDataToFile} = require('../utils')

function crearSala(user){
    return new Promise((resolve, reject)=>{
        const newSala = {sala: sala+1, ...user}
        user.push(newSala)
        writeDataToFile('./data/jugador.json', user)
        resolve(newSala)
    })

}

module.exports = {crearSala}