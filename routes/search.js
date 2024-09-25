var express = require('express');
var router = express.Router();
var Trip = require('../models/trips');
var moment = require('moment'); 

router.get('/', (req, res) => {
    const { departure, arrival, date } = req.query;

<<<<<<< HEAD
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
=======
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
>>>>>>> d6d81db31e38f207018e330a8b879d98817bd802
});

module.exports = router;