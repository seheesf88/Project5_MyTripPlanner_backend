const express = require('express');
const router  = express.Router();
const ItemList    = require('../models/itemlist');
const Plan    = require('../models/plan');


//get all items as list
router.get('/', async(req, res) => {
  try{
    const allItemLists = await ItemList.find({});
    res.json({
      status: 200,
      data: allItemLists
    })
  }catch(err){
    res.send(err)
  }
});

//get single item detail
router.get('/:id', async(req, res) => {
  try{
    const foundItemList = await ItemList.findById(req.params.id)
    res.json({
      status: 200,
      data: foundItemList
    })
  }catch(err){
    res.send(err)
  }
})

// create item
router.post('/:id', async(req, res)=>{
  try{
    const createItemList = await ItemList.create(req.body)
    console.log("why you are not working> ---->", createItemList);
    console.log("what is req.params.id? =====>", req.params.id);
    // createItemList.planId = req.params.id
    const plan = await Plan.findById(req.params.id);
    console.log('ONE PLAN = ', plan);
    createItemList.planId = plan._id;
    createItemList.userId = plan.userId

    console.log("this is before createItemList ====================>", createItemList);
    createItemList.save((err, savedItemlist) => {
      res.json({
        data: savedItemlist
      })
    })

  }catch(err){
    res.send(err)
  }
});

//type of req.params.id is string!
//therefore, createItemList.planId = plan._id; was not working
//because in models(of itemlist), set up planId is type: objectId
//sometimes testing is fail because in order to check this is working porperly,
//you should create plan and that plan have user id and i will bring it to use!




//update item
router.put('/:id', async(req, res) => {
  try{
    const updatedItemList = await ItemList.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json({
      status: 200,
      data: updatedItemList
    })
  }catch(err){
    res.send(err)
  }
});

router.delete('/:id', async(req, res) => {
  try{
    const deleteItemList = await ItemList.findByIdAndRemove(req.params.id);
    res.json({
      status: 200,
      data: deleteItemList
    })
  }catch(err){
    res.send(err)
  }
})


module.exports = router
