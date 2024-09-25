var express = require('express');
var router = express.Router();

const Cart = require('../models/carts');

router.get('/', (req, res) => {
	Cart.find({ isPaid: true })
	.then(data => {
		res.json({ bookings: data });
	});
});

module.exports = router;