const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "dist/single-spa-demo")))
  .get("*", (req, res) => {
    res.sendFile(__dirname + "/dist/single-spa-demo/index.html");
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
