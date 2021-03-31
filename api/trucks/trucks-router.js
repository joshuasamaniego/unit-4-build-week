const router = require('express').Router();
const Trucks = require('./trucks-model')
const { checkIfLoggedIn, loginCredentials } = require('./trucks-middleware');

router.get('/', async (req, res, next) => {
    try {
        const trucks = await Trucks.getAll()
        res.json(trucks);
    } catch(err) { next(err) }
})

router.get('/:id', async (req, res, next) => {
    try {
        const truckAtId = await Trucks.getById(req.params.id);
        res.json(truckAtId);
    } catch(err) { next(err) }
})

router.post('/', async (req, res, next) => {
    try {
        const newTruck = await Trucks.addTruck(req.body);
        res.status(201).json(newTruck);
    } catch(err) { next(err) }
})

router.put('/:id', async (req, res, next) => {
    try { 
        const updatedTruck = await Trucks.updateTruck(req.params.id, req.body);
        if(updatedTruck) {
          res.json(updatedTruck);
        } else {
           res.status(500).json({ message: "Update Failed" })
        }
      } catch(err) { next(err) }
})

router.delete('/:id', async (req, res, next) => {
    try { 
      const deleted = await Trucks.removeTruck(req.params.id);
      if(deleted) {
        res.json(deleted);
      } else {
        res.status(500).json({ message: "delete failed" })
      }
    } catch(err) { next(err) }
  });


module.exports = router;