var express = require('express');
var router = express.Router();

require('../models/connection')


app.get('/search', (req, res) => {
    const { departure, arrival, date } = req.query;

    // Simuler des résultats de recherche 
    const trips = [
        { id: 1, departure: 'Paris', arrival: 'Lyon', date: '23/06/2022' },
        { id: 2, departure: 'Marseille', arrival: 'Nice', date: '23/06/2022' },
        { id: 3, departure: 'Bordeaux', arrival: 'Toulouse', date: '23/06/2022' },
    ];

    // Filtrer les trajets selon les critères de recherche
    const results = trips.filter(trip => trip.departure === departure && trip.arrival === arrival && trip.date === date);
    
    res.json(results);
});

module.exports = router
