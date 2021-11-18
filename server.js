//import express package and set a variable to use it
const express = require("express");
const app = express();

const htmlRoute = require("./routes/htmlRouter");

//set the port for the server
const PORT = process.env.PORT || 3001;

require("./routes/htmlRouter")(app);

//calls funciton to start the server and tells us its working by printing to console
app.listen(PORT, function () {
  console.log(`App listening on PORT: ${PORT}`);
});
