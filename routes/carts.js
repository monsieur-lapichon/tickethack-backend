var express = require('express');
var router = express.Router();

require('../models/connection')
const Cart = require('../models/carts');


// trips dans le cart avec total price
router.get('/', (req, res) => {
    Cart.find({isPaid:false})
        .then(data => {
          

            res.json({ carts: data})
        })
})



//ajout des trips dans le panier cart
router.post('/', (req, res) => {

    Trip.findById(req.body.id).then(data => {

        //recupère les propriétés de data et crée le cart 
        const newCart = new Cart({
            departure: data.departure,
            arrival: data.arrival,
            date: data.date,
            price: data.price,
            isPaid: false,
        })
        newCart.save();

        Cart.find()
            .then(data => {
                console.log(data)
                res.json({ carts: data })
            })
    })
});




// delete one by Id quand l'utilisateur enlève un trajet avant de purchase
router.delete('/:id', (req, res) => {
    Cart.deleteOne({_id: req.params.id})
    .then(data => {
        console.log
        res.json({ result: true})})
           

        })



// Update false to true 


router.put('/', (req, res) => {
    Cart.updateMany(
        { isPaid: false },
        { isPaid: true }

    )
    .then(data => {
        res.json({ cartsList: data })})

});









module.exports = router;


