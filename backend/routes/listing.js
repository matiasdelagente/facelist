const express = require("express");
const router = express.Router();

const store = require("../store/listings");

router.get("/:id", (req, res) => {
  console.log(req.params);
  const listing = store.getListing(req.params.id);
  if (!listing) return res.status(404).send();

  res.send(listing);
});

module.exports = router;
