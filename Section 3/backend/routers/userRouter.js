const express = require("express")
const router = express.Router()
const Model = require('../models/userModel');

router.post("/add", (req, res) => {

  console.log(req.body);
  // storing data in database
  new Model(req.body).save()
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/update', (req, res) => {
    res.send('update request on user router');
})

module.exports = router;