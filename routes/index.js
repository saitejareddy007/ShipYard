var express = require('express');
var router  = express.Router();
var db      = require('../repo/db')

/* GET home page. */
router.get('/', function(req, res, next) {
    db.dbOfWorkMen.find({},function (err,workmen) {
        db.dbOfFacilities.find({},function (err,facility) {
            if(err) throw err;
            res.render('index', {workmen:workmen,facility:facility});
        })
    });

});

router.get('/render',function (req,res,next) {
    res.render('render');
})

router.post('/addWork_Men',function (req,res,next) {
    new db.dbOfWorkMen({
        workmenType     :   req.body.WorkMenType,
        Quantity        :   req.body.WorkMenQuantity,
        Date            :   req.body.Wdate
    }).save(function (err) {
        if(err) throw err;
        res.redirect('/');
    })
})
router.post('/addFacilities',function (req,res,next) {
    new db.dbOfFacilities({
        FacilityName    :   req.body.facilityName,
        Quantity        :   req.body.quantity,
        Date            :   req.body.fdate
    }).save(function (err) {
        if(err) throw err;
        res.redirect('/');
    })
})

module.exports = router;
