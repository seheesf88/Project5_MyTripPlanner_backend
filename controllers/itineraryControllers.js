const express = require('express');
const router  = express.Router();
const Itinerary    = require('../models/itinerary');


//get all items as list
router.get('/', async(req, res) => {
  try{
    const allItinerary = await Itinerary.find({});
    res.json({
      status: 200,
      data: allItinerary
    })
  }catch(err){
    res.send(err)
  }
});

//get single item detail
router.get('/:id', async(req, res) => {
  try{
    const foundItinerary = await Itinerary.findById(req.params.id)
    res.json({
      status: 200,
      data: foundItinerary
    })
  }catch(err){
    res.send(err)
  }
})

// create item
router.post('/', async(req, res)=>{
  try{
    const createItinerary = await Itinerary.create(req.body)
      res.json({
        status:200,
        data: createItinerary
      })

  }catch(err){
    res.send(err)
  }
});

//update item
router.put('/:id', async(req, res) => {
  try{
    const updatedItinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json({
      status: 200,
      data: updatedItinerary
    })
  }catch(err){
    res.send(err)
  }
});

router.delete('/:id', async(req, res) => {
  try{
    const deleteItinerary = await Itinerary.findByIdAndRemove(req.params.id);
    res.json({
      status: 200,
      data: deleteItinerary
    })
  }catch(err){
    res.send(err)
  }
})


module.exports = router
