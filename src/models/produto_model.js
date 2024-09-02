let nextId = 1;

const model = (body, id = nextId++) => {
    if (body.nome != undefined &&
        body.nome != '' &&
        body.quantidade != '' &&
        mercado_controller.show(body.mercado_id) &&
        fornecedor_controller.show(body.fornecedor_id)) {
            return {
                id,
                nome: body.nome,
                quantidade: body.quantidade,
                id_mercado: body.id_mercado,
                id_fornecedor: body.id_fornecedor
            };
        }
};

module.exports = model;