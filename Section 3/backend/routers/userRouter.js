const express = require("express")
const router = express.Router()

router.get("/add", (req, res) => {
  res.send("add request on userRouter")
})

router.get('/update', (req, res) => {
    res.send('update request on user router');
})

module.exports = router;