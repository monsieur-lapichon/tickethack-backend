var express = require('express');
var router = express.Router();

//const fetch = require('node-fetch');
const Order = require('../models/orders');


router.get('/', (req, res) => {
	Order.find().then(data => {
		res.json({ bookings: data });
	});
});

/*router.get("/:cityName", (req, res) => {
  Order.findOne({
    cityName: { $regex: new RegExp(req.params.cityName, "i") },
  }).then(data => {
    if (data) {
      res.json({ result: true, weather: data });
    } else {
      res.json({ result: false, error: "City not found" });
    }
  });
});*/


module.exports = router;
