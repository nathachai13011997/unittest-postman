const router = require("express").Router();

router.post("/createOrder", async (req, res) => {
  if (req.body.orderName == "") {
    res.status(400).send({ message: "orderName should not be empty" });
  } else if (req.body.quantity == 0) {
    res.status(400).send({ message: "quantity should not be 0" });
  } else {
    res.status(200).send({ message: "success" });
  }
});

module.exports = router;
