const express = require('express');
const router  = express.Router();
const Plan    = require('../models/plan');

router.get('/', async(req, res) => {
  try{
    const allplans = await Plan.find();
    res.json({
      status: 200,
      data: allPlans
    })
  }catch(err){
    res.send(err)
  }
});

router.get('/:id', async(req, res) => {
  try{
    const foundPlan = await Plan.findById(req.params.id)
    res.json({
      status: 200,
      data: foundPlan
    })
  }catch(err){
    res.send(err)
  }
})

// router.post('/', async(req, res) => {
//   try{
//     const createdPlan = await Plan.create(req.body)
//       res.json({
//         status:200,
//         data: createdPlan
//       })
//
//   }catch(err){
//     res.send(err)
//   }
// });


router.put('/:id', async(req, res) => {
  try{
    const updatedPlan = await Plan.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json({
      status: 200,
      data: updatedPlan
    })
  }catch(err){
    res.send(err)
  }
});

router.delete(':/id', async(req, res) => {
  try{
    const deletedPlan = await Plan.findByIdAndRemove(req.params.id);
    res.json({
      status: 200,
      data: deletedPlan
    })
  }catch(err){
    res.send(err)
  }
})

module.exports = router
