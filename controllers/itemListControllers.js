const express = require('express');
const router  = express.Router();
const ItemList    = require('../models/itemlist');


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
router.post('/', async(req, res)=>{
  try{
    const createItemList = await ItemList.create(req.body)
      res.json({
        status:200,
        data: createItemList
      })

  }catch(err){
    res.send(err)
  }
});

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
