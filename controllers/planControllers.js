const express = require('express');
const router  = express.Router();

const Plan    = require('../models/plan');
const User    = require('../models/user');
const ItemList    = require('../models/itemlist');

router.get('/', async(req, res) => {
    const allplans = await Plan.find({});
    res.json({
      plan: allplans
    })
});


router.get('/show/:id', async(req, res) => {
  try{
    console.log("req.params.id ===>", req.params.id)
    const foundPlan = await Plan.findById(req.params.id)
    console.log("this is foundPlan", foundPlan)
    res.json({
      status: 200,
      data: foundPlan
    })
  }catch(err){
    res.send(err)
  }
})


router.put('/edit/:id', async(req, res) => {
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

router.delete('/delete/:id', async(req, res) => {
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

//
// router.post('/oneplan/:id', async(req, res) => {
//   try{
//     const createItemList = await ItemList.create(req.body)
//     console.log("why you are not working 1 ---->", createItemList);
//     console.log("what is req.params.id? == working ==>", req.params.id);
//
//     console.log("why you are not working 2 ---->", createItemList);
//     createItemList.planId = req.params.id
//     // createItemList.tt = 'hi'
//
//     console.log("this is before save createItemList 3 =====fail to add ======>", createItemList);
//     createItemList.save((err, savedItemlist) => {
//       res.json({
//         myitems: savedItemlist
//       })
//     })
//
//   }catch(err){
//     res.send(err)
//   }
// });


router.post('/', async(req, res) => {
  console.log('req.body ====>', req.body)
  try{
    const createdPlan = await Plan.create(req.body)
    console.log('createdPlan ====>',createdPlan)
      res.json({
        status:200,
        data: createdPlan,
        planCode: plan._id//===============================================save in local storage
      })

  }catch(err){
    res.send(err)
  }
});
//once you create plan, you can plan id in local storage..


module.exports = router
