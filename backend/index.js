const express = require("express");
const listings = require("./routes/listings");
const listing = require("./routes/listing");

const config = require("config");
const app = express();

app.use(express.json());

app.use("/api/listings", listings);
app.use("/api/listing", listing);

const port = process.env.PORT || config.get("port");
app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});
