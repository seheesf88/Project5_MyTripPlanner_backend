const express = require('express');
const router  = express.Router();
const Checklist    = require('../models/checklist');



router.get('/', async(req, res) => {
  try{
    const allChecklists = await Checklist.find();
    res.json({
      status: 200,
      data: allChecklists
    })
  }catch(err){
    res.send(err)
  }
});

router.get('/:id', async(req, res) => {
  try{
    const foundChecklist = await Checklist.findById(req.params.id)
    res.json({
      status: 200,
      data: foundChecklist
    })
  }catch(err){
    res.send(err)
  }
})

router.post('/', async(req, res)=>{
  try{
    const createdChecklist = await Checklist.create(req.body)
      res.json({
        status:200,
        data: createdChecklist
      })

  }catch(err){
    res.send(err)
  }
});


router.put('/:id', async(req, res) => {
  try{
    const updatedChecklist = await Checklist.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json({
      status: 200,
      data: updatedChecklist
    })
  }catch(err){
    res.send(err)
  }
});

router.delete(':/id', async(req, res) => {
  try{
    const deletedChecklist = await Checklist.findByIdAndRemove(req.params.id);
    res.json({
      status: 200,
      data: deletedChecklist
    })
  }catch(err){
    res.send(err)
  }
})


module.exports = router
