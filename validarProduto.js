const Ajv = require('ajv')
const ajv = new Ajv()

const produtoSchema = require("../schema/Produto.Schema")

function validarProduto(req, res, next){
    const post = req.body
    const validate = ajv.compile(produtoSchema)
    const valid = validate(post)
    if (valid){
        next()
    }else{
        res.status(400).json({msg: "Dados inválidos", erros: validate.errors})
    }
}

module.exports = validarProduto