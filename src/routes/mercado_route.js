const mercado_controller = require('../controllers/mercado_controller.js');
const express = require('express');
const router = express.Router();

/// GERENCIAMENTO DE MERCADO ///

router.post('/', (req, res) => {
    const code = mercado_controller.store(req.body);
    res.status(code).json();
});

router.get('/', (req, res) => {
    const code = mercado_controller.index();
    res.json(body);
});

router.get('/:id', (req, res) => {
    const code = mercado_controller.show(req.params.id);
    res.json(body);
});

router.put('/:id', (req, res) => {
    const code = mercado_controller.update(req.params.id, req.body);
    res.status(code).json();
});

router.delete('/:id', (req, res) => {
    mercado_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;