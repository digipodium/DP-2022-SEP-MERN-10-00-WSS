const express = require("express")
const router = express.Router()
const Model = require("../models/userModel")

router.post("/add", (req, res) => {
  console.log(req.body)
  // storing data in database
  new Model(req.body)
    .save()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.json(err)
    })
});

router.get('/getall', (req, res) => {
  Model.find({})
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    res.json(err);
  });
})

// ':' denotes a parameter
router.get('/getbyusername/:username', (req, res) => {
  Model.find({ username : req.params.username })
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/getbyid/:userid', (req, res) => {
  Model.findById(req.params.userid)
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log(err);
    res.json(err);
  });
});


router.delete('/delete/:userid', (req, res) => {
  Model.findByIdAndDelete(req.params.userid)
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log(err);
    res.json(err);
  });
});

router.get("/update", (req, res) => {
  res.send("update request on user router")
})

module.exports = router;