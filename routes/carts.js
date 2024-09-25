var express = require('express');
var router = express.Router();

require('../models/connection')
const Cart = require('../models/carts');
const Order = require('../models/orders')
const Trip = require('../models/trips')

//créer une fonction TOTALPRICE des trips contenus dans "carts"
/*function getTotal(){
    Cart.find()
      .then(data => {
        let totalPrice= 0;
        for (let i=0; i< data.length; i++){
            totalPrice += data[i].price;
        }

        return total;
      })
}
*/
// trips dans le cart avec total price
router.get('/', (req, res) => {
    Cart.find()
        .then(data => {
            let totalPrice = 0;
            for (let i = 0; i < data.length; i++) {
                totalPrice += data[i].price;
            }

            res.json({ carts: data, total: total })
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
router.delete('/', (req, res) => {
    Cart.deleteOne(req.body.id)
        .then(data => {
            res.json({ cartsList: data })

        });
});




/*   //  route Delete pour le clic purchase = reset
// NON! on viendra delete dans le html mais pas dans la bdd 
   
router.delete('/', (req, res) => {
   Cart.deleteMany({})
   
   .then(data =>res.json({ cartsList: data })
)
  }); */









module.exports = router;