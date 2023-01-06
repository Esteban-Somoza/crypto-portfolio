// let db = require('../database/tokenHoldings.json')
const { readFileSync, writeFileSync, unlinkSync, unlink } = require('fs')
const { resolve, } = require('path')


const addToken = async (req, res) => {
    try {
        // console.log(req.body);
        let dataBase = require('../database/tokenHoldings.json')

        let newToken = {
            token: req.body.token,
            ticker: req.body.ticker,
            amount: req.body.amount
        }
        
        dataBase.push(newToken)
        let save = JSON.stringify(dataBase, null, 2);

        writeFileSync('./database/tokenHoldings.json', save);
        return res.send('token added').status(200)
        // res.send({ db }).status(200)
    } catch (error) {
        res.send(error)
        return res.status(500).json(error)
    }
}

module.exports = addToken

// process: async function (req, res) {

//       let nuevaInformacion = await informacion.create({
//         colores: req.body.colores,
//         configuracion: req.body.configuracion,
//         apto: req.body.apto,
//         tecnologia: req.body.tecnologia,
//         medidas: req.body.medidas,
//         capacidad: req.body.capacidad,
//         disenio: req.body.disenio,
//       }) // actualizacion tabla INFORMACION segun Id

//       await producto.create({
//         nombre: req.body.nombre,
//         precio: req.body.precio,
//         imagenId: imagenId,
//         categoria: req.body.categoria,
//         subcategoria: req.body.subcategoria,
//         informacionId: nuevaInformacion.id,
//         marca: req.body.marca,
//         linea: req.body.linea,
//         descripcion: req.body.description,

//       }) // actualizacion tabla PRODUCTO segun Id

//       return res.redirect("/products/finder")
//     }
//   }