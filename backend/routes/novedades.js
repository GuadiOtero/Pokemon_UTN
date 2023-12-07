var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('<div><ul><li><a href="/novedades">Novedades</a></li><li><a href="/catalogo">Catalogo</a></li><li><a href="/usuarios">Usuarios</a></li></ul><h1>Novedades</h1></div>');

});

module.exports = router;
