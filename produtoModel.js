const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema ({
    Codigo:Number;
    DataEntrada:Date;
    LocalCompra:String;
    Tipo:String;
    Marca:String;
    Descricao:String;
    Tamanho:String;
    Cor:String;
    Valor:Number;
    Preco:{
        type: Number,
        default: Valor*2,
        validate(value){
            if (value < 0) throw new Error("Preço deve ser o dobro do Valor!");
        }
    };
})

const Produto = mongoose.model("Produto", ProdutoSchema);

module.exports = Produto;