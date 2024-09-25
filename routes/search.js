var express = require('express');
var router = express.Router();
var Trip = require('../models/trip');


router.get('/search', (req, res) => {
    const { departure, arrival, date } = req.query;

 
    Trip.find({ departure, arrival, date, price })
        .then(trips => {
            if (trips.length > 0) {
                res.json(trips);
            } else {
                res.json({ message: "Aucun trajet trouvé" });
            }
        })
});

module.exports = router;
