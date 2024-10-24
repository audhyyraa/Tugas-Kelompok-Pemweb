const express = require('express');
const router = express.Router();

let agendas = [];

router.get('/', (req, res) => {
    res.render('agenda', { agendas });
});

router.post('/add', (req, res) => {
    const { title, description } = req.body;
    agendas.push({ title, description });
    res.redirect('/agenda');
});

router.post('/delete', (req, res) => {
    const { index } = req.body;
    agendas.splice(index, 1);
    res.redirect('/agenda');
});

module.exports = router;
