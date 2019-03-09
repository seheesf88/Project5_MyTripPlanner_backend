const express = require('express');
const router  = express.Router();

const User    = require('../models/user');

router.get('/', async(req, res) => {
  const AllUsers = await User.find({});
  res.json({
    user: AllUsers,
  })
})

router.get('/:id', async(req, res) => {
  try{
    const foundUser = await User.findById(req.params.id)
    res.json({
      status: 200,
      data: foundUser
    })
  }catch(err){
    res.send(err)
  }
})

router.delete('/delete/:id', async(req, res) => {
  try{
    const deletedUser = await User.findByIdAndRemove(req.params.id);
    res.json({
      status: 200,
      data: deletedUser
    })
  }catch(err){
    res.send(err)
  }
})



module.exports = router
