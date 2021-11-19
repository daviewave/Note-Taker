const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = function (app) {
  // API GET Requests
  app.get("/api/notes", function (request, response) {
    console.log("Performing a get request for /api/notes");

    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    console.log("NOTES IN DATABASE: ");
    console.log(JSON.stringify(data));
    response.json(data);
  });

  app.post("/api/notes", function (request, response) {
    //store the info from the new note in a variable 'newNote'
    let newNote = request.body;
    console.log("NewNote: " + newNote);
    //confirm a request is being made
    console.log(
      "POST REQUEST -- NEW NOTE: '" + JSON.stringify(newNote) + "' BEING ADDED."
    );
    //create unique id and assign it to the new note
    newNote.id = uuidv4;

    //turn the object into somehing we can send to the database with json.parse and specify the file sending to
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    //add new note to list of data from db.json
    data.push(newNote);
    //write the new data list of objects from data to the database
    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    //confirm that the file write was a success
    console.log("SUCCESS: NEW NOTE POSTED(ADDED) TO THE DATABASE");

    response.json(data);
  });

  app.delete("/api/notes/:id", (request, response) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    //deletes the note with the id
    data.splice(request.params.id, 1);

    //copy the non-deleted notes onto a new file
    fs.writeFileSync("./db/db.json", JSON.stringify(data, "/t"));
    console.log(
      `SUCCESS: ${request.params.id} HAS BEEN DELETED FROM THE DATABASE`
    ); //confirm the note has been deleted

    //send the file
    response.json(data);
  });
};
