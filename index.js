const express = require("express");
const app = express();

const PORT = 3009;

app.get("/", (req, res) => {
  res.status(200).send("Hello world with Jenkins");
});
  
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;
