const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    Codigo: Number,
    DataEntrada: Date,
    LocalCompra: String,
    Tipo: String,
    Marca: String,
    Descricao: String,
    Tamanho: String,
    Cor: String,
    Valor: Number,
    Preco: Number
})

const Produto = mongoose.model("Produto", ProdutoSchema);

module.exports = Produto;