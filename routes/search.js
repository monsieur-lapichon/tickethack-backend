var express = require('express');
var router = express.Router();
var Trip = require('../models/trips');
var moment = require('moment'); 

router.get('/', (req, res) => {
    const { departure, arrival, date } = req.query;

    const formattedDate = moment(date, 'DD/MM/YYYY', true).format('YYYY-MM-DD');


    Trip.find({ departure, arrival, date: formattedDate })
        .then(trips => {
            if (trips.length > 0) {
                res.json(trips); 
            } else {
                res.json({ message: "Aucun trajet trouvé" }); 
            }
        })
});

module.exports = router;
