var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    try {
        res.render('admin/novedades',
            {
                layout: 'admin/layout',
                usuario: req.session.nombre
            });

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;