var express = require('express');
var router = express.Router();

//const fetch = require('node-fetch');
const Order = require('../models/orders');
const Trip = require('../models/trips');


router.get('/', (req, res) => {
	Order.findOne()
  .populate('trips')
  .then(data => {


		res.json({ bookings: data });
	});
});




module.exports = router;
