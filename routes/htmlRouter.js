const path = require("path");

module.exports = function (app) {
  //gets route to the home page
  app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //gets route to the notes page
  app.get("/notes", function (request, response) {
    response.sendFile(path.join(__dirname, "../public/notes.html"));
  });
};
