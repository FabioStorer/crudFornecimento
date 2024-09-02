const fornecedor_controller = require('../controllers/fornecedor_controller.js');
const express = require('express');
const router = express.Router();

/// GERENCIAMENTO DE FORNECEDOR ///

router.post('/', (req, res) => {
    const code = fornecedor_controller.store(req.body);
    res.status(code).json();
});

router.get('/', (req, res) => {
    const code = fornecedor_controller.index();
    res.json(body);
});

router.get('/:id', (req, res) => {
    const code = fornecedor_controller.show(req.params.id);
    res.json(body);
});

router.put('/:id', (req, res) => {
    const code = fornecedor_controller.update(req.params.id, req.body);
    res.status(code).json();
});

router.delete('/:id', (req, res) => {
    fornecedor_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;