const express = require('express');
const router  = express.Router();

const User    = require('../models/user');
const Plan    = require('../models/plan');
const ItemList    = require('../models/itemlist');

//all users
router.get('/', async(req, res) => {
  const allUsers = await User.find({});
  res.json({
    user: allUsers,
  })
})

//all plans
router.get('/myplans', async(req, res) => {
    const allplans = await Plan.find({});
    res.json({
      plan: allplans
    })
});

//my info : one user
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

//delete my acc: one user delete
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

router.get('/myplans/:id', async(req, res) => {
  try{
    const foundUser = await User.findById(req.params.id)
    const foundPlan = await Plan.findOne({'plans._id': req.params.id})
    res.json({
      status: 200,
      user: foundUser,
      plan: foundPlan// this is not working yet because plan is not crating ...
    })
  }catch(err){
    console.log("myplans/:id is err..T-T")
    res.send(err)
  }
})

router.post('/myplans', async(req, res) => {
  console.log("userId ------>", req.session);
    try {
      console.log("rep.body ------->", req.body);
      const createdPlan = await Plan.create(req.body);
      console.log("createdPlan ------->", createdPlan);
      createdPlan.userId = req.session.userId;
      createdPlan.username = req.session.username;

      console.log("sessiongUsername===============>", createdPlan.username);
      createdPlan.save((err, savedPlan) => {
        res.json({
          myplans: savedPlan
        })
      })
    }catch(err){
      console.log("myplans posting is fail");
      res.send(err)
    }
})

router.post('/myplans/:id', async(req, res) => {
    try {
      const createdItem = await ItemList.create(req.body);
      // console.log("createdItem ------->", createdItem);
      // console.log("current plan_id  ------->", req.params.id);
      createdItem.planId = req.params.id
      // console.log("save planId in item data------------->", createdItem.planId);

      createdItem.save((err, savedItemlist) => {
        res.json({
          myItemList : savedItemlist
        })
      })
    }catch(err){
      console.log("myplans posting is fail");
      res.send(err)
    }
})

module.exports = router
