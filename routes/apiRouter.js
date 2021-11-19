const fs = require("fs");

module.exports = function (app) {
  // API GET Requests
  app.get("/api/notes", function (request, response) {
    console.log("Performing a get request for /api/notes");

    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    console.log("NOTES IN DATABASE: ");
    console.log(JSON.stringify(data));
    response.json(data);
  });

  app.post("/api/notes", function (request, response) {});

  app.delete("/api/notes", function (request, response) {});
};
