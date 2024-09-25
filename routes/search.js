var express = require('express');
var router = express.Router();
var Trip = require('../models/trips');
var moment = require('moment'); 

router.get('/', (req, res) => {
    const { departure, arrival, date } = req.query;

    console.log(date);
    let formattedDate = new Date(date);
    console.log(formattedDate);
    // seconds * minutes * hours * milliseconds = 1 day 
    var day = 60 * 60 * 24 * 1000;
    var formattedDateTomorrow = new Date(formattedDate.getTime() + day);

    console.log(formattedDateTomorrow);

    Trip.find({ departure, arrival, date: {$gte: formattedDate,  $lt: formattedDateTomorrow} })
        .then(trips => {
            if (trips.length > 0) {
                res.json(trips); 
            } else {
                res.json({ message: "Aucun trajet trouvé" }); 
            }
        })
});

module.exports = router;