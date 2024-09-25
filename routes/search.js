var express = require('express');
var router = express.Router();
var Trip = require('../models/trips');
var moment = require('moment'); 

router.get('/', (req, res) => {
    const { departure, arrival, date } = req.query;

    const formattedDate = moment(date, 'DD/MM/YYYY', true).startOf('day').toDate();

    Trip.find({
        departure: departure,
        arrival: arrival,
        date: { $gte: formattedDate, $lt: moment(formattedDate).add(1, 'days').toDate() }
    })
    .then(trips => {
        if (trips.length > 0) {
            const formattedTrips = trips.map(trip => ({
                departure: trip.departure,
                arrival: trip.arrival,
                date: moment(trip.date).format('DD/MM/YYYY'), 
                price: trip.price
            }));

            res.json(formattedTrips); 
        } else {
            res.json({ message: "Aucun trajet trouvé" }); 
        }
    })
});

module.exports = router;
