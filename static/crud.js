function InsertTable(data) {
    for (let item of data) {
        dataTable.row
            .add([
                data.codigo,
                data.dataEntrada,
                data.localCompra,
                data.tipo,
                data.marca,
                data.descricao,
                data.tamanho,
                data.cor,
                data.valor,
                data.preco,
            ])
            .draw(false);
    }
}