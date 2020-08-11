const express = require("express");
const router = express.Router();

const store = require("../store/listings");

router.get("/", (req, res) => {
  const listings = store.getListings();

  res.send(listings);
});

module.exports = router;
